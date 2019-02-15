declare namespace SlimIO {
    // Interfaces
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

    // Types
    type CID = string | null;
    type CK = string | null;

    // Enum
    enum AlarmSeverity {
        Critical,
        Major,
        Minor
    }
}

export as namespace SlimIO;
export = SlimIO;
