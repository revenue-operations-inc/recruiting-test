import type { TargetOrganization } from '../types';
import { ORGANIZATIONS, findOrganizationById } from '../data/organizations';
import { delay } from './_latency';

export async function getTargetOrganization(
  org_id: string
): Promise<TargetOrganization | null> {
  await delay();
  return findOrganizationById(org_id) ?? null;
}

export async function listTargetOrganizations(): Promise<TargetOrganization[]> {
  await delay();
  return ORGANIZATIONS.slice();
}
