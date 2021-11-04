import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardStepComponent } from './wizard-step/wizard-step.component';
import { MaterialModule } from './material.module';



@NgModule({
  declarations: [WizardStepComponent],
  imports: [
    CommonModule
  ],
  exports: [WizardStepComponent, MaterialModule]
})
export class SharedModule { }
