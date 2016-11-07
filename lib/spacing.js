// Represent the Spacing Scale from Obsidian.css as an object to make it reusable
// This makes it agnotic of whether it's being passed as a value to margin or padding

import config from './config'

function Spacing (x = config.spacing.baseSp, y = config.spacing.unit) {
  return {
    one (x = config.spacing.baseSp, y = config.spacing.unit) {
      return `${(x / 4) + y}`
    },

    two (x = config.spacing.baseSp, y = config.spacing.unit) {
      return `${(x / 2) + y}`
    },

    three (x = config.spacing.baseSp, y = config.spacing.unit) {
      return `${x + y}`
    },

    four (x = config.spacing.baseSp, y = config.spacing.unit) {
      return `${(x * 2) + y}`
    },

    five (x = config.spacing.baseSp, y = config.spacing.unit) {
      return `${(x * 2.4) + y}`
    },

    six (x = config.spacing.baseSp, y = config.spacing.unit) {
      return `${(x * 4) + y}`
    }
  }
}

export default Spacing(config.spacing.baseSp, config.spacing.unit)
