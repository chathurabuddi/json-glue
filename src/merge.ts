export const MergeJson = (target: Record<string, any>, source: Record<string, any>): Record<string, any> => {
    const result: Partial<Record<string, any>> = { ...target };

    for (const key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            const targetValue = result[key];
            const sourceValue = source[key];

            if (Array.isArray(sourceValue)) {
                result[key] = sourceValue as any;
            } else if (typeof sourceValue === "object" && sourceValue !== null && !Array.isArray(sourceValue)) {
                if (typeof targetValue === "object" && targetValue !== null) {
                    result[key] = MergeJson(
                        targetValue as Record<string, any>,
                        sourceValue as Record<string, any>,
                    ) as any;
                } else {
                    result[key] = sourceValue as any;
                }
            } else {
                result[key] = sourceValue as any;
            }
        }
    }

    return result as Record<string, any>;
};
