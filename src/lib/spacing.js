// Represent the Spacing Scale from Obsidian.css as an object to make it reusable
// This makes it agnotic of whether it's being passed as a value to margin or padding

function spacing (x = '1', y = 'rem') {
  return {
    one (x = '1', y = 'rem') {
      return `${(x / 4) + y}`
    },

    two (x = '1', y = 'rem') {
      return `${(x / 2) + y}`
    },

    three (x = '1', y = 'rem') {
      return `${x + y}`
    },

    four (x = '1', y = 'rem') {
      return `${(x * 2) + y}`
    },

    five (x = '1', y = 'rem') {
      return `${(x * 2.4) + y}`
    },

    six (x = '1', y = 'rem') {
      return `${(x * 4) + y}`
    }
  }
}

export default spacing
