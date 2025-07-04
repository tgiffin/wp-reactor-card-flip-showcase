
// Use Cases Data
const useCases = [
    {
        id: '1',
        industry: 'Retail',
        title: 'SKU Performance Snapshot',
        whyItMatters: 'Identify top/bottom sellers by store to improve merchandising decisions',
        dataSources: ['POS', 'eComm', 'WMS'],
        entitiesTables: ['sales_transactions', 'product_catalog', 'store_locations'],
        sampleFields: ['sku_id', 'revenue', 'quantity', 'store_id', 'timestamp'],
        reactorRole: 'Ingest and standardize SKU & sales data across systems; unify for SKU-level insights',
        gradientClass: 'gradient-1'
    },
    {
        id: '2',
        industry: 'Retail',
        title: 'In-store vs Online Sales Comparison',
        whyItMatters: 'Evaluate contribution and margin by sales channel',
        dataSources: ['POS', 'eComm'],
        entitiesTables: ['sales_transactions'],
        sampleFields: ['channel', 'sku_id', 'revenue'],
        reactorRole: 'Join POS and online transactions with channel metadata',
        gradientClass: 'gradient-2'
    },
    {
        id: '3',
        industry: 'Retail',
        title: 'Inventory Sync Check',
        whyItMatters: 'Detect inventory mismatches to avoid fulfillment errors',
        dataSources: ['ERP', 'WMS'],
        entitiesTables: ['inventory_snapshots', 'stock_transfers'],
        sampleFields: ['sku_id', 'location_id', 'quantity_on_hand'],
        reactorRole: 'Detect deltas between systems for alerts/QA',
        gradientClass: 'gradient-3'
    },
    {
        id: '4',
        industry: 'Retail',
        title: 'Google Sheets as Control Source',
        whyItMatters: 'Allow non-tech users to override pricing/inventory logic',
        dataSources: ['Google Sheets'],
        entitiesTables: ['manager_overrides'],
        sampleFields: ['sku_id', 'override_price', 'notes'],
        reactorRole: 'Merge override sheet with pricing engine pipeline',
        gradientClass: 'gradient-4'
    },
    {
        id: '5',
        industry: 'Retail',
        title: 'Loyalty Enrollment Funnel',
        whyItMatters: 'Understand drop-off in loyalty signups across platforms',
        dataSources: ['CRM', 'Website', 'ESP'],
        entitiesTables: ['signups', 'campaigns', 'customer_profiles'],
        sampleFields: ['customer_id', 'source', 'timestamp'],
        reactorRole: 'Join signup, campaign, and profile to track funnel stages',
        gradientClass: 'gradient-5'
    },
    {
        id: '6',
        industry: 'Retail',
        title: 'Unified SKU Catalog for ML Models',
        whyItMatters: 'Power recommendations & dynamic pricing with clean product data',
        dataSources: ['PIM', 'ERP', 'eComm'],
        entitiesTables: ['product_catalog'],
        sampleFields: ['sku_id', 'attributes', 'availability'],
        reactorRole: 'Cleanse, unify, and validate catalog data for ML readiness',
        gradientClass: 'gradient-1'
    },
    {
        id: '7',
        industry: 'Retail',
        title: 'Real-Time Inventory Feeds',
        whyItMatters: 'Enable real-time stock visibility across channels',
        dataSources: ['WMS', 'RFID', 'POS'],
        entitiesTables: ['inventory_events'],
        sampleFields: ['sku_id', 'delta_qty', 'timestamp'],
        reactorRole: 'Stream deltas via Kafka, push to fulfillment APIs',
        gradientClass: 'gradient-2'
    },
    {
        id: '8',
        industry: 'Retail',
        title: 'Campaign Attribution to SKU Sales',
        whyItMatters: 'Tie ad spend to sales outcomes by product',
        dataSources: ['Meta', 'Google', 'eComm'],
        entitiesTables: ['campaign_clicks', 'sessions', 'orders'],
        sampleFields: ['click_id', 'session_id', 'sku_id'],
        reactorRole: 'Link touchpoints to transactions through identity joins',
        gradientClass: 'gradient-3'
    },
    {
        id: '9',
        industry: 'Retail',
        title: 'Geo-privacy Enforcement',
        whyItMatters: 'Comply with GDPR/CCPA by routing or masking PII',
        dataSources: ['CRM', 'Orders', 'Support'],
        entitiesTables: ['customer_profiles', 'support_cases'],
        sampleFields: ['region', 'consent_flag', 'pii_fields'],
        reactorRole: 'Apply region-aware transformations or redactions',
        gradientClass: 'gradient-4'
    },
    {
        id: '10',
        industry: 'Retail',
        title: 'Product Return Analysis',
        whyItMatters: 'Uncover costly return patterns to improve CX & margins',
        dataSources: ['Returns portal', 'OMS', 'CRM'],
        entitiesTables: ['returns', 'orders', 'support_tickets'],
        sampleFields: ['sku_id', 'return_reason', 'region'],
        reactorRole: 'Correlate returns to operational metadata',
        gradientClass: 'gradient-5'
    },
    {
        id: '11',
        industry: 'Travel & Hospitality',
        title: 'Booking Funnel Analysis',
        whyItMatters: 'Reduce booking drop-off by analyzing funnel step exits',
        dataSources: ['Web events', 'Booking system'],
        entitiesTables: ['booking_events', 'user_sessions'],
        sampleFields: ['step_id', 'timestamp', 'user_id'],
        reactorRole: 'Join step and session logs to build conversion funnel',
        gradientClass: 'gradient-2'
    },
    {
        id: '12',
        industry: 'Travel & Hospitality',
        title: 'Multi-brand Guest Identity Merge',
        whyItMatters: 'Resolve guest identities across brand portfolios for unified CRM insights',
        dataSources: ['Booking', 'Loyalty', 'CDP'],
        entitiesTables: ['guest_profiles', 'loyalty_accounts', 'booking_history'],
        sampleFields: ['guest_id', 'loyalty_id', 'email'],
        reactorRole: 'Stitch identities using deterministic and fuzzy logic',
        gradientClass: 'gradient-1'
    },
    {
        id: '13',
        industry: 'Travel & Hospitality',
        title: 'Property Performance Dashboard',
        whyItMatters: 'Provide management with key daily KPIs across a sample of properties',
        dataSources: ['PMS', 'housekeeping', 'ops'],
        entitiesTables: ['property_kpis', 'room_status', 'revenue_data'],
        sampleFields: ['property_id', 'RevPAR', 'ADR'],
        reactorRole: 'Aggregate and align daily feeds for exec dashboards',
        gradientClass: 'gradient-4'
    },
    {
        id: '14',
        industry: 'Travel & Hospitality',
        title: 'Email Campaign Engagement',
        whyItMatters: 'Evaluate email effectiveness in driving bookings or upgrades',
        dataSources: ['ESP', 'CRM', 'Booking'],
        entitiesTables: ['campaign_stats', 'email_opens', 'bookings'],
        sampleFields: ['campaign_id', 'open_rate', 'conversion'],
        reactorRole: 'Join email metadata with bookings for performance',
        gradientClass: 'gradient-2'
    },
    {
        id: '15',
        industry: 'Travel & Hospitality',
        title: 'VIP Guest Flagging',
        whyItMatters: 'Identify high-value guests based on behavior for personalization pilots',
        dataSources: ['CDP', 'PMS', 'Booking'],
        entitiesTables: ['guest_scores', 'stay_history'],
        sampleFields: ['guest_id', 'stay_count', 'total_spend'],
        reactorRole: 'Tag and segment guests with enriched profile data',
        gradientClass: 'gradient-3'
    },
    {
        id: '16',
        industry: 'Travel & Hospitality',
        title: 'Unified Guest Profile',
        whyItMatters: 'Enable 1:1 personalization by combining touchpoints into a single profile',
        dataSources: ['CDP', 'CRM', 'PMS', 'Loyalty'],
        entitiesTables: ['unified_guest', 'touchpoints', 'preferences'],
        sampleFields: ['guest_id', 'preferences', 'total_spend'],
        reactorRole: 'Merge guest IDs across systems to central profile',
        gradientClass: 'gradient-5'
    },
    {
        id: '17',
        industry: 'Travel & Hospitality',
        title: 'Property Benchmarking',
        whyItMatters: 'Compare performance KPIs regionally for exec dashboards',
        dataSources: ['PMS', 'Ops'],
        entitiesTables: ['property_metrics', 'benchmark_rules'],
        sampleFields: ['occupancy', 'net_margin', 'score'],
        reactorRole: 'Normalize KPIs and apply region/format segmentation',
        gradientClass: 'gradient-1'
    },
    {
        id: '18',
        industry: 'Travel & Hospitality',
        title: 'Offer Personalization Engine',
        whyItMatters: 'Deliver targeted offers based on guest behavior and preferences',
        dataSources: ['Booking', 'Email', 'Loyalty'],
        entitiesTables: ['guest_segments', 'offers', 'clickthroughs'],
        sampleFields: ['guest_id', 'segment_id', 'conversion'],
        reactorRole: 'Feed CDP or RT-CDP with behavior-enriched segments',
        gradientClass: 'gradient-4'
    },
    {
        id: '19',
        industry: 'Travel & Hospitality',
        title: 'GDPR and Consent Routing',
        whyItMatters: 'Ensure compliance by only processing data users have opted into',
        dataSources: ['Consent platform', 'CRM'],
        entitiesTables: ['consent_flags', 'guest_data'],
        sampleFields: ['guest_id', 'consent_flag'],
        reactorRole: 'Route and mask PII based on consent and region',
        gradientClass: 'gradient-2'
    },
    {
        id: '20',
        industry: 'Consumer Products',
        title: 'Appliance Sensor Event Stream',
        whyItMatters: 'Detect performance issues or safety risks by analyzing real-time telemetry',
        dataSources: ['IoT', 'Firmware logs'],
        entitiesTables: ['sensor_readings', 'device_registry'],
        sampleFields: ['device_id', 'temp', 'error_code'],
        reactorRole: 'Ingest telemetry and normalize into structured events',
        gradientClass: 'gradient-2'
    },
    {
        id: '21',
        industry: 'Consumer Products',
        title: 'Product Registration Funnel',
        whyItMatters: 'Analyze drop-off and channel mix in product registrations',
        dataSources: ['CRM', 'Web/App forms'],
        entitiesTables: ['registrations', 'device_metadata'],
        sampleFields: ['product_id', 'registration_channel'],
        reactorRole: 'Unify multiple registration channels',
        gradientClass: 'gradient-3'
    },
    {
        id: '22',
        industry: 'Consumer Products',
        title: 'Field Issue Pattern Detection',
        whyItMatters: 'Predict common defects using warranty and repair data',
        dataSources: ['Warranty', 'Repair', 'Telemetry'],
        entitiesTables: ['repairs', 'warranty_claims'],
        sampleFields: ['device_model', 'issue_code'],
        reactorRole: 'Correlate issues with usage data for QA & CX teams',
        gradientClass: 'gradient-4'
    },
    {
        id: '23',
        industry: 'Consumer Products',
        title: 'Geo-Specific Compliance Routing',
        whyItMatters: 'Ensure data handling is compliant by region (e.g., GDPR, RoHS)',
        dataSources: ['CRM', 'Usage logs'],
        entitiesTables: ['user_metadata', 'geo_compliance_flags'],
        sampleFields: ['region', 'data_type'],
        reactorRole: 'Route & mask data based on region',
        gradientClass: 'gradient-1'
    },
    {
        id: '24',
        industry: 'Healthcare',
        title: 'Patient Appointment No-show Prediction',
        whyItMatters: 'Improve scheduling efficiency and reduce revenue loss from missed visits',
        dataSources: ['EHR', 'Scheduling', 'CRM'],
        entitiesTables: ['appointments', 'patients', 'history'],
        sampleFields: ['patient_id', 'appointment_time', 'past_no_shows'],
        reactorRole: 'Aggregate and feature engineer inputs for ML models',
        gradientClass: 'gradient-2'
    },
    {
        id: '25',
        industry: 'Healthcare',
        title: 'Clinical Trial Eligibility Matcher',
        whyItMatters: 'Speed up patient recruitment by matching records to trial criteria',
        dataSources: ['EHR', 'Trial eligibility DB'],
        entitiesTables: ['patient_conditions', 'medications', 'trial_rules'],
        sampleFields: ['patient_id', 'ICD_code', 'criteria_met'],
        reactorRole: 'Join and filter records based on multi-variable rulesets',
        gradientClass: 'gradient-3'
    },
    {
        id: '26',
        industry: 'Healthcare',
        title: 'Longitudinal Patient Record Consolidation',
        whyItMatters: 'Create a full history for patients across visits, systems, and labs',
        dataSources: ['EHR', 'Labs', 'Imaging systems'],
        entitiesTables: ['encounters', 'lab_results', 'conditions'],
        sampleFields: ['patient_id', 'encounter_id', 'diagnosis'],
        reactorRole: 'Consolidate timeline into a unified patient view for clinical ops',
        gradientClass: 'gradient-1'
    },
    {
        id: '27',
        industry: 'Healthcare',
        title: 'HIPAA-Compliant Data Sharing Layer',
        whyItMatters: 'Enable downstream use of health data for research or analytics with full auditability',
        dataSources: ['EHR', 'Access logs', 'Masking tools'],
        entitiesTables: ['shared_views', 'access_audit', 'deid_mappings'],
        sampleFields: ['user_id', 'access_time', 'table_accessed'],
        reactorRole: 'Apply masking, logging, and routing for safe data usage',
        gradientClass: 'gradient-4'
    },
    {
        id: '28',
        industry: 'Elder Care',
        title: 'Fall Risk Indicator Dashboard',
        whyItMatters: 'Track resident risk using movement patterns and incident logs',
        dataSources: ['IoT sensors', 'Nurse logs', 'EHR-lite'],
        entitiesTables: ['movement_events', 'incidents', 'resident_profiles'],
        sampleFields: ['resident_id', 'gait_speed', 'falls_last_30d'],
        reactorRole: 'Analyze patterns with streaming and batch feeds',
        gradientClass: 'gradient-3'
    },
    {
        id: '29',
        industry: 'Elder Care',
        title: 'Family Care Portal Data Feeds',
        whyItMatters: 'Power family-facing portals with structured updates and alerts',
        dataSources: ['Daily logs', 'Activities', 'Alerts'],
        entitiesTables: ['daily_notes', 'event_feeds', 'medical_alerts'],
        sampleFields: ['resident_id', 'mood_score', 'health_alert'],
        reactorRole: 'Aggregate and expose trusted, limited-access records',
        gradientClass: 'gradient-2'
    },
    {
        id: '30',
        industry: 'Automotive',
        title: 'Test Drive Lead Conversion Funnel',
        whyItMatters: 'Assess drop-off between test drives and dealer conversions',
        dataSources: ['Dealer CRM', 'Marketing platform'],
        entitiesTables: ['leads', 'test_drives', 'sales'],
        sampleFields: ['lead_id', 'dealer_id', 'status'],
        reactorRole: 'Build funnel analytics from multiple siloed systems',
        gradientClass: 'gradient-1'
    },
    {
        id: '31',
        industry: 'Automotive',
        title: 'Connected Vehicle Telemetry Analysis',
        whyItMatters: 'Monitor fleet health, usage patterns, and over-the-air issues',
        dataSources: ['Telematics', 'Vehicle ECU', 'Dealer repair logs'],
        entitiesTables: ['telemetry_events', 'vehicle_registry', 'repair_visits'],
        sampleFields: ['vin', 'mileage', 'event_code', 'region'],
        reactorRole: 'Stream, enrich, and route vehicle data for analysis and OTA updates',
        gradientClass: 'gradient-2'
    },
    {
        id: '32',
        industry: 'Media & Entertainment',
        title: 'Content Engagement Stream',
        whyItMatters: 'Evaluate which shows are getting most views, completions, or skips',
        dataSources: ['Roku', 'FireTV', 'Web App', 'CDN logs'],
        entitiesTables: ['engagement_logs', 'media_assets'],
        sampleFields: ['asset_id', 'duration_watched', 'event_type'],
        reactorRole: 'Ingest JSON logs, normalize into engagement tables for view metrics',
        gradientClass: 'gradient-4'
    },
    {
        id: '33',
        industry: 'Media & Entertainment',
        title: 'Ad Impression Analysis',
        whyItMatters: 'Understand reach and CPM across partners and platforms',
        dataSources: ['Ad servers', 'DSPs', 'Partner logs'],
        entitiesTables: ['ad_impressions', 'platform_metrics'],
        sampleFields: ['campaign_id', 'impressions', 'revenue'],
        reactorRole: 'Unify and cleanse campaign metrics for performance tracking',
        gradientClass: 'gradient-2'
    },
    {
        id: '34',
        industry: 'Media & Entertainment',
        title: 'Subscriber Churn Model',
        whyItMatters: 'Prepare churn signals for initial modeling of at-risk subscribers',
        dataSources: ['Billing', 'Usage', 'Support'],
        entitiesTables: ['account_usage', 'support_interactions', 'billing_status'],
        sampleFields: ['user_id', 'login_count', 'cancel_reason'],
        reactorRole: 'Extract features and timestamp changes to train churn prediction models',
        gradientClass: 'gradient-1'
    },
    {
        id: '35',
        industry: 'Media & Entertainment',
        title: 'Unified Content Analytics Hub',
        whyItMatters: 'Create central view of content engagement by region, platform, and demo',
        dataSources: ['App logs', 'Platform APIs', 'CMS'],
        entitiesTables: ['content_metrics', 'user_engagement', 'device_data'],
        sampleFields: ['asset_id', 'region', 'watch_time'],
        reactorRole: 'Aggregate content metrics for executive and programming teams',
        gradientClass: 'gradient-2'
    },
    {
        id: '36',
        industry: 'Media & Entertainment',
        title: 'Advanced Recommendation Inputs',
        whyItMatters: 'Provide enriched behavioral data to recommendation engines',
        dataSources: ['Engagement logs', 'Demographics', 'Ratings'],
        entitiesTables: ['viewer_history', 'viewer_profile'],
        sampleFields: ['user_id', 'genres_watched', 'avg_rating'],
        reactorRole: 'Feed ML models with structured usage & profile data',
        gradientClass: 'gradient-5'
    },
    {
        id: '37',
        industry: 'Media & Entertainment',
        title: 'Complex Royalty Calculation',
        whyItMatters: 'Automate content creator payouts based on engagement and contracts',
        dataSources: ['Plays', 'Contracts', 'Revenue splits'],
        entitiesTables: ['royalty_contracts', 'content_views', 'revenue_shares'],
        sampleFields: ['creator_id', 'asset_id', 'revenue_amount'],
        reactorRole: 'Join revenue and view data to power financial contract engines',
        gradientClass: 'gradient-1'
    },
    {
        id: '38',
        industry: 'Retail Financial Services',
        title: 'Customer Touchpoint Timeline',
        whyItMatters: 'Build a full timeline of a user\'s app, call, and transaction activity',
        dataSources: ['Call center logs', 'App usage', 'CRM'],
        entitiesTables: ['interactions', 'app_sessions', 'transactions'],
        sampleFields: ['customer_id', 'timestamp', 'channel'],
        reactorRole: 'Unify event streams into chronological customer journeys',
        gradientClass: 'gradient-5'
    },
    {
        id: '39',
        industry: 'Retail Financial Services',
        title: 'Product Upsell Funnel',
        whyItMatters: 'Track conversion from cross-sell campaigns to application started',
        dataSources: ['Campaign system', 'CRM', 'Application portal'],
        entitiesTables: ['upsell_offers', 'applications', 'campaigns'],
        sampleFields: ['offer_id', 'user_id', 'funnel_step'],
        reactorRole: 'Attribute each campaign to customer engagement steps',
        gradientClass: 'gradient-3'
    },
    {
        id: '40',
        industry: 'Retail Financial Services',
        title: '360° Financial Profile',
        whyItMatters: 'Unify customer data across loans, cards, and investments for service reps',
        dataSources: ['Loan systems', 'Banking core', 'CRM'],
        entitiesTables: ['customer_financials', 'products', 'balances'],
        sampleFields: ['customer_id', 'account_type', 'balance'],
        reactorRole: 'Normalize across systems and provide unified view to support tools',
        gradientClass: 'gradient-1'
    },
    {
        id: '41',
        industry: 'Retail Financial Services',
        title: 'Transaction Behavior Analytics',
        whyItMatters: 'Detect anomalies and behavioral shifts to flag potential fraud',
        dataSources: ['Banking logs', 'Payment processors'],
        entitiesTables: ['transactions', 'risk_signals'],
        sampleFields: ['transaction_id', 'pattern_score', 'category'],
        reactorRole: 'Run transformations to flag thresholds, support ML models',
        gradientClass: 'gradient-4'
    },
    {
        id: '42',
        industry: 'Retail Financial Services',
        title: 'GDPR/CCPA Audit Layer',
        whyItMatters: 'Prove compliant handling of personal data for regulators',
        dataSources: ['Consent manager', 'CRM', 'ETL metadata'],
        entitiesTables: ['data_access_logs', 'deletion_requests'],
        sampleFields: ['user_id', 'table_accessed', 'timestamp'],
        reactorRole: 'Log every data touch and enable audit trails for compliance teams',
        gradientClass: 'gradient-2'
    }
];

// State Management
let currentFilter = 'all';
let visibleCards = new Set();

// DOM Elements
const cardsGrid = document.getElementById('cardsGrid');
const noResults = document.getElementById('noResults');
const filterButtons = document.querySelectorAll('.reactor-filter-btn');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderCards();
    setupEventListeners();
    setupIntersectionObserver();
});

// Render cards based on current filter
function renderCards() {
    const filteredCases = currentFilter === 'all' 
        ? useCases 
        : useCases.filter(useCase => useCase.industry === currentFilter);

    if (filteredCases.length === 0) {
        cardsGrid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }

    cardsGrid.style.display = 'grid';
    noResults.style.display = 'none';
    
    cardsGrid.innerHTML = filteredCases.map((useCase, index) => `
        <div class="reactor-card" data-card-id="${useCase.id}" style="transition-delay: ${index * 100}ms;">
            <div class="reactor-card-inner">
                <!-- Front of card -->
                <div class="reactor-card-front ${useCase.gradientClass}">
                    <div>
                        <div class="reactor-card-header">
                            <span class="reactor-industry-badge">${useCase.industry}</span>
                            <img src="Logo_Reactor_BUG_4C.png" alt="Reactor Logo" class="reactor-card-logo">
                        </div>
                        
                        <h3 class="reactor-card-title">${useCase.title}</h3>
                    </div>
                    
                    <div class="reactor-why-matters">
                        <h4>Why It Matters</h4>
                        <p>${useCase.whyItMatters}</p>
                    </div>
                </div>

                <!-- Back of card -->
                <div class="reactor-card-back">
                    <div class="reactor-card-back-header">
                        <h3 class="reactor-card-back-title">${useCase.title}</h3>
                        <img src="Logo_Reactor_BUG_Navy.png" alt="Reactor Logo" class="reactor-card-back-logo">
                    </div>
                    
                    <div class="reactor-card-details">
                        <div class="reactor-detail-section">
                            <h4>Data Sources</h4>
                            <p>${useCase.dataSources.join(', ')}</p>
                        </div>
                        
                        <div class="reactor-detail-section">
                            <h4>Entities/Tables</h4>
                            <p>${useCase.entitiesTables.join(', ')}</p>
                        </div>
                        
                        <div class="reactor-detail-section">
                            <h4>Sample Fields</h4>
                            <p>${useCase.sampleFields.join(', ')}</p>
                        </div>
                        
                        <div class="reactor-detail-section">
                            <h4>Reactor's Role</h4>
                            <p>${useCase.reactorRole}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    // Reset visible cards for new render
    visibleCards.clear();
}

// Setup event listeners
function setupEventListeners() {
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Update filter and re-render
            currentFilter = this.dataset.industry;
            renderCards();
            setupIntersectionObserver();
        });
    });

    // Card flip interactions
    document.addEventListener('click', function(e) {
        const card = e.target.closest('.reactor-card');
        if (card) {
            card.classList.toggle('flipped');
        }
    });

    // Card hover for desktop
    document.addEventListener('mouseenter', function(e) {
        const card = e.target.closest('.reactor-card');
        if (card && window.innerWidth > 768) {
            card.classList.add('flipped');
        }
    }, true);

    document.addEventListener('mouseleave', function(e) {
        const card = e.target.closest('.reactor-card');
        if (card && window.innerWidth > 768) {
            card.classList.remove('flipped');
        }
    }, true);
}

// Setup intersection observer for scroll animations
function setupIntersectionObserver() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const cardId = entry.target.dataset.cardId;
                    if (!visibleCards.has(cardId)) {
                        visibleCards.add(cardId);
                        entry.target.classList.add('visible');
                    }
                }
            });
        },
        {
            threshold: 0.1,
            rootMargin: '50px'
        }
    );

    // Observe all cards
    document.querySelectorAll('.reactor-card').forEach(card => {
        observer.observe(card);
    });
}
