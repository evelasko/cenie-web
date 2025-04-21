import { isFilled, LinkField } from '@prismicio/client';

export const validateLinkField = (link: LinkField): boolean => {
  if (!isFilled.link(link)) return false;
  if (link.url === null || link.url === undefined) return false;
  if (link.text === null || link.text === undefined) return false;
  return true;
};
