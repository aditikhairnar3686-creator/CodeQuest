# Contributing to CodeQuest

We love your input! We want to make contributing to CodeQuest as easy and transparent as possible.

## How Can I Contribute?

### Reporting Bugs
Before creating a bug report, check the issue list. When creating a bug report, include:

* **Clear, descriptive title**
* **Steps to reproduce**
* **Expected behavior**
* **Actual behavior**
* **Screenshots if applicable**
* **Environment details** (OS, browser, etc.)

### Suggesting Features
Enhancement suggestions are tracked as GitHub issues. Include:

* **Clear, descriptive title**
* **Feature description**
* **Use case and benefits**
* **Possible implementation approach**

### Pull Requests

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run tests: `npm test`
5. Commit: `git commit -m 'Add amazing feature'`
6. Push: `git push origin feature/amazing-feature`
7. Open a Pull Request

## Code Style

### Commit Messages
* Use present tense: "Add feature" not "Added feature"
* Use imperative mood: "Move cursor to..." not "Moves cursor to..."
* Limit first line to 72 characters
* Start with applicable emoji:
  * 🎨 `:art:` - Format/structure
  * 🚀 `:rocket:` - Performance
  * 📝 `:memo:` - Documentation
  * 🐛 `:bug:` - Bug fix
  * ✨ `:sparkles:` - New feature
  * 🧪 `:test_tube:` - Tests

### TypeScript/JavaScript
* Use TypeScript for all code
* Use `const` by default, `let` when reassigning
* Use arrow functions
* Use meaningful variable names
* Add JSDoc comments

### React Components
* Use functional components with hooks
* One component per file
* Use TypeScript interfaces for props
* Use Tailwind or CSS Modules
* Keep components small and focused

## Setup Development Environment

```bash
# Clone and setup
git clone https://github.com/aditikhairnar3686-creator/CodeQuest.git
cd CodeQuest

# Setup backend
cd backend
npm install
npm run dev

# Setup frontend (new terminal)
cd frontend
npm install
npm start

# Or use Docker
docker-compose up
```

## Testing

* Write tests for new features
* Run tests: `npm test`
* Aim for 80% coverage
* Test before submitting PR

## Questions?

Open an issue with the `question` label!

Thank you for contributing! 🙌
