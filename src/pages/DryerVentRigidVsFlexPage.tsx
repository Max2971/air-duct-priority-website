import ResourceArticlePage, { ResourceArticleData } from './ResourceArticlePage';

const data: ResourceArticleData = {
  title: 'Rigid Metal vs. Flexible Dryer Vent: Where Each Belongs',
  summary: 'The permanent dryer exhaust route should use smooth metal duct. A listed flexible metal transition duct may connect the dryer to that main line, but it should remain visible and as short as practical. Air Duct Priority generally limits that connection to about three feet when the layout allows.',
  updated: 'June 13, 2026',
  readTime: '8 minute read',
  warningTitle: 'A Flexible Transition Is Not the Main Vent Line',
  warnings: ['It should not run through a wall, ceiling, floor, attic, or other concealed space.', 'Plastic or vinyl material is not an appropriate dryer exhaust connection.', 'A crushed or sharply bent connection can restrict airflow.', 'A long flexible run should not substitute for a properly planned metal exhaust route.'],
  table: { headings: ['Material or Section','Appropriate Role','Key Point'], rows: [
    ['Smooth rigid metal duct','Permanent exhaust route','Used for the main line to the exterior'],
    ['Listed flexible metal transition duct','Visible connection behind the dryer','Keep it short, accessible, and not concealed'],
    ['Plastic or vinyl hose','Not appropriate for dryer exhaust','Replace with suitable listed metal material'],
    ['Damaged short connection','Often a repair, not full installation','Inspect the remaining route before replacing everything'],
  ]},
  sections: [
    { id:'two-different-jobs', title:'Rigid Duct and Flexible Transition Have Different Jobs', paragraphs:['The main dryer exhaust route carries air from the laundry area to the exterior of the home. It should use smooth metal duct suitable for the permanent line.','The short connection between the dryer and the main exhaust is called a transition duct. A listed flexible metal transition can allow the appliance to connect and move for service, but it is not intended to become the full vent route.'] },
    { id:'our-three-foot-practice', title:'Why We Keep the Flexible Connection Short', paragraphs:['Air Duct Priority generally limits the visible flexible transition behind the dryer to about three feet when the layout allows. This is our practical standard for reducing unnecessary bends and keeping the connection easy to inspect.','The applicable IRC provision permits a listed and labeled transition duct up to eight feet and prohibits concealing it within construction. Local requirements and dryer manufacturer instructions can also apply.'] },
    { id:'pennsylvania-code-context', title:'Pennsylvania Code Context Without the Installation Manual', paragraphs:['Pennsylvania uses the Uniform Construction Code, which incorporates adopted International Residential Code provisions. The dryer exhaust provisions distinguish the permanent smooth metal exhaust duct from the listed transition connection at the appliance.','This guide is not a substitute for a site-specific code review. The important homeowner takeaway is simple: flexible transition belongs at the accessible dryer connection, not throughout the hidden route.'] },
    { id:'repair-or-installation', title:'A Small Damaged Section May Only Need Repair', paragraphs:['A customer may reasonably believe the entire dryer vent needs replacement when the visible connection is crushed or damaged. If the permanent route is suitable and working, replacing that short section may be a repair rather than a full installation.','The opposite can also happen: a new transition connection will not solve a damaged, unsuitable, or poorly routed main line. Inspection separates those two situations.'] },
    { id:'what-homeowners-can-see', title:'What Homeowners Can Notice Safely', bullets:['A visible connection that is crushed, torn, disconnected, or sharply bent.','Plastic or vinyl hose used behind the dryer.','An unusually long flexible connection disappearing into construction.','Poor airflow or repeated drying problems after the visible connection is corrected.'] },
  ],
  faqs: [
    ['Can flexible duct be used for the entire dryer vent line?','No. Flexible transition duct is intended for the visible appliance connection, while the permanent exhaust route should use suitable smooth metal duct.'],
    ['Why does Air Duct Priority use about a three-foot transition?','Keeping the flexible connection short reduces unnecessary bends and keeps it accessible. It is a practical company standard when the layout allows.'],
    ['Does code allow more than three feet?','The applicable IRC provision permits a listed and labeled transition duct up to eight feet, but it must not be concealed. Local requirements and manufacturer instructions may also apply.'],
    ['Does a damaged flexible connection mean I need a full installation?','Not necessarily. If the main line is suitable, replacing a short damaged connection may only require repair.'],
  ],
  related: [['Dryer Vent Installation','/services/dryer-vent-installation'],['Dryer Vent Repair','/services/dryer-vent-repair'],['Cleaning, Repair, or Replacement','/resources/dryer-vent-cleaning-repair-or-replacement'],['Free Inspection','/free-inspection']],
};

export default function DryerVentRigidVsFlexPage(){return <ResourceArticlePage data={data} />}
