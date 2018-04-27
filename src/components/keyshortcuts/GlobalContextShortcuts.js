import React, { Component } from 'react';

import { Shortcut } from '../keyshortcuts';
import { arePropTypesIdentical } from '../../utils';

export default class GlobalContextShortcuts extends Component {
  handlers = {
    OPEN_AVATAR_MENU: event => {
      event.preventDefault();

      this.props.closeOverlays(null, () => {
        this.props.handleUDOpen();
      });
    },
    OPEN_ACTIONS_MENU: event => {
      event.preventDefault();

      this.props.closeOverlays('isSubheaderShow');
    },
    OPEN_NAVIGATION_MENU: event => {
      event.preventDefault();

      this.props.handleMenuOverlay();
    },
    OPEN_INBOX_MENU: event => {
      event.preventDefault();

      this.props.closeOverlays('', () => this.props.handleInboxOpen(true));
    },
    OPEN_SIDEBAR_MENU_0: event => {
      event.preventDefault();

      this.props.closeOverlays(null, () => {
        this.props.handleSidelistToggle(0);
      });
    },
    OPEN_SIDEBAR_MENU_1: event => {
      event.preventDefault();

      this.props.closeOverlays(null, () => {
        this.props.handleSidelistToggle(1);
      });
    },
    OPEN_SIDEBAR_MENU_2: event => {
      event.preventDefault();

      this.props.closeOverlays(null, () => {
        this.props.handleSidelistToggle(2);
      });
    },
    DELETE_DOCUMENT: event => {
      event.preventDefault();

      if (this.props.handleDelete) {
        this.props.handleDelete();
      }
    },
    CLONE_DOCUMENT: event => {
      event.preventDefault();

      if (this.props.handleClone) {
        this.props.handleClone();
      }
    },
    OPEN_ADVANCED_EDIT: event => {
      event.preventDefault();

      if (this.props.openModal) {
        this.props.openModal();
      }
    },
    OPEN_PRINT_RAPORT: event => {
      event.preventDefault();

      if (this.props.handlePrint) {
        this.props.handlePrint();
      }
    },
    OPEN_EMAIL: event => {
      event.preventDefault();

      if (this.props.handleEmail) {
        this.props.handleEmail();
      }
    },
    OPEN_LETTER: event => {
      event.preventDefault();

      if (this.props.handleLetter) {
        this.props.handleLetter();
      }
    },
    NEW_DOCUMENT: event => {
      event.preventDefault();

      if (this.props.redirect) {
        this.props.redirect();
      }
    },
    DOC_STATUS: event => {
      event.preventDefault();

      if (this.props.handleDocStatusToggle) {
        this.props.closeOverlays('dropdown', this.props.handleDocStatusToggle);
      }
    },
    TOGGLE_EDIT_MODE: event => {
      event.preventDefault();

      if (this.props.handleEditModeToggle) {
        this.props.handleEditModeToggle();
      }
    },
  };

  shouldComponentUpdate = nextProps =>
    !arePropTypesIdentical(nextProps, this.props);

  render() {
    return [
      <Shortcut
        key="OPEN_AVATAR_MENU"
        name="OPEN_AVATAR_MENU"
        handler={this.handlers.OPEN_AVATAR_MENU}
      />,
      <Shortcut
        key="OPEN_ACTIONS_MENU"
        name="OPEN_ACTIONS_MENU"
        handler={this.handlers.OPEN_ACTIONS_MENU}
      />,
      <Shortcut
        key="OPEN_NAVIGATION_MENU"
        name="OPEN_NAVIGATION_MENU"
        handler={this.handlers.OPEN_NAVIGATION_MENU}
      />,
      <Shortcut
        key="OPEN_INBOX_MENU"
        name="OPEN_INBOX_MENU"
        handler={this.handlers.OPEN_INBOX_MENU}
      />,
      <Shortcut
        key="OPEN_SIDEBAR_MENU_0"
        name="OPEN_SIDEBAR_MENU_0"
        handler={this.handlers.OPEN_SIDEBAR_MENU_0}
      />,
      <Shortcut
        key="OPEN_SIDEBAR_MENU_1"
        name="OPEN_SIDEBAR_MENU_1"
        handler={this.handlers.OPEN_SIDEBAR_MENU_1}
      />,
      <Shortcut
        key="OPEN_SIDEBAR_MENU_2"
        name="OPEN_SIDEBAR_MENU_2"
        handler={this.handlers.OPEN_SIDEBAR_MENU_2}
      />,
      <Shortcut
        key="DELETE_DOCUMENT"
        name="DELETE_DOCUMENT"
        handler={this.handlers.DELETE_DOCUMENT}
      />,
      <Shortcut
        key="CLONE_DOCUMENT"
        name="CLONE_DOCUMENT"
        handler={this.handlers.CLONE_DOCUMENT}
      />,
      <Shortcut
        key="OPEN_ADVANCED_EDIT"
        name="OPEN_ADVANCED_EDIT"
        handler={this.handlers.OPEN_ADVANCED_EDIT}
      />,
      <Shortcut
        key="OPEN_PRINT_RAPORT"
        name="OPEN_PRINT_RAPORT"
        handler={this.handlers.OPEN_PRINT_RAPORT}
      />,
      <Shortcut
        key="OPEN_EMAIL"
        name="OPEN_EMAIL"
        handler={this.handlers.OPEN_EMAIL}
      />,
      <Shortcut
        key="OPEN_LETTER"
        name="OPEN_LETTER"
        handler={this.handlers.OPEN_LETTER}
      />,
      <Shortcut
        key="NEW_DOCUMENT"
        name="NEW_DOCUMENT"
        handler={this.handlers.NEW_DOCUMENT}
      />,
      <Shortcut
        key="DOC_STATUS"
        name="DOC_STATUS"
        handler={this.handlers.DOC_STATUS}
      />,
      <Shortcut
        key="TOGGLE_EDIT_MODE"
        name="TOGGLE_EDIT_MODE"
        handler={this.handlers.TOGGLE_EDIT_MODE}
      />,
    ];
  }
}
