# Wolt Clone - React Native Personal Project

Welcome to my **Wolt Clone**! This is a personal project built to master **React Native** and the **Expo** ecosystem. The goal of this project is to replicate the core experience of the Wolt app, focusing on high-performance animations, seamless routing, and a premium UI/UX.

## 🚀 Overview

This app is a full-featured delivery platform clone including restaurant discovery, category filtering, and location management. It utilizes modern mobile development patterns to ensure a smooth, "native" feel across platforms.

## 🛠 Tech Stack

- **Framework**: [Expo](https://expo.dev/) (SDK 54)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Routing**: [Expo Router](https://docs.expo.dev/router/introduction/) (File-based navigation)
- **Animations**: [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/) (Interpolated headers, smooth transitions)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Data Fetching**: [TanStack Query (React Query)](https://tanstack.com/query/latest)
- **Storage**: [MMKV](https://github.com/mrousavy/react-native-mmkv) (High-speed key-value storage)
- **Native Modules**:
  - `expo-location` for real-time positioning
  - `expo-maps` for visual delivery tracking
  - `expo-haptics` for tactile feedback
- **Typography**: [Nunito](https://fonts.google.com/specimen/Nunito) via Google Fonts

## ✨ Key Features

- **Animated Header**: A custom-built header that morphs and cross-fades content based on scroll position using Reanimated.
- **Dynamic Restaurant Lists**: Refactored for optimal performance within scrollable containers.
- **Interactive Modals**:
  - **Location Manager**: Set and manage delivery addresses with native sheet detents.
  - **Filter Suite**: Refine results by cuisine, price, and Wolt+ status.
- **Form Sheets**: Leverages native iOS `formSheet` presentations for a premium feel.
- **Safe Area Integration**: Precise layout handling across various screen types (notches, islands, etc.).

## 📂 Project Structure

- `app/`: Expo Router file-based pages and layouts.
  - `(index)/(auth)/(tabs)`: Main application structure.
  - `(modals)`: Native sheet presentations.
- `components/`: Reusable primitive and composite UI components (Header, RestaurantList, CategoryList).
- `constants/`: Theme definitions, colors, and typography settings.
- `data/`: Mock data and static assets for prototyping.
- `hooks/`: Custom React hooks for data fetching and logic.
- `services/`: API and third-party service integrations.

## 🚦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Expo Go](https://expo.dev/go) app (for testing on hardware) or an Emulator/Simulator.

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd wolt
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npx expo start
   ```

## 📖 What I've Learned

Building this project allowed me to dive deep into:

- Efficiently handling **Nested VirtualizedLists** and scrollable layouts.
- Implementing **Shared Value** animations with interpolate and extrapolate.
- Structuring complex **React Native projects** using local-first architectures.
- Managing **native iOS detents** and presentation styles within expo-router.

---

_This is a portfolio project. Check out the code to see how I handle state, animations, and navigation in a modern React Native environment._
