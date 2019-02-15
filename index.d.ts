declare namespace SlimIO {
    interface RawEntity {
        name: string;
        description: string;
        descriptors?: {
            [key: string]: string;
        };
        parent?: number;
    }

    interface RawIdentityCard {
        unit: string;
        entityId: number;
        description?: string;
        max?: number;
        interval?: number;
    }

    interface RawAlarm {
        message: string;
        entityId: number;
        correlateKey: string;
        severity: number;
    }

    type CID = string;
}

export as namespace SlimIO;
export = SlimIO;
