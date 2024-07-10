# HeartByte Mobile OA Task

## Your Task
Implement the home page based on the provided Figma design with the mock data and demo code provided. This should not take more than a few hours.

###Product UI
figma: UI–homepage.fig

## Environment Setup 

### Prerequisites
- Install Expo Go on a physical device (mobile or desktop).
- You can install Expo Orbit for macOS and Windows to enable faster development.
- You can manage your Android/iOS emulators with Expo Orbit and run Expo Go with it.

### Work with the Provided Code

1. Unzip the `heartb-mobile-oa-main.zip`
2. Install dependencies:
    ```sh
    npm install
    ```
3. Launch the app in a development build:
    ```sh
    npx expo start -c
    ```

## Mock Data
All the mock data that needs to be used is in the `src/data` folder.

- **Banner:** `src/data/mock_banner_data.ts`
  - Contains a list of image sources for the banner.

- **Chapter Card:** `src/data/mock_chapter_data.ts`
  - `storytitle`
  - `chaptertitle`
  - `chapteridint`
  - `content`
  - `storyprogress`
  - `chapteridint`
  - `avatarurl`
  - `likes`

### Data Schema
```javascript
const mockChaptersData = [
   {
       avatarurl: "https://pic.aigexing.net/uploads/1/1253/1077895842/93909811715/661546730.jpg",
       chapterdocid: "7JTe6eEXmwhiaALIKYpn",
       chapteridint: 1,
       chaptertitle: "The Mysterious Arrival",
       content: `Autumn had arrived casting a warm golden ...`,
       creatoruserid: "sQ8AlZEsccYYN5JYTCkKB6ke70o1",
       creatorusername: "momo",
       lastpublishedtime: 1719039541828,
       storyid: "9P1Wfn3YDOSPMYsYys55IQXaZ3LHp",
       storytitle: "Lost You Forever",
       storytype: "original",
       storyprogress: "ongoing",
       likes: 7
   }
   // ...
]
```

## Additional Resources

### Expo
- [Expo documentation](https://docs.expo.dev/)

### Code and Examples Provided by the Demo App
- Chapter detail page and bottom navigation are already implemented. Take a look at `src/app/chapters` and `src/app/(tabs)` for more details.

### Your Implementation
- Your implementation should be in `src/app/(tabs)/profile.tsx`.

## Component Libraries Integrated with the Demo App
- [UI-Kitten](https://akveo.github.io/react-native-ui-kitten/docs/components/components-overview)
- [Nativewind](https://www.nativewind.dev/)