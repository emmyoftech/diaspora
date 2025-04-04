import { Component } from '@angular/core';
import { IconComponent } from "../../../shared/components/icon/icon.component";
import { CommonModule } from '@angular/common';

type FAQGroup = {
  group_name: string,
  units: FAQ_Unit[]
}

type FAQ_Unit = {
  question: string,
  answer?: string,
  opened: boolean
}

@Component({
  selector: 'app-contact-us-faqs',
  imports: [
    CommonModule,
    IconComponent
  ],
  templateUrl: './contact-us-faqs.component.html',
  styleUrl: './contact-us-faqs.component.scss'
})
export class ContactUsFAQsComponent {
  property_open = false
  
  faq_groups: FAQGroup[] = [
    {
      group_name: "My Properties",
      units: [
        {
          question: "How do you ensure my property is managed while I’m abroad",
          answer: "Our experienced property managers take care of everything—from tenant screening to maintenance, while you stay informed and in control.",
          opened: false 
        },
  
        {
          question: "How do I receive my rent payments?",
          opened: false
        },
  
        {
          question: "Can I track my property’s performance in real-time?",
          opened: false
        }
      ]
    },

    {
      group_name: "Maintainance & Building",

      units: [
        {
          question: "What happens if there’s an issue with my property?",
          opened: false
        },
        {
          question: "How do I build a property with DiasporaBuild?",
          opened: false
        }
      ]
    },

    {
      group_name: "Services",
      units: [
        {
          question: "What services do you offer?",
          opened: false
        }
      ]
    }
  ]
}
