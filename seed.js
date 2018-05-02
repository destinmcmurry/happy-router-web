const DETAILS_BOTH = 'special food and drink menu'
const DETAILS_DRINK = 'special drink menu'

const bars = [
  {
    id: 1,
    name: 'Chela',
    type: ['Lounges', 'Mexican'],
    location: [-73.985628, 40.670313],
    image: '/images/chela.jpg',
    price: '$$',
    rating: 4.5,
    reviews: 70,
    website: 'http://www.chelaparkslope.com/',
    happyHours: {
      M: {
          start: 1200,
          end: 2200,
          details: '$8 margaritas and mexican mules'
          },
      TU: {
        start: 1200,
        end: 2200,
        details: 'Taco tuesday and special menu'
        },
      W: {
        start: 1200,
        end: 2200,
        details: 'All day happy hour'
        },
      TH: {
        start: 1200,
        end: 2200,
        details: 'Ladies night 2 for 1 margaritas and mules'
        },
      F: {
        start: 1600,
        end: 1900,
        details: DETAILS_BOTH
        }
    }
  },
  {
    id: 2,
    name: 'Blueprint',
    type: ['Cocktail Bars', 'Tapas/Small Plates'],
    location: [-73.980368, 40.676883],
    image: '/images/blueprint.jpg',
    price: '$$',
    rating: 4.5,
    reviews: 284,
    website: 'http://www.blueprintbrooklyn.com/',
    happyHours: {
      M: {
        start: 1600,
        end: 1900,
        details: DETAILS_DRINK
        },
      TU: {
        start: 1600,
        end: 1900,
        details: DETAILS_DRINK
        },
      W: {
        start: 1600,
        end: 1900,
        details: DETAILS_DRINK
        },
      TH: {
        start: 1600,
        end: 1900,
        details: DETAILS_DRINK
      },
      F: {
        start: 1600,
        end: 1900,
        details: DETAILS_DRINK
      }
    }
  },
  {
    id: 3,
    name: 'Drink',
    type: ['Cocktail Bars', 'Lounges'],
    location: [-73.957657, 40.672162],
    image: '/images/drink.jpg',
    price: '$$',
    rating: 4.5,
    reviews: 65,
    website: 'http://thedrinkbrooklyn.com/',
    happyHours: {
      M: {
        start: 1700,
        end: 2000,
        details: '$2 off all beer, wine, and wells'
        },
      TU: {
        start: 1700,
        end: 2000,
        details: '$2 off all beer, wine, and wells'
        },
      W: {
        start: 1700,
        end: 2000,
        details: '$2 off all beer, wine, and wells'
        },
      TH: {
        start: 1700,
        end: 2000,
        details: '$2 off all beer, wine, and wells'
      },
      F: {
        start: 1700,
        end: 2000,
        details: '$2 off all beer, wine, and wells'
      }
    }
  },
  {
    id: 4,
    name: 'Baby Jane',
    type: ['Cocktail Bars'],
    location: [-73.967322, 40.683792],
    image: '/images/baby-jane.jpg',
    price: '$$',
    rating: 4.5,
    reviews: 33,
    website: 'none',
    happyHours: { 
      M: {
        start: 1700,
        end: 1900,
        details: DETAILS_DRINK
        },
      TU: {
        start: 1700,
        end: 1900,
        details: DETAILS_DRINK
        },
      W: {
        start: 1700,
        end: 1900,
        details: DETAILS_DRINK
        },
      TH: {
        start: 1700,
        end: 1900,
        details: DETAILS_DRINK
      },
      F: {
        start: 1700,
        end: 1900,
        details: DETAILS_DRINK
      }
    }
  },
  {
    id: 5,
    name: 'The Commissioner',
    type: ['Pubs'],
    location: [-73.981337, 40.674822],
    image: '/images/the-commissioner.jpg',
    price: '$',
    rating: 5,
    reviews: 80,
    website: 'http://www.thecommissionerbk.com/',
    happyHours: {
      M: {
        start: 1600,
        end: 1900,
        details: '$1 off burgers, wings, wines, draughts, and wells'
        },
      TU: {
        start: 1600,
        end: 1900,
        details: '$1 off burgers, wings, wines, draughts, and wells'
        },
      W: {
        start: 1600,
        end: 1900,
        details: '$1 off burgers, wings, wines, draughts, and wells'
        },
      TH: {
        start: 1600,
        end: 1900,
        details: '$1 off burgers, wings, wines, draughts, and wells'
      },
      F: {
        start: 1600,
        end: 1900,
        details: '$1 off burgers, wings, wines, draughts, and wells'
      }
    }
  },
  {
    id: 6,
    name: 'Prospect',
    type: ['American(New)', 'Cocktail Bars', 'Wine Bars'],
    location: [-73.973776, 40.686170],
    image: '/images/prospect.jpg',
    price: '$$$',
    rating: 4,
    reviews: 205,
    website: 'http://www.prospectbarandgrill.com/',
    happyHours: {
      M: {
        start: 1730,
        end: 1900,
        details: DETAILS_BOTH 
        },
      TU: {
        start: 1730,
        end: 1900,
        details: DETAILS_BOTH 
        },
      W: {
        start: 1730,
        end: 1900,
        details: DETAILS_BOTH 
        },
      TH: {
        start: 1730,
        end: 1900,
        details: DETAILS_BOTH 
      },
      F: {
        start: 1730,
        end: 1900,
        details: DETAILS_BOTH 
      },
      SA: {
        start: 1730,
        end: 1900,
        details: DETAILS_BOTH 
      }
    }
  },
  {
    id: 7,
    name: 'Lenita',
    type: ['Mexican', 'Cocktail Bars'],
    location: [-74.009744, 40.703982],
    image: '/images/lenita.jpg',
    price: '$$',
    rating: 4,
    reviews: 45,
    website: 'https://www.lenitanyc.com/',
    happyHours: {
      M: {
        start: 1700,
        end: 1900,
        details: DETAILS_BOTH 
        },
      TU: {
        start: 1100,
        end: 2300,
        details: 'taco tuesday'
        },
      W: {
        start: 1700,
        end: 1900,
        details: DETAILS_BOTH 
        },
      TH: {
        start: 1700,
        end: 1900,
        details: DETAILS_BOTH 
      },
      F: {
        start: 1700,
        end: 1900,
        details: DETAILS_BOTH 
      }
    }
  },
  {
    id: 8,
    name: 'The Wooly Public',
    type: ['American(New)', 'Cocktail Bars', 'Wine Bars'],
    location: [-74.006529, 40.708231],
    image: '/images/wooly.jpg',
    price: '$$',
    rating: 4,
    reviews: 46,
    website: 'https://www.thewoolypublic.com/',
    happyHours: {
      M: {
        start: 1130,
        end: 1800,
        details: '$5 select drafts, $7 select wines, and $10 public punch'
        },
      TU: {
        start: 1130,
        end: 2300,
        details: '$5 select drafts, $7 select wines, and $10 public punch'
        },
      W: {
        start: 1130,
        end: 1800,
        details: '$5 select drafts, $7 select wines, and $10 public punch'
        },
      TH: {
        start: 1130,
        end: 1800,
        details: '$5 select drafts, $7 select wines, and $10 public punch'
      },
      F: {
        start: 1130,
        end: 1800,
        details: '$5 select drafts, $7 select wines, and $10 public punch'
      }
    }
  },
  {
    id: 9,
    name: 'Mad Dog & Beans',
    type: ['Mexican', 'Bars'],
    location: [-74.010205, 40.704176],
    image: '/images/mad-dog.jpg',
    price: '$$',
    rating: 3.5,
    reviews: 688,
    website: 'https://www.maddogandbeans.com/',
    happyHours: {
      M: {
        start: 1430,
        end: 1730,
        details: '$6 margaritas and beer'
        },
      TU: {
        start: 1430,
        end: 1730,
        details: '$6 margaritas and beer'
        },
      W: {
        start: 1430,
        end: 1730,
        details: '$6 margaritas and beer'
        },
      TH: {
        start: 1430,
        end: 1730,
        details: '$6 margaritas and beer'
      }
    }
  },
  {
    id: 10,
    name: 'The Dead Rabbit',
    type: ['Cocktail Bars'],
    location: [-74.011029, 40.703286],
    image: '/images/dead-rabbit.jpg',
    price: '$$',
    rating: 4,
    reviews: 1230,
    website: 'https://www.deadrabbitnyc.com/',
    happyHours: {
      M: {
        start: 1700,
        end: 1900,
        details: '$1 oysters and $7 specialty cocktails'
        },
      TU: {
        start: 1700,
        end: 1900,
        details: '$1 oysters and $7 specialty cocktails'
        },
      W: {
        start: 1700,
        end: 1900,
        details: '$1 oysters and $7 specialty cocktails'
        },
      TH: {
        start: 1700,
        end: 1900,
        details: '$1 oysters and $7 specialty cocktails'
      },
      F: {
        start: 1700,
        end: 1900,
        details: '$1 oysters and $7 specialty cocktails'
      }
    }
  },
  {
    id: 11,
    name: 'Trading Post',
    type: ['American(Traditional)', 'Bars', 'Seafood'],
    location: [-74.004195, 40.705997],
    image: '/images/trading-post.jpg',
    price: '$$',
    rating: 4,
    reviews: 294,
    website: 'https://www.tradingpostnyc.com/',
    happyHours: {
      M: {
        start: 1700,
        end: 1900,
        details: '$5 drafts, $7 wines, and $8 French martinis and cosmos'
        },
      TU: {
        start: 1700,
        end: 1900,
        details: '$5 drafts, $7 wines, and $8 French martinis and cosmos'
        },
      W: {
        start: 1700,
        end: 1900,
        details: '$5 drafts, $7 wines, and $8 French martinis and cosmos'
        },
      TH: {
        start: 1700,
        end: 1900,
        details: '$5 drafts, $7 wines, and $8 French martinis and cosmos'
      },
      F: {
        start: 1700,
        end: 1900,
        details: '$5 drafts, $7 wines, and $8 French martinis and cosmos'
      },
      SA: {
        start: 1200,
        end: 2000,
        details: '$5 drafts, $7 wines, and $8 French martinis and cosmos'
        },
      SU: {
        start: 1200,
        end: 2300,
        details: '$5 drafts, $7 wines, and $8 French martinis and cosmos'
        }
    }
  }
]

export default bars;