import { z } from 'zod';

export const livestream_params = z.object({
	color: z
		.union([z.literal('YELLOW'), z.literal('GREEN'), z.literal('PURPLE'), z.literal('ORANGE')])
		.catch('ORANGE'),
	mode: z.string().catch('Working'),
});

export type LivestreamParams = z.infer<typeof livestream_params>;
