import o from '../config'

// NOTE: Prehaps this could be represeted as loop?

const scale = {
  one (x = o.spacing.baseSp, val = o.spacing.unit) {
    return `${(x / 4) + val}`
  },

  two (x = o.spacing.baseSp, val = o.spacing.unit) {
    return `${(x / 2) + val}`
  },

  third (x = o.spacing.baseSp, val = o.spacing.unit) {
    return `${(x * 1) + val}`
  },

  four (x = o.spacing.baseSp, val = o.spacing.unit) {
    return `${(x * 2) + val}`
  },

  five (x = o.spacing.baseSp, val = o.spacing.unit) {
    return `${(x * 2.4) + val}`
  },

  six (x = o.spacing.baseSp, val = o.spacing.unit) {
    return `${(x * 4) + val}`
  }
}

export default scale
