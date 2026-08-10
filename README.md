# React + Express User Directory Prototype

A small full-stack prototype that demonstrates communication between a React interface and an Express REST API.

## Implemented

- Express health-check endpoint.
- GET /api/users endpoint returning sample user data.
- POST /api/users endpoint accepting a user payload.
- React user-list interface with loading, error, and refresh states.
- Docker Compose scaffolding for Node.js, PostgreSQL, and Redis services.

## Current Status

This repository is an early prototype. User data is currently held in memory; PostgreSQL and Redis are scaffolded but are not yet connected to the API. Authentication and persistent storage are not implemented.

## Planned Improvements

- Add request validation and structured API errors.
- Connect PostgreSQL for persistent user storage.
- Add automated API and component tests.
- Complete containerized development scripts.
- Add authentication only after the core data flow is tested.

## Technology

React · Node.js · Express · Docker Compose · PostgreSQL scaffolding · Redis scaffolding