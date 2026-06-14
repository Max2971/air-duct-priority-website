import ResourceArticlePage, { ResourceArticleData } from './ResourceArticlePage';

const data: ResourceArticleData = {
  title: 'How Often Should a Dryer Vent Be Cleaned?',
  summary: 'Annual dryer vent cleaning is a useful general safety recommendation, but the right interval depends on actual dryer use, household size, pets, vent length, turns, exit location, and how quickly lint returns. Some homes need service more often; others may remain clear longer.',
  updated: 'June 13, 2026',
  readTime: '8 minute read',
  warningTitle: 'Do Not Wait for the Calendar If',
  warnings: ['Drying time becomes longer than normal.', 'The dryer or laundry room becomes unusually hot.', 'Exterior airflow becomes weak or the flap stops opening.', 'An airflow warning, burning smell, or visible lint appears.'],
  table: { headings: ['Household Pattern','Possible Effect','Practical Approach'], rows: [
    ['Frequent laundry or a large household','Lint can accumulate faster','Inspect and clean more often when needed'],
    ['Many pets or heavy-lint fabrics','More hair and fibers may enter the system','Watch airflow and drying time closely'],
    ['Long route, many turns, or roof exit','Airflow may be more sensitive to buildup','Use inspection rather than the calendar alone'],
    ['Light use and an efficient route','Buildup may be slower','Still monitor annually for changes'],
  ]},
  sections: [
    { id:'general-recommendation', title:'The General Recommendation', paragraphs:['The U.S. Fire Administration advises cleaning dryer vent ductwork every year, and NFPA guidance recommends cleaning lint from the vent pipe once a year or more often when clothes take longer than normal to dry.','That annual recommendation is a sensible baseline. It is not proof that every vent is clogged exactly twelve months after service. The condition of the actual system still matters.'] },
    { id:'lifestyle-matters', title:'Why Household Lifestyle Changes the Interval', paragraphs:['A dryer used several times every day handles far more lint and moisture than one used a few times each week. A large household, frequent laundry, pet hair, bedding, towels, and other high-lint loads can all increase demand on the vent.'], bullets:['Number of people using the dryer.','Number of pets and amount of pet hair.','Loads per week and types of fabrics dried.','Whether the lint screen is cleaned every cycle.'] },
    { id:'vent-design-matters', title:'Why the Vent Route Matters Too', paragraphs:['The vent itself also affects how quickly problems appear. Long routes, multiple turns, roof exits, damaged sections, and restrictive exterior covers can reduce airflow or make buildup more consequential.','Cleaning frequency cannot correct a damaged or poorly functioning route. If airflow remains weak after cleaning, the line should be evaluated for another problem.'] },
    { id:'inspection-based-schedule', title:'A Better Maintenance Schedule', paragraphs:['Use annual cleaning as a practical starting point, then adjust based on the home and what is found. A vent that repeatedly accumulates lint quickly may need more frequent attention or a route correction.','Do not wait for a planned service date when warning signs appear. Changes in drying time and airflow are useful signals that the system should be checked sooner.'] },
    { id:'between-services', title:'What to Do Between Services', bullets:['Clean the dryer lint screen before or after every load.','Observe the accessible exterior flap and airflow periodically.','Avoid overloading the dryer and follow manufacturer instructions.','Arrange an inspection when drying performance changes.'] },
  ],
  faqs: [
    ['Do fire safety organizations recommend annual dryer vent cleaning?','Yes. USFA advises cleaning dryer vent ductwork every year, and NFPA recommends once a year or more often when clothes take longer than normal to dry.'],
    ['Can a dryer vent need cleaning more than once a year?','Yes. Heavy dryer use, a large household, pets, route design, and recurring buildup can make more frequent service appropriate.'],
    ['Can I wait two years between cleanings?','Some lightly used systems may remain clear longer, but the decision should be based on airflow, drying performance, route condition, and inspection rather than the calendar alone.'],
    ['Does annual cleaning solve every airflow problem?','No. Damaged duct, poor routing, a blocked exterior termination, or an appliance problem may require a different solution.'],
  ],
  related: [['Dryer Vent Cleaning','/services/dryer-vent-cleaning'],['Signs of a Clogged Dryer Vent','/resources/signs-dryer-vent-clogged'],['Dryer Vent Repair','/services/dryer-vent-repair'],['Free Inspection','/free-inspection']],
};

export default function DryerVentCleaningFrequencyPage(){return <ResourceArticlePage data={data} />}
