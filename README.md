# 🩺 GlucoBuddy — Personalized Food & Blood Glucose Monitoring System

**GlucoBuddy** is a machine-learning-based health monitoring project designed to help users track their meals, monitor blood glucose readings, explore nutritional information, and understand potential relationships between food intake and glucose levels.

The project combines a **React frontend, FastAPI backend, PostgreSQL database, and machine-learning models** to explore personalized nutrition and glucose monitoring, with a focus on Indian cuisine.

> **Project status:** In Development  
> This is an academic project prototype. The interactive frontend, Indian food dataset training, authentication flow, and production deployment are still under development.

## ✨ Features

### Implemented

- **User registration:** Register users with password hashing.
- **Food database:** Retrieve food items and their nutritional information.
- **Meal tracking:** Record meals with food IDs, quantities, users, and timestamps.
- **Meal history:** Retrieve a user's meals in chronological order, newest first.
- **Glucose monitoring:** Record and retrieve blood glucose readings.
- **Food recognition prototype:** Use OpenCLIP zero-shot image classification to identify candidate Indian food items.
- **Glucose prediction prototype:** Use a trained Random Forest regression model to estimate a future glucose value from selected input features.
- **Meal and glucose analysis:** Explore associations between recorded meals and glucose readings.

### Planned

- Interactive, responsive dashboard.
- Login, logout, protected pages, and secure user-specific access.
- Glucose trend charts and nutrition summaries.
- Indian food image dataset preparation and model fine-tuning.
- Improved recognition of regional Indian dishes and mixed meals.
- Food search, portion adjustment, and nutrition estimation.
- Personalized insights and improved prediction evaluation.
- Automated testing and production deployment.

## 🛠️ Technology Stack

| Component | Technology |
|---|---|
| Frontend | React, Vite |
| Backend | Python, FastAPI |
| Database | PostgreSQL |
| Database connectivity | Psycopg2 |
| Machine learning | Scikit-learn, Joblib |
| Image recognition | OpenCLIP, PyTorch |
| Data processing | Pandas |
| Configuration | Python dotenv |
| API documentation | Swagger UI |

## 📁 Project Structure

The repository is organized around the following components. The exact frontend and ML subfolder names may vary with ongoing development.

```text
GlucoBuddy/
├── backend/
│   ├── main.py
│   ├── .env                 # Local configuration; do not commit
│   ├── venv/                # Local virtual environment; do not commit
│   └── ...
├── frontend/
│   ├── src/
│   ├── package.json
│   └── ...
├── ml/
│   ├── data/                # Local datasets; check licensing
│   └── glucobuddy_glucose_model.pkl
├── .gitignore
└── README.md
```

## ⚙️ Prerequisites

Install the following before running the project:

- Python 3.13 or a compatible Python version.
- Node.js and npm.
- PostgreSQL.
- Git.
- Visual Studio Code (recommended).

Some machine-learning dependencies require additional disk space and may benefit from compatible GPU hardware.

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd GlucoBuddy
```

Replace the placeholder with your actual GitHub repository URL.

### 2. Configure PostgreSQL

Create a PostgreSQL database named `glucobuddy`.

Use your local PostgreSQL credentials and configure the database connection through environment variables. The development setup has used PostgreSQL port `5433`; change it if your local installation uses a different port.

### 3. Configure the backend

Open a terminal in the backend directory:

```bash
cd backend
python -m venv venv
```

Activate the virtual environment on Windows PowerShell:

```powershell
.\venv\Scripts\Activate.ps1
```

Install the backend dependencies listed in your project's dependency file. If no dependency file has been created yet, generate one from the working environment before sharing the repository.

Create a local `.env` file in `backend/`:

```env
DB_HOST=localhost
DB_NAME=glucobuddy
DB_USER=postgres
DB_PASSWORD=your_local_database_password
DB_PORT=5433
```

Replace the example password with your own local database password. Never commit `.env` or publish database credentials.

Start the API:

```bash
python -m uvicorn main:app --reload
```

The API will normally be available at:

- API root: http://127.0.0.1:8000/
- Interactive API documentation: http://127.0.0.1:8000/docs

### 4. Run the frontend

Open another terminal and navigate to the frontend directory:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL displayed by Vite, commonly http://localhost:5173/.

The frontend may require API configuration and CORS settings depending on the current implementation.

## 🤖 Machine Learning

### Food Recognition

The current food recognition prototype uses OpenCLIP with the `ViT-B-32` architecture and the `laion2b_s34b_b79k` pretrained weights.

The model compares an uploaded image with candidate food labels, including:

- Rice
- Roti
- Naan
- Dal
- Rajma
- Chole
- Paratha
- Biryani
- Chicken curry
- Vegetable curry

The current system returns candidate labels and similarity scores. These scores are **not calibrated probabilities**, and the model has not yet been fine-tuned on a comprehensive Indian food dataset.

### Glucose Prediction

A Random Forest regression model has been trained using the BrisT1D dataset, with selected historical features such as glucose, insulin, heart rate, and calories.

The current experimental evaluation reported:

- **Mean Absolute Error (MAE):** 1.5151
- **R² score:** 0.5435

These results apply to the existing test setup and dataset. They do not establish clinical accuracy or performance on Indian users. The model and its input assumptions require further validation before any real-world health use.

## 🗄️ Database

The current database schema includes:

| Table | Purpose |
|---|---|
| `users` | User accounts |
| `foods` | Food names and nutritional information |
| `meals` | Meal records, quantities, and timestamps |
| `glucose_readings` | Glucose values, timestamps, and meal context |
| `activities` | Activity types, durations, and timestamps |

The database uses relational links to associate meal and glucose records with users.

## 🔒 Security and Privacy

- Passwords for newly registered users are hashed.
- Database credentials should be stored in environment variables.
- Local virtual environments and sensitive configuration files should not be committed.
- Authentication, session handling, access controls, and deployment security require further work.
- Health information should be handled with appropriate privacy and security safeguards.

## ⚠️ Limitations

- Food recognition is currently a prototype with a limited candidate-label list.
- Nutrition estimates depend on accurate food identification and serving quantities.
- The Indian food dataset training phase is planned and not yet complete.
- Associations between meals and glucose readings do not prove causation.
- Glucose predictions are experimental and must not be used to make medical decisions.
- The project is not a substitute for professional medical advice or glucose-monitoring devices.

## 🗺️ Roadmap

- [x] Set up the development environment and database.
- [x] Implement core FastAPI endpoints.
- [x] Implement initial food recognition and glucose prediction prototypes.
- [x] Test meal-history retrieval through the API.
- [ ] Build the interactive React dashboard.
- [ ] Complete login, logout, and user authorization.
- [ ] Connect frontend pages to the backend APIs.
- [ ] Prepare and evaluate Indian food datasets.
- [ ] Fine-tune and integrate an improved Indian food recognition model.
- [ ] Improve nutrition insights and glucose analysis.
- [ ] Add automated tests and strengthen security.
- [ ] Prepare the application for deployment.

## 🎓 Project Purpose

GlucoBuddy is being developed as an academic project to explore the integration of machine learning, nutrition information, and glucose monitoring in a single application.

The long-term objective is to create a user-friendly system that supports meal logging and helps users explore their dietary and glucose patterns.

## 📄 License

A repository license has not yet been selected. Before distributing the project or its trained models, review the licenses of the datasets, pretrained weights, and other third-party components you use.

---

**Developed as an academic project — GlucoBuddy**  
*Personalized food and blood glucose monitoring, with a focus on Indian cuisine.*
