+++
categories = ["contributions"]
coders = []
date = 2020-08-02T09:10:41Z
description = "Overview of my contribution as part of different organizations"
image = "images/portfolio/featuredImage-contribution.png"
title = "Contributions"
type = "post"

github = []
+++

Overview of my contribution as part of different organizations.

<!--v-->
## ToC

- [ToC](#toc)
- [RecommendIT - Signify](#recommendit---signify)
- [RecommendIT - HeidelbergCement](#recommendit---heidelbergcement)
- [ITG EcoTech](#itg-ecotech)
- [Orbix](#orbix)
- [Central registrar AUBG](#central-registrar-aubg)
- [HHIB](#hhib)
- [PoC](#poc)
  - [CXG Mystery shopping platform](#cxg-mystery-shopping-platform)
  - [(PoC) VSTO Outlook plugin](#poc-vsto-outlook-plugin)
  - [(PoC) Survey builder application](#poc-survey-builder-application)
- [Others](#others)
  - [Fish farm automation](#fish-farm-automation)
  - [Medical device, data collector](#medical-device-data-collector)

<!-- ### Template, content organize for each slide

- Project name
  - Description - short about the project business logic
  - Spend - for example:
    - less than month
    - about a month
    - few months (less than half year)
    - less than year
    - about a year
    - more than year
  - Technologies - just key technologies such as .NET C# EF Code-first
  - Notes - side notes about the technological part, example: Monolithic application -->

<!--s-->
## RecommendIT - [Signify](https://www.google.com/search?q=Signify)

**Description** - Customer experience platform with additional analytics.

The company that use the software is the biggest smart lighting seller.
The developed platform has multiple hosted instances around the world.

**Spend** - more than year

**Technologies** - ``.NET Ecosystem``, ``ELK Stack``, ``ETL``, ``MVC``, ``AngularJS``, ``KendоUI MVC``, etc..

**Notes** - There are two ``n-layer`` monolithic applications, also known as Functional and Dashboard.
Both of them use serval different repositories.
The related repositories are organized with ``git submodules``, ``NuGet packages`` build and referenced for release use across the repositories. ``SQL Database`` is used for data persistence, while the ``ElasticSearch`` is main service retrieving data for the visualization modules.
A complex ``ETL`` developed in order to fill the indices, data such as survey results, ``scraped data`` (reviews, ratings, etc..) and many other sources.
The project is hard to explain due its business logic complexity and many provided features.

---

<!--s-->
## RecommendIT - [HeidelbergCement](https://www.google.com/search?q=HeidelbergCement)

**Description** - Customer experience platform.

**Spend** - about a year

**Technologies** - ``.NET Ecosystem``, ``ELK Stack``, ``ETL``, ``MVC``, ``AngularJS``, ``KendоUI MVC``, etc..

**Notes** - ``N-layer monolithic application``, developed in ``.NET Ecosystem``.
``SQL Database`` is used for data storage, ``ElasticSearch`` provided also.
The developed software it self is CRM, ERP system with many features and complex business logic.

---

<!--s-->
## ITG EcoTech

**Description** - Innovative vertical Wind turbine with smart capabilities.

**Spend** - few months

**Technologies** - ``.NET Core``, ``Code first``, ``identity server``, ``MQTT``, ``REST API``, ``Embedded controllers`` and ``hardware``, etc..

**Notes** - The project consist of 3 parts, server side, client side, MCU controller.
The server side code is ``n-layer`` monolithic ``.NET Core`` application with ``SQL`` database storage.
Front end of the application is build with ``Angular``.
The server side and ``MCU`` communication is done with ``MQTT`` and HTTP.
The application used to control and monitoring the wind turbine and the surrounding environment.
The software also provides a way for integrating with other applications/servers.
Historical data persisted for ``analytics``, control and ``prediction`` purposes, data such as energy production/usage, wind speed and direction.
Automatic and manual operation modes with ``suggestions`` based on the collected data.

---

<!--s-->
## Orbix

**Description** - Envisioned as a platform aiming to provide fast, simple and cost-effective way for cross-border remittances.
Users are able to transfer the platform-specific currency (tokens) to any other user with instant pay-in and pay-out options.
Tokens are linked to the Euro, so at all times 1 token is equal to 1 EUR.
In order to provide transparency and trust, platform leverage an immutable and publicly auditable transaction and storage system.

**Spend** - few months <!-- 2018.05 - 2018.09 -->

**Technologies** - ``Microservices``, ``Docker``, ``Apache Kafka``, ``Node.js``, ``TypeScript``, ``Express.js``, ``MongoDB``, ``KYC``,  ``payment providers``, ``Hyperledger``, etc..

**Notes** - The server side of the application has ``microservice`` architecture, communication done by ``Apache Kafka``.
Clients such as WEB and Mobile use ``REST API`` microservice as ``gateway`` to the application features.
I'v contribute for the PoC stage of the application, mainly worked on UMS (user management service) and payment service.
The user management microservice take care about registrations, ``multi-factor authentication``, integration with ``KYC providers`` (Know Your Customer) such as ``Onfido`` and ``4Stop`` etc..
The payment microservice uses providers such as ``PayPal`` and ``Stripe``.
Both are developed on  ``NodeJS`` with ``TypeScript``, ``MongoDB`` as a storage, ``state machines`` developed for the business logic behind.

---

<!--s-->
## Central registrar AUBG

**Description** - A student registration system for American University.

**Spend** - less than year <!-- 2017-2018 -->

**Technologies** - ``.NET Web API``, ``MVC``, ``MSSQL``, ``Code First``, ``GitLab CI/CD``, ``Unit tests``, etc..

Notes - The application consist in two parts, client and server-side code.
Client side developed on ``Angular 5+``.
The server-side part of the application developed on the ``.NET Framework`` ecosystem.
Architecture of the application is ``monolithic`` ``n-layer``, ``MVC`` pattern.
Application was first developed as ``Database First`` using ``stored procedures``, but later on we decide to migrate ``Code first``.

---

<!--s-->
## HHIB

**Description** - Content management system for "Tap Changers" division.

**Spend** - less than year <!-- 2016 -->

**Technologies** - ``PhP``, ``MySQL``, ``JavaScript``, ``Bootstrap``, ``W3.css``, ``W3.js``

**Notes** - The application is designed to store information, files and monitoring the process for creating internal company orders and offers.
Application has features like: file upload, role based users, order and offers progress tracking, approval statuses, reports and MS Excel integration.

Since this was my entry point in developing without anyone guiding me, I'm not very proud with the code, but with the results - application is still in use.
More details - [github.com/atanasyanew/HHIB](https://github.com/atanasyanew/HHIB)

---

<!--s-->
## PoC

Proof of concept applications, that I have been done and some other projects with time spend for about a month.

<!--v-->
### CXG Mystery shopping platform

**Description** - Mystery shopping platform.

**Spend** - about a month

**Technologies** - ``.NET Ecosystem``, ``.NET Core``, ``Code first``, ``ELK stack``, ``ETL``, ``PostgreSQL``

**Notes** -  creating missions, feedback, reporting etc..

---

<!--v-->
### (PoC) VSTO Outlook plugin

**Description** - Send secure addon for Outlook.

**Technologies** - ``VSTO Add-in``, ``.NET Ecosystem``

<!--v-->
### (PoC) Survey builder application

**Description** - Survey builder application.

**Technologies** - ``MEAN Stack``, ``Express.js``, ``AngularJS``, and ``Node.js``

---

## Others

### Fish farm automation

**Description** - Automation for Fish farm.

**Spend** - about a month

**Technologies** - ``NodeJS``, ``Node-RED``, ``InfluxDB``, ``Grafana``, ``Telegram``, ``Telegraf``, ``MQTT``, ``Linux``, ``Raspberry Pi``

**Notes** - The project aim to provide end to end solution for control and monitoring fish farms. The solution can be separated in two parts - server side and mcu part. The farm consist of N number of fish tanks. The MCU controller interact with variety of different sensors and devices to control. MCU and linux server communication handled by ``MQTT``. The server stores data in ``time series database``, visualizations are provided by ``Grafana``. ``Node-RED`` used for managing the business logic and providing the user interface for the end client to interact with. Metrics for monitoring the server are collected with ``Telegraf``. The solutions provides a way for configuring alerts/warnings when thresholds are reached, notifications send by ``Telegram``.

### Medical device, data collector

**Description** - Device that collects metrics and send them to decentralize system.

**Spend** - about a month

**Technologies** - ``hardware``, ``MCU``, ``Qt``, ``.NET Core``, ``Azure IoT Hub``, ``Buildroot``

**Notes** - Device that collect metrics from different medical apparatuses that implements bluetooth protocol for medical use.
The device has a custom made ``hardware`` (PCB, touchscreen).
Data is collected from apparatuses such as BPSystolic, BPDiastolic, Pulse, BloodSugar and others, after collection process is done, metrics are pushed to ``Azure IoT Hub`` where data is stored/processed.
