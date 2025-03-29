import { Component } from '@angular/core';
import { IconComponent } from "../../../shared/components/icon/icon.component";
import { SelectDropdownComponent } from "../../../shared/components/select-dropdown/select-dropdown.component";
import { SelectDropObj } from 'src/app/features/shared/components/select-dropdown/select-dropdown.types';

@Component({
  selector: 'app-property-search',
  imports: [IconComponent, SelectDropdownComponent],
  templateUrl: './property-search.component.html',
  styleUrl: './property-search.component.scss'
})
export class PropertySearchComponent {

  get searchparadigmsEntries () {
    return Object.entries(this.searchparadigms)
  }

  private searchparadigms: {[key: string]: SelectDropObj[]} = {
    "location": [
      {
        key: "mal_abj",
        text: "maljima, abuja",
        icon: {
          name: "location-dot"
        }
      },
      {
        key: "gon_kad",
        text: "gonduya, kaduna",
        icon: {
          name: "location-dot"
        }
      },
      {
        key: "ela_lag",
        text: "ilaje, lagos",
        icon: {
          name: "location-dot"
        }
      }
    ],

    "radius": [
      {
        key: "1_mil",
        text: "1 miles",
        icon: {
          name: "location-arrow"
        }
      },
      {
        key: "2_mil",
        text: "2 miles",
        icon: {
          name: "location-arrow"
        }
      },
      {
        key: "3_mil",
        text: "3 miles",
        icon: {
          name: "location-arrow"
        }
      }
    ],

    "bedrooms": [
      {
        key: "3_bd",
        text: "3 bedrooms",
        icon: {
          name: "bed"
        }
      },
      {
        key: "3_bd",
        text: "3 bedrooms",
        icon: {
          name: "bed"
        }
      }
    ],

    "price": [
      {
        key: "35m",
        text: "35m",
        icon: {
          name: "tag"
        }
      },
      {
        key: "35m",
        text: "35m",
        icon: {
          name: "tag"
        }
      }
    ],

    "type": [
      {
        key: "p_tp",
        text: "detached",
        icon: {
          name: "building"
        },
      },
      {
        key: "p_tp",
        text: "not detached",
        icon: {
          name: "building"
        }
      }
    ]
  }
}
