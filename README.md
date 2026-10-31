# Web 3.0 & Decentralized Cloud Architecture

A responsive, single-page educational web experience explaining decentralized infrastructure. The interface presents the Web 2.0 to Web 3.0 evolution, decentralized storage and compute layers, and a complete hybrid cloud architecture.

## Highlights

- Responsive dark-mode glassmorphism interface with cyan and purple accents
- Interactive centralized versus peer-to-peer comparison matrix
- Dynamic comparison filters for architecture roles
- Storage protocol cards with expandable technical notes
- Distributed compute spotlights and a visual hybrid-cloud stack
- Accessible semantic HTML, keyboard-friendly controls, and reduced-motion support

## Architecture Overview

The educational stack is organized into four layers:

1. **Trust and settlement** — Ethereum and Layer 2 smart contracts manage identity, governance, payments, access, and state.
2. **Decentralized storage** — IPFS addresses and transfers content, Filecoin creates an open storage market, and Arweave supports durable archival data.
3. **Distributed compute** — Akash Network, Flux, and Render Network match workloads with distributed CPU or GPU capacity.
4. **Delivery and indexing** — Web and mobile clients consume fast cloud-indexed APIs while preserving links to verifiable off-chain and on-chain data.

## Technical Stack

- HTML5 for semantic structure
- Modern CSS with custom properties, grid, flexbox, glass effects, and responsive breakpoints
- Vanilla JavaScript for navigation, filtering, progressive reveals, and interactive protocol details
- No runtime dependencies or build system

## File Layout

```text
.
├── index.html    # Page structure and content
├── styles.css    # Theme, layout, responsiveness, and animation
├── app.js        # Navigation and interactive behavior
├── README.md     # Project documentation
└── .gitignore    # Repository exclusions
```

## Local Setup

Requirements: Git and a modern web browser.

### Option 1: Open directly

Open `index.html` in a browser.

### Option 2: Use a local HTTP server

From the project directory, run:

```powershell
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## Git Setup and Push

Initialize and publish the repository with:

```powershell
git init -b main
git add .
git commit -m "Initial commit: Web3 decentralized cloud architecture guide"
git remote add origin <repository-url>
git push -u origin main
```

The repository remote URL is intentionally not embedded in this project. Supply the URL provided by the repository host before pushing.
