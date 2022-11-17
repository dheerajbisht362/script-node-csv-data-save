export interface TypeaheadSuggestion {
    uuid: string;
    term: string;
    name: string;
    __typename: string;
}

export interface Location {
    latitude: number;
    longitude: number;
    __typename: string;
}

export interface Location2 {
    latitude: number;
    longitude: number;
    __typename: string;
}

export interface Breadcrumb {
    name: string;
    countryCode: string|null;
    location: Location2;
    primaryGeoType: string;
    __typename: string;
}

export interface Geography {
    lbsId: string;
    gaiaId: string;
    location: Location;
    isGeocoded: boolean;
    shouldShowMapCentralPin: boolean;
    __typename: string;
    name: string;
    description: string;
    primaryGeoType: string;
    breadcrumbs: Breadcrumb[];
}

export interface Breadcrumb2 {
    name: string;
    url: string;
    __typename: string;
}

export interface Destination {
    breadcrumbs: Breadcrumb2[];
    __typename: string;
}

export interface IconTitleText {
    title: string;
    message: string;
    icon: string;
    messageValueType: string;
    link?: any;
    __typename: string;
}

export interface DestinationMessage {
    iconTitleText: IconTitleText;
    iconText?: any;
    __typename: string;
}

export interface GroupInfo {
    name: string;
    id: string;
    __typename: string;
}

export interface Filter2 {
    id: string;
    name: string;
    refineByQueryArgument: string;
    description: string|null;
    __typename: string;
    groupId: string;
}

export interface Filter {
    count: number;
    checked: boolean;
    filter: Filter2;
    __typename: string;
}

export interface FilterGroup {
    groupInfo: GroupInfo;
    filters: Filter[];
    __typename: string;
}

export interface VirtualTourBadge {
    name: string;
    id: string;
    helpText?: any| null;
    __typename: string;
}

export interface AmenitiesBadge {
    name: string;
    id: string;
    helpText?: any;
    __typename: string;
}

export interface Mab {
    banditId: string;
    payloadId?: any;
    campaignId: string;
    cached?: any;
    arm?: any;
    __typename: string;
}

export interface Image {
    altText?: any;
    c6_uri: string;
    c9_uri: string;
    mab: Mab | null;
    __typename: string;
}

export interface MinStayRange {
    minStayHigh: number;
    minStayLow: number;
    __typename: string;
}

export interface RankedBadge {
    id: string;
    helpText: string;
    name: string;
    __typename: string;
}

export interface PropertyMetadata {
    headline: string;
    __typename: string;
}

export interface SuperlativesBadge {
    id: string;
    helpText?: any;
    name: string;
    __typename: string;
}

export interface UnitMetadata {
    unitName: string;
    __typename: string;
}

export interface Bathrooms {
    full: number;
    half: number;
    toiletOnly: number;
    __typename: string;
}

export interface Area {
    areaValue?: number| null;
    __typename: string;
}

export interface SpacesSummary {
    area: Area;
    bedCountDisplay: string | null;
    __typename: string;
}

export interface Spaces {
    spacesSummary: SpacesSummary;
    __typename: string;
}

export interface GeoDistance {
    text: string;
    relationType: string;
    __typename: string;
}

export interface RateSummary {
    beginDate: string;
    endDate: string;
    rentNights: number[] | null;
}

export interface PriceSummary {
    priceAccurate?: any;
    priceTypeId: string;
    edapEventJson: string;
    formattedAmount: string;
    roundedFormattedAmount: string;
    pricePeriodDescription: string;
    __typename: string;
}

export interface PerNight {
    amount: number;
    formattedAmount: string;
    roundedFormattedAmount: string;
    pricePeriodDescription: string;
    __typename: string;
}

export interface Prices {
    perNight: PerNight;
    total?: any;
    label?: any;
    mainPrice: string;
    __typename: string;
}

export interface GeoCode {
    latitude: number;
    longitude: number;
    __typename: string;
}

export interface Listing {
    virtualTourBadge: VirtualTourBadge | null;
    amenitiesBadges: AmenitiesBadge[];
    images: Image[];
    listingId: string;
    detailPageUrl: string;
    unitApiUrl: string;
    instantBookable: boolean;
    minStayRange: MinStayRange;
    listingNumber: number;
    rankedBadges: RankedBadge[];
    propertyId: string;
    propertyMetadata: PropertyMetadata;
    superlativesBadges: SuperlativesBadge[];
    unitMetadata: UnitMetadata;
    webRatingBadges: any[];
    bathrooms: Bathrooms;
    bedrooms: number;
    propertyType: string;
    sleeps: number;
    petsAllowed: boolean;
    spaces: Spaces;
    __typename: string;
    geoDistance: GeoDistance;
    rateSummary: RateSummary;
    priceSummary: PriceSummary;
    priceSummarySecondary?: any;
    priceLabel?: any;
    prices: Prices;
    averageRating: number;
    reviewCount: number;
    geoCode: GeoCode;
}

export interface CoreFilters {
    adults: number;
    children?: any;
    pets: number;
    minBedrooms: number;
    maxBedrooms?: any;
    minBathrooms: number;
    maxBathrooms?: any;
    minNightlyPrice: number;
    maxNightlyPrice?: any;
    minSleeps?: any;
    __typename: string;
}

export interface ParsedParams {
    q: string;
    coreFilters: CoreFilters;
    dates?: any;
    sort?: any;
    __typename: string;
}

export interface MapViewport {
    neLat: number;
    neLong: number;
    swLat: number;
    swLong: number;
    __typename: string;
}

export interface DiscoveryXploreFeeds {
    results: any[];
    __typename: string;
}

export interface GlobalMessages {
    alert?: any;
    __typename: string;
    banner?: any;
}

export interface Results {
    id: string;
    typeaheadSuggestion: TypeaheadSuggestion;
    geography: Geography;
    propertyRedirectUrl?: any;
    __typename: string;
    destination: Destination;
    destinationMessage: DestinationMessage;
    resultCount: number;
    filterGroups: FilterGroup[];
    page: number;
    pageSize: number;
    pageCount: number;
    queryUUID: string;
    percentBooked?: any;
    listings: Listing[];
    pinnedListing?: any;
    parsedParams: ParsedParams;
    fromRecord: number;
    toRecord: number;
    mapViewport: MapViewport;
    expandedGroups: any[];
    discoveryXploreFeeds: DiscoveryXploreFeeds;
    internalTools?: any;
    globalMessages: GlobalMessages;
}

export interface Data {
    results: Results;
}

export interface RootObject {
    data: Data;
}


