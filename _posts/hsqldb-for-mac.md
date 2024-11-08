---
title: "Learn how to setup hsqldb on Mac"
excerpt: "Setting up HSQLDB on my Mac turned out to be more challenging than I anticipated. After spending hours troubleshooting, I decided to document the entire process. I'll be sharing a step-by-step guide to help you install and configure HSQLDB on macOS smoothly and efficiently"
tags: ["java", "hsqldb", "macOS", "database"]
coverImage: "/assets/blog/hsdlbc-on-mac/cover.png"
date: "2024-11-08T07:10:27.734Z"
ogImage:
  url: "/assets/blog/hsdlbc-on-mac/cover.png"
---

## Introduction

Setting up HSQLDB on my Mac turned out to be more challenging than I anticipated. Navigating through the installation process and configuring everything via the terminal wasn’t straightforward, and I spent quite some time troubleshooting. To save others from the same hurdles, I’ve put together this comprehensive guide. Here, I’ll walk you through downloading HSQLDB, extracting it to the best location, starting the server from the terminal, using the Database Manager, and configuring a database alias named `trainingdb`.

## Prerequisites

- Java Development Kit (JDK) installed on your Mac.
- Familiarity with using the terminal.

## Verify or Install Java JDK

Since HSQLDB is a Java-based database, you’ll need the Java Development Kit (JDK) installed on your system.

Check if Java is Installed

Open the Terminal and run:

```bash
java -version
```

If Java is installed, you should see the version information. If not, you need to install it; I'll leave you to figure that part out. 🙏

## Getting ready

### Download HSQLDB

Visit the HSQLDB download page on [SourceForge](https://sourceforge.net/projects/hsqldb/files/) and download the latest version of HSQLDB.

### Extract HSQLDB

```bash
unzip hsqldb-2.7.4.zip -d ~/hsqldb-2.7.4
```

This command extracts the contents into a folder named hsqldb-2.7.4 in your home directory.

### Organize the Directory

For simplicity, you might want to rename the directory:

```bash
mv ~/hsqldb-2.6.1/hsqldb ~/hsqldb
```

Now, your HSQLDB files are located at ~/hsqldb.

## Start the HSQLDB Server via Terminal

We will start the server using the terminal, setting up our database alias `trainingdb`.

```bash
java -classpath ~/hsqldb/lib/hsqldb.jar org.hsqldb.Server \
    -database.0 file:~/hsqldb/data/trainingdb \
    -dbname.0 trainingdb
```

Explanation:

- `-database.0 file:~/hsqldb/data/trainingdb` - Specifies the database location
- `-dbname.0 trainingdb` - Sets the alias for the database.

Leave this terminal window open; the server needs to run continuously to access the database.

## Use the HSQLDB Database Manager

Even though we prefer terminal commands, 🌚 interacting with the database requires the Database Manager GUI provided by HSQLDB.

Since the server is running, open a new terminal window for the Database Manager.

### launch the Database Manager:

```bash
java -classpath ~/hsqldb/lib/hsqldb.jar org.hsqldb.util.DatabaseManagerSwing
```

This command starts the Database Manager GUI.

You should see the following screen:

![HSQLDB Database Manager](/assets/blog/hsdlbc-on-mac/cover.png)

### Configure the Database Connection

In the Database Manager:

- Setting Name: `trainingdb`
- Type: Select HSQL Database Engine Server.
- Driver: Ensure it says `org.hsqldb.jdbc.JDBCDriver`.
- URL: Enter `jdbc:hsqldb:hsql://localhost/trainingdb`.
- User: `SA` (default admin user).
- Password: Leave blank (unless you’ve set one).

## Bonus: Automate the Server Startup

To avoid manually starting the server every time you want to use HSQLDB, you can automate the process.

### Create a Startup Script

```bash
nano ~/hsqldb/start-server.sh
```

Add the following content:

```bash
#!/bin/bash
java -classpath ~/hsqldb/lib/hsqldb.jar org.hsqldb.Server \
    -database.0 file:~/hsqldb/data/trainingdb \
    -dbname.0 trainingdb
```

Save and exit.

### Make the Script Executable

```bash
chmod +x ~/hsqldb/start-server.sh
```

### Use the Script to Start the Server

From now on, you can start the server by running:

```bash
~/hsqldb/start-server.sh
```

If you're even more lazy, you can do the same for the Database Manager:

```bash
nano ~/hsqldb/start-db-manager.sh
```

Add the following content:

```bash
#!/bin/bash
java -classpath ~/hsqldb/lib/hsqldb.jar org.hsqldb.util.DatabaseManagerSwing
```

Save and exit.

```bash
chmod +x ~/hsqldb/start-db-manager.sh
```

Now, you can start the Database Manager by running:

```bash
~/hsqldb/start-db-manager.sh
```

## Conclusion

Congratulations! You've successfully set up HSQLDB on your Mac. You can now use the Database Manager to interact with the database, and the server will run continuously in the background.

Feel free to share your experiences or any challenges you faced during the setup in the comments below!
