// products.js — FireSlab Single Source of Truth
// All content sourced word-for-word from FireSlab Product.docx
// To add a new product: push a new object to FIRESLAB_PRODUCTS. Cards & modals render automatically.

export const FIRESLAB_PRODUCTS = [
  {
    id: 'pressurized-tank',
    category: 'tanks',
    cardImage: '/tank-1.png',
    cardBadge: 'Bestseller',
    cardTitle: 'Pressurized Hot Water Storage Tank',
    cardDesc: 'For residential, commercial & industrial use. Compatible with heat pumps, solar systems, and boilers.',
    cardSpecs: [
      { icon: 'layers', text: '100L – 10,000+ Litres' },
      { icon: 'shield', text: 'MS / SS304 / SS316' },
    ],

    // --- MODAL CONTENT ---
    modalTitle: 'Pressurized Hot Water Storage Tank',
    modalTagline: 'Reliable Hot Water Storage Solution for Residential, Commercial & Industrial Applications',
    modalDescription: `A Pressurized Hot Water Storage Tank is a specially engineered vessel designed to store heated water under pressure and deliver it whenever required. It acts as a thermal storage reservoir that maintains a ready supply of hot water while improving the performance and efficiency of the overall hot water system.\n\nThese tanks are commonly integrated with Hot Water Heat Pumps, Solar Water Heating Systems, Boilers, Electric Water Heaters, Steam Systems, and other hot water generation equipment to ensure a continuous and stable hot water supply, even during peak demand periods.\n\nDesigned for durability, energy efficiency, and high-pressure operation, our hot water storage tanks are suitable for a wide range of residential, commercial, institutional, and industrial applications.`,

    features: [
      { title: 'High-Pressure Design', desc: 'Engineered to safely operate under pressurized conditions for reliable hot water distribution throughout the system.' },
      { title: 'Superior Thermal Insulation', desc: 'High-density insulation minimizes heat loss and helps maintain water temperature for longer durations.' },
      { title: 'Robust Construction', desc: 'Manufactured using premium-quality materials for long operational life and corrosion resistance.' },
      { title: 'Custom Capacity Options', desc: 'Available in capacities ranging from 100 Litres to 10,000+ Litres to meet diverse project requirements.' },
      { title: 'Vertical & Horizontal Configurations', desc: 'Can be supplied in both vertical and horizontal orientations depending on available installation space.' },
      { title: 'Multi-Source Compatibility', desc: 'Compatible with Hot Water Heat Pumps, Solar Water Heating Systems, Boilers, Electric Water Heaters, Steam-Based Heating Systems, and Hybrid Hot Water Systems.' },
    ],

    materials: [
      {
        name: 'Mild Steel (MS) Hot Water Storage Tank',
        desc: 'Mild Steel tanks offer a cost-effective solution for various commercial and industrial hot water applications. These tanks can be manufactured with protective internal coatings and insulation systems for enhanced performance.',
        suitableFor: ['Hotels', 'Factories', 'Commercial Buildings', 'Industrial Facilities'],
      },
      {
        name: 'Stainless Steel 304 (SS304) Hot Water Storage Tank',
        desc: 'SS304 tanks offer excellent corrosion resistance, hygiene, and durability, making them ideal for potable water applications.',
        suitableFor: ['Hotels', 'Resorts', 'Hospitals', 'Residential Villas', 'Commercial Buildings'],
      },
      {
        name: 'Stainless Steel 316 (SS316) Hot Water Storage Tank',
        desc: 'SS316 provides superior resistance to corrosion and chemical exposure, especially in coastal, marine, and industrial environments.',
        suitableFor: ['Pharmaceutical Facilities', 'Food Processing Units', 'Healthcare Facilities', 'Coastal Installations', 'Industrial Applications'],
      },
    ],

    capacities: ['500 - 10,000 Litres and Above', 'Custom capacities can also be designed to meet project-specific requirements.'],

    specs: [
      { param: 'Product Type', value: 'Pressurized Hot Water Storage Tank' },
      { param: 'Capacity Range', value: '100 Litres to 10,000+ Litres' },
      { param: 'Orientation', value: 'Vertical / Horizontal' },
      { param: 'Material Options', value: 'MS, GL, SS304, SS316' },
      { param: 'Insulation', value: 'High-Density Thermal Insulation' },
      { param: 'Operating System', value: 'Pressurized Hot Water Systems' },
      { param: 'Application', value: 'Residential, Commercial, Industrial' },
      { param: 'Compatible Equipment', value: 'Heat Pumps, Boilers, Solar Systems, Electric Water Heaters' },
    ],

    compatibleSystems: [
      'Hot Water Heat Pumps',
      'Solar Water Heating Systems',
      'Boilers',
      'Electric Water Heaters',
      'Steam-Based Heating Systems',
      'Hybrid Hot Water Systems',
    ],

    applications: [
      'Hotels & Resorts',
      'Hospitals & Healthcare',
      'Residential Villas',
      'Commercial Buildings',
      'Industrial Facilities',
    ],

    whyChoose: [
      'Premium-quality manufacturing',
      'High-pressure operation capability',
      'Superior insulation performance',
      'Available in MS, GI/GL, SS304, and SS316 construction',
      'Custom-engineered solutions available',
      'Compatible with all major hot water generation systems',
      'Long operational life',
      'Low maintenance requirements',
      'Suitable for residential, commercial, and industrial projects',
    ],

    industries: [
      'Hotels & Hospitality Projects',
      'Hospitals & Healthcare Facilities',
      'Real Estate Developers',
      'Builders & Contractors',
      'Architects',
      'MEP Consultants',
      'Plumbing Consultants',
      'Industrial Facilities',
      'Facility Management Companies',
    ],

    faqs: [
      {
        q: 'What is the purpose of a pressurized hot water storage tank?',
        a: 'A pressurized hot water storage tank stores heated water under pressure and supplies it on demand, ensuring continuous hot water availability and improved system efficiency.',
      },
      {
        q: 'Can this tank be used with a heat pump?',
        a: 'Yes. Pressurized hot water storage tanks are commonly used with hot water heat pumps to improve performance and ensure adequate hot water storage.',
      },
      {
        q: 'Which material is best for hot water storage tanks?',
        a: 'The ideal material depends on the application. SS304 is commonly preferred for potable water systems, while SS316 is recommended for corrosive or coastal environments.',
      },
      {
        q: 'What capacity tank do I need?',
        a: 'Tank capacity depends on daily hot water consumption, peak demand, occupancy levels, and the heating system being used.',
      },
      {
        q: 'Can custom sizes be manufactured?',
        a: 'Yes. Custom capacities, dimensions, and configurations can be designed according to project requirements.',
      },
    ],

    ctaText: 'Looking for a reliable and energy-efficient Pressurized Hot Water Storage Tank for your project? Our team can help you select the right capacity, material, and configuration based on your hot water demand, application, and budget. Contact us today for technical consultation, sizing assistance, and a customized quotation.',
  },

  // -------------------------------------------------------------------
  {
    id: 'non-pressurized-tank',
    category: 'tanks',
    cardImage: '/p2.png',
    cardBadge: null,
    cardTitle: 'Insulated Water Storage Tank (Non-Pressurized)',
    cardDesc: 'Efficient storage for hot & cold water applications. High-density PUF insulation with SS304/SS316 construction.',
    cardSpecs: [
      { icon: 'droplets', text: '500L – 3000 Litres' },
      { icon: 'shield', text: 'SS304 / SS316' },
    ],

    // --- MODAL CONTENT ---
    modalTitle: 'Insulated Water Storage Tank',
    modalTagline: 'Efficient Storage for Hot & Cold Water Applications',
    modalDescription: `FireSlab Insulated Water Storage Tanks are designed for reliable storage of hot, warm, or cold water while minimizing temperature loss. Manufactured using high-quality stainless steel and insulated with high-density PUF insulation, these tanks provide excellent thermal retention, durability, and long service life.\n\nThe tanks operate under non-pressurized conditions and are suitable for residential, commercial, and institutional water storage applications.`,

    features: [
      { title: 'Non-Pressurized Design', desc: 'Operates under non-pressurized conditions, ideal for gravity-fed and atmospheric water storage systems.' },
      { title: 'SS304 Stainless Steel Construction', desc: 'High-quality SS304 stainless steel provides excellent corrosion resistance, hygiene, and long service life.' },
      { title: 'SS316 Stainless Steel Option Available', desc: 'SS316 option available for enhanced corrosion resistance in demanding environments.' },
      { title: 'High-Density PUF Insulation', desc: 'High-density PUF insulation minimizes temperature loss and maintains water temperature efficiently.' },
      { title: 'Stainless Steel Outer Cladding', desc: 'Durable stainless steel outer cladding protects the insulation layer and enhances the overall appearance.' },
      { title: 'Vertical Cylindrical Configuration', desc: 'Vertical cylindrical design for efficient space utilization and optimal thermal performance.' },
      { title: 'Hygienic Water Storage', desc: 'Stainless steel interior surfaces ensure clean, hygienic water storage.' },
      { title: 'Corrosion Resistant Construction', desc: 'Superior corrosion resistance ensures long operational life even in humid and challenging environments.' },
      { title: 'Low Maintenance', desc: 'Robust construction minimizes routine maintenance requirements and operational costs.' },
      { title: 'Long Service Life', desc: 'Designed for decades of reliable performance under real working conditions.' },
    ],

    materials: null,

    capacities: ['500 Litres - 3000 Litres'],

    specs: [
      { param: 'Product Type', value: 'Non-Pressurized Insulated Water Storage Tank' },
      { param: 'Capacity Range', value: '500 Litres to 3000 Litres' },
      { param: 'Tank Configuration', value: 'Vertical Cylindrical' },
      { param: 'Material Options', value: 'SS304 / SS316' },
      { param: 'Insulation', value: 'High-Density PUF Insulation' },
      { param: 'Outer Cladding', value: 'Stainless Steel' },
      { param: 'Operating System', value: 'Non-Pressurized' },
      { param: 'Application', value: 'Residential, Commercial, Institutional' },
    ],

    compatibleSystems: [
      'Solar Water Heating Systems',
      'Heat Pump Water Heating Systems',
    ],

    applications: [
      'Hotels & Resorts',
      'Hospitals & Healthcare Facilities',
      'Hostels',
      'Apartment Buildings',
      'Villas',
      'Educational Institutions',
      'Commercial Buildings',
      'Solar Water Heating Systems',
      'Heat Pump Water Heating Systems',
    ],

    whyChoose: [
      'Excellent Thermal Insulation',
      'Reduced Heat Loss',
      'Improved Energy Efficiency',
      'Reliable Water Storage',
      'Suitable for Hot & Cold Water',
      'Durable Stainless Steel Construction',
    ],

    industries: [
      'Hotels & Resorts',
      'Hospitals & Healthcare Facilities',
      'Residential Developers',
      'Educational Institutions',
      'Commercial Buildings',
      'Solar EPC Companies',
      'Heat Pump Integrators',
    ],

    faqs: [
      {
        q: 'What is a non-pressurized insulated water storage tank?',
        a: 'A non-pressurized insulated water storage tank is designed to store hot, warm, or cold water at atmospheric pressure while minimizing temperature loss through high-density PUF insulation.',
      },
      {
        q: 'What insulation is used in these tanks?',
        a: 'The tanks are insulated with high-density PUF (Polyurethane Foam) insulation to minimize heat loss and maintain water temperature efficiently.',
      },
      {
        q: 'Can these tanks be used with solar heating systems?',
        a: 'Yes. FireSlab insulated water storage tanks are commonly used with solar water heating systems and heat pump water heating systems.',
      },
      {
        q: 'What material options are available?',
        a: 'The tanks are manufactured using SS304 stainless steel as standard, with SS316 stainless steel available for enhanced corrosion resistance.',
      },
      {
        q: 'What capacities are available?',
        a: 'The tanks are available in capacities ranging from 500 Litres to 3000 Litres.',
      },
    ],

    ctaText: 'FireSlab Insulated Water Storage Tanks are manufactured using quality materials and precision fabrication processes to ensure dependable performance, thermal efficiency, and long-term durability across a wide range of water storage applications. Contact FireSlab for product specifications, pricing, and customized storage solutions.',
  },

  // -------------------------------------------------------------------
  {
    id: 'glass-lined-tank',
    category: 'tanks',
    cardImage: '/p3.png',
    cardBadge: null,
    cardTitle: 'Glass Lined Hot Water Storage Tank',
    cardDesc: 'Reliable, corrosion-resistant & energy-efficient hot water storage with advanced glass enamel internal coating.',
    cardSpecs: [
      { icon: 'shield-check', text: 'Up to 7 Bar Pressure' },
      { icon: 'droplets', text: 'Magnesium Anode Protection' },
    ],

    // --- MODAL CONTENT ---
    modalTitle: 'Glass Lined Hot Water Storage Tank',
    modalTagline: 'Reliable, Corrosion-Resistant & Energy-Efficient Hot Water Storage Solution',
    modalDescription: `A Glass Lined Hot Water Storage Tank is a premium-quality pressurized hot water storage vessel designed for the safe storage and distribution of hot water across residential, commercial, institutional, and industrial applications.\n\nFor enhanced protection, the tank is equipped with a Magnesium Anode Rod, which provides sacrificial corrosion protection and significantly extends the lifespan of the storage tank.`,

    features: [
      { title: 'Advanced Glass Enamel Internal Coating', desc: 'The inner surface is coated with a specially engineered glass enamel layer fused to the steel surface at high temperatures, providing a superior protective barrier.' },
      { title: 'High Corrosion Resistance', desc: 'The glass-lined barrier prevents direct contact between water and the steel tank body, offering superior corrosion resistance even in hard water conditions.' },
      { title: 'Magnesium Anode Rod Protection', desc: 'The Magnesium Anode Rod provides sacrificial protection by attracting corrosive elements before they can affect the tank structure, further enhancing durability.' },
      { title: 'Pressurized Hot Water Storage', desc: 'Designed for pressurized hot water systems, ensuring reliable hot water distribution across the installation.' },
      { title: 'High-Density PUF Thermal Insulation', desc: 'High-density PUF insulation reduces heat loss, helping retain hot water temperatures for longer periods and lowering energy consumption.' },
      { title: 'Excellent Heat Retention Performance', desc: 'Superior insulation combined with glass-lined construction ensures outstanding thermal performance and energy efficiency.' },
      { title: 'Suitable for Continuous Hot Water Demand', desc: 'Engineered for applications requiring consistent, reliable hot water supply.' },
      { title: 'Multiple Inlet & Outlet Connections', desc: 'Multiple connection points allow flexible integration with existing hot water systems.' },
      { title: 'Sensor Pocket Provision Available', desc: 'Provision for temperature sensor pockets for system monitoring and control.' },
      { title: 'Compatible with Safety Valve Installations', desc: 'Designed to accommodate safety valve installations for safe pressurized operation.' },
      { title: 'Low Maintenance Design', desc: 'Combination of enamel coating and magnesium anode protection minimizes maintenance costs and downtime.' },
      { title: 'Long Service Life', desc: 'Compared to conventional steel storage tanks, glass-lined tanks offer significantly longer operational life and improved reliability.' },
    ],

    materials: null,

    capacities: ['500 Litres', 'Custom Capacities Available for Bulk Orders'],

    specs: [
      { param: 'Tank Material', value: 'High-Grade Carbon Steel' },
      { param: 'Internal Protection', value: 'Glass Enamel Lining' },
      { param: 'Coating Technology', value: 'Glass Fused Enamel Coating' },
      { param: 'Corrosion Protection', value: 'Magnesium Anode Rod' },
      { param: 'Insulation', value: 'High Density PUF Insulation' },
      { param: 'Outer Finish', value: 'Powder Coated Metal Cladding' },
      { param: 'Working Pressure', value: 'Up to 7 Bar' },
      { param: 'Application', value: 'Pressurized Hot Water Storage' },
    ],

    compatibleSystems: [
      'Hot Water Heat Pumps',
      'Solar Water Heating Systems',
      'Electric Water Heaters',
      'Boilers',
      'Centralized Hot Water Plants',
      'Hybrid Heating Systems',
      'Commercial Water Heating Solutions',
    ],

    applications: [
      'Hotels & Resorts',
      'Hospitals & Healthcare Facilities',
      'Residential Villas',
      'Commercial Buildings',
      'Industrial Facilities',
      'Hard Water Areas',
    ],

    whyChoose: [
      'Better corrosion protection',
      'Longer operational lifespan',
      'Lower maintenance costs',
      'Improved water quality',
      'Better thermal efficiency',
      'Enhanced reliability',
      'Reduced scale formation',
      'Excellent performance under pressure',
    ],

    industries: [
      'Hotels & Hospitality Projects',
      'Hospitals & Healthcare Facilities',
      'Real Estate Developers',
      'Builders & Contractors',
      'Architects',
      'MEP Consultants',
      'Plumbing Consultants',
      'Industrial Facilities',
      'Facility Management Companies',
      'Solar EPC Companies',
      'Heat Pump Integrators',
      'Government Institutions',
    ],

    faqs: [
      {
        q: 'What is a Glass Lined Hot Water Storage Tank?',
        a: 'A Glass Lined Hot Water Storage Tank is a pressurized storage vessel with a glass enamel-coated interior that protects the steel tank from corrosion and scaling while storing hot water efficiently.',
      },
      {
        q: 'What is the purpose of the Magnesium Anode Rod?',
        a: 'The magnesium anode rod provides sacrificial corrosion protection by attracting corrosive elements, helping extend the life of the storage tank.',
      },
      {
        q: 'Can the tank be used with heat pumps?',
        a: 'Yes. Glass lined storage tanks are widely used with hot water heat pumps and centralized hot water systems.',
      },
      {
        q: 'Is the tank suitable for hard water areas?',
        a: 'Yes. The enamel-coated interior offers excellent resistance to hard water-related corrosion and scale buildup.',
      },
      {
        q: 'What insulation is used in the tank?',
        a: 'The tank is insulated with high-density PUF insulation to minimize heat loss and improve energy efficiency.',
      },
      {
        q: 'What is the maximum working pressure?',
        a: 'Standard models are designed for working pressures up to 7 Bar. Higher pressure versions can be provided on request.',
      },
    ],

    ctaText: 'Looking for a durable, corrosion-resistant, and energy-efficient hot water storage solution? Our Glass Lined Hot Water Storage Tanks are engineered to deliver long-term performance, reliable hot water storage, and superior protection against corrosion in demanding applications. Contact us today for technical consultation, project support, and pricing information.',
  },

  // -------------------------------------------------------------------
  {
    id: 'modular-panel-tank',
    category: 'tanks',
    cardImage: '/panel-tank.png',
    cardBadge: null,
    cardTitle: 'Modular Panel Water Tank',
    cardDesc: 'High-capacity modular water storage solutions for commercial, industrial & infrastructure projects.',
    cardSpecs: [
      { icon: 'layers', text: '1,000L – 250,000+ Litres' },
      { icon: 'grid', text: 'SS304 / SS316 Panels' },
    ],

    // --- MODAL CONTENT ---
    modalTitle: 'Modular Panel Water Tank',
    modalTagline: 'High-Capacity Modular Water Storage Solutions for Commercial, Industrial & Infrastructure Projects',
    modalDescription: `FireSlab's Stainless Steel Modular Panel Water Tanks are engineered for reliable, hygienic, and long-lasting water storage across commercial, industrial, residential, municipal, and fire-fighting applications.\n\nManufactured using high-quality Stainless Steel 304 panels with optional Stainless Steel 316 construction, these tanks are assembled on-site using either bolted or welded construction methods, providing unmatched flexibility in capacity, dimensions, transportation, and installation.\n\nUnlike conventional cylindrical water tanks, modular panel tanks utilize a rectangular design that maximizes storage volume within limited installation spaces, making them ideal for rooftops, basements, utility areas, industrial facilities, and infrastructure projects.\n\nAvailable with optional thermal insulation, our modular panel tanks offer a durable, corrosion-resistant, and maintenance-friendly water storage solution for projects requiring capacities ranging from 1,000 litres to over 250,000 litres.`,

    features: [
      { title: 'Modular Panel Construction', desc: 'The tank consists of prefabricated stainless steel panels that are assembled on-site, allowing flexible sizing and easy expansion when future storage requirements increase.' },
      { title: 'Space-Efficient Rectangular Design', desc: 'The cubic structure maximizes water storage volume while occupying minimum floor space, making it ideal for constrained installation areas.' },
      { title: 'Stainless Steel Construction', desc: 'Manufactured using premium-grade stainless steel for superior corrosion resistance, structural strength, and long operational life.' },
      { title: 'Bolted or Welded Assembly Options', desc: 'Available in both bolted and welded configurations depending on project specifications and site conditions.' },
      { title: 'Optional Thermal Insulation', desc: 'Can be supplied with PUF insulation to minimize temperature fluctuations and improve thermal performance.' },
      { title: 'Easy Transportation & Handling', desc: 'Modular panels can be transported efficiently and assembled directly at the installation site, reducing logistical challenges associated with large conventional tanks.' },
    ],

    materials: [
      {
        name: 'Stainless Steel 304 Panels',
        desc: 'Standard construction using high-grade SS304 stainless steel panels for superior corrosion resistance, structural strength, and long operational life.',
        suitableFor: ['Potable Water Storage', 'Domestic Water Supply', 'Commercial Buildings', 'Hotels & Hospitality', 'Educational Institutions'],
      },
      {
        name: 'Stainless Steel 316 Panels (Optional)',
        desc: 'SS316 panels available for enhanced corrosion resistance in demanding environments such as coastal areas, chemical environments, and pharmaceutical applications.',
        suitableFor: ['Coastal Installations', 'Pharmaceutical Facilities', 'Food Processing Plants', 'Marine Environments', 'Industrial Facilities'],
      },
    ],

    capacities: [
      '1,000 Litres — Residential & Small Commercial',
      '5,000 Litres — Apartments & Institutions',
      '10,000 Litres — Commercial Buildings',
      '20,000 Litres — Hotels & Hospitals',
      '50,000 Litres — Industrial Facilities',
      '100,000+ Litres — Municipal & Infrastructure Projects',
      'Custom Capacities — Project-Specific Requirements',
    ],

    specs: [
      { param: 'Panel Material Options', value: 'Stainless Steel 304 / Stainless Steel 316 (Optional)' },
      { param: 'Assembly Methods', value: 'Bolted Construction / Welded Construction' },
      { param: 'Tank Configuration', value: 'Modular Panel Design, Rectangular Structure, Cubic Water Storage Configuration' },
      { param: 'Insulation Options', value: 'Non-Insulated / PUF Insulated' },
      { param: 'Installation Options', value: 'Indoor / Outdoor / Basement / Rooftop / Utility Area' },
      { param: 'Capacity Range', value: '1,000 Litres to 100,000+ Litres' },
      { param: 'Application', value: 'Commercial, Industrial, Municipal, Infrastructure' },
    ],

    compatibleSystems: null,

    applications: [
      'Potable Water Storage — Safe and hygienic storage of drinking water for residential, commercial, and institutional facilities.',
      'Domestic Water Supply Systems — Reliable water storage for apartments, residential complexes, villas, and housing projects.',
      'Fire Fighting Water Storage — Dedicated fire reserve water tanks for fire protection systems and emergency applications.',
      'Commercial Buildings — Suitable for offices, malls, retail complexes, and mixed-use developments.',
      'Hotels & Hospitality Facilities — Large-capacity water storage solutions for hotels, resorts, and hospitality projects.',
      'Hospitals & Healthcare Facilities — Reliable storage for domestic water supply and critical healthcare operations.',
      'Industrial Process Water Storage — Storage of process water for manufacturing, processing, and industrial operations.',
      'Municipal Water Projects — Water storage infrastructure for public utilities and government projects.',
      'Educational Institutions — Water supply systems for schools, colleges, universities, and campus facilities.',
      'Rainwater Harvesting Systems — Storage and utilization of harvested rainwater for sustainable water management.',
    ],

    whyChoose: [
      'High-quality stainless steel construction',
      'Customized tank sizing and dimensions',
      'Bolted and welded assembly options',
      'Large-capacity storage solutions',
      'Professional engineering support',
      'Fast installation capabilities',
      'Optional insulated configurations',
      'Compliance with commercial and industrial requirements',
      'Suitable for government and infrastructure projects',
      'Long operational life with minimal maintenance',
    ],

    industries: [
      'Infrastructure Developers',
      'EPC Contractors',
      'Fire Fighting Contractors',
      'MEP Consultants',
      'Government Projects',
      'Municipal Authorities',
      'Water Treatment Companies',
      'Manufacturing Industries',
      'Pharmaceutical Facilities',
      'Food Processing Plants',
      'Hotels & Resorts',
      'Hospitals & Healthcare Facilities',
      'Educational Institutions',
      'Commercial Real Estate Developers',
    ],

    faqs: [
      {
        q: 'What is a modular panel water tank?',
        a: 'A modular panel water tank is a water storage system constructed using prefabricated stainless steel panels assembled on-site to create customized storage capacities and dimensions.',
      },
      {
        q: 'What materials are available?',
        a: 'The tanks are available in Stainless Steel 304 as standard, with Stainless Steel 316 available for enhanced corrosion resistance.',
      },
      {
        q: 'What is the difference between bolted and welded tanks?',
        a: 'Bolted tanks use panel connections secured by bolts and gaskets, while welded tanks use welded joints for permanent construction. The selection depends on project requirements and site conditions.',
      },
      {
        q: 'Can the tank be insulated?',
        a: 'Yes. The tank can be supplied with PUF insulation or mineral wool insulation depending on thermal performance requirements.',
      },
      {
        q: 'What capacities are available?',
        a: 'Capacities range from 1,000 litres to over 100,000 litres, with custom-engineered sizes available.',
      },
      {
        q: 'Are these tanks suitable for drinking water?',
        a: 'Yes. Stainless steel modular panel tanks are widely used for potable water storage due to their hygienic and corrosion-resistant properties.',
      },
      {
        q: 'Can the tank be expanded later?',
        a: 'Yes. The modular design allows capacity expansion by incorporating additional panels when required.',
      },
    ],

    ctaText: 'Looking for a reliable and long-lasting Stainless Steel Modular Panel Water Tank for your project? Contact FireSlab today for customized sizing, technical consultation, engineering support, and competitive pricing for commercial, industrial, municipal, and infrastructure applications.',
  },
];
