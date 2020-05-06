# Recipes Web Application

## What is it
Site of recipes where users will be able to browse recipes by categories, create a new recipes, update existing recipes and delete.

## Technical Summary
* Client side
  * React
  * Vanilla JS
  * Vanilla CSS
  * HTML
* API
  * ASP.NET Core 3.1
  * Entity Framework for Database
* Database
  * SQL Express
  
## How to install Project
* Install Git
* Clone repository
* **Install Client side**
  * Go to **/ClientApp** folder
  * Install node packages `npm install`
* **Install API (.NET Core)**
  * Install ASP.NET Core 3.1
  * Install nuget-package-manager in Visual Studio Code
  * Press Ctrl+Shift+P or Command+Shift+P, and type >nuget, select **NuGet Package Manager: Add Package**
* **Install Database**
  * Download Database from [mysql.com](https://dev.mysql.com/doc/mysql-osx-excerpt/5.7/en/osx-installation-pkg.html)
  * Download [MySQL Workbench](https://dev.mysql.com/downloads/workbench/)
  * Open MySQL Workbench, click on Schemas
  * Copy and paste first script **/1_migration_create_DB_and_tables_with_data** in Visual Studio Code folder **/SQLMigrations**
  * Select All and execute
  * Copy and paste second script **/2_migration_create_user** in Visual Studio Code folder **/SQLMigrations**, select all and execute
  * Refresh Schemas
  * Click right button on the Recipes table and click on **Select Rows - Limit 1000**, now you can see recipes(you can do the same with other tables)  
  
## Run the Project
1. Launch Database server (port 3306)
2. Build and run .NET Core API `dotnet run` 
3. Run Client side from **/client** folder `npm start`
## Features
* Create recipe
* Update existing 
* Delete
* Display Gallery

## Milestone List
#### Week 1
  - [x] Create README file
  - [x] Create a simple Mockup via [draw.io](https://www.draw.io)
  - [x] Install everything for Project
#### Week 2  
  - [x] Create base project
    - [x] API
    - [x] Client side
    - [x] Database
  - [x] Create Entity Models and tables.
#### Week 3
  - [x] Get API endpoints (get all, by Id)
  - [x] Create endpoints
#### Week 4 - 7
  - [x] Update endpoint
  - [x] Delete endpoint
  - [x] Create application shell (header, footer, background)
  - [x] Create React recipe component
  - [x] Create React new recipe/update recipe pages (with components)
  - [x] Integrate Client side with ARI
  - [x] UAT (user accepted testing)
  
  




