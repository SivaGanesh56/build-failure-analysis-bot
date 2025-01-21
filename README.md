# Basic Next.js App with OpenAI Integration

This repository combines a static site generator built with Next.js and an OpenAI-based system for error log analysis and notifications. Follow the instructions below to set up the project.

---

## Folder Structure

### `OpenAi/`

- **Purpose**: Implements OpenAI model integrations.
- **Functionality**:
  - Reads and analyzes error logs.
  - Utilizes OpenAI for issue diagnosis.
  - Sends notifications to a team communication platform, such as Microsoft Teams.

### `src/`

- **Purpose**: Next.js project for creating static sites.
- **Functionality**:
  - Fetches content from a CMS.
  - Dynamically generates static pages.

---

## Prerequisites

- Node.js (v16 or later) installed.
- OpenAI API Key for `OpenAi/`.
- Environment variables for CMS integration in `src/`.

---

## Setup Instructions

```bash
git clone https://github.com/Gaurav-Dash/basic-nextjs-app.git
cd basic-nextjs-app
npm i / yarn
```

## scripts

### Service Script

- The `service` script uses **nodemon** to start an Express server from `openai/index.js`, listening on **port 8181**. It is used basically to receive error logs from AWS, process those logs and send a notification in teams channel.

### dev Script

- The `dev` script is used for running the development Next.js app. http://localhost:3000
