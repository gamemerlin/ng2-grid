import { Component } from '@angular/core';

import { AppState } from '../app.service';
import { Title } from './title';
import { XLarge } from './x-large';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    Title
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './home.style.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './home.template.html'
})
export class Home {
  // Set our default values
  localState = { value: '' };

  public gridConfig: any = {
    columns: [
      {
        css: {
          header: ['header-0'],
          cell: ['col-0']
        },
        field: 'name',
        sort: {},
        title: 'Name',
        filter: {
          type: 'textbox'
        }
      },
      {
        css: {
          header: ['header-1'],
          cell: ['col-1']
        },
        title: 'Personal Info',
        columns: [
          {
            css: {
              header: ['header-2'],
              cell: ['col-2']
            },
            field: 'zip',
            title: 'Zip'
          },
          {
            css: {
              header: ['header-3'],
              cell: ['col-3']
            },
            field: 'telephone',
            sort: {},
            template: '{{ cell.value }} custom',
            title: 'Phone'
          }
        ]
      },
      {
        css: {
          header: ['header-4'],
          cell: ['col-4']
        },
        field: {
          key: 'code',
          getter: function(data:any) {
            return data.activity.code;
          },
          setter: function(data:any, value: any) {
            data.activity.code = value;
          }
        },
        template: '<input type="text" [(ngModel)]="cell.value">',
        sort: {},
        title: 'Account Code',
        filter: {
          type: 'select'
        }
      }
    ],
    header: {
      isSticky: true
    },
    pagination: {
      pageSize: 10,
      pageRangeSize: 5
    },
    rows: {
      isSelectable: true
    },
    table: {
      autoHeightResize: false,
      autoHeightResizeWithoutWindowScroll: false,
      canScrollX: false,
      canScrollY: true,
      bodyHeight: 100
    }
  };

  public testData: any[] = [{
    "name": "Jack Jones",
    "telephone": "111 111 1111",
    "zip": "1000",
    "activity": {
      "code": "1aaa",
      "desc": "Bill Gates Id"
    }
  }, {
    "name": "Tom Jones",
    "telephone": "111 222 2222",
    "zip": "10002",
    "activity": {
      "code": "2aaa",
      "desc": "I'm tom jones"
    }
  }, {
    "name": "Indiana Jones",
    "telephone": "111 333 3333",
    "zip": "10003",
    "activity": {
      "code": "3aaa",
      "desc": "I'm indy"
    }
  },

    {
      "name": "Mary Bella",
      "telephone": "222 111 1111",
      "zip": "10004",
      "activity": {
        "code": "4aaa",
        "desc": "Mary's description"
      }
    }, {
      "name": "Juan Daniels",
      "telephone": "222 222 3333",
      "zip": "10005",
      "activity": {
        "code": "5aaa",
        "desc": "I'm Juan"
      }
    }, {
      "name": "Mike Pippy",
      "telephone": "222 333 4444",
      "zip": "10006",
      "activity": {
        "code": "6aaa",
        "desc": "My name is mike"
      }
    }, {
      "name": "Shannon Pippy",
      "telephone": "245 231 9234",
      "zip": "10007",
      "activity": {
        "code": "7aaa",
        "desc": "My name is shannon"
      }
    }, {
      "name": "Sarah Pippy",
      "telephone": "323 123 9876",
      "zip": "10008",
      "activity": {
        "code": "8aaa",
        "desc": "My name is sarah"
      }
    }, {
      "name": "Paul Pippy",
      "telephone": "222 333 4444",
      "zip": "10009",
      "activity": {
        "code": "9aaa",
        "desc": "My name is Paul"
      }
    }, {
      "name": "Peter Pippy",
      "telephone": "222 333 4444",
      "zip": "10010",
      "activity": {
        "code": "10aaa",
        "desc": "My name is Peter"
      }
    }, {
      "name": "Billy Smith",
      "telephone": "222 333 4444",
      "zip": "10011",
      "activity": {
        "code": "11aaa",
        "desc": "My name is Billy"
      }
    }, {
      "name": "Brandon Smith",
      "telephone": "1234 333 4444",
      "zip": "10012",
      "activity": {
        "code": "12aaa",
        "desc": "My name is Brandon"
      }
    }, {
      "name": "Jill Burg",
      "telephone": "234 333 4444",
      "zip": "10013",
      "activity": {
        "code": "13aaa",
        "desc": "My name is Jill"
      }
    }, {
      "name": "Hang Xu",
      "telephone": "123 123 1234",
      "zip": "10014",
      "activity": {
        "code": "14aaa",
        "desc": "My name is Hang"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },
    {
      "name": "Gary Chan",
      "telephone": "222 333 4444",
      "zip": "10015",
      "activity": {
        "code": "15aaa",
        "desc": "My name is Gary"
      }
    },

  ];

  // TypeScript public modifiers
  constructor(public appState: AppState, public title: Title) {

  }

  ngOnInit() {
    console.log('hello `Home` component');
    // this.title.getData().subscribe(data => this.data = data);
  }

  submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}
