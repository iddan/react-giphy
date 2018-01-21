<div align="center" href="">
  <img height="140" src="assets/giphy.png" alt="Giphy Logo" align="center" />
  <img width="167" src="assets/react.svg" alt="React Logo" align="center" />
  <h1>React GIPHY</h1>
  <p>React components for <a href="https://developers.giphy.com/docs/">GIPHY</a></p>
</div>

```bash
npm install @iddan/react-giphy
# or yarn add @iddan/react-giphy
```

### Features

 - Typed
 - Components match the API endpoints


### Usage

```javascript
import * as Giphy from '@iddan/react-giphy';
```

### Components

#### `<Giphy.Translate />`

##### props

 - apiKey - `string` (required)
 - searchTerm - `number` (required)
 - size - `"fixed_height" | "fixed_height_still" | "fixed_height_downsampled" | "fixed_width" | "fixed_width_still" | "fixed_width_downsampled" | "fixed_height_small" | "fixed_height_small_still" | "fixed_width_small" | "fixed_width_small_still" | "downsized_still" | "downsized_large" | "downsized_medium" | "downsized_small"` (defaults to `"fixed_height"`)
