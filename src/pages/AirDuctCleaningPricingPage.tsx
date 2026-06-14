import ResourceArticlePage, { ResourceArticleData } from './ResourceArticlePage';

const data: ResourceArticleData = {
  title: 'Why Some Air Duct and Dryer Vent Prices Require an Inspection',
  summary: 'Air duct cleaning and dryer vent installation prices depend on the actual system, accessibility, condition, and whether the requested service is needed at all. Air Duct Priority inspects first, explains the findings, and provides the price before any work begins.',
  updated: 'June 13, 2026',
  readTime: '7 minute read',
  warningTitle: 'Be Careful With a Price That Assumes Every Home Is the Same',
  warnings: ['The quote does not ask about the system or inspect its condition.', 'A low advertised price changes after work begins.', 'Cleaning is recommended without showing why it is needed.', 'The proposal covers only visible registers rather than the actual system.'],
  table: { headings: ['What an Inspection May Find','Honest Recommendation','Pricing Result'], rows: [
    ['The system is already clean','Do not clean it','No unnecessary cleaning charge'],
    ['The system needs full cleaning','Explain the complete cleaning scope','One clear price before work'],
    ['Only a short dryer vent section is damaged','Recommend repair, not full installation','Price the actual repair'],
    ['Access or system design changes the scope','Explain limitations and options','Price only a workable plan'],
  ]},
  sections: [
    { id:'why-no-phone-price', title:'Why a Phone Price Can Be Misleading', paragraphs:['Two homes with the same number of rooms can have completely different duct systems. The number of returns, system layout, access, construction dust, debris level, and physical condition all affect the real scope of air duct cleaning.','Dryer vent installation also cannot be priced responsibly without seeing the route. A customer may expect a complete new line when only a short damaged section needs repair, or the proposed route may require a completely different plan.'] },
    { id:'what-inspection-checks', title:'What We Check Before Recommending Cleaning', bullets:['Whether meaningful debris or contamination is actually present.','The number and accessibility of supply and return sections.','Whether damaged, disconnected, or crushed ductwork affects the system.','Whether the requested work can be completed properly.','Whether cleaning, repair, or no service is the honest recommendation.'] },
    { id:'what-transparent-price-means', title:'What Transparent Pricing Means to Us', paragraphs:['Inspection-based pricing does not mean the customer learns the price after the work. It means the system is inspected first, the recommended scope is explained, and a clear price is provided before work begins.','The customer can then decide with useful information instead of being pressured by a low promotional price that does not match the home.'] },
    { id:'when-cleaning-not-needed', title:'When the Requested Service Is Not Needed', paragraphs:['Air ducts do not need to be cleaned simply because several years have passed. If an inspection shows that the system is clean and there is no specific reason to clean it, we say so.','A dryer vent does not always need complete installation either. If one accessible section can be repaired and the remaining route is suitable, recommending repair is more honest than replacing everything.'] },
    { id:'how-to-prepare', title:'How to Prepare for an Inspection', bullets:['Describe the concern, recent renovation, odor, debris, or airflow issue.','Share any known system access limitations.','Ask what was found and why a specific service is recommended.','Review the proposed scope and price before approving work.'] },
  ],
  faqs: [
    ['Can you give a rough air duct cleaning price by phone?','Air Duct Priority does not quote air duct cleaning by phone because the system must be inspected to determine whether cleaning is needed and what the actual scope includes.'],
    ['Can you quote dryer vent installation by phone?','No. The route, access, existing line, and whether the job is actually installation or a smaller repair must be inspected first.'],
    ['Is the inspection free?','Air Duct Priority offers a free in-person inspection when appropriate and explains the recommendation before work begins.'],
    ['What if my air ducts are already clean?','If the inspection shows that cleaning is not needed, Air Duct Priority says so rather than recommending unnecessary work.'],
    ['Will I know the price before work starts?','Yes. After the inspection and scope explanation, the price is provided before work begins.'],
  ],
  related: [['Air Duct Cleaning','/services/air-duct-cleaning'],['Dryer Vent Installation','/services/dryer-vent-installation'],['Dryer Vent Repair','/services/dryer-vent-repair'],['Free Inspection','/free-inspection']],
};

export default function AirDuctCleaningPricingPage(){return <ResourceArticlePage data={data} />}
