// Uses webpack to load in the JSON
import obsidian from 'json!obsidian.css/css.json'

import spacing from './lib/spacing'
import typescale from './lib/typescale'
import color from './lib/color'
import families from './lib/families'

const config = {
  spacing: {
    baseSp: 1,
    unit: 'rem'
  }
}

const kndlng = {
  obsidian,
  families,
  spacing,
  color,
  typescale: typescale(config.spacing.baseSp, config.spacing.unit)
}

export {
  typescale as Typescale,
  families as Families,
  obsidian as Obsidian,
  color as Color,
  spacing as Spacing
}

export default kndlng
