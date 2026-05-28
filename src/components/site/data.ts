import coffeeImg from '@/assets/coffee.jpg'
import pulsesImg from '@/assets/pulses.jpg'
import sesameImg from '@/assets/sesame.jpg'
import spicesImg from '@/assets/spices.jpg'

export type ProductItem = {
  name: string
  description: string
  specs: string[]
}

export type Category = {
  slug: string
  name: string
  image: string
  tagline: string
  /** Long overview for specs page & SEO */
  overview: string
  seoDescription: string
  items: ProductItem[]
}

export const categories: Category[] = [
  {
    slug: 'oil-seeds',
    name: 'Oil Seeds',
    image: sesameImg,
    tagline: 'Rich oil content, globally sought.',
    seoDescription:
      'Ethiopian oil seeds export catalogue: sesame (Humera, Wolega), castor, niger, flax. Purity and oil-content specs available for LC-backed contracts.',
    overview:
      'Ethiopia’s oil seed belt delivers high-oil sesame, castor and specialty seeds with disciplined cleaning and grading. Cargo is conditioned for container or break-bulk export with traceable warehousing in Addis Ababa.',
    items: [
      {
        name: 'Sesame Seeds (Humera)',
        description:
          'Northwestern Humera-type sesame prized for snowy colour, nutty aroma and exceptionally high fatty oil yields — favoured by tahini halva and confectionery buyers.',
        specs: ['Purity 99% min', 'Oil 50% min', 'Moisture 7% max'],
      },
      {
        name: 'Sesame Seeds (Wolega)',
        description:
          'Western Wolega origin with bolder kernel size and dependable oil fractions for crushing and speciality food channels.',
        specs: ['Purity 98.5% min', 'Oil 52% min', 'Moisture 7% max'],
      },
      {
        name: 'Castor Seeds',
        description:
          'Machine-cleaned castor destined for lubricants, pharma derivatives and biodegradable polymer feedstocks demanding consistent moisture control.',
        specs: ['Machine cleaned', 'Controlled moisture', 'High oil yield potential'],
      },
      {
        name: 'Niger Seeds',
        description:
          'Small black niger seed revered in bird-feed and speciality oil sectors for its lipid profile.',
        specs: ['Premium edible grade', 'Foreign matter controlled', 'Cold-press ready'],
      },
      {
        name: 'Flax Seeds',
        description:
          'Golden/brown Ethiopian flax optimised for Omega-3 oil extraction and milling into functional foods.',
        specs: ['Purity 98.5% min', 'Oil 45% min', 'Moisture capped per shipment'],
      },
    ],
  },
  {
    slug: 'coffee',
    name: 'Arabica Coffee',
    image: coffeeImg,
    tagline: 'Highland-grown, distinctive flavour.',
    seoDescription:
      'Arabica green coffee specifications from Sidamo and Yirgacheffe washed and naturals plus Djimma and Nekempt naturals — ideal for speciality roasters and blenders sourcing traceable Ethiopian lots.',
    overview:
      'We consolidate washed and natural coffees from elevations between 1,600–2,100 msnm. Contracts reference ECX grades, sensory targets and roast profiles negotiated with roasting teams before stuffing.',
    items: [
      {
        name: 'Washed — Sidamo Gr 1 & 2',
        description:
          'Classic Sidamo citrus and stone-fruit profile with balanced sweetness — excellent as a rotating single-origin or blend acid driver.',
        specs: ['Cup score targets agreed prior to fixation', 'Screen 14+', 'Moisture 11–12.5%'],
      },
      {
        name: 'Washed — Yirgacheffe Gr 1 & 2',
        description:
          'Floral jasmine, bergamot and tea-like backbone — speciality roaster favourite for drip and pour-over showcases.',
        specs: ['Hand-sorted cherries', 'Defect thresholds per ICO', 'Hermetic liners optional'],
      },
      {
        name: 'Natural — Sidamo & Yirgacheffe Gr 1',
        description:
          'Sun-dried naturals layering ripe berry sweetness over winey acidity suited to espresso blends and fermentation-forward menus.',
        specs: ['Raised beds monitored', 'Even drying curve', 'Traceable mills'],
      },
      {
        name: 'Natural — Nekempt Gr 4 & 5',
        description:
          'Western profile with heavier body — budget-friendly naturals anchoring espresso bases and soluble channels.',
        specs: ['Cupping protocol per contract', 'Moisture & density checks', 'Fumigation on request'],
      },
      {
        name: 'Natural — Djimma Gr 4 & 5',
        description:
          'Earthy sweetness with bittersweet cacao notes — favoured for continental-style dark roasts and robust blends.',
        specs: ['Consistent QC lots', 'Phytosanitary docs', 'Shipment-ready bagging'],
      },
    ],
  },
  {
    slug: 'pulses',
    name: 'Pulses',
    image: pulsesImg,
    tagline: 'Protein and fibre powerhouses.',
    seoDescription:
      'Export pulses from Ethiopia — white pea bean, kidney, chick pea, faba and more. Sortex, HPS, moisture and sieve specifications customised for importer QA policies.',
    overview:
      'Our pulse programmes combine farm-level agronomy briefing with stringent colour sorting so consignments meet EU, GCC and Asian import tolerances.',
    items: [
      {
        name: 'White Pea Beans',
        description:
          'Creamy texture after cooking — widely used across middle-eastern hummus-style spreads and canning factories.',
        specs: ['Purity 98% min', 'Moisture 13% max', 'HPS polishing available'],
      },
      {
        name: 'Red Speckled Kidney Beans',
        description:
          'Eye-catching pigment pattern with firm bite — favoured for chilli and casserole manufacturing.',
        specs: ['Sortex cleaned + HPS', 'Controlled admixture', 'Size sieves customised'],
      },
      {
        name: 'Red Kidney Beans',
        description:
          'Deep red Wolkite and southern types providing bold colour differentiation in canned ready meals.',
        specs: ['Moisture 14% max', 'Uniform calibre lots', 'Hand picking optional'],
      },
      {
        name: 'Kabuli Chick Peas',
        description:
          'Large-seeded chickpea for falafel, snack roasting and hummus lines demanding premium mouthfeel.',
        specs: ['Size 7–10 mm', 'Blanch-ready', 'Aflatoxin vigilance protocols'],
      },
      {
        name: 'Desi Chick Peas',
        description:
          'Smaller, higher-fibre chickpea supporting traditional daal milling and speciality flour.',
        specs: ['Size 4–5 mm', 'Uniform colour batches', 'Stones removed'],
      },
      {
        name: 'Pinto Beans',
        description:
          'Mottled skin pattern popular in latin-american cuisines and dehydrated soup mixes.',
        specs: ['Premium export grade', 'Low foreign matter'],
      },
      {
        name: 'Lupin Beans',
        description:
          'Sweet lupin for plant-protein formulations and speciality snack coatings.',
        specs: ['Bitterness tested', 'Protein dossier on demand'],
      },
      {
        name: 'Green Mung Beans',
        description:
          'Translucent emerald mung favoured for sprouts, noodle starch and confection sprouting trials.',
        specs: ['High germination', 'Uniform moisture'],
      },
      {
        name: 'Faba Beans',
        description:
          'Broad bean supplying plant-protein isolates across EU feed and food diversification projects.',
        specs: ['Protein 38% min', 'Tannin levels monitored'],
      },
      {
        name: 'Black Beans',
        description:
          'Jet-black glossy coat prized in latin fusion cuisine and RTE pouches needing visual contrast.',
        specs: ['Sortex grade', 'Cooking trials reference available'],
      },
    ],
  },
  {
    slug: 'spices',
    name: 'Spices',
    image: spicesImg,
    tagline: 'Potent flavour, traditional roots.',
    seoDescription:
      'Ethiopian spice exports featuring whole turmeric finger and black cumin (nigella) cleaned to allergen-managed specifications for discerning food manufacturers.',
    overview:
      'Spices ship double-sealed following sieving, polishing and microbial screening aligned with importer checklists.',
    items: [
      {
        name: 'Turmeric (Whole Finger)',
        description:
          'Vibrant curcumin-forward turmeric kept whole to prolong volatile oil retention until grinding at destination.',
        specs: ['Double polished', 'Moisture 12% max', 'Volatile oil certificate on demand'],
      },
      {
        name: 'Black Cumin',
        description:
          'Nigella sativa prized for confection, bakery savoury fillings and herbal supplement capsules.',
        specs: ['Purity 98%', 'Controlled volatile oil', 'Gluten & lactose statement available'],
      },
    ],
  },
]

export const countries = ['UK', 'Italy', 'China', 'Germany', 'El Salvador', 'Russia', 'Indonesia', 'Dubai', 'India']

export const testimonials = [
  {
    from: 'Eric Feng — Sinopharm Fortune Way, China',
    quote:
      'Dear Kibrom, your shipments arrive on time and at the quality we expect. A reliable partner.',
  },
  {
    from: 'Li — China Citexic Corporation',
    quote:
      'Soybean contract signed. We will open the LC according to the contract and arrange the delivery.',
  },
]
