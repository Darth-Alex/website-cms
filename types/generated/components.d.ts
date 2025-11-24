import type { Schema, Struct } from '@strapi/strapi';

export interface SharedBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_blocks';
  info: {
    displayName: 'Block';
  };
  attributes: {
    Heading: Schema.Attribute.String;
    SubHeading: Schema.Attribute.String;
    Text: Schema.Attribute.RichText;
  };
}

export interface SharedFooter extends Struct.ComponentSchema {
  collectionName: 'components_shared_footers';
  info: {
    displayName: 'Footer';
    icon: 'arrowDown';
  };
  attributes: {
    Copyright: Schema.Attribute.String;
    Links: Schema.Attribute.Component<'shared.nav-link', true>;
    Telephone: Schema.Attribute.String;
  };
}

export interface SharedNavLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_nav_links';
  info: {
    displayName: 'NavLink';
  };
  attributes: {
    external: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    href: Schema.Attribute.Text & Schema.Attribute.Required;
    Label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.block': SharedBlock;
      'shared.footer': SharedFooter;
      'shared.nav-link': SharedNavLink;
    }
  }
}
