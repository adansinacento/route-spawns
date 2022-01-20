import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SingleVisualizerComponent } from './components/single-visualizer/single-visualizer.component';
import { CounterService } from './services/counter.service';
import { PokemonSelectorComponent } from './components/pokemon-selector/pokemon-selector.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { ModalInfoComponent } from './components/modal-info/modal-info.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComunicatorService } from './services/modal-comunicator.service';
import { PerserveDataService } from './services/storage.service';

@NgModule({
  declarations: [
    AppComponent,
    SingleVisualizerComponent,
    PokemonSelectorComponent,
    FooterComponent,
    ModalInfoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    NgbModule,
  ],
  providers: [CounterService, ModalComunicatorService, PerserveDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
