const DETAILS_BOTH = 'Happy hour food and drink menu'
const DETAILS_DRINK = 'Happy hour drink menu'

const bars = [
  {
    id: 1,
    name: 'Chela',
    type: ['Lounges', 'Mexican'],
    location: [-73.985628, 40.670313],
    image: '/images/chela.jpg',
    price: 2,
    rating: 4.5,
    reviews: 70,
    happyHours: [
      { M: {
          start: 1200,
          end: 2200,
          details: '$8 margaritas and mexican mules'
          }
      },
      {
        TU: {
          start: 1200,
          end: 2200,
          details: 'Taco tuesday and special menu'
          }
      },
      {
        W: {
          start: 1200,
          end: 2200,
          details: 'All day happy hour'
          }
      },
      {
        TH: {
          start: 1200,
          end: 2200,
          details: 'Ladies night 2 for 1 margaritas and mules'
          }
      },
      {
        F: {
          start: 1600,
          end: 1900,
          details: DETAILS_BOTH
          }
      }
    ]
  },
  {
    id: 2,
    name: 'Blueprint',
    type: ['Cocktail Bars', 'Tapas/Small Plates'],
    location: [-73.980368, 40.676883],
    image: '/images/blueprint.jpg',
    price: 2,
    rating: 4.5,
    reviews: 284,
    happyHours: [
      { M: {
        start: 1600,
        end: 1900,
        details: DETAILS_DRINK
        }
      },
      {
        TU: {
          start: 1600,
          end: 1900,
          details: DETAILS_DRINK
          }
      },
      {
        W: {
          start: 1600,
          end: 1900,
          details: DETAILS_DRINK
          }
      },
      {
        TH: {
          start: 1600,
          end: 1900,
          details: DETAILS_DRINK
        }
      },
      {
        F: {
          start: 1600,
          end: 1900,
          details: DETAILS_DRINK
        }
      }
    ]
  },
  {
    id: 3,
    name: 'Drink',
    type: ['Cocktail Bars', 'Lounges'],
    location: [-73.957657, 40.672162],
    image: '/images/drink.jpg',
    price: 2,
    rating: 4.5,
    reviews: 65,
    happyHours: [
      { M: {
        start: 1700,
        end: 2000,
        details: '$2 off all beer, wine, and wells'
        }
      },
      {
        TU: {
          start: 1700,
          end: 2000,
          details: '$2 off all beer, wine, and wells'
          }
      },
      {
        W: {
          start: 1700,
          end: 2000,
          details: '$2 off all beer, wine, and wells'
          }
      },
      {
        TH: {
          start: 1700,
          end: 2000,
          details: '$2 off all beer, wine, and wells'
        }
      },
      {
        F: {
          start: 1700,
          end: 2000,
          details: '$2 off all beer, wine, and wells'
        }
      }
    ]
  },
  {
    id: 4,
    name: 'Baby Jane',
    type: ['Cocktail Bars'],
    location: [-73.967322, 40.683792],
    image: '/images/baby-jane.jpg',
    price: 2,
    rating: 4.5,
    reviews: 33,
    happyHours: [
      { M: {
        start: 1700,
        end: 1900,
        details: DETAILS_DRINK
        }
      },
      {
        TU: {
          start: 1700,
          end: 1900,
          details: DETAILS_DRINK
          }
      },
      {
        W: {
          start: 1700,
          end: 1900,
          details: DETAILS_DRINK
          }
      },
      {
        TH: {
          start: 1700,
          end: 1900,
          details: DETAILS_DRINK
        }
      },
      {
        F: {
          start: 1700,
          end: 1900,
          details: DETAILS_DRINK
        }
      }
    ]
  },
  {
    id: 5,
    name: 'The Commissioner',
    type: ['Pubs'],
    location: [-73.981337, 40.674822],
    image: '/images/the-commissioner.jpg',
    price: 1,
    rating: 5,
    reviews: 80,
    happyHours: [
      { M: {
        start: 1600,
        end: 1900,
        details: '$1 off burgers, wings, wines, draughts, and wells'
        }
      },
      {
        TU: {
          start: 1600,
          end: 1900,
          details: '$1 off burgers, wings, wines, draughts, and wells'
          }
      },
      {
        W: {
          start: 1600,
          end: 1900,
          details: '$1 off burgers, wings, wines, draughts, and wells'
          }
      },
      {
        TH: {
          start: 1600,
          end: 1900,
          details: '$1 off burgers, wings, wines, draughts, and wells'
        }
      },
      {
        F: {
          start: 1600,
          end: 1900,
          details: '$1 off burgers, wings, wines, draughts, and wells'
        }
      }
    ]
  },
  {
    id: 6,
    name: 'Prospect',
    type: ['American(New)', 'Cocktail Bars', 'Wine Bars'],
    location: [-73.973776, 40.686170],
    image: '/images/prospect.jpg',
    price: 3,
    rating: 4,
    reviews: 205,
    happyHours: [
      { M: {
        start: 1730,
        end: 1900,
        details: DETAILS_BOTH 
        }
      },
      {
        TU: {
          start: 1730,
          end: 1900,
          details: DETAILS_BOTH 
          }
      },
      {
        W: {
          start: 1730,
          end: 1900,
          details: DETAILS_BOTH 
          }
      },
      {
        TH: {
          start: 1730,
          end: 1900,
          details: DETAILS_BOTH 
        }
      },
      {
        F: {
          start: 1730,
          end: 1900,
          details: DETAILS_BOTH 
        }
      },
      {
        SA: {
          start: 1730,
          end: 1900,
          details: DETAILS_BOTH 
        }
      }
    ]
  }
]

export default bars;