import ResourceArticlePage, { ResourceArticleData } from './ResourceArticlePage';

const data: ResourceArticleData = {
  title: 'Signs Your Dryer Vent May Be Clogged',
  summary: 'Common signs include longer drying times, a hot dryer, weak exterior airflow, lint near the outside vent, airflow error codes, and unusual burning smells. A proper inspection should also check for damaged routing, bird nests, and exterior termination problems.',
  updated: 'June 13, 2026',
  readTime: '8 minute read',
  warningTitle: 'Stop Using the Dryer and Investigate Promptly If',
  warnings: ['You notice a burning smell or visible smoke.', 'The dryer or laundry room becomes unusually hot.', 'The exterior vent has no airflow while the dryer is running.', 'The dryer repeatedly displays an airflow warning or shuts down.'],
  table: { headings: ['Warning Sign','Possible Cause','Useful Next Step'], rows: [
    ['Two drying cycles','Lint restriction, long route, or weak dryer performance','Inspect the complete vent route and exterior airflow'],
    ['Dryer gets unusually hot','Restricted exhaust airflow','Stop use if severe and arrange an inspection'],
    ['Weak outdoor airflow','Blockage, nest, damaged line, or stuck cover','Inspect the exterior termination and accessible route'],
    ['Airflow error remains after cleaning','Physical vent problem or appliance issue','Diagnose the route and dryer separately'],
  ]},
  sections: [
    { id:'why-it-matters', title:'Why a Restricted Dryer Vent Matters', paragraphs:['A dryer must move warm, moist exhaust air through the vent and safely outdoors. When lint, debris, nesting material, a damaged connection, or a poor route restricts that movement, the dryer may take longer to work and retain more heat.','A clogged vent is not the only possible cause of slow drying. The appliance, exterior cover, route length, number of turns, and physical condition of the line can all affect airflow. That is why diagnosis should come before assuming cleaning is the only answer.'] },
    { id:'warning-signs', title:'Common Warning Signs', bullets:['Clothes need a second cycle even after the lint screen is cleaned.','The dryer cabinet or laundry room feels hotter than normal.','Airflow at the exterior vent is weak, intermittent, or absent.','Lint collects around the outside vent opening.','The exterior flap does not open freely while the dryer runs.','A dryer airflow warning or error code appears repeatedly.','A musty or unusual burning smell appears during operation.','Drying performance changes suddenly without a change in laundry habits.'] },
    { id:'safe-checks', title:'What Homeowners Can Check Safely', paragraphs:['Clean the appliance lint screen and observe whether the problem continues. While the dryer is running, visually check whether the correct exterior flap opens and whether air is moving outside. Do not reach into an operating vent or climb onto a roof to perform this check.','Look behind the dryer for an obviously crushed or sharply bent connection, but avoid moving the appliance if doing so could damage the gas line, power connection, or vent.'], bullets:['Confirm the lint screen is clean.','Observe the exterior termination from a safe location.','Note recent changes in drying time or error codes.','Stop if you notice severe heat, smoke, or a burning smell.'] },
    { id:'cleaning-not-enough', title:'Why Cleaning May Not Solve Every Airflow Problem', paragraphs:['Cleaning can remove lint and accessible debris, but it cannot repair a crushed connection, reconnect a separated line, shorten a poor route, replace an unsuitable exterior cover, or correct an internal dryer problem.','If airflow remains poor after cleaning, the next step should be diagnosis rather than repeating the same service.'] },
    { id:'professional-inspection', title:'What a Professional Inspection Should Check', bullets:['The connection behind the dryer and accessible vent sections.','The route length, turns, and exit location.','The exterior termination, flap, cover, and possible nesting material.','Airflow before and after any service.','Whether the problem appears to be inside the appliance rather than the vent.'] },
  ],
  faqs: [
    ['How often should a dryer vent be cleaned?','The right interval depends on vent length, route, dryer use, household size, and prior buildup. Inspection is more reliable than assuming one interval fits every home.'],
    ['Can a dryer vent be clogged even if the lint screen is clean?','Yes. The lint screen does not capture every fiber, and restrictions can also come from nesting material, damaged duct, a stuck cover, or a poor route.'],
    ['Why is the dryer still slow after vent cleaning?','The vent may have physical damage, an inefficient route, a blocked termination, or the dryer itself may need appliance service.'],
    ['Can I check airflow outside myself?','You can observe an accessible exterior vent from a safe location while the dryer runs. Avoid roofs, moving parts, and reaching inside an operating vent.'],
  ],
  related: [['Dryer Vent Cleaning','/services/dryer-vent-cleaning'],['Dryer Vent Repair','/services/dryer-vent-repair'],['Dryer Vent Rerouting','/services/dryer-vent-rerouting'],['Free Inspection','/free-inspection']],
};

export default function SignsDryerVentCloggedPage(){return <ResourceArticlePage data={data} />}
