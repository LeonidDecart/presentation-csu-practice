/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface SlideProblem {
  id: number;
  title: string;
  description: string;
  iconName: string;
}

export interface ComparisonCol {
  id: number;
  optionName: string;
  subtitle: string;
  prosCons: {
    text: string;
    isPro: boolean;
  }[];
  isWinner: boolean;
  iconName: string;
}

export interface RelevanceItem {
  id: number;
  title: string;
  description: string;
  badge?: string;
  iconName: string;
}

export interface RoadmapStep {
  id: number;
  label: string;
}

export interface SlideData {
  id: number;
  numberStr: string;
  badge?: string;
  title: string;
  subtitle?: string;
  description?: string;
  authorInfo?: {
    presenter: string;
    supervisor: string;
    group: string;
  };
  problemsGrid?: SlideProblem[];
  comparisonGrid?: ComparisonCol[];
  relevanceList?: RelevanceItem[];
  goalStatement?: string;
  roadmapSteps?: RoadmapStep[];
  imageUrl?: string;
}
