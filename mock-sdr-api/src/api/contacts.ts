import type { TargetContact } from '../types';
import { CONTACTS, findContactById } from '../data/contacts';
import { delay } from './_latency';

export async function getTargetContact(
  contact_id: string
): Promise<TargetContact | null> {
  await delay();
  return findContactById(contact_id) ?? null;
}

export async function listTargetContacts(): Promise<TargetContact[]> {
  await delay();
  return CONTACTS.slice();
}

export async function listContactsForOrganization(
  org_id: string
): Promise<TargetContact[]> {
  await delay();
  return CONTACTS.filter((c) => c.org_id === org_id);
}
