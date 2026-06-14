import ResourceArticlePage, { ResourceArticleData } from './ResourceArticlePage';

const data: ResourceArticleData = {
  title: 'Dryer Vent Cleaning, Repair, or Replacement: What Is Actually Needed?',
  summary: 'Cleaning removes lint and accessible debris. Repair corrects localized physical damage. Replacement or rerouting is appropriate when the existing material or route cannot provide reliable airflow. The right choice depends on inspection, not a generic service package.',
  updated: 'June 13, 2026',
  readTime: '9 minute read',
  warningTitle: 'Cleaning Alone Cannot Correct',
  warnings: ['A crushed or disconnected vent section.', 'A vent that exhausts indoors or into an attic.', 'A fundamentally long or inefficient route.', 'An unsuitable exterior termination or failed vent material.'],
  table: { headings: ['Service','Usually Solves','Does Not Solve'], rows: [
    ['Cleaning','Lint and accessible debris inside an intact route','Crushed, disconnected, or poorly routed vent sections'],
    ['Repair','Localized damage, leaks, loose connections, and failed covers','A route that is fundamentally unsuitable'],
    ['Replacement','Failed, damaged, or unsuitable vent material','Internal appliance problems'],
    ['Rerouting','Long, inefficient, inaccessible, or recurring-problem routes','Dryer faults unrelated to the exhaust route'],
  ]},
  sections: [
    { id:'difference', title:'The Difference in One Minute', paragraphs:['The four services solve different problems. Cleaning addresses material inside an otherwise usable vent. Repair addresses a specific physical defect. Replacement installs a new line where the old material has failed. Rerouting changes the path when the existing route itself causes recurring problems.','A useful recommendation starts by identifying the cause of restricted airflow instead of selling the same service to every homeowner.'] },
    { id:'when-cleaning', title:'When Dryer Vent Cleaning Is Appropriate', paragraphs:['Cleaning is appropriate when the vent route is intact but lint or accessible debris restricts airflow. Signs can include longer drying times, weak exterior airflow, or visible lint near the termination.','After cleaning, airflow should be checked. If the result remains poor, a physical vent or appliance problem may still be present.'], bullets:['The vent line is intact and connected.','Lint or debris is the primary restriction.','The exterior termination opens correctly.','Airflow improves after material is removed.'] },
    { id:'when-repair', title:'When Repair Is the Better Answer', paragraphs:['Repair is useful when most of the vent route is serviceable but one or more sections are damaged, loose, leaking, crushed, or disconnected. The affected section can often be corrected without replacing the entire route.'], bullets:['Disconnected attic or wall connection.','Crushed transition behind the dryer.','Loose joint or leaking section.','Damaged exterior cover or termination.'] },
    { id:'replacement-rerouting', title:'When Replacement or Rerouting Makes Sense', paragraphs:['Replacement may be the practical choice when the line is extensively damaged, unsuitable, contaminated, or impossible to repair reliably. Rerouting may be better when the route is excessively long, difficult to maintain, or repeatedly restricts airflow.','A new route should be planned around airflow, accessibility, durable materials, secure connections, and a suitable exterior termination.'] },
    { id:'inspection', title:'How an Inspection Determines the Right Service', bullets:['Identify the dryer location and exterior exit.','Inspect accessible connections and materials.','Evaluate route length, turns, and termination condition.','Check for lint, debris, nesting material, and physical damage.','Explain the recommended scope and price before work begins.'] },
  ],
  faqs: [
    ['Can a dryer vent be repaired instead of replaced?','Often, yes. A localized damaged or disconnected section may be repairable when the remaining route is suitable and accessible.'],
    ['Does a long dryer vent always need rerouting?','Not always. The route, turns, airflow, condition, and available alternatives should be evaluated before recommending rerouting.'],
    ['What material is appropriate for a dryer vent?','The permanent exhaust route should use suitable smooth metal duct. A listed flexible metal transition may be used only for the accessible connection between the dryer and the main line.'],
    ['What if the dryer still shows an error after vent work?','The appliance itself may need service, or another route or termination problem may remain. The cause should be diagnosed rather than assuming more cleaning is needed.'],
  ],
  related: [['Dryer Vent Cleaning','/services/dryer-vent-cleaning'],['Dryer Vent Repair','/services/dryer-vent-repair'],['Dryer Vent Installation','/services/dryer-vent-installation'],['Dryer Vent Rerouting','/services/dryer-vent-rerouting']],
};

export default function DryerVentServiceChoicePage(){return <ResourceArticlePage data={data} />}
