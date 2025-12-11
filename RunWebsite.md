# LNU AI Society - Developer Setup Guide

This repository contains the source code for the LNU AI Society website. It is divided into two parts:
- **Backend:** Java Spring Boot (`lnuais-backend`)
- **Frontend:** HTML/JS/CSS (`lnuais-frontend`)

Follow these steps to run the application locally (connected to the testing database).

## 1. Prerequisites
- **Java JDK 21+** (for Backend)
- **Maven** (for Backend build)
- **Node.js** (for Frontend proxy server)

---

## 2. Backend Setup
The backend runs on Port `5000` and connects to the remote PostgreSQL database.

### Step A: Configure Secrets
**Important:** You need a secrets file to connect to the database. This file is NOT in git for security.
1. Create a file: `lnuais-backend/src/main/resources/application-secret.properties`
2. Add the following content (ask the Lead Developer for the actual passwords):

```properties
DB_URL=jdbc:postgresql://db-lnuais.c5qsemym6bxx.eu-north-1.rds.amazonaws.com:5432/lnuais
DB_USER=postgres
DB_PASSWORD=ASK_LEAD_DEV_FOR_THIS
GOOGLE_CLIENT_ID=ASK_LEAD_DEV_FOR_THIS
GOOGLE_CLIENT_SECRET=ASK_LEAD_DEV_FOR_THIS
MAIL_USERNAME=dev@lnuais.com
MAIL_PASSWORD=ASK_LEAD_DEV_FOR_THIS
FRONTEND_URL=http://localhost:3000
```

### Step B: Run the Server
Open a terminal in `lnuais-backend` and run:
```bash
mvn spring-boot:run
```
*Wait until you see:* `Tomcat started on port 5000`.

---

## 3. Frontend Setup
The frontend runs on Port `3000` and proxies API requests to the Backend.

### Step A: Install Dependencies
Open a terminal in `lnuais-frontend` and run:
```bash
npm install
```

### Step B: Run the Dev Server
```bash
node scripts/server.js
```
*Output:* `Server running at http://localhost:3000/`

---

## 4. Design & Verify
1. Open your browser to `http://localhost:3000`.
2. **Sign In / Sign Up:** This will hit your local Backend (Port 5000), which connects to the AWS Database.
3. You can now edit HTML/CSS files in `lnuais-frontend`, refresh the page, and see changes instantly while working with real data.
