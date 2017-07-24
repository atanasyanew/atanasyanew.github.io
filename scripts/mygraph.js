/***********************
 *  CUSTOM TEMPLATES   *
 ***********************/

var myTemplateConfig = {
  colors: ["#F00", "#0F0", "#00F"], // branches colors, 1 per column
  branch: {
    lineWidth: 8,
    // Dash segments, see:
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash
    spacingX: 50
  },
  commit: {
    spacingY: -80,
    dot: {
      size: 12,
      lineDash: [4]
    },
    message: {
      displayAuthor: false,
      displayBranch: true,
      displayHash: false,
      font: "normal 12pt Arial"
    },
    shouldDisplayTooltipsInCompactMode: true, // default = true
    tooltipHTMLFormatter: function (commit) {
      return "<b>" + commit.sha1 + "</b>" + ": " + commit.message;
    }
  }
};
var myTemplate = new GitGraph.Template(myTemplateConfig);

/***********************
 *    INITIALIZATION   *
 ***********************/

var config = {
  template: myTemplate, // could be: "blackarrow" or "metro" or `myTemplate` (custom Template object)
  reverseArrow: false, // to make arrows point to ancestors, if displayed
  orientation: "vertical",
  // mode: "compact" // special compact mode: hide messages & compact graph
};
var gitGraph = new GitGraph(config);

/************************
 * BRANCHES AND COMMITS *
 ************************/

// Create branch named "master"
var master = gitGraph.branch("master");

// Commit on HEAD Branch which is "master"
master.commit("Init 1991");

// Add few commits on master
master.commit("My second commit");

// Create a new "dev" branch from "master" with some custom configuration
var dev = master.branch({
  name: "dev",
});


// Create a "test" branch and merge it into "master" with a custom message and tag
var test = master.branch("test");
test.commit("Final commit");
test.merge(master, "My special merge commit message");

// Then, continue committing on the "test" branch
test.commit({
  message: "It works !"
});

var fastForwardBranch = test.branch("fast-forward");
fastForwardBranch.commit("First commit on FF branch");
fastForwardBranch.commit("Second commit on FF branch");

// If not commented, it will prevent fast-forward
// test.commit("Make Fast Forward impossible");

fastForwardBranch.merge(test, {
  fastForward: true
});

/***********************
 *        TAGS         *
 ***********************/



// Perform a merge, with a tag
test.merge(master, {
  message: "New release",
  tag: "v1.0.0"
});


/***********************
 *       EVENTS        *
 ***********************/

gitGraph.canvas.addEventListener("graph:render", function (event) {
  console.log(event.data.id, "has been rendered with a scaling factor of", gitGraph.scalingFactor);
});

gitGraph.canvas.addEventListener("commit:mouseover", function (event) {
  console.log("You're over a commit.", "Here is a bunch of data ->", event.data);
  this.style.cursor = "pointer";
});

gitGraph.canvas.addEventListener("commit:mouseout", function (event) {
  console.log("You just left this commit ->", event.data);
  this.style.cursor = "auto";
});

// Attach a handler to the commit
test.commit({
  message: "Click me!",
  author: "Nicolas <me@planee.fr>",
  onClick: function (commit, isOverCommit, event) {
    console.log("You just clicked my commit.", commit, event);
  }
});

// Display WIP-like commit
test
  .commit({
    lineDash: [3, 2],
    dotStrokeWidth: 5,
    dotColor: "white",
    messageHashDisplay: false,
    messageAuthorDisplay: false,
    message: "Current WIP",
    tag: "HEAD",
    displayTagBox: false
  });
