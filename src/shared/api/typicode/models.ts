export interface ResponseType {
    Data: ResponseData[];
    HasWarning: boolean;
    Message: string;
    MetaData: { Count: number };
    RateLimit: Record<string, unknown>;
    SponsoredData: unknown[];
    Type: number;
  }
  
export interface ResponseData {
    CoinInfo: CoinInfo
    DISPLAY: Display
    RAW: Raw
}
export interface CoinInfo {
    Algorithm: string
    AssetLaunchDate: string
    BlockNumber: number
    BlockReward: number
    BlockTime: number
    DocumentType: string
    FullName: string
    Id: string
    ImageUrl: string
    Internal: string
    MaxSupply: number
    Name: string
    NetHashesPerSecond: number
    ProofType: string
    Rating: Rating
    Type: number
    Url: string
}
  
export interface Rating {
    Weiss: Weiss
}
export interface Weiss {
    MarketPerformanceRating: string
    Rating: string
    TechnologyAdoptionRating: string
}

export interface Display {
    USD: Usd
}
export interface Raw {
    USD: ReducedUsd
}
export interface Usd {
    CHANGE24HOUR: number
    CHANGEDAY: number
    CHANGEHOUR: number
    CHANGEPCT24HOUR: number
    CHANGEPCTDAY: number
    CHANGEPCTHOUR: number
    CIRCULATINGSUPPLY: number
    CIRCULATINGSUPPLYMKTCAP: number
    CONVERSIONLASTUPDATE: number
    CONVERSIONSYMBOL: string
    CONVERSIONTYPE: string
    FLAGS: string
    FROMSYMBOL: string
    HIGH24HOUR: number
    HIGHDAY: number
    HIGHHOUR: number
    IMAGEURL: string
    LASTMARKET: string
    LASTTRADEID: string
    LASTUPDATE: number
    LASTVOLUME: number
    LASTVOLUMETO: number
    LOW24HOUR: number
    LOWDAY: number
    LOWHOUR: number
    MARKET: string
    MEDIAN: number
    MKTCAP: number
    MKTCAPPENALTY: number
    OPEN24HOUR: number
    OPENDAY: number
    OPENHOUR: number
    PRICE: number
    SUPPLY: number
    TOPTIERVOLUME24HOUR: number
    TOPTIERVOLUME24HOURTO: number
    TOSYMBOL: string
    TOTALTOPTIERVOLUME24H: number
    TOTALTOPTIERVOLUME24HTO: number
    TOTALVOLUME24H: number
    TOTALVOLUME24HTO: number
    TYPE: string
    VOLUME24HOUR: number
    VOLUME24HOURTO: number
    VOLUMEDAY: number
    VOLUMEDAYTO: number
    VOLUMEHOUR: number
    VOLUMEHOURTO: number
}

export type ReducedUsd = Omit<Usd, 
  | "CONVERSIONSYMBOL"
  | "CONVERSIONTYPE"
  | "FLAGS"
  | "FROMSYMBOL"
  | "IMAGEURL"
  | "LASTMARKET"
  | "LASTTRADEID"
  | "MARKET"
  | "MEDIAN"
  | "TOSYMBOL"
  | "TYPE"
>;