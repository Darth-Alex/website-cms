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

export interface SharedHeader extends Struct.ComponentSchema {
  collectionName: 'components_shared_headers';
  info: {
    displayName: 'Header';
    icon: 'archive';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Links: Schema.Attribute.Component<'shared.nav-link', true>;
    Title: Schema.Attribute.String;
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

export interface SharedTitle extends Struct.ComponentSchema {
  collectionName: 'components_shared_titles';
  info: {
    displayName: 'Title';
    icon: 'play';
  };
  attributes: {
    Text: Schema.Attribute.String;
    TextColor: Schema.Attribute.Enumeration<['black', 'red', 'blue']>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.block': SharedBlock;
      'shared.footer': SharedFooter;
      'shared.header': SharedHeader;
      'shared.nav-link': SharedNavLink;
      'shared.title': SharedTitle;
    }
  }
}
