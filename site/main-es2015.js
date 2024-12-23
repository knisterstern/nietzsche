(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [class]=\"theme\">\n  <mat-card *ngIf=\"showVersion && (!fullScreen || fullScreen !== 'true')\">\n    <mat-select placeholder=\"Standard Theme\"\n                disabled=\"true\"\n                [(ngModel)]=\"theme\"\n                (change) = \"onThemeChange()\">\n      <mat-option value=\"standard-theme\">Beta-Version {{version}}</mat-option>\n      <mat-option value=\"green-theme\">Green</mat-option>\n    </mat-select>\n  </mat-card>\n  <mat-card *ngIf=\"!fullScreen || fullScreen !== 'true'\">\n    <h1>Der sp&auml;te Nietzsche</h1>\n  </mat-card>\n  <app-main-menu-component></app-main-menu-component>\n  <router-outlet></router-outlet>\n  <!--<div style = \"padding: 60px;\"><app-bergwerke></app-bergwerke></div>-->\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/conception.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/conception.component.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n  <mat-card-title>Digitales Editionskonzept</mat-card-title>\n  <mat-card-content>\n      <div class=\"text\">Im Rahmen des deutsch-schweizerischen Editionsprojekts \n         <a [routerLink]=\"projectLink\" [queryParams]=\"queryParams\">„Der späte Nietzsche“</a>, \n         das Friedrich Nietzsches handschriftlichen Nachlass ab\n         Frühjahr 1885 neu ediert hat, ist an der Universität Basel \n         <a [routerLink]=\"contentViewLink\" [queryParams]=\"queryParams\">diese</a> digitale\n      Manuskriptedition für die Aufzeichnungen aus den Archivmappen entwickelt\n      worden.\n      </div> \n      <div class=\"text\">\n            Die Neuedition des späten Nachlasses verfolgte\n         das Ziel, die Manuskripte integral zu dokumentieren und den typischen\n         Notatcharakter der Aufzeichnungen aufzuzeigen. Im Gegensatz zu früheren\n         Nachlasseditionen wurde auf die Aussortierung von vermeintlich nicht relevanten\n         Aufzeichnungen (Vorstufen, Briefentwürfe, Gelegenheitsnotizen) und die\n         Rekonstruktion einer werkspezifischen, thematischen oder chronologischen\n         Ordnung verzichtet, ebenso auf die Konstituierung linearer, geglätteter\n         Lesetexte. Stattdessen wurden der ursprüngliche Kontext der Niederschriften und\n         die topologische Anordnung beibehalten und in einer spezialisierten\n         diplomatischen Umschrift alle Korrekturvorgänge, Streichungen, späteren\n         Überarbeitungen etc. wiedergegeben und unterschiedliche Schriftarten,\n         Schreibmittel und Tintenfarben differenziert. Dieser ‚differenzierten\n         Transkription‘ stehen als unverzichtbarer Bestandteil der Manuskriptedition die\n         digitalen Faksimiles der Handschriften zur Seite. Eine Beschreibung der\n         Manuskripte, Hinweise auf die Abschreibvorgänge (Querverweise) und\n         philologische Anmerkungen ergänzen die Edition (zum Editionskonzept vgl.\n         ausführlich Beat Röllin und René Stockmar, „Aber ich notire mich, für mich“.\n         Die neunte Abteilung der Kritischen Gesamtausgabe von Nietzsches Werken, in:\n         <em>Nietzsche-Studien</em> 36 (2007), 22-40: \n         <a href=\"https://edoc.unibas.ch/id/document/36574\"><em>Open Access</em></a>).\n      </div>   \n      <div class=\"text\">\n      Die neu konzipierte digitale Edition „Der späte Nietzsche“\n      hat das Ziel, die Mappen Mp XIV-XVIII mit s&auml;mtlichen\n      Hintergrundinformationen sowohl als Faksimile wie auch in der differenzierten\n      Transkription je einzeln wie auch in einer synoptischen Darstellung in\n      elektronischer Form <em>offen zug&auml;nglich</em> (“Open Access”) und\n      <em>langfristig verf&uuml;gbar</em>, sowie <em>durchsuch-</em> und\n      <em>auswertbar</em> zu gestalten. Die digitale Edition ist\n      erweiter- und ausbaubar sowie mit anderen Projekten vernetzbar.\n      </div>\n  </mat-card-content>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content-view-tab-component/content-view-tab-component.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content-view-tab-component/content-view-tab-component.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-drawer-container [hasBackdrop]= false [autosize]=\"true\">\n  <mat-drawer [mode]=\"navBarOpenMode\" [disableClose]=\"true\" [opened]=\"navBarOpenState\">\n    <app-navigation-list-component></app-navigation-list-component>\n  </mat-drawer>\n  <mat-drawer-content>\n    <div>\n      <mat-card *ngIf=\"!fullscreen && queryParams\">\n        <nav mat-tab-nav-bar>\n          <a mat-tab-link\n             *ngFor=\"let link of navTabLinks\"\n             [routerLink]=\"link.link\"\n             (click)=\"this.setActiveLink(link.link)\"\n             [queryParams]=\"queryParams\"\n             [active]=\"link.isActive\"\n             [disabled]=\"link.disabled\">\n            {{link.label}}\n          </a>\n        </nav>\n      </mat-card>\n      <router-outlet></router-outlet>\n    </div>\n  </mat-drawer-content>\n</mat-drawer-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home.component.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n  <mat-card-title>Der sp&auml;te Nietzsche. Digitale Manuskriptedition</mat-card-title>\n  <mat-card-content>\n     <div>Herausgegeben von Beat Röllin, Dominique Steinbach, Christian Steiner, René Stockmar und Hubert Thüring</div>\n     <div class=\"skip\">Transkription und philologischer Kommentar: Thomas Riebe, Beat Röllin und René Stockmar unter Mitarbeit von Marie-Luise Haase und Michael Kohlenbach</div>\n     <div>Digitale Edition: Dominique Steinbach und Christian Steiner unter Mitarbeit von Eric Erhardt und Myriam Schmidt</div>\n     <div>Projektleitung: Hubert Thüring</div>\n  </mat-card-content>\n  <mat-card-content>\n     <div>Gefördert durch den Schweizerischen Nationalfonds (<a href=\"http://www.snf.ch/de/Seiten/default.aspx\">SNF</a>)</div>\n     <div>Unterstützt durch das Projekt \"Nationale Infrastruktur für Editionen - Infrastructure nationale pour les éditions\" (<a href=\"https://www.swissuniversities.ch/themen/digitalisierung/p-5-wissenschaftliche-information/projekte/nie-ine\">NIE - INE</a>)</div>\n\n     <div class=\"skip\">Copyright <a href=\"https://www.unibas.ch\">Universität Basel</a></div>\n  </mat-card-content>\n  <mat-card-content>\n      <h3>Hinweis zur Beta-Version</h3>\n      <div>Bitte nehmen Sie zur Kenntnis, dass die digitale Edition sowie die darin präsentierten Inhalte noch in Entwicklung stehen und dass\n      <ul class=\"hint\">\n        <li>die Texte und Bilder noch nicht persistent zitierbar sind </li>\n        <li>die Menüführung oder Features/Funktionalitäten im Verlauf der weiteren Entwicklung ändern können</li>\n        <li>Browserkompatibilität noch nicht übergreifend gegeben ist; wir empfehlen die Verwendung von Mozilla Firefox oder Chromium in einer aktuellen Version</li> \n      </ul>\n      </div>\n  </mat-card-content>\n  <mat-card-content>\n      <img height=\"52\" width=\"319\" src=\"/assets/logo_de.gif\"/>\n      <img class=\"second\" height=\"52\" width=\"164\" src=\"https://www.unibas.ch/dam/jcr:9a8e9aff-decd-45a7-bd46-284a3da3f86e/UniBas_Logo_DE_Schwarz_RGB_65.jpg\"/>\n      <!--<img class=\"second\" height=\"52\" width=\"164\" src=\"/assets/uni-basel-logo.svg\"/>-->\n  </mat-card-content>\n\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/impressum.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/impressum.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n  <mat-card-title>Kontakt</mat-card-title>\n  <mat-card-content>\n     <div><a href=\"mailto:hubert.thuering@unibas.ch\">Prof. Dr. Hubert Thüring</a></div>\n     <div><a href=\"https://germanistik.philhist.unibas.ch/de/forschung/forschungsprojekte/ndl/der-spaete-nietzsche/\">Nietzsche-Edition</a></div>\n     <div> Deutsches Seminar</div>\n     <div>Universität Basel</div>\n     <div>Nadelberg 4</div>\n     <div>4051 Basel</div>\n     <div> Tel.: +41 (0)61 207 34 29</div>\n  </mat-card-content>\n</mat-card>\n<mat-card>\n  <mat-card-title>Rechtliche Hinweise</mat-card-title>\n  <mat-card-content>\n     <mat-card-subtitle>Haftungsbeschränkung</mat-card-subtitle>\n     <div class=\"text\"><!--Die Inhalte dieser Website werden mit größtmöglicher Sorgfalt erstellt. Der Anbieter übernimmt jedoch keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Rahmeninhalte, die nicht i.e.S. Bestandteil der Edition sind.--> Die Nutzung der Inhalte der Website erfolgt auf eigene Gefahr der Nutzer*in. Mit der reinen Nutzung der Website der Anbieter*in kommt keinerlei Vertragsverhältnis zwischen der Nutzer*in und der Anbieter*in zustande.</div>\n  </mat-card-content>\n  <mat-card-content>\n     <h3>Urheberrecht und Lizenz</h3>\n     <div class=\"subcontent\">\n        <mat-card-subtitle>Transkription und Daten der digitalen Edition</mat-card-subtitle>\n        <img src=\"/assets/by.svg\"/>\n        <div class=\"text\">Die Transkriptionen und Daten der digitalen Edition sind in ihrem ganzen Umfang frei zugänglich und dürfen zu den Bedingungen der Creative Commons Public Licence „Namensnennung“, Version 4.0 (<a href=\"https://creativecommons.org/licenses/by/4.0/deed.de\">CC BY 4.0</a>) weitergegeben werden. Das Copyright darauf hat die <a href=\"https://www.unibas.ch\">Universit&auml;t Basel</a>.</div>\n     </div>\n     <div>\n        <mat-card-subtitle>Faksimiles</mat-card-subtitle>\n        <img src=\"/assets/by-nc-nd.svg\"/>\n        <div class=\"text\">Die Faksimiles werden von <a target=\"_new\" href=\"http://www.nietzschesource.org\">nietzschesource.org</a>  gehostet und werden hier unver&auml;ndert dargestellt. Sie sind veröffentlicht unter der Creative Commons Public License „Namensnennung, Nicht kommerziell, Keine Bearbeitungen”, Version 4.0 <a href=\"http://creativecommons.org/licenses/by-nc-nd/4.0/deed.de\">(CC BY-NC-ND 4.0)</a>.</div>\n     </div>\n  </mat-card-content>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main-menu-component/main-menu-component.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main-menu-component/main-menu-component.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar *ngIf=\"!fullScreen || fullScreen !== 'true'\">\n  <div>\n    <button mat-icon-button mat-button [routerLink]=\"homeLink\" [queryParams]=\"queryParams\"\n            routerLinkActive=\"mat-accent\"\n            title=\"Home\"\n            color=\"primary\"\n            aria-label=\"Go to landing page.\">\n      <mat-icon>home</mat-icon>\n    </button>\n    <button mat-button [routerLink]=\"contentViewLink\" [queryParams]=\"queryParams\" routerLinkActive=\"mat-accent\"  color=\"primary\">Digitale Edition</button>\n    <button mat-button [routerLink]=\"dataLink\" [queryParams]=\"queryParams\" routerLinkActive=\"mat-accent\" color=\"primary\">Daten</button>\n    <button mat-button [routerLink]=\"conceptionLink\" [queryParams]=\"queryParams\" routerLinkActive=\"mat-accent\" color=\"primary\">Konzeption</button>\n    <button mat-button [routerLink]=\"projectLink\" [queryParams]=\"queryParams\" routerLinkActive=\"mat-accent\" color=\"primary\">Projekt</button>\n    <button mat-button [routerLink]=\"impressumLink\" [queryParams]=\"queryParams\" routerLinkActive=\"mat-accent\" color=\"primary\">Impressum</button>\n    <button mat-icon-button mat-button [routerLink]=\"supportLink\" [queryParams]=\"queryParams\"\n            routerLinkActive=\"mat-accent\"\n            title=\"Anleitung\"\n            color=\"primary\"\n            aria-label=\"Support\">\n      <mat-icon>support</mat-icon>\n    </button>\n\n  </div>\n</mat-toolbar>\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/manuscript-view-component/manuscript-view-component.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manuscript-view-component/manuscript-view-component.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tln-manuscript-view></tln-manuscript-view>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation-list-component/navigation-list-component.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigation-list-component/navigation-list-component.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"fixed-nav-container\">\n  <mat-toolbar>Navigation\n  <mat-form-field>\n     <mat-label>Filter</mat-label>\n     <input matInput [(ngModel)]=\"filterValue\" (ngModelChange)=\"filterTree()\" (keydown.esc)=\"clearFilter()\">\n      <button mat-button *ngIf=\"filterValue\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"clearFilter()\">\n         <mat-icon>close</mat-icon>\n      </button>\n  </mat-form-field>\n  </mat-toolbar>\n  <div *ngIf=\"navTrees && navTabIndex !== -1\">\n    <mat-tab-group [selectedIndex]=\"navTabIndex\" (selectedTabChange)=\"changeNavTreeViaRoute($event.index)\">\n      <mat-tab\n         *ngFor=\"let tree of navigationTreeDefs\"\n         label={{tree.label}}>\n      </mat-tab>\n    </mat-tab-group>\n  </div>\n</div>\n<app-navigationlist-list-component [navTree]=\"activeTree\"></app-navigationlist-list-component>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation-list-component/navigationlist-list-component/navigationlist-list-component.component.html":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigation-list-component/navigationlist-list-component/navigationlist-list-component.component.html ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"navlist\"  class=\"navlist-container\" *ngIf=\"navTree\">\n  <mat-nav-list *ngIf=\"navTree && navTree.entries\">\n    <mat-list-item *ngFor=\"let item of navTree.entries\"\n                   (click)=\"onSelectNavItem(item)\"\n                   [id] = \"item.tlnEntity.id\"\n                   [class.active-item]=\"item.tlnEntity.id === navTree.selectedItem\">\n      <mat-card class = \"card-item\">\n        <mat-card-header>\n          <mat-card-title>\n            <span>{{item.tlnEntity.label}}</span>\n          </mat-card-title>\n          <mat-card-subtitle *ngIf=\"item.tlnEntity.description\">GSA-Signatur {{item.tlnEntity.description}}</mat-card-subtitle>\n          <mat-card-subtitle *ngIf=\"navTree.parentLabel\">{{navTree.parentLabel}}</mat-card-subtitle>\n          <img  mat-card-avatar *ngIf=\"item.avatar\" [src]=\"item.avatar\"/>\n          <tln-status *ngIf=\"item.avatar\" class=\"head-icon\" [currentIri]=\"item.tlnEntity.id\"></tln-status>\n        </mat-card-header>\n        <mat-card-content>\n          <img class=\"thumbnail\" *ngIf=\"item.svg\" [src]=\"item.svg\"/>\n          <img class=\"thumbnail\" *ngIf=\"item.thumb\" [src]=\"item.thumb\"/>\n          <tln-status *ngIf=\"item.svg\" class=\"content-icon\" [currentIri]=\"item.tlnEntity.id\"></tln-status>\n        </mat-card-content>\n      </mat-card>\n    </mat-list-item>\n  </mat-nav-list>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ontology-viewer/content.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ontology-viewer/content.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span *ngIf=\"text\">{{text}}</span>\n<span *ngFor=\"let link of links\">\n   <a *ngIf=\"!link.external\" [routerLink]=\"['./']\" [fragment]=\"link.target\" [queryParams]=\"queryParams\">{{link.value}}</a>\n   <a *ngIf=\"link.external\" [href]=\"link.target\">{{link.value}}</a>\n</span>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ontology-viewer/ontology-definition.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ontology-viewer/ontology-definition.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ontology-table *ngIf=\"dataMapping && dataMapping.queryDataMappings.length > 0\" [dataMapping]=\"dataMapping\"></ontology-table>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ontology-viewer/ontology-display.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ontology-viewer/ontology-display.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ontology-table *ngFor=\"let dataMapping of dataMappings\" [dataMapping]=\"dataMapping | uniqueEntry\"></ontology-table>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ontology-viewer/ontology-table.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ontology-viewer/ontology-table.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table *ngIf=\"dataMapping\" [id]=\"dataMapping.subject\" mat-table multiTemplateDataRows [dataSource]=\"dataMapping.queryDataMappings\">\n   <ng-container matColumnDef=\"predicate\">\n      <th class=\"predicate\" mat-header-cell *matHeaderCellDef>{{dataMapping.subject}}</th>\n      <td class=\"predicate\" mat-cell *matCellDef=\"let element\"><content [content]=\"element.predicate\"></content></td>\n   </ng-container>\n   <ng-container matColumnDef=\"value\">\n      <th mat-header-cell *matHeaderCellDef>a <content [content]=\"dataMapping.subjectType.value\" [links]=\"[dataMapping.subjectType]\"></content></th>\n      <td class=\"value\" mat-cell *matCellDef=\"let element\"><content [content]=\"element.value\" [links]=\"element.links\"></content></td>\n   </ng-container>\n   <tr mat-header-row *matHeaderRowDef=\"[ 'predicate', 'value' ]\"></tr>\n   <tr  mat-row *matRowDef=\"let element; columns: [ 'predicate', 'value' ]\"></tr>\n   <!--   <tr><td>{{dataMapping.subject}}</td></tr>-->\n</table>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ontology-viewer/ontology-viewer.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ontology-viewer/ontology-viewer.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card *ngIf=\"ontology\">\n   <mat-card-header>\n      <mat-card-title>{{ontology.name}}</mat-card-title>\n      <mat-card-subtitle>{{ontology.prefix}}: &lt;{{ontology.iri}}&gt;</mat-card-subtitle>\n   </mat-card-header>\n   <mat-card-content>\n      <ontology-definition [ontology]=\"ontology\" [namespaces]=\"namespaces\"></ontology-definition>\n      <h2>Classes</h2>\n      <ontology-classes [ontology]=\"ontology\" [namespaces]=\"namespaces\"></ontology-classes>\n      <h2>Properties</h2>\n      <ontology-properties [ontology]=\"ontology\" [namespaces]=\"namespaces\" [query]=\"objectPropertyQuery\"></ontology-properties>\n      <ontology-properties [ontology]=\"ontology\" [namespaces]=\"namespaces\" [query]=\"datatypePropertyQuery\"></ontology-properties>\n   </mat-card-content>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-view-wrapper-component/page-view-wrapper.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-view-wrapper-component/page-view-wrapper.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div #tooltipContainer id=\"wrapper\">\n   <div id =\"navigator\">\n     <tln-viewer-navigation [setMaxHeightTo]=\"pageView\"></tln-viewer-navigation>\n   </div>\n   <div id=\"content\">\n      <tln-page-view #pageView [showAllLines]=\"showAllLines\" [max_height]=\"innerHeight-50\"></tln-page-view>\n   </div>\n   <!--TODO: queryParams.fullscreen is string, not boolean! -->\n   <tool-tip [fullscreen]=\"fullscreen\" [menuOffsetPosition]=\"{x: 0, y: 86 }\" [container]=\"tooltipContainer\"></tool-tip>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-view/copyright/copyright-sheet/copyright-sheet.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-view/copyright/copyright-sheet/copyright-sheet.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"copyright\">\n  <h4 mat-subheader>Copyright Information:</h4>\n  <div [innerHTML]=\"copyright.text\"></div>\n  <div *ngIf=\"copyright.originalUrl\">URL: <a target=\"_new\" [href]=\"copyright.originalUrl\">{{copyright.originalUrl}}</a></div>\n  <div> Lizenz: \n      <a *ngIf=\"copyright.licenseTextUrl\" target=\"_new\" [href]=\"copyright.licenseTextUrl\">{{copyright.license}} </a>\n      <span *ngIf=\"!copyright.licenseTextUrl\">{{copyright.license}}</span>\n   </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-view/copyright/copyright.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-view/copyright/copyright.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg version=\"1.0\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0\" y=\"0\"\n    [attr.width]=\"dimension\" [attr.height]=\"dimension\" viewBox=\"5.5 -3.5 64 64\"\n    (mouseenter)=\"setHighlight(true)\" (mouseleave)=\"setHighlight(false)\" (click)=\"showCopyrightInformation($event)\">\n   <svg:g>\n       <svg:path id=\"cc\" [style.opacity]=\"highlight ? '0.8' : '0.2'\" d=\"M37.441-3.5c8.951,0,16.572,3.125,22.857,9.372c3.008,3.009,5.295,6.448,6.857,10.314\n          c1.561,3.867,2.344,7.971,2.344,12.314c0,4.381-0.773,8.486-2.314,12.313c-1.543,3.828-3.82,7.21-6.828,10.143\n          c-3.123,3.085-6.666,5.448-10.629,7.086c-3.961,1.638-8.057,2.457-12.285,2.457s-8.276-0.808-12.143-2.429\n          c-3.866-1.618-7.333-3.961-10.4-7.027c-3.067-3.066-5.4-6.524-7-10.372S5.5,32.767,5.5,28.5c0-4.229,0.809-8.295,2.428-12.2\n          c1.619-3.905,3.972-7.4,7.057-10.486C21.08-0.394,28.565-3.5,37.441-3.5z M37.557,2.272c-7.314,0-13.467,2.553-18.458,7.657\n          c-2.515,2.553-4.448,5.419-5.8,8.6c-1.354,3.181-2.029,6.505-2.029,9.972c0,3.429,0.675,6.734,2.029,9.913\n          c1.353,3.183,3.285,6.021,5.8,8.516c2.514,2.496,5.351,4.399,8.515,5.715c3.161,1.314,6.476,1.971,9.943,1.971\n          c3.428,0,6.75-0.665,9.973-1.999c3.219-1.335,6.121-3.257,8.713-5.771c4.99-4.876,7.484-10.99,7.484-18.344\n          c0-3.543-0.648-6.895-1.943-10.057c-1.293-3.162-3.18-5.98-5.654-8.458C50.984,4.844,44.795,2.272,37.557,2.272z M37.156,23.187\n          l-4.287,2.229c-0.458-0.951-1.019-1.619-1.685-2c-0.667-0.38-1.286-0.571-1.858-0.571c-2.856,0-4.286,1.885-4.286,5.657\n          c0,1.714,0.362,3.084,1.085,4.113c0.724,1.029,1.791,1.544,3.201,1.544c1.867,0,3.181-0.915,3.944-2.743l3.942,2\n          c-0.838,1.563-2,2.791-3.486,3.686c-1.484,0.896-3.123,1.343-4.914,1.343c-2.857,0-5.163-0.875-6.915-2.629\n          c-1.752-1.752-2.628-4.19-2.628-7.313c0-3.048,0.886-5.466,2.657-7.257c1.771-1.79,4.009-2.686,6.715-2.686\n          C32.604,18.558,35.441,20.101,37.156,23.187z M55.613,23.187l-4.229,2.229c-0.457-0.951-1.02-1.619-1.686-2\n          c-0.668-0.38-1.307-0.571-1.914-0.571c-2.857,0-4.287,1.885-4.287,5.657c0,1.714,0.363,3.084,1.086,4.113\n          c0.723,1.029,1.789,1.544,3.201,1.544c1.865,0,3.18-0.915,3.941-2.743l4,2c-0.875,1.563-2.057,2.791-3.541,3.686\n          c-1.486,0.896-3.105,1.343-4.857,1.343c-2.896,0-5.209-0.875-6.941-2.629c-1.736-1.752-2.602-4.19-2.602-7.313\n          c0-3.048,0.885-5.466,2.658-7.257c1.77-1.79,4.008-2.686,6.713-2.686C51.117,18.558,53.938,20.101,55.613,23.187z\"/>\n   </svg:g>\n</svg>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-view/margin-field/line-reference/line-reference.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-view/margin-field/line-reference/line-reference.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg version=\"1.0\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0\" y=\"0\"\n   viewBox=\"0 0 25 50\"\n   (mouseenter)=\"showReference(true, $event)\" (mouseleave)=\"showReference(false, $event)\" (click)=\"changeLocation()\">\n  <defs>\n    <marker id=\"arrowhead\" markerWidth=\"10\" markerHeight=\"10\"  refX=\"0\" refY=\"2\" orient=\"auto\">\n      <polygon points=\"0 0, 6 2, 0 4\"/>\n    </marker>\n    <line id=\"arrow\" x1=\"0\" x2=\"15\" y1=\"2\" y2=\"2\" stroke-width=\"1\" marker-end=\"url(#arrowhead)\"/>\n  </defs>\n  <rect x=\"0\" y=\"0\" height=\"100\" width=\"200\" class=\"mouse-pointer\" [ngClass]=\"{ 'unhighlighted' : !highlighted, 'highlighted': highlighted  }\"/>\n  <use x=\"0\" y=\"3\" class=\"mouse-pointer\" xlink:href=\"#arrow\" stroke=\"black\"/>\n</svg>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-view/margin-field/margin-field.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-view/margin-field/margin-field.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns:svg=\"http://www.w3.org/2000/svg\"\n     xmlns=\"http://www.w3.org/2000/svg\"\n     xmlns:xhtml=\"http://www.w3.org/1999/xhtml\"\n   [attr.viewBox]=\"viewBox\" [attr.height]=\"margin_height*local_zoom*zoomFactor\" [attr.width]=\"margin_width*local_zoom*zoomFactor\"\n    class = 'marginfield' [attr.transform]=\"matrix\">\n   <svg:g *ngFor=\"let line of lines\">\n      <foreignObject *ngIf=\"showReference == 'from' && line.continuesFrom\" [attr.x]=\"0\"  [attr.y]=\"line.bottom-line_height+1\" [attr.height]=\"line_height\" [attr.width]=\"2*line_length\">\n      <xhtml:div><line-reference [showReference]=\"showReference\" [line]=\"line\"></line-reference></xhtml:div>\n      </foreignObject>\n      <svg:g *ngIf=\"line.number % 2 == 0 || hasWordsOnLine(line) || \n                     ((getHoverStatus(line) == SELECTED_STATUS || getHoverStatus(line) == HOVERED_STATUS) \n                        && ((showReference != 'to' && line.continuesFrom) || (showReference == 'to' && line.continuesTo)))\">\n         <svg:rect [attr.x]=\"line_x-1\" [attr.y]=\"line.bottom-line_height+1\" \n                   [attr.height]=\"line_height\" [attr.width]=\"line.number > 9 ? line_length + line_length/2 : line_length\"\n                   [ngStyle]=\"assignStyle(line, hoveredWord, hoveredLine, getHoverStatus(line))\"\n                   [ngClass]=\"{ \n                     'marginfield unhighlighted': getHoverStatus(line) != HOVERED_STATUS,\n                     'marginfield highlight': getHoverStatus(line) == HOVERED_STATUS }\" > </svg:rect>\n         <svg:text class=\"text\" [attr.x]=\"line_x\" [attr.y]=\"line.bottom\" [container]=\"container\"\n                                [interactedObject]=\"line\">{{line.number}}</svg:text>\n      </svg:g>\n      <foreignObject *ngIf=\"showReference == 'to' && line.continuesTo\" [attr.x]=\"line_x+line_length\"  [attr.y]=\"line.bottom-line_height+1\" \n                   [attr.height]=\"line_height\" [attr.width]=\"2*line_length\">\n      <xhtml:div><line-reference [showReference]=\"showReference\" [line]=\"line\"></line-reference></xhtml:div>\n      </foreignObject>\n   </svg:g>\n</svg>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-view/page-view.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-view/page-view.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"page\" *ngIf=\"first_image\" [style.height.px]=\"max_height\" [ngStyle]=\"{ 'overflow': hasColumnStyle() ? 'auto': 'hidden' }\">\n   <div #firstContainer [ngClass]=\"{ 'inline': hasColumnStyle(), 'breakline': !hasColumnStyle()}\">\n       <div id=\"margin\" [style.height.px]=\"switchDimensions(first_image.transform)\n                                           ? first_image.text_field.width*zoomFactor*first_local_zoom_factor \n                                           : first_image.text_field.height*zoomFactor*first_local_zoom_factor\">\n          <margin-field [text_field]=\"first_image.text_field\" [lines]=\"first_lines\" [assignStyle]=\"assignStyle\"\n                        [container]=\"firstContainer\" [zoomFactor]=\"zoomFactor\" [max_height]=\"max_height\" [transform]=\"first_image.transform\"\n                        [max_width]=\"max_width\" [linesWithWords]=\"first_unevenlines\" [local_zoom]=\"first_local_zoom_factor\" [rotation]=\"rotation\"\n                        [selectedLines]=\"selectedLines\" [showReference]=\"showReferenceLeft\"></margin-field>\n       </div>\n       <div class=\"gap\"></div>\n       <div id=\"textfield\" [ngStyle]=\"{ 'width': switchDimensions(first_image.transform) \n                                                 ? first_image.text_field.height*zoomFactor*first_local_zoom_factor + 'px'\n                                                 : first_image.text_field.width*zoomFactor*first_local_zoom_factor + 'px',\n                                        'height':switchDimensions(first_image.transform) \n                                                 ? first_image.text_field.width*zoomFactor*first_local_zoom_factor + 'px'\n                                                 : first_image.text_field.height*zoomFactor*first_local_zoom_factor + 'px'\n                                      }\">\n          <text-field [identity]=\"first_textfield_id\" [container]=\"firstContainer\"\n                      [image]=\"first_image\" [findText]=\"findText\" [words]=\"first_words\" [zoomFactor]=\"zoomFactor\" \n                      [preferPrimaryUrl]=\"preferPrimaryUrl\" [max_height]=\"max_height\" [rotation]=\"rotation\"\n                      [max_width]=\"max_width\" [local_zoom]=\"first_local_zoom_factor\"\n                      [selectedWords]=\"selectedWords\" [selectedLines]=\"selectedLines\"\n                      [foreign_texts]=\"first_foreign_texts\" [configuration]=\"configuration\"\n                      [assignClass]=\"assignClass\" [assignStyle]=\"assignStyle\"></text-field>\n       </div>\n       <div class=\"gap\" *ngIf=\"!(second_image && second_lines) || !hasColumnStyle()\"></div>\n       <div id=\"margin\" *ngIf=\"!(second_image && second_lines) || !hasColumnStyle()\"\n            [style.height.px]=\"switchDimensions(first_image.transform) \n                               ? first_image.text_field.width*zoomFactor*first_local_zoom_factor \n                               : first_image.text_field.height*zoomFactor*first_local_zoom_factor\">\n          <margin-field [text_field]=\"first_image.text_field\" [lines]=\"first_lines\" [assignStyle]=\"assignStyle\"\n                        [max_width]=\"max_width\" [showReference]=\"showReferenceRight\" [linesWithWords]=\"first_unevenlines\"\n                        [selectedLines]=\"selectedLines\" [zoomFactor]=\"zoomFactor\" [max_height]=\"max_height\"\n                        [transform]=\"first_image.transform\" [rotation]=\"rotation\"\n                        [local_zoom]=\"first_local_zoom_factor\"></margin-field>\n       </div>\n   </div>\n   <div #secondContainer [ngClass]=\"{ 'inline': hasColumnStyle(), 'breakline': !hasColumnStyle()}\">\n       <div class=\"gap\"></div>\n       <div id=\"margin\" *ngIf=\"second_image && second_lines && !hasColumnStyle()\"\n            [style.height.px]=\"switchDimensions(second_image.transform) \n                               ? second_image.text_field.width*zoomFactor*second_local_zoom_factor \n                               : second_image.text_field.height*zoomFactor*second_local_zoom_factor\">\n          <margin-field [text_field]=\"second_image.text_field\" [lines]=\"second_lines\" [assignStyle]=\"assignStyle\"\n                        [max_width]=\"max_width\" [linesWithWords]=\"second_unevenlines\" [local_zoom]=\"second_local_zoom_factor\"\n                        [container]=\"secondContainer\" [zoomFactor]=\"zoomFactor\" [max_height]=\"max_height\"\n                        [transform]=\"second_image.transform\" [rotation]=\"rotation\"\n                        [selectedLines]=\"selectedLines\" [showReference]=\"showReferenceLeft\"></margin-field>\n       </div>\n       <div id=\"textfield\" *ngIf=\"second_image && second_words\"\n            [ngStyle]=\"{ 'width': switchDimensions(second_image.transform)\n                                                 ? second_image.text_field.height*zoomFactor*second_local_zoom_factor + 'px'\n                                                 : second_image.text_field.width*zoomFactor*second_local_zoom_factor + 'px',\n                                        'height': switchDimensions(second_image.transform)\n                                                 ? second_image.text_field.width*zoomFactor*second_local_zoom_factor + 'px'\n                                                 : second_image.text_field.height*zoomFactor*second_local_zoom_factor + 'px'\n                                      }\">\n          <text-field [identity]=\"second_textfield_id\" [container]=\"secondContainer\"\n                      [image]=\"second_image\" [findText]=\"findText\" [words]=\"second_words\" [zoomFactor]=\"zoomFactor\"\n                      [max_width]=\"max_width\" [local_zoom]=\"second_local_zoom_factor\" [rotation]=\"rotation\"\n                      [preferPrimaryUrl]=\"preferPrimaryUrl\" [max_height]=\"max_height\" \n                      [selectedWords]=\"selectedWords\" [selectedLines]=\"selectedLines\"\n                      [foreign_texts]=\"second_foreign_texts\" [configuration]=\"configuration\"\n                      [assignClass]=\"assignClass\" [assignStyle]=\"assignStyle\"></text-field>\n       </div>\n       <div class=\"gap\"></div>\n       <div id=\"margin\" *ngIf=\"second_image && second_lines\"\n            [style.height.px]=\"switchDimensions(second_image.transform) \n                               ? second_image.text_field.width*zoomFactor*second_local_zoom_factor \n                               : second_image.text_field.height*zoomFactor*second_local_zoom_factor\">\n          <margin-field [text_field]=\"second_image.text_field\" [lines]=\"second_lines\" [assignStyle]=\"assignStyle\"\n                        [max_width]=\"max_width\" [showReference]=\"showReferenceRight\" [linesWithWords]=\"second_unevenlines\"\n                        [selectedLines]=\"selectedLines\" [zoomFactor]=\"zoomFactor\" [max_height]=\"max_height\"\n                        [transform]=\"second_image.transform\" [rotation]=\"rotation\"\n                        [local_zoom]=\"second_local_zoom_factor\"></margin-field>\n       </div>\n   </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-view/textfield-component/textfield.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-view/textfield-component/textfield.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns:svg=\"http://www.w3.org/2000/svg\"\n     xmlns=\"http://www.w3.org/2000/svg\"\n     xmlns:xhtml=\"http://www.w3.org/1999/xhtml\"\n   [attr.viewBox]=\"viewBox\" [attr.height]=\"image_height*local_zoom*zoomFactor\" [attr.width]=\"image_width*local_zoom*zoomFactor\"\n    class = 'textfield' [attr.transform]='imageSpec.transform'>\n  <svg:g *ngIf=\"image\">\n    <!--\n      'xlink:href' is deprecated in SVG2 (see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/xlink:href).\n      However, some browsers do not support 'href', therefore we use both 'xlink:href' and 'href'.\n      -->\n    <image [attr.xlink:href]=\"imageSpec.URL\" [attr.href]=\"imageSpec.URL\" (load)=\"msg(imageSpec.URL)\" (error)=\"updateImageProperties(imageSpec.secondaryURL)\"\n           [attr.x]=\"imageSpec.x\" [attr.y]=\"imageSpec.y\" [attr.height]=\"imageSpec.height\" [attr.width]=\"imageSpec.width\"/>\n    <foreignObject *ngIf=\"image.copyright\" [ngStyle]=\"getCopyrightPosition((local_zoom*zoomFactor > 1) ? 32 : 32/(local_zoom*zoomFactor))\" \n      [attr.height]=\"(local_zoom*zoomFactor > 1) ? 32 : 32/(local_zoom*zoomFactor)\" \n      [attr.width]=\"(local_zoom*zoomFactor > 1) ? 32 : 32/(local_zoom*zoomFactor)\">\n      <xhtml:div><copyright [copyright]=\"image.copyright\" [dimension]=\"32/(local_zoom*zoomFactor)\"></copyright></xhtml:div>\n    </foreignObject>\n  </svg:g>\n   <svg:g *ngFor=\"let word of words\">\n      <svg:rect [interactedObject]=\"word\" [identity]=\"identity\" [container]=\"container\"\n                [ngStyle]=\"assignStyle(word, hoveredWord, hoveredLine, getHoverStatus(word))\"\n                [ngClass]=\"assignClass(word)\"\n                [attr.x]=\"word.left\" [attr.y]=\"word.top\" [attr.height]=\"word.height\" [attr.width]=\"word.width\" [attr.transform]=\"word.transform\">\n         <title *ngIf=\"!useExtendedTooltip && word\">{{ word.edited_text != null ? '> ' + word.edited_text : word.text }}</title>\n      </svg:rect>\n      <svg:g *ngIf=\"word.deletion_path\">\n         <path #pathRef [ngClass]=\"assignClass(word, pathRef.localName)\" [attr.d]=\"word.deletion_path\"/>\n      </svg:g>\n   </svg:g>\n   <svg:g *ngFor=\"let foreignText of foreign_texts\">\n      <svg:rect [interactedObject]=\"foreignText\"\n                [ngStyle]=\"assignStyle(foreignText, hoveredWord, hoveredLine, getHoverStatus(foreignText))\"\n                [ngClass]=\"assignClass(foreignText)\"\n                [attr.x]=\"foreignText.left\" [attr.y]=\"foreignText.top\" [attr.height]=\"foreignText.height\" [attr.width]=\"foreignText.width\" [attr.transform]=\"foreignText.transform\">\n         <title *ngIf=\"!useExtendedTooltip && foreignText\">{{foreignText.text}}, {{ foreignText.pen }}</title>\n      </svg:rect>\n   </svg:g>\n</svg>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/project.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/project.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n  <mat-card-content>\n   <mat-card-title>Das Editionsprojekt „Der späte Nietzsche“</mat-card-title>\n      <!--<div class=\"text\">Im Rahmen des deutsch-schweizerischen Editionsprojekts „Der\n         späte Nietzsche“, das Friedrich Nietzsches handschriftlichen Nachlass ab\n         Frühjahr 1885 neu ediert hat, ist an der Universität Basel \n         <a routerLink=\"/contentView\" [queryParams]=\"queryParams\">diese</a> digitale\n      Manuskriptedition für die Aufzeichnungen aus den Archivmappen entwickelt\n      worden.\n      </div> \n      <div class=\"text\">\n            Die Neuedition des späten Nachlasses verfolgte\n         das Ziel, die Manuskripte integral zu dokumentieren und den typischen\n         Notatcharakter der Aufzeichnungen aufzuzeigen. Im Gegensatz zu früheren\n         Nachlasseditionen wurde auf die Aussortierung von vermeintlich nicht relevanten\n         Aufzeichnungen (Vorstufen, Briefentwürfe, Gelegenheitsnotizen) und die\n         Rekonstruktion einer werkspezifischen, thematischen oder chronologischen\n         Ordnung verzichtet, ebenso auf die Konstituierung linearer, geglätteter\n         Lesetexte. Stattdessen wurden der ursprüngliche Kontext der Niederschriften und\n         die topologische Anordnung beibehalten und in einer spezialisierten\n         diplomatischen Umschrift alle Korrekturvorgänge, Streichungen, späteren\n         Überarbeitungen etc. wiedergegeben und unterschiedliche Schriftarten,\n         Schreibmittel und Tintenfarben differenziert. Dieser ‚differenzierten\n         Transkription‘ stehen als unverzichtbarer Bestandteil der Manuskriptedition die\n         digitalen Faksimiles der Handschriften zur Seite. Eine Beschreibung der\n         Manuskripte, Hinweise auf die Abschreibvorgänge (Querverweise) und\n         philologische Anmerkungen ergänzen die Edition (zum Editionskonzept vgl.\n         ausführlich Beat Röllin und René Stockmar, „Aber ich notire mich, für mich“.\n         Die neunte Abteilung der Kritischen Gesamtausgabe von Nietzsches Werken, in:\n         <em>Nietzsche-Studien</em> 36 (2007), 22-40: \n         <a href=\"https://edoc.unibas.ch/id/document/36574\"><em>Open Access</em></a>).\n      </div>   -->\n      <div class=\"text\">\n            Das deutsch-schweizerische Editionsprojekt „Der späte Nietzsche“\n            wurde von der Deutschen Forschungsgemeinschaft, der Hamburger\n            Stiftung zur Förderung von Wissenschaft und Kultur und vom\n            Schweizerischen Nationalfonds gefördert. Die Manuskriptedition „Der\n            handschriftliche Nachlaß ab Frühjahr 1885 in differenzierter\n            Transkription“ ist in der von Giorgio Colli und Mazzino Montinari\n            begründeten <em>Kritischen Gesamtausgabe der Werke</em> (KGW)\n            erschienen als neunte Abteilung, herausgegeben von Marie-Luise\n            Haase, Michael Kohlenbach, Martin Stingelin und Hubert Thüring in\n            Verbindung mit der Berlin-Brandenburgischen Akademie der\n            Wissenschaften (KGW IX, Bde. 1-13, De Gruyter 2001-2022). Die\n            Aufzeichnungen aus den Archivmappen Mp XIV-XVIII sowie verstreute\n            Aufzeichnungen wurden bearbeitet von Marie-Luise Haase, Michael\n            Kohlenbach, Thomas Riebe, Beat Röllin und René Stockmar.\n      </div>\n      <div class=\"text\">\n            Die digitale Manuskriptedition wurde 2017-2021 vom Schweizerischen\n            Nationalfonds gefördert. Sie wurde an der Universität Basel unter\n            der Projektleitung von Hubert Thüring von Christian Steiner\n            konzipiert und in Zusammenarbeit mit Dominique Steinbach und dem\n            Projekt „Nationale Infrastruktur für Editionen ‒ Infrastructure\n            nationale pour les éditions“ (NIE ‒ INE) entwickelt. Die\n            Digitalisierung der Aufzeichnungen aus den Archivmappen wurde unter\n            Mitarbeit von Eric Erhardt und Myriam Schmidt erarbeitet.\n      </div>\n\n      <div class=\"img\">\n         <img height=\"52\" width=\"319\" src=\"/assets/logo_de.gif\"/>\n     </div>\n  </mat-card-content>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/quant/quant.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/quant/quant.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div #container class=\"content-area\" [style.width.px]=\"width\">\n   <!-- TODO get toggle change and update width -->\n   <toggle-navigation></toggle-navigation>\n   <tln-quant [restrictKorpusOnContext]=\"true\"></tln-quant>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/query.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/query.component.html ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tln-data [routePrefix]=\"routePrefix\"></tln-data>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/rhizome-view-component/rhizome-view-component.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rhizome-view-component/rhizome-view-component.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div #tooltipContainer id=\"page\">\n   <tln-crossref></tln-crossref>\n   <!--TODO: queryParams.fullscreen is string, not boolean! -->\n   <tool-tip [fullscreen]=\"fullscreen\" [menuOffsetPosition]=\"{x: 0, y: 100 }\" [container]=\"tooltipContainer\"></tool-tip>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/support/heading.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/support/heading.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3 *ngIf=\"level == 0\" [id]=\"href\">{{prefix + ' ' + title}}</h3>\n<h4 *ngIf=\"level == 1\" [id]=\"href\">{{prefix + ' ' + title}}</h4>\n<h5 *ngIf=\"level == 2\" [id]=\"href\">{{prefix + ' ' + title}}</h5>\n<!--<menu [titles]=\"tableOfContents\"></menu>-->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/support/menu.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/support/menu.component.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"mymenu\">\n   <button mat-button [matMenuTriggerFor]=\"menu\"><mat-icon>menu</mat-icon></button>\n   <mat-menu #menu=\"matMenu\">\n      <a mat-menu-item *ngFor=\"let item of titles\" [routerLink]=\"['./']\" [fragment]=\"item.link\" [queryParams]=\"queryParams\" \n                   [ngClass]=\"'level' + item.level\">{{item.title}}</a>\n   </mat-menu>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/support/support.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/support/support.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n  <mat-card-content>\n    <!--<div id=\"navi\">\n       <toggle-navigation [showNavBarOpenButton]=\"false\"></toggle-navigation>\n      <menu [titles]=\"titles\"></menu>\n    </div>-->\n     <mat-card-title>Anleitung\n        <button class=\"menu\" mat-button [matMenuTriggerFor]=\"menu\"><mat-icon>menu</mat-icon></button>\n        <mat-menu #menu=\"matMenu\">\n           <!--<a mat-menu-item *ngFor=\"let item of titles\" [routerLink]=\"['./']\" [fragment]=\"item.link\" [queryParams]=\"queryParams\" -->\n           <a mat-menu-item *ngFor=\"let item of titles\" (click)=\"moveToMenuItem(item.link)\" \n                [ngClass]=\"'level' + item.level\">{{item.prefix + ' ' + item.title}}</a>\n        </mat-menu> </mat-card-title>\n        <!--<heading title=\"Allgemein\" [(tableOfContents)]=\"titles\"></heading>-->\n        <heading title=\"Digitale Edition\" [(tableOfContents)]=\"titles\" (indexChanged)=\"index = $event\"></heading>\n        <div class=\"text\">\n           <p>Die digitale Edition „Der späte Nietzsche“ macht die Mappen Mp\n        XIV-XVIII mit s&auml;mtlichen Hintergrundinformationen sowohl als\n        Faksimile wie auch in der differenzierten Transkription je einzeln wie\n        auch in einer synoptischen Darstellung zug&auml;nglich.</p>\n           <p>&Uuml;ber den Menupunkt <a [routerLink]=\"contentViewLink\" [queryParams]=\"queryParams\">Digitale Edition</a>\n           wird diese aufgerufen. Unterhalb des Menus erscheint auf der linken Seite die\n           <a [routerLink]=\"['./']\" fragment=\"Digitale_Edition_Navigationsleiste\">Navigationsleiste</a> und auf der rechten Seite\n           ein Untermenu mit dem Inhalt des jeweils ausgew&auml;hlten Menupunktes. Per Default wird die \n           <a [routerLink]=\"['./']\" fragment=\"Digitale_Edition_Manuskriptansicht\" [queryParams]=\"queryParams\">Manuskriptansicht</a>\n           der ersten archivalischen Manuskripteinheit angezeigt.\n            </p>\n        </div>\n        <subheading title=\"Navigationsleiste\" [(tableOfContents)]=\"titles\"></subheading>\n        <div class=\"text\">\n              <p>Die Navigationsleiste hat zwei Untermenus (<i>Manuskripte</i> und <i>Seiten</i>)\n              und ein Textfeld <i>Filter</i>.</p>\n        </div>\n        <div class=\"img-container\">\n            <div class=\"img\">\n              <h4>Manuskripte</h4>\n               <img src=\"/assets/support/navigation.png\" width=\"200px\" height=\"320px\">\n            </div>\n           <div class=\"img-text\">\n              <p>Im Menu <i>Manuskripte</i> dient die Navigation zur Auswahl einer archivalischen Manuskripteinheit. \n              Die ausgew&auml;hlte Manuskripteinheit wird in der \n              <a [routerLink]=\"['./']\" fragment=\"Digitale_Edition_Manuskriptansicht\">Manuskriptansicht</a>\n              ge&ouml;ffnet.\n              </p>\n              <p>Die archivalischen Manuskripteinheiten werden in Kacheln angezeigt. Dabei zeigt eine Kachel <i>links</i>\n              jeweils eine Vor&shy;schau der ersten Manuskriptseite und <i>rechts</i> in <b>fetter Schrift</b> die hier verwendete\n              Bezeichnung der archivalischen Manuskripteinheit, sowie darunter die GSA-Signatur und eine symbolische Repr&auml;sentation\n              der Daten&shy;lage:\n              <tln-status showDataStatusOptions=\"1\"></tln-status>\n              </p>\n              <p>Mittels des Textfeldes <i>Filter</i> kann die Auswahl der dar&shy;gestellten archivalischen Manuskripteinheiten\n              ein&shy;ge&shy;schr&auml;nkt werden. Dabei bezieht sich der Filterausdruck auf die Be&shy;zeichnung der archivalischen Manuskripteinheiten.\n              </p>\n           </div>\n        </div>\n        <div class=\"img-container\">\n            <div class=\"img\">\n              <h4>Seiten</h4>\n               <img src=\"/assets/support/navigation_pages.png\" width=\"200px\" height=\"317px\">\n            </div>\n           <div class=\"img-text\">\n              <p>Im Menu <i>Seiten</i> dient die Navigation zur Auswahl einer Manuskriptseite.\n              Die ausgew&auml;hlte Manuskriptseite wird in der \n              <a [routerLink]=\"['./']\" fragment=\"Digitale_Edition_Seitenansicht\">Seitenansicht</a>\n              ge&ouml;ffnet.\n              </p>\n              <p>Die Manuskriptseiten werden in Kacheln angezeigt. Dabei zeigt eine Kachel <i>oben</i>\n              jeweils  in <b>fetter Schrift</b> die Paginierung, sowie darunter die \n              Bezeichung der ent&shy;sprech&shy;enden archivalischen Manuskripteinheit;\n              <i>darunter</i> erscheint eine Vorschau der Trans&shy;kription und des Faksimiles,\n              sowie eine symbolische Repr&auml;sentation\n              der Daten&shy;lage:\n              <tln-status showDataStatusOptions=\"0\"></tln-status>\n              </p>\n              <p>Mittels des Textfeldes <i>Filter</i> kann die Auswahl der\n              dar&shy;gestellten Manuskriptseiten\n              ein&shy;ge&shy;schr&auml;nkt werden. Dabei bezieht sich der\n              Filterausdruck auf die Paginierung der \n              Manuskriptseiten.  </p>\n           </div>\n        </div>\n        <subheading title=\"Manuskriptansicht\" [(tableOfContents)]=\"titles\"></subheading>\n        <div class=\"text\">\n           <p>In der Manuskriptansicht werden Informationen zu einer ausgew&auml;hlten archivalischen Manuskripteinheit angezeigt.  </p>\n           <p><img src=\"assets/support/manuscript_view.png\" width=\"600px\" height=\"248px\"></p>\n        </div>\n        <h4>Navigation der Manuskriptansicht</h4>\n        <div class=\"text\">\n              <ol>\n                 <li>Navigationsleiste ein-/ausblenden</li>\n                 <li>Vollbildansicht ein/aus</li>\n              </ol>\n           <p>\n           </p>\n           <p><img src=\"assets/support/manuscript_navigation.png\" width=\"600px\" height=\"153px\"></p>\n        </div>\n        <h4>Manuskriptbeschreibungen</h4>\n        <div class=\"text\">\n           <p>\n           Unter der Rubrik <i>Manuskriptbeschreibungen</i> werden die einzelnen Manuskriptbl&auml;tter beschrieben. Eine Vorschau\n           zeigt dabei jeweils die Faksimiles der in dieser Edition enthaltenen Seiten der Bl&auml;tter sowie ihre Paginierung. \n           </p>\n           <p><img src=\"assets/support/leaf_desc.png\" width=\"476px\" height=\"255px\"></p>\n           <p>&Uuml;ber die Kn&ouml;pfe <mat-icon inline=\"true\">launch</mat-icon> und <mat-icon inline=\"true\">chrome_reader_mode</mat-icon> kann eine Manuskriptseite\n           in der <a [routerLink]=\"['./']\" fragment=\"Digitale_Edition_Seitenansicht\">Seitenansicht</a>\n           ge&ouml;ffnet werden. Dabei &ouml;ffnet <mat-icon inline=\"true\">launch</mat-icon> die Seite in einem neuen Tab.\n           </p>\n        </div>\n        <subheading title=\"Seitenansicht\" [(tableOfContents)]=\"titles\"></subheading>\n        <h4>Navigation der Seitenansicht</h4>\n        <p><img src=\"assets/support/pageView-navigation.png\" width=\"900px\" height=\"160px\"></p>\n        <div class=\"text\">\n              <ol>\n                 <li>Navigationsleiste ein-/ausblenden</li>\n                 <li>Vollbildansicht ein/aus</li>\n                 <li>Gehe zu erster Seite der ausgew&auml;hlten archivalischen Manuskripteinheit</li>\n                 <li>Gehe zu vorangegangener Seite</li>\n                 <li>Ansicht: Transkription, Faksimile, Transkription/Faksimile, Faksimile/Transkription</li>\n                 <li>Zoom</li>\n                 <li>Seitenidentifikation. Erscheint das Symbol <mat-icon inline=\"true\">info</mat-icon>, dann kann &uuml;ber diesen Knopf die Seiteninformation angezeigt werden.</li>\n                 <li>Rotation nach rechts/links um 90&deg;</li>\n                 <li>Suche auf der Seite. Mittels des Knopfs <mat-icon inline=\"true\">search</mat-icon> kann die Volltextsuche <b>Suche</b> aufgerufen werden.</li>\n                 <li>Gehe zu n&auml;chster Seite</li>\n                 <li>Gehe zu letzter Seite der ausgew&auml;hlten archivalischen Manuskripteinheit</li>\n              </ol>\n        </div>\n        <h4>Seitenansicht</h4>\n        <p><img src=\"assets/support/pageView.png\" width=\"900px\" height=\"531px\"></p>\n        <div class=\"text\">\n           <p> Die Seitenansicht zeigt das farblich hervorgehobene\n           Transkriptionsfeld (<span class=\"roman\">IIa</span>) \n           und/oder das Faksimile (<span class=\"roman\">IIb</span>). Im\n           Bearbeitungszustand \"Textdaten vollst&auml;ndig erfasst\" werden die\n           W&ouml;rter gelb hervorgehoben und ein <b>Tooltip</b> zeigt\n           Zusatzinformationen an, wenn die Maus dar&uuml;ber bewegt wird. In\n           der synoptischen Ansicht wird auch das entsprechende Wort der\n           anderen Ansicht hervorgehoben angezeigt.<br> \n           Die zum seitlichen Rand\n           hin anschlie&szlig;ende Spalten (<span class=\"roman\">I</span>)\n           bieten Raum f&uuml;r die Marginalien: Die Zeilenmarkierung sowie die\n           Hinweise zu Anschl&uuml;ssen bei nicht habituellem Schriftverlauf.\n           </p> \n           <p>Anders als bei Schriftzeichen l&auml;&szlig;t sich bei\n           Seiten- und Passagenstreichungen, Randanstreichungen und\n           Markierungen nicht immer mit Sicherheit entscheiden, ob diese von\n           Nietzsche oder von sp&auml;teren Bearbeiter*innen herr&uuml;hren.\n           F&uuml;r die Dokumentation solcher redaktioneller Spuren im\n           Manuskript wurde folgende Differenzierung vor&shy;genommen: stammen\n           sie von Nietzsches Hand, werden sie im Transkriptionsfeld gezeigt;\n           sind sie mit gro&szlig;er Wahrscheinlichkeit einer fremden Hand\n           zuzuordnen, werden sie in der <b>Seiteninformation</b> aufgelistet;\n           bei unsicherer Herkunft werden sie zwar ins Transkriptions&shy;feld\n           &uuml;bernommen, ihre Zuschreibung in der <b>Seiteninformation</b>\n           jedoch in Frage gestellt.\n         </p>\n         <p><i><a id=\"Hint\">Hinweise:</a></i> </p>\n         <ul>\n            <li>\n               Werden W&ouml;rter oder Zeilennummern angeklickt, dann erscheinen die\n               entsprechenden W&ouml;rter/Zeilen violett hervorgehoben. In der URL\n               ist diese Information enthalten, so dass sie\n               kopiert und verwendet werden kann. Daher kann per Link auf ein oder \n               mehrere W&ouml;rter/Zeilen Bezug genommen werden.</li>\n            <li>Wurden W&ouml;rter angeklickt, dann erscheint in der \n               <a [routerLink]=\"['./']\" fragment=\"Digitale_Edition_Datenabfrage\" [queryParams]=\"queryParams\">Datenabfrage</a>\n               ein Panel <b>Wortfilter</b>, mittels dessen die <a href=\"https://datatracker.ietf.org/doc/html/rfc3987\">IRIs</a> \n               der entsprechenden W&ouml;rter als Filter f&uuml;r\n               die Anfrage ausgew&auml;hlt werden k&ouml;nnen.\n            </li>\n            <li>\n               Eine weitere Funktion, die f&uuml;r die Datenabfrage genutzt werden kann, ist der &lt;Ctrl-Klick&gt;\n               auf ein Wort. In diesem Fall erscheint ein Javascript-Alert mit der <a href=\"https://datatracker.ietf.org/doc/html/rfc3987\">IRI</a> \n               des entsprechenden Wortes.\n            </li>\n         </ul>\n        </div>\n        <h4><span class=\"roman\">I</span> Marginalien</h4>\n        <p><img src=\"assets/support/preview.png\" width=\"600px\" height=\"211px\"></p>\n        <div class=\"text\">\n           <p>Zeilenmarkierung: F&uuml;r eine differenzierte Umschrift, die auch die typographischen Aspekte des Manuskripts ber&uuml;cksichtigt, ist eine\n         regelrechte Zeilenzählung bez&uuml;glich vieler Manuskriptseiten oft nicht praktikabel, bisweilen unmöglich. Bei der\n         hier vorgenommenen Zeilenmarkierung, die ausschließlich der Funktion einer bequemeren Referenz dient, sind\n         die indizierten Zeilen mit geraden Zahlen bezeichnet; die dadurch eingeschlossenen Zwischenräume werden\n         durch die entsprechenden, in der Zeilenzahlleiste nicht ausgedruckten ungeraden Zahlen repräsentiert.\n         </p>\n         <p>\n         Anschlusspfeile: Auf den unmittelbaren Fortgang des Schreibverlaufs, sofern dieser nicht offensichtlich ist, weisen als Lesehilfe\n         Anschlusspfeile hin. Dabei zeigen die Pfeile in der linken Spalte textuelle Anschl&uuml;sse <i>zu</i>\n         der entsprechenden Zeile, w&auml;hrend in der rechten Spalte Anschl&uuml;sse <i>von</i> dieser Zeile auf eine\n         andere Zeile erscheinen. Wird die Maus auf einen solchen Pfeil bewegt, dann wird die Zeilenreferenz des Anschlusses \n         eingeblendet, sowie (falls sich die Referenz auf eine andere Seite bezieht) eine Vorschau auf die entsprechende Zeile (s.o.).\n         </p>\n        </div>\n        <h4><span class=\"roman\">IIa</span> Transkription</h4>\n        <div class=\"text\">\n         <p>Die Wiedergabe der Schriftverteilung auf den Manuskriptseiten (R&auml;nder, Einz&uuml;ge, Zeilenabst&auml;nde etc.) ist nach\n         Ma&szlig;gaben des Drucks standardisiert; Aufzeichnungen mit Schriftzeilen, die in der gew&auml;hlten Laufweite im\n         Transkriptionsfeld nicht Platz f&auml;nden, werden kondensiert.</p>\n         <p>\n         Die Transkription unternimmt es nicht, die in den Aufzeichnungen wechselnde Deutlichkeit der Schrift\n         abzubilden. Abk&uuml;rzungen werden als solche wiedergegeben, die zahlreichen Ligaturen und Verschleifungen\n         aber aufgel&ouml;st.\n         </p>\n         <p>\n         In deutscher Schreibschrift niedergeschriebene Passagen sind in der Transkription durch Antiquaschrift, in lateinischer\n         Schreibschrift oder Druckschrift geschriebene Passagen in seriphenloser Schrift gesetzt; wo diese Schriftarten in\n         Nietzsches Handschrift nicht ohne Abweichungen und Mischungen vorkommen, kann nur der jeweils\n         vorherrschende Duktus differenziert werden.\n         </p>\n         <p>\n         Die Verwendung verschiedener Schreibmittel wird durch unterschiedliche Farben in der Transkription dargestellt; es\n         wird zwischen schwarzen, braunen und violetten Tinten, sowie zwischen Blei-, Rot- und Blaustiften\n         unterschieden. Bei der Vielzahl verwendeter Tinten und Stifte identifizieren die Druckfarben nicht ein einzelnes\n         Schreibger&auml;t oder -mittel, sie indizieren aber deren jeweilige Differenzierbarkeit. Eine weitere Druckfarbe\n         (’gr&uuml;n’) signalisiert einen separierbaren Korrekturvorgang mit einer bereits verwendeten Tintenfarbe; diese wird\n         kurz als „Tinte der letzten Korrektur“ bezeichnet.\n         </p>\n         <p>\n         Um dar&uuml;ber hinaus einzelne Schreib- und Korrekturvorg&auml;nge zu differenzieren, benutzt die Transkription\n         unterschiedliche Schriftgr&ouml;&szlig;en; die urspr&uuml;ngliche Niederschrift ist in normaler Gr&ouml;&szlig;e wiedergegeben; als\n         Einf&uuml;gungen oder nicht selbst&auml;ndige Hinzuf&uuml;gungen gewertete Schriftz&uuml;ge erscheinen in Petitschrift; an diesen\n         nochmals vorgenommene Änderungen oder Zus&auml;tze werden in einer kleineren Petitschrift gesetzt, falls dieser\n         Vorgang nicht schon durch die Position des Schriftzugs oder durch das differente Schreibmittel erkennbar ist.\n         </p>\n         <p>\n         Grafische Elemente des Manuskripts (Streichungen, Abtrennungslinien, Einf&uuml;gungs- oder\n         Fortsetzungslinien, Zeichnungen etc.) sind stark stilisiert; insbesondere gibt die Transkription nur &uuml;ber die\n         H&auml;ufigkeit, nicht aber &uuml;ber unterschiedliche Weisen der Durchstreichung einzelner W&ouml;rter oder Zeilen\n         Auskunft; diagonale Passagen- und Seitenstreichungen werden als solche wiedergegeben, andere Formen\n         (Mehrfachstreichungen, Schraffur- oder Kreuzstreichungen etc.) werden als X-f&ouml;rmige Tilgung gezeigt.\n         </p>\n         <p>Unterlegte Areale im Transkriptionsfeld weisen auf Korrekturen und &Uuml;berschreibungen hin. </p>\n        </div>\n        <h5>Korrekturen</h5>\n        <p><img src=\"assets/support/correction.png\" width=\"600px\" height=\"233px\"></p>\n        <div class=\"text\">\n           <p>Wird die Maus &uuml;ber ein Wort mit Korrekturen bewegt, dann wird der Korrekturverlauf eingeblendet. Die Versionsnummern\n           werden dabei aufsteigend vorangestellt.</p>\n        </div>\n        <h5>&Uuml;berschreibungen</h5>\n        <p><img src=\"assets/support/overwritten.png\" width=\"600px\" height=\"275px\"></p>\n        <div class=\"text\">\n           <p>Wird die Maus &uuml;ber ein Wort bewegt, das ein anderes &uuml;berschreibt, dann zeigt der <b>Tooltip</b> das &uuml;berschriebene\n           Word. Bei Teil&uuml;berschreibungen wird der &uuml;berschreibende Wortteil farblich hervorgehoben. </p>\n        </div>\n        <h5>Bearbeitungsspuren fremder H&auml;nde</h5>\n         <div class=\"text\">\n         <p>Randanstreichungen und (zumeist vertikal-zentrierte) Passagen- \n         oder Seitenstreichungen werden unter Angabe der in der Transkription betroffenen Zeilen\n         in den <b>Seiten&shy;informationen</b> mitgeteilt. Markierungen und Kommentare oder andere Notizen\n         sind transkribiert; den (ungef&auml;hren) Ort dieser Aufzeichnungen im Manuskript signalisiert ein ins\n         Transkriptionsfeld gesetzter Platzhalter &loz;. Wird die Maus &uuml;ber dieses Symbol bewegt, erscheint\n         ein <b>Tooltip</b> in violetter Farbe, in dem Inhalt und Schreibmittel (<i>kursiv</i>) mitgeteilt werden. \n         </p>\n        <p><img src=\"assets/support/foreign_hand.png\" width=\"600px\" height=\"116px\"></p>\n         <p>\n         Nicht unter die verzeichneten Spuren fremder Hand werden die\n         stereotypen Prozeduren von Paginierung und Foliierung aufgenommen; sie sind in den <b>Manuskriptbeschreibungen</b> dokumentiert.\n           </p>\n        </div>\n        <h4>In der Transkription benutzte Schriften und Farben</h4>\n        <p><img src=\"assets/support/fonts.png\" width=\"600px\" height=\"283px\"></p>\n        <h4><span class=\"roman\">IIb</span> Faksimile</h4>\n        <div class=\"text\">\n           <p>Auf dem Faksimile werden die gleichen Informationen wie auf dem Transkriptionsfeld eingeblendet. Zudem wird\n           das Symbol <img src=\"assets/support/cc.png\" width=\"15px\" height=\"15px\"> an einer freien Ecke eingeblendet, &uuml;ber das die Copyright Information \n           zum Faksimile aufgerufen werden kann.</p>\n        </div>\n        <p><img src=\"assets/support/faksimile_cc.png\" width=\"600px\" height=\"471px\"></p>\n        <h4>Seiteninformation</h4>\n        <p><img src=\"assets/support/info.png\" width=\"600px\" height=\"563px\"></p>\n        <div class=\"text\">\n           <p>Die Seiteninformation wird von unten eingeblendet und zeigt (falls vorhanden): </p>\n               <ul>\n                  <li>Druckorte: Es werden  die Druckorte f&uuml;r solche Aufzeichnungen angegeben, die als Vorlage f&uuml;r die\n                  „Nachgelassenen Fragmente“ in KGW VII 3 und KGW VIII 1-3, f&uuml;r die „Vorstufen“ und „Fassungen“ in KGW\n                  VII 4/2 und KSA und f&uuml;r in die Brief&shy;wechsel&shy;ausgabe &uuml;bernommenen „Briefentw&uuml;rfe“ in KGB interpretiert\n                  werden konnten.  </li>\n                  <li>Kritische Anmerkungen: \n                     Es werden kritische Anmerkungen zur Seite mitgeteilt, deren Art und Anzahl\n                  sich auch subjektiven Entscheidungen verdanken. Ist die vor dem Lemma stehende Zeilenzahl unterstrichen\n                  so bezieht sich die Mitteilung auf ein &uuml;berschriebenes Wort der entsprechenden Zeile.<br>\n                  Mit „?“ wird auf unsichere Entzifferungen hingewiesen, mit „¿“ auf stark verschliffene oder atypische (in\n                  der Transkription nicht wiedergegebene, durch roten Fettdruck hervorgehobene) Schreibweisen und mit „Vk“ auf\n                  (ebenfalls durch roten Fettdruck hervorgehobene) Verdeutlichungskorrekturen im Manuskript, die wohl eine leichtere\n                  Lesbarkeit auch f&uuml;r den Schreiber bewirken sollten.<br>\n                  Schreibfehler werden nur dort nach „&gt;“ von den Herausgebern korrigiert (beziehungsweise nach „&gt;?“ bei\n                  einem aus mehreren m&ouml;glichen Verbesserungen gew&auml;hlten Vorschlag), wo sie als Lesehilfen n&ouml;tig erscheinen;\n                  ebenso wird bei Aufl&ouml;sungen von Abk&uuml;rzungen verfahren.<br>\n                  Insbesondere die bei Änderungen im Manuskript nicht systematisch durchgef&uuml;hrten grammatikalischen\n                  Anpassungen sind in diesen Anmerkungen nicht erg&auml;nzt; der Ausdruck „nach unvollst&auml;ndiger Korrektur des\n                  Kontextes &gt;“ macht aber  auf den Umstand aufmerksam, daß ein im Manuskript nicht verbesserter Schriftzug dank seiner Gestalt\n                  schon als die von den Herausgebern mitgeteilte, dem korrigierten Kontext entsprechende Lesart interpretiert\n                  werden kann.<br>\n                  Um nicht die Koh&auml;renz von Aufzeichnungen zu konstituieren, wo sie allenfalls thematisch naheliegt, von\n                  der Manuskriptgestalt her aber nicht gesichert ist, werden solche Fortsetzungen  oder vermuteteten Fortsetzungen, in Abgrenzung von\n                  durch die Anschlusspfeile behaupteten Schreibverl&auml;ufen, nur in den Seiteninformationen mitgeteilt.\n                  </li>\n                  <li>Querverweise: per Klick wird der Eintrag im Untermenu <a [routerLink]=\"['./']\" fragment=\"Digitale_Edition_Querverweise\">Querverweise</a> ge&ouml;ffnet</li>\n                  <li>Manuskriptbeschreibung</li>\n               </ul>\n        </div>\n        <h4>Tooltip</h4>\n        <p><img src=\"assets/support/tooltip.png\" width=\"600px\" height=\"248px\"></p>\n        <div class=\"text\">\n           <p>Der Tooltip zeigt folgende Informationen:</p>\n           <ul>\n               <li>W&ouml;rter: Wort, Kritische Anmerkungen, Korrekturverlauf, &Uuml;berschreibungen. Die auf der Transkription\n               verwendete Farbe zur Darstellung des Wortes wird wegen der Sichtbarkeit auf dunklem Hintergrund invertiert.</li>\n               <li>Bearbeitungsspuren fremder H&auml;nde: Inhalt und Schreibmittel (<i>kursiv</i>) vor violettem Hintergrund</li>\n               <li>Anschlusspfeile: Zeilenreferenz und Vorschau auf Zeileninhalt</li>\n           </ul>\n        </div>\n        <subheading title=\"Querverweise\" [(tableOfContents)]=\"titles\"></subheading>\n        <p>Die Ansicht <b>Querverweise</b> zeigt entweder alle Querverweise der ausgew&auml;hlten archivalischen Manuskripteinheit oder der ausgew&auml;hlten Seite. </p>\n        <h4>Querverweise einer Manuskripteinheit</h4>\n        <p><img src=\"assets/support/querverweise_manuscript.png\" width=\"600px\" height=\"615px\"></p>\n        <h4>Querverweise einer Seite</h4>\n        <p>In dieser Ansicht werden die textgenetischen Querverweise zu den Abschreibprozessen einer Seite angezeigt und die ausgew&auml;hlten Stellen &uuml;bereinander\n        zur vergleichenden Lekt&uuml;re dargestellt.</p>\n        <p><img src=\"assets/support/querverweise.png\" width=\"1200px\" height=\"538px\"></p>\n        <p>Legende:</p>\n        <ol>\n           <li>Vollbildansicht ein/aus</li>\n           <li>Zeige alle Querverweise der ausgew&auml;hlten Manuskripteinheit</li>\n           <li>Die ausgew&auml;hlte Seite in der Seitenansicht &ouml;ffnen</li>\n           <li>Zoom</li>\n           <li>Suche: Text wird auf ausgew&auml;hlten Stellen angezeigt. &Uuml;ber das Symbol <mat-icon inline=\"true\">search</mat-icon> kann die Volltextsuche <b>Suche</b>\n           aufgerufen werden.</li>\n           <li>Darstellung des Abschreibeverh&auml;ltnis der Textstellen. Die Textstellen k&ouml;nnen &uuml;ber die Kacheln \n              ein- bzw. ausgeblendet werden.</li>\n           <li>Anzeige der ausgew&auml;hlten Textstellen zur vergleichenden Lekt&uuml;re:\n              <ul>\n                 <li><span class=\"roman\">a</span>: Seitenidentifikation</li>\n                 <li><span class=\"roman\">b</span>: Identifikation der Textstelle</li>\n              </ul>\n           </li>\n        </ol>\n        <subheading title=\"Suche\" [(tableOfContents)]=\"titles\"></subheading>\n        <div class=\"text\">\n        <p>Die Suche kann als Volltextsuche verwendet werden. Allerdings\n        erfolgt die Suche auf einer nicht-linearisierten Transkription. Damit\n        nun aber dennoch Phrasen aufgefunden werden k&ouml;nnen, wurden f&uuml;r\n        jede Seite mittels <i>Machine Reasoning</i> pseudo-lineare Texte erzeugt. In einem ersten Schritt wird\n        in diesen nach der exakten Phrase gesucht. In einem zweiten Schritt\n        werden die entsprechenden nicht-linearen Transkriptionen f&uuml;r die\n        gefundenen pseudo-linearen Texte angezeigt.  Dabei kann nicht\n        garantiert werden, dass jede in den Manuskripten enthaltene Phrase\n        tats&auml;chlich gefunden wird. \n        </p>\n        </div>\n        <p><img src=\"assets/support/search.png\" width=\"1200px\" height=\"237px\"></p>\n        <p>Legende:</p>\n        <ol>\n            <li>Navigationsleiste ein-/ausblenden</li>\n            <li>Vollbild ein-/ausblenden</li>\n            <li>Zoom</li>\n            <li>Eingabe der zu suchenden Phrase. Mit Enter oder per Klick auf das Symbol <mat-icon inline=\"true\">search</mat-icon> wird die Suche ausgef&uuml;hrt.</li>\n            <li><b>Optionen</b></li>\n            <li>Anzeige der Treffermenge</li>\n            <li>Seitenidentifikation f&uuml;r Seiten mit Treffer</li>\n            <li>Hervorhebung der gesuchten W&ouml;rter</li>\n        </ol>\n        <h5>Optionen</h5>\n        <p><img src=\"assets/support/search_options_rects.png\" width=\"600px\" height=\"433px\"></p>\n        <p>Legende:</p>\n        <ol>\n            <li>Gro&szlig;- und Kleinschreibung ignorieren: ein/aus</li>\n            <li>Einschr&auml;nkung des Korpus auf ausgew&auml;hlte Manuskripteinheiten. (Ohne Auswahl wird in allen Manuskripteinheiten gesucht)</li>\n        </ol>\n        <subheading title=\"Datenabfrage\" [(tableOfContents)]=\"titles\"></subheading>\n        <div class=\"text\">\n        <p>Die <b>Datenabfrage</b> erlaubt, per Menu komplexe Anfragen zu den Eigenschaften der transkribierten W&ouml;rtern zusammenzustellen und auszuf&uuml;hren.\n        Die Anfrage selektiert alle W&ouml;rter, die &uuml;ber die ausgew&auml;hlten Eigenschaften verf&uuml;gen.\n        Dabei k&ouml;nnen die Resultate erstens in einer Tabelle angezeigt, in der sie in ein quantitatives Verh&auml;hltnis zu den W&ouml;rtern gesetzt\n        werden, die nicht &uuml;ber diese Eigenschaften verf&uuml;gen,  zweitens als Rohdaten aufgelistet und drittens als CSV- oder JSON-Datei heruntergeladen werden.\n        </p>\n        </div>\n        <p><img src=\"assets/support/quant_overview_boxes.png\" width=\"600px\" height=\"279px\"></p>\n        <p>Legende:</p>\n        <ol>\n            <li>Navigationsleiste ein-/ausblenden</li>\n            <li>Vollbild ein-/ausblenden</li>\n            <li><b>Worteigenschaften</b>: Zum Ausw&auml;hlen aufklappen</li>\n            <li><b>Wortfilter</b>: Falls W&ouml;rter vorg&auml;ngig durch Anklicken ausgew&auml;hlten wurden, k&ouml;nnen deren IRIs hier als Filter verwendet werden\n               (siehe <a [routerLink]=\"['./']\" fragment=\"Hint\" [queryParams]=\"queryParams\">Hinweise</a>).</li>\n            <li>Einschr&auml;nkung des <b>Korpus</b> auf ausgew&auml;hlte Manuskripteinheiten. (Ohne Auswahl bezieht sich die Anfrage auf alle Manuskripteinheiten)</li>\n            <li><b>SPARQL-Query</b>: Aufklappen zur Bearbeitung der Anfrage in SPARQL (Optional)</li>\n            <li>Im Reiter <b>Tabelle</b> werden die Resultate in ihrem quantitativen Verh&auml;hltnis zu anderen Daten dargestellt.</li>\n            <li>Im Reiter <b>Rohdaten</b> werden die Resultate in ihrer unmittelbaren Form pr&auml;sentiert.</li>\n            <li>Im Reiter <b>Datenmodell</b> kann das Datenmodell, auf dem die Daten beruhen, angezeigt werden. Dies ist etwa hilfreich,\n            wenn man die SPARQL-Query selbst bearbeiten m&ouml;chte.</li>\n        </ol>\n        <h5>Worteigenschaften</h5>\n        <div class=\"text\">\n           <p>Im Dialogpanel <b>Worteigenschaften</b> lassen sich diejenigen Eigenschaften ausw&auml;hlen, f&uuml;r die ein Wort \n           selektiert werden soll.\n            </p>\n        </div>\n        <p><img src=\"assets/support/quant_attributes_boxes.png\" width=\"600px\" height=\"426px\"></p>\n        <p>Legende:</p>\n        <ol>\n            <li>Selektiert alle W&ouml;rter, f&uuml;r die es eine fr&uuml;here Schreibversion gibt.</li>\n            <li>Selektiert alle W&ouml;rter, die von Nietzsche gestrichen wurden.</li>\n            <li>Selektiert alle W&ouml;rter, die von Nietzsche korrigiert wurden.</li>\n            <li>Selektiert alle W&ouml;rter, die ein anderes Wort &uuml;berschreiben.</li>\n            <li>Selektiert alle W&ouml;rter, deren Wortstreichung von Nietzsche aufgehoben wurde.</li>\n            <li>Selektiert alle W&ouml;rter, die diesem <a href=\"https://de.wikipedia.org/wiki/Regul%C3%A4rer_Ausdruck\">regul&auml;ren Ausdruck</a> entsprechen. \n               Im einfachsten Fall ist der regul&auml;re Ausdruck identisch bzw. ein Teil des Wortes.</li>\n            <li>Als Datengrundlage W&ouml;rter mit bzw. ohne Satzzeichen verwenden.</li>\n            <li>Als Datengrundlage edierte bzw. unedierte  W&ouml;rter verwenden. Bei edierten W&ouml;rtern handelt\n            es sich einerseits um Korrekturen von Schreibfehlern durch die Editoren und andererseits um automatisch\n            er&shy;zeugte Wortkorrekturen wie etwa der Entfernung des Trennzeichens bei W&ouml;rtern, die &uuml;ber die Zeile hinaus verlaufen.</li>\n            <li>Anfrage absenden: &Uuml;ber diesen Knopf kann die Anfrage abgesendet werden.</li>\n        </ol>\n        <h5>Wortfilter</h5>\n        <div class=\"text\">\n           <p>Im Dialogpanel <b>Wortfilter</b> k&ouml;nnen die <a href=\"https://datatracker.ietf.org/doc/html/rfc3987\">IRIs</a> \n           der vorg&auml;ngig durch Anklicken selektierten W&ouml;rter als Filter f&uuml;r die Anfrage ausgew&auml;hlt werden.</p>\n        </div>\n        <p><img src=\"assets/support/quant_filter_box.png\" width=\"600px\" height=\"311px\"></p>\n        <h5>SPARQL-Query</h5>\n        <div class=\"text\">\n           <p>Im Dialogpanel <b>SPARQL-Query</b> kann die Anfrage direkt als SPARQL-Query bearbeitet werden.\n            </p>\n        </div>\n        <p><img src=\"assets/support/query_overview_boxes.png\" width=\"600px\" height=\"294px\"></p>\n        <p>Legende:</p>\n        <ol>\n            <li>Anfrage abschicken.</li>\n            <li>Anfrage zur&uuml;cksetzen: Anfrage im Zustand der Auswahl durch <b>Worteigenschaften</b> wiederherstellen.</li>\n            <li>SPARQL-Query f&uuml;r Kommandozeilenanfrage mittels <i>curl</i></li>\n            <li>Kommandozeilenanfrage kopieren</li>\n        </ol>\n        <h5>Tabelle</h5>\n        <div class=\"text\">\n           <p>Die <b>Tabelle</b> zeigt die Resultate der Anfrage. Dabei werden die W&ouml;rter mit den ausgew&auml;hlten\n           Eigenschaften in ein quantitatives Verh&auml;hltnis zu den W&ouml;rtern ohne diese Eigenschaften gesetzt.\n            </p>\n        </div>\n        <p><img src=\"assets/support/quant_tabelle_boxes.png\" width=\"1200px\" height=\"771px\"></p>\n        <p>Legende:</p>\n        <ol>\n            <li>Information zu den Resultaten: Anzahl Resultate (Anzahl Wortvorkommnisse mit Eigenschaften vs. alle Wortvorkommnisse).\n               Dabei bezeichnen die Resultate die Anzahl Worte (<i>types</i>) im Unterschied zu den Wortvorkommnissen (<i>tokens</i>).\n            </li>\n            <li>Filter: Wortfilter mittels Zeichenkette</li>\n            <li>Resultate exportieren: Rohdaten als CSV- oder JSON-Datei exportieren</li>\n            <li>Wort: Diese Spalte zeigt die W&ouml;rter (<i>types</i>) mit den ausgew&auml;hlten Eigenschaften.</li>\n            <li>Anzahl mit Eigenschaften (einfach): Anzahl Vorkommnisse (<i>tokens</i>) mit den ausgew&auml;hlten Eigenschaften (Einfachz&auml;hlung).</li>\n            <li>% Wortanteil: Prozentualer Anteil der Vorkommnisse (<i>tokens</i>) mit den ausgew&auml;hlten Eigenschaften gegen&uuml;ber aller Vorkommnissen dieses Wortes.</li>\n            <li>% aller W&ouml;rter: Prozentualer Anteil der Vorkommnisse (<i>tokens</i>) mit den ausgew&auml;hlten Eigenschaften gegen&uuml;ber aller Wortvorkommnissen.</li>\n            <li>Anzahl mit Eigenschaften (mehrfach): Anzahl Vorkommnisse (<i>tokens</i>) mit den ausgew&auml;hlten Eigenschaften. Mehrfachz&auml;hlung: Ein Wortvorkommnis wird mehr als einmal gez&auml;hlt, wenn es die ausgew&auml;hlte Eigeschaft mehrfach besitzt. Bsp.: Ein zweifach gestrichenes Wort wird zweimal gez&auml;hlt, wenn die Eigenschaft \"Wort ist gestrichen\" ausgew&auml;hlt wird. </li>\n            <li>Anzahl Total: Anzahl der Vorkommnisse diese Wortes insgesamt.</li>\n            <li>% aller W&ouml;rter: Prozentualer Anteil der Vorkommnisse dieses Wortes gegen&uuml;ber allen Wortvorkommnissen.</li>\n            <li>Items per Page: Auswahl der Anzahl Resultate, die pro Seite angezeigt werden.</li>\n            <li>Anzeige der Anzahl Resultate, die auf dieser Seite angezeigt werden vs. aller Resultate</li>\n            <li>Navigation der Resultateseitenanzeige</li>\n        </ol>\n        <h5>Rohdaten</h5>\n        <div class=\"text\">\n           <p>Die <b>Rohdaten</b> zeigt die Resultate der Anfrage in der Weise, wie sie vom Fuseki Server als Antwort auf \n           die Anfrage gegeben werden. \n            </p>\n        </div>\n        <p><img src=\"assets/support/quant_rawdata_boxes.png\" width=\"1200px\" height=\"759px\"></p>\n        <p>Legende:</p>\n        <ol>\n            <li>Resultate exportieren: Rohdaten als CSV- oder JSON-Datei exportieren</li>\n            <li>id: In dieser Spalte wird das Wort des Resultates angezeigt (<i>type</i>).</li>\n            <li>word: In dieser Spalte wird die Referenz auf das Wortvorkommnis angezeigt</li>\n            <li>numText: Anzahl der Wortvorkommnisse insgesamt</li>\n            <li>total: Anzahl aller Wortvorkommnisse</li>\n            <li>Items per Page: Auswahl der Anzahl Resultate, die pro Seite angezeigt werden.</li>\n            <li>Anzeige der Anzahl Resultate, die auf dieser Seite angezeigt werden vs. aller Resultate</li>\n            <li>Navigation der Resultateseitenanzeige</li>\n        </ol>\n        <h5>Datenmodell</h5>\n        <div class=\"text\">\n           <p>Im Reiter <b>Datenmodell</b> wird das Datenmodell dargestellt, auf dem die Daten der digitalen Edition beruhen. Dieses\n           Datenmodell kann genutzt werden, um die SPARQL-Query abzu&auml;ndern oder um eine solche Anfrage von Grund auf auszuarbeiten.\n            </p>\n        </div>\n        <p><img src=\"assets/support/ontology.png\" width=\"900px\" height=\"607px\"></p>\n        <heading title=\"Daten\" [(tableOfContents)]=\"titles\"></heading>\n        <div class=\"text\">\n           <p>Hier lassen sich die <b>Daten</b> der digitalen Edition abfragen. Im Reiter\n           <b>Datenabfrage</b>\n           erscheinen dazu vorbereitete Anfragen und ein Textfeld f&uuml;r eigene SPARQL-Anfragen. Im Reiter\n           <b>Datenmodell</b>\n           wird das Datenmodell dargestellt, auf dem die Daten der digitalen Edition beruhen. Dieses\n           Datenmodell kann genutzt werden, um die SPARQL-Query abzu&auml;ndern oder um eine solche Anfrage von Grund auf auszuarbeiten.\n           </p>\n        </div>\n        <p><img src=\"assets/support/data_overview.png\" width=\"600px\" height=\"503px\"></p>\n        <div class=\"text\">\n           <p>Wird eine vorbereitete Anfrage in der Auswahl <i>Query ausw&auml;hlen</i> ausgew&auml;hlt,\n           dann erscheint sie in Form einer SPARQL-Query im Textfeld. Diese kann entweder bearbeitet \n           oder per <i>Play-Button</i> abgesendet werden.\n           </p>\n        </div>\n        <p><img src=\"assets/support/data_selected.png\" width=\"600px\" height=\"392px\"></p>\n        <div class=\"text\">\n           <p>Die Resultate der Anfrage erscheinen in einer Tabelle. Ausserdem lassen sie sich im CSV- oder JSON-Format\n           exportieren. </p>\n        </div>\n        <p><img src=\"assets/support/data_results.png\" width=\"600px\" height=\"617px\"></p>\n        <div class=\"text\">\n           <p>Handelt es sich bei dem Inhalt einer Spalte um die <a href=\"https://datatracker.ietf.org/doc/html/rfc3987\">IRIs</a>\n           einer archivalischen Manuskripteinheit, einer Seite oder eines Wortes, dann werden diese zur besseren Lesbarkeit\n           aufgel&ouml;st. Mittels <i>Slider</i> kann aber zwischen der Rohdarstellung und der aufgel&ouml;sten Darstellung gewechselt werden.\n           &Uuml;ber die Kn&ouml;pfe  <mat-icon inline=\"true\">chrome_reader_mode</mat-icon> (im gleichen Tab) und <mat-icon inline=\"true\">launch</mat-icon> (in neuem Tab)\n           lassen sich die  einzelnen <a href=\"https://datatracker.ietf.org/doc/html/rfc3987\">IRIs</a> als Teil der digitalen Edition anzeigen.\n           </p>\n        </div>\n        <p><img src=\"assets/support/data_iri.png\" width=\"600px\" height=\"180px\"></p>\n\n   </mat-card-content>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-crossref/navigation/navigation.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-crossref/navigation/navigation.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"navi\">\n   <toggle-navigation></toggle-navigation>\n   <button mat-icon-button *ngIf=\"current_page && geneticOrders.length > 0 && contextView == PAGE_CONTEXT_VIEW\" \n     [title]=\"'Alle Querverweise von ' + current_page.title + ' anzeigen'\" (click)=\"changeContext()\">\n      <mat-icon>auto_stories</mat-icon>\n   </button>\n   <button mat-icon-button *ngIf=\"current_page && contextView != PAGE_CONTEXT_VIEW\" \n     [title]=\"'Querverweise von ' + current_page.title + ' ' + current_page.number + ' anzeigen'\" (click)=\"changeContext()\">\n      <mat-icon>description</mat-icon>\n   </button>\n   <button *ngIf=\"current_page && contextView == PAGE_CONTEXT_VIEW\" \n     mat-icon-button [title]=\"current_page.title + ' ' + current_page.number +' in Seitenansicht anzeigen'\" (click)=\"setCurrentIri(current_page.id)\">\n      <mat-icon>chrome_reader_mode</mat-icon>\n   </button>\n   <zoom [useViewerZoom]=\"false\" [sliderOn]=\"false\" [step]=\"0.05\"></zoom>\n   <search *ngIf=\"contextView == PAGE_CONTEXT_VIEW && geneticOrders.length > 0\"></search>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-crossref/page-version-view/page-version-view.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-crossref/page-version-view/page-version-view.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-list role=\"list\" *ngIf=\"current_page_iri\">\n   <mat-list-item *ngFor=\"let geneticOrder of geneticOrders\">\n      <button mat-button title=\"Querverweis anzeigen\" (click)=\"openCrossRef(geneticOrder)\">\n      <span  *ngFor=\"let version of geneticOrder.textVersions; let i = index\">\n         <version-view [version]=\"version\" [current_iri]=\"current_page_iri\"></version-view>\n         <mat-icon *ngIf=\"i+1 < geneticOrder.textVersions.length\" [inline]=\"true\">east</mat-icon>\n      </span>\n      </button>\n   </mat-list-item>\n</mat-list>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-crossref/page-version-view/tln-page-version-view.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-crossref/page-version-view/tln-page-version-view.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<page-version-view \n   (textGenesisSelected)=\"textGenesisSelected.emit($event)\"\n   [current_page_iri]=\"current_iri\" [geneticOrders]=\"geneticOrders\">\n</page-version-view>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-crossref/tln-crossref.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-crossref/tln-crossref.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"page\">\n   <crossref-navigation></crossref-navigation>\n   <div *ngIf=\"current_manuscript && (geneticOrders.length == 0 || contextView == MANUSCRIPT_CONTEXT_VIEW)\" class=\"grid-container\">\n      <h2 class=\"page-crossref-title extra-space\">Querverweise: {{current_manuscript.title}}</h2>\n      <div *ngFor=\"let page of pagesWithGeneticOrder\">\n         <h4 class=\"page-crossref-title\">{{current_manuscript.title}} {{page.number}}</h4>\n         <tln-page-version-view \n             (textGenesisSelected)=\"textGenesisSelected.emit($event)\"\n             [queryService]=\"tlnQueryService\" [current_iri]=\"page.id\">\n         </tln-page-version-view>\n      </div>\n   </div>\n   <div *ngIf=\"current_page && contextView == PAGE_CONTEXT_VIEW && geneticOrders.length > 0\">\n      <h3 class=\"page-crossref-title\">Querverweise: {{current_page.title}} {{current_page.number}}</h3>\n      <page-version-view (textGenesisSelected)=\"textGenesisSelected.emit($event)\"\n                         [parentActivatedRoute]=\"activatedRoute.parent\" [current_page_iri]=\"current_page.id\"\n                         [geneticOrders]=\"geneticOrders | geneticOrderFilter:current_genetic_order_iri\"></page-version-view>\n   </div>\n   <div class=\"preview\" *ngIf=\"current_page && textVersions.length > 0 && contextView == PAGE_CONTEXT_VIEW\" [style.width.px]=\"previewWidth\">\n      <h4 *ngIf=\"geneticOrders.length > 1\">Ausgew&auml;hlte Querverweise</h4>\n      <div *ngFor=\"let version of textVersions; let i = index\">\n         <button mat-button [ngClass]=\"{'highlight': selectedTextVersions.indexOf(version) > -1 }\"\n                 [title]=\"getButtonTitle(version)\" (click)=\"addOrRemove(version)\">\n              <version-view [version]=\"version\"></version-view>\n              <mat-icon *ngIf=\"selectedTextVersions.indexOf(version) > -1\" [inline]=\"true\">close</mat-icon>\n              <mat-icon *ngIf=\"selectedTextVersions.indexOf(version) == -1\" [inline]=\"true\">chevron_right</mat-icon>\n          </button>\n          <div>\n             <mat-icon *ngIf=\"i+1 < textVersions.length\">south</mat-icon>\n          </div>\n      </div>\n   </div>\n   <div *ngIf=\"current_page && contextView == PAGE_CONTEXT_VIEW\" class=\"text\" [style.left.px]=\"previewWidth\" [style.width.px]=\"max_width+margin_width\">\n      <div class=\"page-view\" *ngFor=\"let version of selectedTextVersions\" [style.height.px]=\"each_version_height\">\n         <div class=\"text-navi\">\n           <button [title]=\"getButtonTitle(version)\" class=\"close-text\" mat-button (click)=\"addOrRemove(version)\">\n              <version-view [version]=\"version\"></version-view>\n              <mat-icon *ngIf=\"selectedTextVersions.indexOf(version) > -1\" [inline]=\"true\">close</mat-icon>\n           </button>\n         </div>\n         <div *ngFor=\"let textUnity of version.textUnities\">\n            <span class=\"mat-button default-mouse page-navi\">\n               <span>{{version.title}}, {{textUnity.number}}<span *ngIf=\"textUnity.startLine\">, {{textUnity.startLine}}-{{textUnity.endLine}}</span>\n               </span>\n               <open-in-viewer *ngIf=\"textUnity.hasFaksimileImage\"\n                  [routerInformation]=\"{ title: version.title, number: textUnity.number,\n                                         page: textUnity.belongsToPage ? textUnity.belongsToPage : textUnity.id,\n                                         manuscript: version.manuscript, launchExternally: false\n                  }\"></open-in-viewer>\n               <open-in-viewer *ngIf=\"textUnity.hasFaksimileImage\"\n                  [routerInformation]=\"{ title: version.title, number: textUnity.number,\n                                         page: textUnity.belongsToPage ? textUnity.belongsToPage : textUnity.id,\n                                         manuscript: version.manuscript, launchExternally: true\n                  }\"></open-in-viewer>\n            </span>\n            <div *ngIf=\"!textUnity.belongsToPage\">\n              <tln-page-view\n                 [page]=\"textUnity.id\"\n                 [multiInstanceMode]=\"true\"\n                 [selectedViewOption]=\"selectedViewOption\"\n                 [selectedLines]=\"selectedLines\"\n                 [queryService]=\"tlnQueryService\" [preferPrimaryUrl]=\"preferPrimaryUrl\"\n                 [max_width]=\"max_width\"></tln-page-view>\n            </div>\n            <div *ngIf=\"textUnity.belongsToPage\">\n              <tln-page-view *ngIf=\"textUnity.belongsToPage\"\n                 [multiInstanceMode]=\"true\"\n                 [startLine]=\"textUnity.startLineIri\"\n                 [endLine]=\"textUnity.endLineIri\"\n                 [page]=\"textUnity.belongsToPage\"\n                 [selectedViewOption]=\"selectedViewOption\"\n                 [selectedLines]=\"selectedLines\"\n                 [queryService]=\"tlnQueryService\" [preferPrimaryUrl]=\"preferPrimaryUrl\"\n                 [max_width]=\"max_width\" ></tln-page-view>\n            </div>\n        </div>\n        <div class=\"external\" [style.width.px]=\"max_width\" *ngIf=\"version.textUnities.length == 0 && version.extUrl\">\n           <a mat-button [href]=\"version.extUrl\" target=\"_new\">Text auf nietzschesource.org <mat-icon>link</mat-icon></a>\n        </div>\n      </div>\n   </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-crossref/version-view/version-view.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-crossref/version-view/version-view.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span *ngIf=\"version && version.title\">\n   {{version.title}}<span *ngIf=\"version.textUnities.length > 0\">,</span>\n   <span [ngClass]=\"{ 'highlight': current_iri != null && current_iri != undefined && (textUnity.id == current_iri || textUnity.belongsToPage == current_iri) }\"\n      *ngFor=\"let textUnity of version.textUnities; let j = index\">\n      {{textUnity.number}}<span *ngIf=\"textUnity.startLine && textUnity.endLine\">, {{textUnity.startLine}}-{{textUnity.endLine}}</span>\n      <span *ngIf=\"textUnity.startLine && j+1 < version.textUnities.length\">;</span>\n      <span *ngIf=\"!textUnity.startLine && j+1 < version.textUnities.length\">,</span>\n   </span>\n</span>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-fulltext/navigation/navigation.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-fulltext/navigation/navigation.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"navi\">\n   <toggle-navigation></toggle-navigation>\n   <zoom [useViewerZoom]=\"false\"></zoom>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-fulltext/tln-fulltext.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-fulltext/tln-fulltext.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"page\" #tooltipContainer>\n   <fulltext-navigation></fulltext-navigation>\n   <div class=\"search\" [style.width.px]=\"previewWidth\">\n      <mat-card>\n         <mat-card-header>\n            <mat-card-title>Suche<span *ngIf=\"searchTerm\">: <span class=\"small-grey\">{{searchTerm}}</span></span></mat-card-title>\n         </mat-card-header>\n         <mat-card-content>\n            <mat-form-field class=\"full-width\">\n               <mat-label>Text</mat-label>\n               <input matInput type=\"text\" [(ngModel)]=\"searchTerm\" (keydown.enter)=\"search()\" (keydown.esc)=\"clearFindText()\">\n                  <button mat-button *ngIf=\"searchTerm\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"clearFindText()\">\n                     <mat-icon>close</mat-icon>\n                  </button>\n            </mat-form-field>\n            <button mat-button (click)=\"search()\"><mat-icon>search</mat-icon></button>\n            <mat-expansion-panel [expanded]=\"expandOptions\">\n               <mat-expansion-panel-header>\n                   <mat-panel-title>Optionen</mat-panel-title>\n               </mat-expansion-panel-header>\n               <div class=\"korpus\">\n                  <mat-checkbox (change)=\"updateParams()\" \n                                [(ngModel)]=\"queryProps.ignoreCase\">\n                     Groß- und Kleinschreibung ignorieren\n                  </mat-checkbox>\n                  <h4>Korpus</h4>\n                  <mat-selection-list #scopus [(ngModel)]=\"queryProps.selectedManuscripts\" [compareWith]=\"isSelected\" (selectionChange)=\"updateParams()\">\n                     <mat-list-option *ngFor=\"let manuscript of manuscriptPages\" [value]=\"manuscript\">\n                        {{manuscript.title}}\n                     </mat-list-option>\n                  </mat-selection-list>\n               </div>\n            </mat-expansion-panel>\n            <div class=\"belowOptions\">\n               <mat-spinner *ngIf=\"startSearch && !resultsReceived && searchTerm\"></mat-spinner>\n               <div *ngIf=\"resultsReceived && searchTerm\">\n                  {{ pages | resultPipe }}\n               </div>\n            </div>\n            <mat-paginator *ngIf=\"!fullscreen && pages.length > paginatorResultStatus.resultLength\" \n                     [length]=\"pages.length\"\n                     [pageSize]=\"paginatorResultStatus.resultLength\"\n                     [pageIndex]=\"queryProps.resultIndex\"\n                     (page)=\"updateResultIndex($event)\">\n            </mat-paginator>\n         </mat-card-content>\n      </mat-card>\n   </div>\n   <div *ngIf=\"pages.length > 0\" class=\"text\" [style.left.px]=\"previewWidth+20\" [style.width.px]=\"max_width+margin_width-25\">\n      <div class=\"page-view\" *ngFor=\"let page of pages | pageResultFilter:paginatorResultStatus.resultRange\">\n           <span class=\"mat-button default-mouse page-navi\">\n               <span>{{page.title}}, {{page.number}}</span>\n               <open-in-viewer [routerInformation]=\"{ title: page.title, number: page.number, page: page.id,\n                               manuscript: page.manuscript, launchExternally: false }\"></open-in-viewer>\n               <open-in-viewer [routerInformation]=\"{ title: page.title, number: page.number, page: page.id,\n                               manuscript: page.manuscript, launchExternally: true }\"></open-in-viewer>\n           </span>\n           <tln-page-view *ngFor=\"let result of page.results\"\n              [page]=\"page.id\"\n              [multiInstanceMode]=\"true\"\n              [selectedViewOption]=\"selectedViewOption\"\n              [startLine]=\"result.getStartLine()\"\n              [endLine]=\"result.getEndLine()\"\n              [selectedWords]=\"result.getWords()\"\n              [max_width]=\"max_width\"></tln-page-view>\n      </div>\n      <mat-paginator *ngIf=\"pages.length > paginatorResultStatus.resultLength\" \n               [length]=\"pages.length\"\n               [pageSize]=\"paginatorResultStatus.resultLength\"\n               [pageIndex]=\"queryProps.resultIndex\"\n               (page)=\"updateResultIndex($event)\">\n      </mat-paginator>\n   </div>\n   <tool-tip [container]=\"tooltipContainer\" [menuOffsetPosition]=\"{x: 0, y: 0 }\"></tool-tip>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-information/footnote.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-information/footnote.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"editor_comment\" class=\"footnote\" \n   [style.backgroundColor]=\"highlighted ? 'yellow' : 'white'\"\n   (mouseenter)=\"onHover()\" (mouseleave)=\"offHover()\" (click)=\"selectItem()\">\n   <span *ngIf=\"editor_comment.tLine\" class=\"line\" \n     [ngClass]=\"{ 'space': editor_comment.tLine.number < 10 }\"\n     [ngStyle]=\"{ 'text-decoration': editor_comment.underlineLine ? 'underline': 'none' }\"\n   >{{editor_comment.tLine.number}}</span>\n   <span *ngIf=\"editor_comment.tLine\">:&nbsp;</span>\n   <span *ngIf=\"editor_comment.overwritten_text\">{{editor_comment.overwritten_text}} (<i>unter</i>&nbsp;</span>\n   <span *ngIf=\"editor_comment.word\">\n      <span class=\"word\" *ngIf=\"editor_comment.markups.length == 0\">{{editor_comment.text}}</span>\n      <ngx-mat-standoffMarkup-component class=\"word\" *ngIf=\"editor_comment.markups.length > 0\" \n            [text]=\"editor_comment.text\" [standOffMarkup]=\"editor_comment.markups\" [settings]=\"mySettings\">\n      </ngx-mat-standoffMarkup-component><span *ngIf=\"editor_comment.overwritten_text\">)</span>]\n   </span>\n   <span class=\"editor-type\" *ngIf=\"editorType\">\n      <i *ngIf=\"editorType == 'Clarification'\">Vk</i>\n      <span *ngIf=\"editorType == 'AtypicalWriting'\">¿</span>\n      <i *ngIf=\"editorType == 'UncertainDecipherment'\">?</i>\n      <i *ngIf=\"editorType == 'EditorCorrection' && editor_comment.correction\">\n         &gt;\n         <span *ngIf=\"editor_comment.isUncertain\">?</span> \n         {{editor_comment.correction}}\n      </i>\n   </span>\n   <span *ngIf=\"editorType && editor_comment.comment\">, </span>\n   <i class=\"editor-comment\" *ngIf=\"editor_comment.comment\">{{editor_comment.comment}}{{editor_comment.isUncertain ? '?' : ''}}</i>\n   <i class=\"editor-comment\" *ngIf=\"editor_comment.lineContinuationReference\">\n      Zeile {{ editor_comment.lineContinuationReference.isToRef ? 'wird fortgesetzt nach ' : 'ist eine Fortsetzung von ' }}\n      <b>{{editor_comment.lineContinuationReference.refTitle}} {{editor_comment.lineContinuationReference.refPageNumber}}, \n         {{editor_comment.lineContinuationReference.refLine}}</b>{{editor_comment.isUncertain ? '?' : ''}}\n   </i>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-information/imprint.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-information/imprint.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"imprintReference\" class=\"imprint\"\n   [style.backgroundColor]=\"highlighted ? 'yellow' : 'white'\"\n   (mouseenter)=\"hoverChanged(true)\" (mouseleave)=\"hoverChanged(false)\">\n   {{imprintReference}}\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-information/tln-information.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-information/tln-information.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"data.page\">\n   <h3>{{data.page.title}} {{data.page.number}}:</h3>\n   <h4 *ngIf=\"data.imprints.length > 0\">Druckort{{ data.imprints.length == 1 ? '' : 'e' }}:</h4>\n   <imprint *ngFor=\"let imprint of data.imprints\" \n      [imprint]=\"imprint\" [bottomSheetRef]=\"bottomSheetRef\" \n      [parentActivatedRoute]=\"data.parentActivatedRoute\" [targetRoute]=\"viewerRoute\"></imprint>\n   <h4 *ngIf=\"data.editor_comments.length > 0 || data.page_editor_comments.length > 0\">\n      Kritische Anmerkung{{ data.editor_comments.length + data.page_editor_comments.length > 1 ? 'en' : '' }}:\n   </h4>\n   <footnote *ngFor=\"let editor_comment of data.page_editor_comments\" \n      [editor_comment]=\"editor_comment\" [bottomSheetRef]=\"bottomSheetRef\" \n      [parentActivatedRoute]=\"data.parentActivatedRoute\" [targetRoute]=\"viewerRoute\"></footnote>\n   <footnote *ngFor=\"let editor_comment of data.editor_comments\" \n      [editor_comment]=\"editor_comment\" [bottomSheetRef]=\"bottomSheetRef\" \n      [parentActivatedRoute]=\"data.parentActivatedRoute\" [targetRoute]=\"viewerRoute\"></footnote>\n   <h4 class=\"rhizome\" *ngIf=\"data.geneticOrders.length > 0\">Querverweise:</h4>\n   <page-version-view [bottomSheetRef]=\"bottomSheetRef\" [parentActivatedRoute]=\"data.parentActivatedRoute\"\n                      [current_page_iri]=\"data.page.id\" [geneticOrders]=\"data.geneticOrders\"\n                      [targetRoute]=\"crossrefRoute\"></page-version-view>\n   <h4 *ngIf=\"data.manuscript_leaf\">Manuskriptbeschreibung</h4>\n   <div *ngIf=\"data.manuscript_leaf\" class=\"text\">\n      {{data.manuscript_leaf.description}}\n      <i *ngIf=\"data.manuscript_leaf.originally\">{{data.manuscript_leaf.originally}}</i>\n   </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-manuscript-view/tln-leaf-description.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-manuscript-view/tln-leaf-description.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"leaf\" *ngIf=\"manuscriptLeaf\">\n   <table>\n      <tr><td>\n         <table>\n            <tr>\n               <td *ngFor=\"let page of pages\">\n                  {{ page.title + \" \" + page.number }}\n                  <open-in-viewer class=\"nospace\" [routerInformation]=\"{ title: current_manuscript.title, number: page.number, page: page.id }\"></open-in-viewer>\n                  <open-in-viewer class=\"nospace\" [routerInformation]=\"{ title: current_manuscript.title, number: page.number, \n                                                                         page: page.id, launchExternally: true }\"></open-in-viewer>\n               </td>\n            </tr>\n            <tr>\n               <td *ngFor=\"let page of pages\">\n                  <img *ngIf=\"page.originalThumb\" (click)=\"navigate(page.id)\" class=\"thumbnail\" [src]=\"page.originalThumb\">\n                  <img *ngIf=\"!page.originalThumb\" (click)=\"navigate(page.id)\" class=\"thumbnail\" [src]=\"page.image\">\n               </td>\n            </tr>\n         </table>\n         </td>\n      </tr>\n      <tr>\n         <td class=\"text\">{{manuscriptLeaf.description}}</td>\n      </tr>\n      <tr>\n         <td class=\"text\" *ngIf=\"manuscriptLeaf.originally\"><i>{{manuscriptLeaf.originally}}</i></td>\n      </tr>\n   </table>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-manuscript-view/tln-manuscript-view.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-manuscript-view/tln-manuscript-view.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<toggle-navigation></toggle-navigation>\n<mat-card *ngIf=\"current_manuscript\">\n   <mat-card-header>\n      <mat-card-title *ngIf=\"current_manuscript.archivalicSignature\">{{current_manuscript.archivalicSignature}}</mat-card-title>\n      <mat-card-title *ngIf=\"!current_manuscript.archivalicSignature\">{{current_manuscript.title}}</mat-card-title>\n      <mat-card-subtitle *ngIf=\"current_manuscript.gsaSignature\">GSA-Signatur {{current_manuscript.gsaSignature}}</mat-card-subtitle>\n      <img  mat-card-avatar *ngIf=\"current_manuscript.thumbImage\" [src]=\"current_manuscript.thumbImage\"/>\n   </mat-card-header>\n   <mat-card-content *ngIf=\"earlierDescriptions.length > 0\">\n         <h4 mat-subheader>Fr&uuml;here Manuskriptbeschreibungen</h4>\n         <table>\n               <tr *ngFor=\"let earlierDescription of earlierDescriptions\">\n                  <td class=\"author\">{{earlierDescription.author}}:</td>\n                  <td class=\"text\">\n                     <span *ngIf=\"earlierDescription.markups.length == 0\">{{earlierDescription.text}}</span>\n                     <ngx-mat-standoffMarkup-component *ngIf=\"earlierDescription.markups.length > 0\"\n                        [settings]=\"mySettings\" \n                        [text]=\"earlierDescription.text\" \n                        [standOffMarkup]=\"earlierDescription.markups\"></ngx-mat-standoffMarkup-component>\n                     {{earlierDescription.citation}}\n                  </td>\n               </tr>\n         </table>\n   </mat-card-content>\n   <mat-card-content *ngIf=\"manuscriptDescription\">\n         <h4 mat-subheader *ngIf=\"current_manuscript.type == 'Mappe'\">Beschreibung der Archivmappe</h4>\n         <h4 mat-subheader *ngIf=\"current_manuscript.type != 'Mappe'\">Heftbeschreibung</h4>\n         <p class=\"text\">\n             <span *ngIf=\"manuscriptDescription.markups.length == 0\">{{manuscriptDescription.text}}</span>\n            <ngx-mat-standoffMarkup-component *ngIf=\"manuscriptDescription.markups.length > 0\"\n               [settings]=\"mySettings\" \n               [text]=\"manuscriptDescription.text\" \n               [standOffMarkup]=\"manuscriptDescription.markups\"></ngx-mat-standoffMarkup-component>\n         </p>\n   </mat-card-content>\n   <mat-card-content *ngIf=\"current_manuscript.archivalicSignature && current_manuscript.archivalicSignature != current_manuscript.title\">\n         <h4 mat-subheader>In {{current_manuscript.title}} wiedergegebene Manuskriptseiten</h4>\n         <span *ngFor=\"let page of pages; let i = index\">{{page.number}}\n            <open-in-viewer class=\"nospace\" [routerInformation]=\"{ title: current_manuscript.title, number: page.number, page: page.id }\"></open-in-viewer>\n            <open-in-viewer class=\"nospace\" [routerInformation]=\"{ title: current_manuscript.title, number: page.number, \n                                                                   page: page.id, launchExternally: true }\"></open-in-viewer>\n            <span *ngIf=\"i+1 < pages.length\">, </span></span>\n   </mat-card-content>\n   <mat-card-content *ngIf=\"reconstructedKonvolut\">\n         <h4 mat-subheader>Konvolute, Rekonstruktionen</h4>\n         <p class=\"text\" *ngIf=\"reconstructedKonvolut.description\">{{reconstructedKonvolut.description}}</p>\n        <!-- TODO: WAITING FOR DATA\n           <span *ngFor=\"let page of reconstructedKonvolut.pages; let i = index\">{{page.number}}\n            <button *ngIf=\"page.title\" mat-icon-button class=\"nospace\" \n                                    [title]=\"page.title + ' ' + page.number + ' in Seitenansicht &ouml;ffnen'\" \n                                    (click)=\"openInViewer(page.id)\"><mat-icon [inline]=\"true\">launch</mat-icon></button>\n            <span *ngIf=\"i+1 < reconstructedKonvolut.pages.length\">, </span></span>-->\n   </mat-card-content>\n   <mat-card-content *ngIf=\"manuscriptLeafs.length > 0\">\n         <h4 mat-subheader>Manuskriptbeschreibungen</h4>\n         <div *ngFor=\"let leaf of manuscriptLeafs\">\n            <tln-leaf-description [current_manuscript]=\"current_manuscript\" [manuscriptLeaf]=\"leaf\"></tln-leaf-description>\n         </div>\n   </mat-card-content>\n\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-navigation-elements/open-in-manuscript.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-navigation-elements/open-in-manuscript.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button  mat-icon-button *ngIf=\"routerInformation\" (click)=\"openInManuscript(routerInformation.launchExternally)\"  class=\"icon-button\"\n   [title]=\"!routerInformation.launchExternally ? routerInformation.title + ' in Manuskriptansicht öffnen': routerInformation.title + ' in neuem Tab in Manuskriptansicht öffnen'\">\n   <mat-icon *ngIf=\"routerInformation.launchExternally\" [inline]=\"true\">launch</mat-icon>\n   <mat-icon *ngIf=\"!routerInformation.launchExternally\" [inline]=\"true\">chrome_reader_mode</mat-icon>\n</button>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-navigation-elements/open-in-viewer.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-navigation-elements/open-in-viewer.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button  mat-icon-button (click)=\"openInViewer()\" \n   [title]=\"launch ? launchTitle : title\" class=\"icon-button\">\n   <mat-icon *ngIf=\"launch\" [inline]=\"true\">launch</mat-icon>\n   <mat-icon *ngIf=\"!launch\" [inline]=\"true\">chrome_reader_mode</mat-icon>\n</button>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-navigation-elements/search.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-navigation-elements/search.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-form-field class=\"search\">\n   <mat-label>Suche</mat-label>\n   <input matInput type=\"text\" [(ngModel)]=\"findText\" (ngModelChange)=\"updateParams()\" (keydown.esc)=\"clearFindText()\">\n      <button mat-button *ngIf=\"findText\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"clearFindText()\">\n         <mat-icon>close</mat-icon>\n      </button>\n      <button mat-button matSuffix mat-icon-button title=\"Volltextsuche\" aria-label=\"Volltextsuche\" (click)=\"openFulltextSearch()\">\n         <mat-icon>search</mat-icon>\n      </button>\n</mat-form-field>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-navigation-elements/toggle-navigation.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-navigation-elements/toggle-navigation.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button *ngIf=\"showNavBarOpenButton\" mat-button [title]=\"navBarOpenState ? 'Navigationsleiste aus' : 'Navigationsleiste ein'\" (click)=\"toggleNavDrawer()\">\n   <mat-icon class=\"mat-accent\">{{ navBarOpenState ? 'chevron_left' : 'chevron_right' }}</mat-icon>\n</button>\n<button mat-icon-button [title]=\"fullscreen ? 'Vollbild aus' : 'Vollbild ein'\" (click)=\"toggleFullscreen()\">\n   <mat-icon>{{ fullscreen ? 'fullscreen_exit' : 'fullscreen'}}</mat-icon>\n</button>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-navigation-elements/zoom.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-navigation-elements/zoom.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-slider *ngIf=\"sliderOn\" [thumbLabel]=\"!resetButtonOn\" \n   [displayWith]=\"formatLabel\" [(ngModel)]=\"zoomFactor\" (change)=\"setZoomFactor(zoomFactor)\"  step=\"0.01\" min=\"0.25\" max=\"5\"></mat-slider>\n<button mat-icon-button class=\"zoom zoom-out\" [title]=\"{ 'zoomFactor': zoomFactor, 'changeValue': step*-1} | zoomTitle\"\n                        (click)=\"setZoomFactor(zoomFactor+step*-1)\"><mat-icon>zoom_out</mat-icon></button>\n<button *ngIf=\"resetButtonOn\" mat-icon-button [ngClass]=\"{ 'zoom-in': zoomFactor < 1, 'zoom-out': zoomFactor > 1 }\" \n   title=\"Zoom zur&uuml;cksetzen\" (click)=\"setZoomFactor(1)\">{{zoomFactor * 100 | number:'1.0-0'}}%</button>\n<button mat-icon-button class=\"zoom zoom-in\" [title]=\"{ 'zoomFactor': zoomFactor, 'changeValue': step } | zoomTitle\" \n                     (click)=\"setZoomFactor(zoomFactor+step)\"><mat-icon>zoom_in</mat-icon></button>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-page-view.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-page-view.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div #tooltipContainer>\n   <page-view [assignClass]=\"assignClass\" [assignStyle]=\"assignStyle\" \n           [dontShowReference]=\"dontShowReference\" [rotation]=\"rotation\"\n           [configuration]=\"configuration\" [max_height]=\"max_height\"\n           [max_width]=\"max_width\" [showAllLines]=\"showAllLines\"\n           [findText]=\"findText\" [first_image]=\"image\" \n           [first_lines]=\"lines\" [first_words]=\"words\"  \n           [first_foreign_texts]=\"foreignTexts\" [second_foreign_texts]=\"second_foreignTexts\"\n           [second_image]=\"second_image\" [second_lines]=\"second_lines\" [second_words]=\"second_words\" \n           [selectedWords]=\"selectedWords\" [selectedLines]=\"selectedLines\"\n           [preferPrimaryUrl]=\"preferPrimaryUrl\" [zoomFactor]=\"zoomFactor\"></page-view>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-quant/export.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-quant/export.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span>\n   Resultate als  \n   <mat-form-field appearance=\"legacy\">\n      <mat-select [(ngModel)]=\"selectedExportFormat\">\n         <mat-option *ngFor=\"let exportFormat of availableExportFormats\" [value]=\"exportFormat\">{{exportFormat}}</mat-option>\n      </mat-select>\n   </mat-form-field>\n   <button mat-button (click)=\"export()\">exportieren</button>\n</span>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-quant/fuseki-table.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-quant/fuseki-table.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n   <mat-card-header>\n      <mat-card-subtitle>Fuseki Resultate</mat-card-subtitle>\n   </mat-card-header>\n   <mat-card-content *ngIf=\"fusekiResults.results.bindings.length > 0\">\n      <export [displayedColumns]=\"fusekiResults.head.vars\" [exportData]=\"fusekiResults.results.bindings\" [fusekiResults]=\"fusekiResults\"></export>\n      <table mat-table matSort (matSortChange)=\"sortData($event)\" \n         [dataSource]=\"fusekiResults.results.bindings | pageResultFilter:paginatorResultStatus.resultRange\" class=\"mat-elevation-z8\">\n         <ng-container matColumnDef=\"{{column}}\" *ngFor=\"let column of fusekiResults.head.vars\">\n             <th mat-header-cell mat-sort-header *matHeaderCellDef> {{column}} </th>\n             <td mat-cell *matCellDef=\"let element\">\n                <tln-type *ngIf=\"element[column]\" [input]=\"element[column].value\" [routePrefix]=\"routePrefix\"></tln-type>\n             </td>\n        </ng-container>\n        <tr mat-header-row *matHeaderRowDef=\"fusekiResults.head.vars\"></tr>\n        <tr mat-row *matRowDef=\"let element; columns: fusekiResults.head.vars;\"></tr>\n      </table>\n      <mat-paginator *ngIf=\"fusekiResults.results.bindings.length > paginatorResultStatus.resultLength\" \n               [length]=\"fusekiResults.results.bindings.length\"\n               [pageSize]=\"paginatorResultStatus.resultLength\"\n               [pageSizeOptions]=\"paginatorResultStatus.pageSizeOptions\"\n               [pageIndex]=\"paginatorResultStatus.resultIndex\"\n               [showFirstLastButtons]=\"true\"\n               (page)=\"paginatorResultStatus.showResults($event)\">\n      </mat-paginator>\n\n   </mat-card-content>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-quant/query-error.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-quant/query-error.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<textarea class=\"error\" cols=\"90\" rows=\"10\">{{data.error}}</textarea>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-quant/tln-data.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-quant/tln-data.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-tab-group>\n   <mat-tab label=\"Datenabfrage\">\n      <mat-card>\n         <mat-card-content>\n            <mat-form-field class=\"select\">\n                  <mat-label>Query ausw&auml;hlen</mat-label>\n                  <mat-select [(ngModel)]=\"selectedFileName\" (selectionChange)=\"openFile()\" [compareWith]=\"isSelected\">\n                     <mat-option *ngFor=\"let file of queryFiles\" [value]=\"file.filename\">\n                        {{file.label}}: <i>{{file.description}}</i>\n                     </mat-option>\n                  </mat-select>\n            </mat-form-field>\n            <ngx-codemirror\n                 [(ngModel)]=\"query\"\n                 (ngModelChange)=\"queryChanged(false)\"\n                 [options]=\"{\n                   lineNumbers: true,\n                   theme: 'material',\n                   mode: 'sparql'\n                 }\"\n            ></ngx-codemirror>\n            <div>\n               <button mat-icon-button (click)=\"send()\"  [disabled]=\"isLoadingResults\" title=\"Query abschicken\">\n                  <mat-icon *ngIf=\"!queryHasSyntaxError\">play_arrow</mat-icon>\n                  <mat-icon *ngIf=\"queryHasSyntaxError\" matBadge=\"!\" matBadgeColor=\"warn\">play_arrow</mat-icon>\n               </button> \n               <button mat-icon-button [disabled]=\"!selectedFileName\"\n                       (click)=\"queryChanged(true)\"\n                       title=\"Query zur&uuml;cksetzen\">\n                  <mat-icon>undo</mat-icon>\n               </button> \n               <textarea  #curlQueryInput cols=\"50\" rows=\"1\" [(ngModel)]=\"curlQuery\"></textarea>\n               <button mat-icon-button (click)=\"copyToClipboard(curlQueryInput)\" title=\"CURL-Query zum Clipboard kopieren\"><mat-icon>note_alt</mat-icon></button>\n               <!--TODO: update to @angular/common@\"^10.0.0 : <button [cdkCopyToClipboard]=\"curlQuery\">Copy to clipboard</button>-->\n            </div>\n         </mat-card-content>\n         <button mat-button (click)=\"cancel()\" *ngIf=\"isLoadingResults\">Anfrage abbrechen</button> \n         <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n      </mat-card>\n      <mat-card *ngIf=\"fusekiResults\">\n         <mat-card-header>\n            <mat-card-title>Resultate</mat-card-title>\n         </mat-card-header>\n         <mat-card-content>\n            <fuseki-table *ngIf=\"fusekiResults\" [fusekiResults]=\"fusekiResults\" [routePrefix]=\"routePrefix\">\n            </fuseki-table>\n         </mat-card-content>\n      </mat-card>\n   </mat-tab>\n   <mat-tab label=\"Datenmodell\">\n      <tln-ontology-viewer></tln-ontology-viewer>\n   </mat-tab>\n</mat-tab-group>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-quant/tln-ontology-viewer.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-quant/tln-ontology-viewer.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngFor=\"let ontology of ontologies\">\n   <ontology-viewer [baseUrl]=\"baseUrl\" [ontology]=\"ontology\" [namespaces]=\"ontologies | ontologies2namespaces:namespaces\"></ontology-viewer>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-quant/tln-quant.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-quant/tln-quant.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n   <mat-card-header>\n      <mat-card-title>Quantitative Wortabfrage</mat-card-title>\n   </mat-card-header>\n   <mat-card-content>\n      <mat-accordion class=\"headers-align\" multi>\n         <mat-expansion-panel [expanded]=\"quantAccordionStatus.wordProperties.expanded\" [disabled]=\"quantAccordionStatus.wordProperties.disabled\"\n                     (closed)=\"quantAccordionStatus.wordProperties.expanded = false\" (opened)=\"quantAccordionStatus.wordProperties.expanded = true\">\n             <mat-expansion-panel-header>\n                <mat-panel-title>Worteigenschaften</mat-panel-title>\n                <mat-panel-description *ngIf=\"!quantAccordionStatus.wordProperties.expanded && !quantAccordionStatus.wordProperties.disabled\">\n                   Eigenschaften f&uuml;r Anfrage ausw&auml;hlen\n                </mat-panel-description>\n            </mat-expansion-panel-header>\n            <mat-selection-list #properties [(ngModel)]=\"quantQuery.selectedWordProperties\" [compareWith]=\"isSelected\" (selectionChange)=\"updateQuery('properties')\">\n               <mat-list-option *ngFor=\"let wordProperty of wordProperties\" [value]=\"wordProperty\">\n                  {{wordProperty.label}}\n               </mat-list-option>\n            </mat-selection-list>\n            <mat-form-field class=\"form\" appearance=\"fill\">\n              <mat-label>Wort hat Text (regex)</mat-label>\n              <input matInput type=\"text\" [(ngModel)]=\"quantQuery.text\" (ngModelChange)=\"updateQuery('text')\">\n              <button mat-button matSuffix *ngIf=\"quantQuery.text\" mat-icon-button aria-label=\"Clear\" (click)=\"quantQuery.text = '';updateQuery('clearText')\">\n                 <mat-icon>close</mat-icon>\n              </button>\n            </mat-form-field>\n            <mat-checkbox *ngIf=\"quantQuery.text\" (change)=\"updateQuery('ignoreCase')\" \n                          [(ngModel)]=\"quantQuery.ignoreCase\">\n               Groß- und Kleinschreibung ignorieren\n            </mat-checkbox>\n            <div class=\"text-quality\">\n               <mat-radio-button class=\"text-quality\" \n                                 [checked]=\"quantQuery.textQuality.clean\" value=\"true\" (change)=\"updateTextQuality($event.value == 'true', quantQuery.textQuality.preferEditedText)\">\n                  Text ohne Satzzeichen\n\n               </mat-radio-button>\n               <mat-radio-button class=\"text-quality\" value=\"false\"\n                                 [checked]=\"!quantQuery.textQuality.clean\" (change)=\"updateTextQuality($event.value == 'true', quantQuery.textQuality.preferEditedText)\">\n                  Text mit Satzzeichen</mat-radio-button>\n               <mat-slide-toggle class=\"text-quality\" \n                                 [(ngModel)]=\"quantQuery.textQuality.preferEditedText\" \n                                 (ngModelChange)=\"updateTextQuality(quantQuery.textQuality.clean, quantQuery.textQuality.preferEditedText)\">\n                                 Edierter Text bevorzugen\n               </mat-slide-toggle>\n            </div>\n            <button mat-button (click)=\"send()\" [disabled]=\"isLoadingResults\">Anfrage abschicken</button> \n         </mat-expansion-panel>\n         <mat-expansion-panel *ngIf=\"selected_words.length > 0\" [expanded]=\"quantAccordionStatus.selected_words.expanded\" [disabled]=\"quantAccordionStatus.selected_words.disabled\"\n                     (closed)=\"quantAccordionStatus.selected_words.expanded = false\" (opened)=\"quantAccordionStatus.selected_words.expanded = true\">\n            <mat-expansion-panel-header>\n                <mat-panel-title>Wortfilter</mat-panel-title>\n                <mat-panel-description *ngIf=\"!quantAccordionStatus.selected_words.expanded && !quantAccordionStatus.selected_words.disabled \">\n                   <span *ngIf=\"quantQuery.selectedWordIds && quantQuery.selectedWordIds.length > 0\">Anfrage wird auf ausgew&auml;hlte Word IDs hin gefiltert.</span>\n                   <span *ngIf=\"!quantQuery.selectedWordIds || quantQuery.selectedWordIds.length < 1\">Anfrage auf ausgew&auml;hlte Word IDs hin filtern.</span>\n                </mat-panel-description>\n            </mat-expansion-panel-header>\n            <mat-selection-list #selectedWordIds class=\"select-words\" [(ngModel)]=\"quantQuery.selectedWordIds\" [compareWith]=\"isWordIdSelected\" (selectionChange)=\"updateQuery('selected_words')\">\n               <mat-list-option *ngFor=\"let word of selected_words\" [value]=\"word\">\n                  <tln-type [routePrefix]=\"routePrefix\" [input]=\"word\" [show_reference_and_id]=\"true\"></tln-type>\n               </mat-list-option>\n            </mat-selection-list>\n            <button mat-button (click)=\"send()\" [disabled]=\"isLoadingResults\">Anfrage abschicken</button> \n         </mat-expansion-panel>\n         <mat-expansion-panel [expanded]=\"quantAccordionStatus.scopus.expanded\" [disabled]=\"quantAccordionStatus.scopus.disabled\"\n                     (closed)=\"quantAccordionStatus.scopus.expanded = false\" (opened)=\"quantAccordionStatus.scopus.expanded = true\">\n            <mat-expansion-panel-header>\n                <mat-panel-title>Korpus</mat-panel-title>\n                <mat-panel-description *ngIf=\"!quantAccordionStatus.scopus.expanded && !quantAccordionStatus.scopus.disabled\">\n                   Anfrage {{ quantQuery.selectedManuscripts.length == 1 ? \n                   'ist auf ' + quantQuery.selectedManuscripts[0].title + ' beschr&auml;nkt' \n                   : 'auf ausgew&auml;hlte Manuskripte beschr&auml;nken' }}\n                </mat-panel-description>\n            </mat-expansion-panel-header>\n            <mat-selection-list class=\"scopus\" #scopus [(ngModel)]=\"quantQuery.selectedManuscripts\" [compareWith]=\"isSelected\" (selectionChange)=\"updateQuery('scopus')\">\n               <mat-list-option *ngFor=\"let manuscript of manuscriptPages\" [value]=\"manuscript\">\n                  {{manuscript.title}}\n               </mat-list-option>\n            </mat-selection-list>\n            <button mat-button (click)=\"send()\" [disabled]=\"isLoadingResults\">Anfrage abschicken</button> \n         </mat-expansion-panel>\n         <mat-expansion-panel [expanded]=\"quantAccordionStatus.query.expanded\" \n                     (closed)=\"quantAccordionStatus.query.expanded= false\" (opened)=\"quantAccordionStatus.query.expanded = true\">\n            <mat-expansion-panel-header>\n                <mat-panel-title>SPARQL-Query</mat-panel-title>\n                <mat-panel-description *ngIf=\"!quantAccordionStatus.query.expanded\">Query bearbeiten</mat-panel-description>\n            </mat-expansion-panel-header>\n            <ngx-codemirror\n                 [(ngModel)]=\"query\"\n                 (ngModelChange)=\"toggleEnableSelectionList(false)\"\n                 [options]=\"{\n                   lineNumbers: true,\n                   theme: 'material',\n                   mode: 'sparql'\n                 }\"\n            ></ngx-codemirror>\n            <div>\n               <button mat-icon-button (click)=\"send()\"  [disabled]=\"isLoadingResults\" title=\"Query abschicken\">\n                  <mat-icon *ngIf=\"!queryHasSyntaxError\">play_arrow</mat-icon>\n                  <mat-icon *ngIf=\"queryHasSyntaxError\" matBadge=\"!\" matBadgeColor=\"warn\">play_arrow</mat-icon>\n               </button> \n               <button mat-icon-button \n                       (click)=\"toggleEnableSelectionList(true)\"\n                       [disabled]=\"!quantAccordionStatus.wordProperties.disabled\" \n                       title=\"Query zur&uuml;cksetzen\">\n                  <mat-icon>undo</mat-icon>\n               </button> \n               <!--<button mat-icon-button (click)=\"shareQuery = !shareQuery\" title=\"Query f&uuml;r Konsole kopieren\"><mat-icon>file_download</mat-icon></button>-->\n               <textarea  #curlQueryInput cols=\"50\" rows=\"1\" [(ngModel)]=\"curlQuery\"></textarea>\n               <button mat-icon-button (click)=\"copyToClipboard(curlQueryInput)\" title=\"CURL-Query zum Clipboard kopieren\"><mat-icon>note_alt</mat-icon></button>\n               <!--TODO: update to @angular/common@\"^10.0.0 : <button [cdkCopyToClipboard]=\"curlQuery\">Copy to clipboard</button>-->\n            </div>\n         </mat-expansion-panel>\n      </mat-accordion>\n   </mat-card-content>\n   <button mat-button (click)=\"cancel()\" *ngIf=\"isLoadingResults\">Anfrage abbrechen</button> \n   <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n</mat-card>\n<mat-tab-group [selectedIndex]=\"quantQuery.currentTable\" (selectedTabChange)=\"tabChanged($event)\"><!-- *ngIf=\"numResultRows.length > 0 || fusekiResults\">-->\n   <mat-tab label=\"Tabelle\" [disabled]=\"numResultRows.length == 0\">\n      <tln-table *ngIf=\"numResultRows.length > 0\" \n            (change)=\"updatePageIndex($event)\" (quantQueryChanged)=\"updateQuantQuery($event)\"\n            [resultIndicesIndex]=\"0\" [quantQuery]=\"quantQuery\" \n            [results]=\"numResultRows\" [displayedColumns]=\"displayedColumns\">\n      </tln-table>\n   </mat-tab>\n   <mat-tab label=\"Rohdaten\" [disabled]=\"!fusekiResults\">\n      <fuseki-table *ngIf=\"fusekiResults\" [routePrefix]=\"routePrefix\"\n            (change)=\"updatePageIndex($event)\" (quantQueryChanged)=\"updateQuantQuery($event)\"\n            [quantQuery]=\"quantQuery\" [resultIndicesIndex]=\"1\" [fusekiResults]=\"fusekiResults\">\n      </fuseki-table>\n   </mat-tab>\n   <mat-tab label=\"Datenmodell\">\n      <tln-ontology-viewer></tln-ontology-viewer>\n   </mat-tab>\n\n</mat-tab-group>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-quant/tln-table.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-quant/tln-table.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n   <mat-card-header>\n      <mat-card-subtitle>{{results.length}} Resultate ({{results | quantResultPipe:resultQuery}})</mat-card-subtitle>\n   </mat-card-header>\n   <mat-card-content>\n      <mat-form-field class=\"filter\">\n        <mat-label>Filter</mat-label>\n        <input matInput (keyup)=\"addFilter($event)\" #input [value]=\"resultQuery.filterValue\">\n      </mat-form-field>\n      <export [displayedColumns]=\"displayedColumns\" [exportData]=\"results\" [replaceId]=\"'text'\" [selectedWordProperties]=\"resultQuery.selectedWordProperties\"></export>\n      <table mat-table multiTemplateDataRows matSort (matSortChange)=\"sortData($event)\" [dataSource]=\"results | pageResultFilter:paginatorResultStatus.resultRange\" class=\"mat-elevation-z8\">\n        <ng-container matColumnDef=\"numProperties\">\n          <th mat-header-cell mat-sort-header=\"numProperties\" *matHeaderCellDef>Anzahl mit Eigenschaften (einfach)</th>\n          <td  mat-cell *matCellDef=\"let element\"> {{element.numProperties}} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"numPropertyTextPercent\">\n          <th mat-header-cell mat-sort-header=\"numPropertyTextPercent\" *matHeaderCellDef>% Wortanteil</th>\n          <td  mat-cell *matCellDef=\"let element\"> {{element.numPropertyTextPercent + ' %'}} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"numPropertiesPercent\">\n          <th mat-header-cell mat-sort-header=\"numPropertiesPercent\" *matHeaderCellDef>% aller W&ouml;rter</th>\n          <td  mat-cell *matCellDef=\"let element\"> {{element.numPropertiesPercent + ' %'}} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"numPropertiesIncludeMulti\">\n          <th mat-header-cell mat-sort-header=\"numPropertiesIncludeMulti\" *matHeaderCellDef>Anzahl mit Eigenschaften (mehrfach)</th>\n          <td  mat-cell *matCellDef=\"let element\"> {{element.numPropertiesIncludeMulti}} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"numText\">\n          <th mat-header-cell mat-sort-header=\"numText\" *matHeaderCellDef>Anzahl Total</th>\n          <td  mat-cell *matCellDef=\"let element\"> {{element.numText}} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"numTextPercent\">\n          <th mat-header-cell mat-sort-header=\"numTextPercent\" *matHeaderCellDef>% aller W&ouml;rter</th>\n          <td  mat-cell *matCellDef=\"let element\"> {{element.numTextPercent + ' %'}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"id\">\n          <th mat-header-cell mat-sort-header=\"id\" *matHeaderCellDef>Wort</th>\n          <td  mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"expandedDetail\">\n          <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"displayedColumns.length\">\n            <div class=\"example-element-detail\"\n                 [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\n             <word-presentation [expanded]=\"element == expandedElement\" [wordIds]=\"element.wordIds\"></word-presentation>\n            </div>\n          </td>\n        </ng-container>\n        <!-- Header and Row Declarations -->\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr  mat-row *matRowDef=\"let element; columns: displayedColumns\" class=\"example-element-row\"\n            [class.example-expanded-row]=\"expandedElement === element\"\n            (click)=\"expandedElement = expandedElement === element ? null : element\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\n      </table>\n      <mat-paginator *ngIf=\"results.length > paginatorResultStatus.resultLength\" \n               [length]=\"results.length\"\n               [pageSize]=\"paginatorResultStatus.resultLength\"\n               [pageSizeOptions]=\"paginatorResultStatus.pageSizeOptions\"\n               [pageIndex]=\"paginatorResultStatus.resultIndex\"\n               [showFirstLastButtons]=\"true\"\n               (page)=\"paginatorResultStatus.showResults($event)\">\n      </mat-paginator>\n\n   </mat-card-content>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-quant/tln-type.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-quant/tln-type.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-slide-toggle *ngIf=\"representation && !show_reference_and_id\"  [(ngModel)]=\"showIri\"></mat-slide-toggle>\n<span *ngIf=\"representation && !showIri\">{{representation.representation }}</span>\n<span *ngIf=\"show_reference_and_id\">: </span>\n<span *ngIf=\"show_reference_and_id && representation\">&lt;</span>\n<span *ngIf=\"!representation || showIri || show_reference_and_id\">{{input}}</span>\n<span *ngIf=\"show_reference_and_id && representation\">&gt;</span>\n<open-in-manuscript *ngIf=\"representation && representation.openInTarget == 'manuscript'\" \n   [routePrefix]=\"routePrefix\" [routerInformation]=\"representation.getRouterInformation(false)\"></open-in-manuscript>\n<open-in-manuscript *ngIf=\"representation && representation.openInTarget == 'manuscript'\" \n   [routePrefix]=\"routePrefix\" [routerInformation]=\"representation.getRouterInformation(true)\"></open-in-manuscript>\n<open-in-viewer *ngIf=\"representation && representation.openInTarget == 'viewer'\" \n   [routePrefix]=\"routePrefix\" [routerInformation]=\"representation.getRouterInformation(false)\"></open-in-viewer>\n<open-in-viewer *ngIf=\"representation && representation.openInTarget == 'viewer'\" \n   [routePrefix]=\"routePrefix\" [routerInformation]=\"representation.getRouterInformation(true)\"></open-in-viewer>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-quant/word-presentation.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-quant/word-presentation.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n<mat-list>\n    <mat-list-item *ngFor=\"let manuscript of manuscriptPageWords\">\n      <mat-list>\n         <div mat-line>{{manuscript.title}}</div>\n         <mat-list-item *ngFor=\"let page of manuscript.pages\">\n           <div mat-line>\n               {{page.number}}\n              <open-in-viewer [routerInformation]=\"{ title: manuscript.title, number: page.number, page: page.id, \n              selectedWords: page.words | toIds, launchExternally: false }\"\n              [launchTitle]=\"'Alle Wörter auf der Seite anzeigen'\">\n              </open-in-viewer>\n              <open-in-viewer [routerInformation]=\"{ title: manuscript.title, number: page.number, page: page.id, \n              selectedWords: page.words | toIds, launchExternally: true }\"\n              [launchTitle]=\"'Alle Wörter auf der Seite in neuem Tab anzeigen'\">\n              </open-in-viewer>:\n               <span class=\"word\" *ngFor=\"let word of page.words | sortByLine\">\n                  Z {{word.line_number}} <input mat-input [placeholder]=\"word.text\" [size]=\"word.text.length\" readonly>\n                  <open-in-viewer [routerInformation]=\"{ title: manuscript.title, number: page.number, page: page.id, \n                  selectedWords: [ word.id ], launchExternally: false }\"\n                  [launchTitle]=\"'Dieses Wort auf der Seite in neuem Tab anzeigen'\">\n                  </open-in-viewer>\n                  <open-in-viewer [routerInformation]=\"{ title: manuscript.title, number: page.number, page: page.id, \n                  selectedWords: [ word.id ], launchExternally: true }\"\n                  [launchTitle]=\"'Dieses Wort auf der Seite in neuem Tab anzeigen'\">\n                  </open-in-viewer>\n               </span>\n            </div>\n         </mat-list-item>\n      </mat-list>\n    </mat-list-item>\n</mat-list>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-status/tln-status.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-status/tln-status.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-icon *ngIf=\"tlnStatus && showDataStatusOptions == SHOW_NONE_OPTION\" \n   [inline]=\"true\" [title]=\"getDescription(tlnStatus.status)\">{{getStatus(tlnStatus.status)}}</mat-icon>\n<div class=\"show-container\" *ngIf=\"!currentIri && showDataStatusOptions > SHOW_NONE_OPTION\">\n   <div  *ngFor=\"let key of getKeys()\">\n      <mat-icon [inline]=\"true\" >{{key}}</mat-icon><span class=\"description\">{{getSaveInformation(key, iconDescriptions, 'asdf')}}</span>\n   </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-viewer-navigation/tln-viewer-navigation.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-viewer-navigation/tln-viewer-navigation.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"navi\">\n   <toggle-navigation></toggle-navigation>\n   <button *ngIf=\"!current_page || !manuscript_unity\" mat-icon-button disabled=\"true\"><mat-icon>first_page</mat-icon></button>\n   <button *ngIf=\"current_page && manuscript_unity\"\n     mat-icon-button [title]=\"getPageTitle(manuscript_unity.firstPage)\" (click)=\"setCurrentIri(manuscript_unity.firstPage.id)\" \n     [disabled]=\"updating || manuscript_unity.firstPage.id == current_page.id\">\n      <mat-icon>first_page</mat-icon>\n   </button>\n   <button *ngIf=\"!current_page || !manuscript_unity\" mat-icon-button disabled=\"true\"><mat-icon>chevron_left</mat-icon></button>\n   <button *ngIf=\"current_page && manuscript_unity\" mat-icon-button [title]=\"getPageTitle(current_page.previous, manuscript_unity.numberOfPages)\" \n     (click)=\"setCurrentIri(current_page.previous.id)\" [disabled]=\"updating || !current_page.previous\">\n      <mat-icon>chevron_left</mat-icon>\n   </button>\n   <mat-form-field appearance=\"legacy\">\n      <mat-select [(value)]=\"selectedViewOption\" (selectionChange)=\"updateParams()\">\n         <mat-option *ngFor=\"let viewOption of viewOptions\" [value]=\"viewOption\">{{viewOption}}</mat-option>\n      </mat-select>\n   </mat-form-field>\n   <zoom></zoom>\n   <span class=\"mat-button min-width default-mouse\" *ngIf=\"!pageExists && !current_page\">N/A</span>\n   <span class=\"mat-button min-width default-mouse\" *ngIf=\"pageExists && !current_page\">Loading ...</span>\n   <span class=\"mat-button min-width default-mouse\" \n         *ngIf=\"current_page && !(manuscript_leaf || geneticOrders.length > 0 || editor_comments.length > 0 || imprints.length > 0)\">\n      {{current_page.title}} {{current_page.number}}\n   </span>\n   <button mat-button class=\"min-width\" title=\"Seiteninformationen\" (click)=\"showInformation()\" \n           *ngIf=\"current_page && (manuscript_leaf || geneticOrders.length > 0 || editor_comments.length > 0 || imprints.length > 0)\">\n      {{current_page.title}} {{current_page.number}}\n      <mat-icon inline=\"true\">info</mat-icon>\n   </button>\n   <button mat-icon-button title=\"Rechtsrotation\" (click)=\"rotate(90)\"><mat-icon>rotate_90_degrees_cw</mat-icon></button>\n   <button mat-icon-button title=\"Linksrotation\" (click)=\"rotate(-90)\"><mat-icon>rotate_90_degrees_ccw</mat-icon></button>\n   <search></search>\n   <button *ngIf=\"!current_page || !manuscript_unity\" mat-icon-button disabled=\"true\"><mat-icon>chevron_right</mat-icon></button>\n   <button *ngIf=\"current_page && manuscript_unity\" mat-icon-button [title]=\"getPageTitle(current_page.next, manuscript_unity.numberOfPages)\" \n      (click)=\"setCurrentIri(current_page.next.id)\" [disabled]=\"updating || !current_page.next\">\n      <mat-icon>chevron_right</mat-icon>\n   </button>\n   <button *ngIf=\"!current_page || !manuscript_unity\" mat-icon-button disabled=\"true\"><mat-icon>last_page</mat-icon></button>\n   <button *ngIf=\"manuscript_unity && current_page\" \n     mat-icon-button [title]=\"getPageTitle(manuscript_unity.lastPage)\" (click)=\"setCurrentIri(manuscript_unity.lastPage.id)\" \n     [disabled]=\"updating || manuscript_unity.lastPage.id == current_page.id\">\n      <mat-icon>last_page</mat-icon>\n   </button>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tooltip/editor-comment.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tooltip/editor-comment.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n   <span *ngIf=\"word\">{{word.lineNumber}}: </span>\n   <button class=\"word-button\" mat-icon-button *ngIf=\"word && !(editor_comment.text && markups && markups.length > 0)\">{{word.text}}]</button>\n   <span *ngIf=\"editor_comment.text && markups && markups.length > 0\">\n      <ngx-mat-standoffMarkup-component [text]=\"editor_comment.text\" [standOffMarkup]=\"markups\" [settings]=\"mySettings\">\n      </ngx-mat-standoffMarkup-component>]\n   </span>\n   <span class=\"editor-comment\" *ngIf=\"editorType\">\n      <i *ngIf=\"editorType == 'Clarification'\">Vk</i>\n      <span *ngIf=\"editorType == 'AtypicalWriting'\">¿</span>\n      <i *ngIf=\"editorType == 'UncertainDecipherment'\">?</i>\n      <i *ngIf=\"editorType == 'EditorCorrection' && editor_comment.correction\">&gt;? {{editor_comment.correction}}</i>\n   </span>\n   <span *ngIf=\"editorType && editor_comment.comment\">, </span>\n   <i *ngIf=\"editor_comment.comment\">{{editor_comment.comment}}{{editor_comment.isUncertain ? '?' : ''}}</i>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tooltip/overwritten.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tooltip/overwritten.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span *ngIf=\"word && markups && markups.length > 0\">\n   <ngx-mat-standoffMarkup-component [text]=\"word.text\" [standOffMarkup]=\"markups\" [settings]=\"mySettings\">\n   </ngx-mat-standoffMarkup-component>] </span>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tooltip/tool-tip.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tooltip/tool-tip.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div #myElement *ngIf=\"useExtendedTooltip && tooltipPosition.visible && hasAnyContent()\"\n   [ngClass]=\"[ 'tooltip', currentKey ]\" [style.top.px]=\"getTop(currentKey)\" [style.left.px]=\"getLeft(myElement.offsetWidth)\">\n    <div *ngIf=\"word\">\n      <div *ngIf=\"debug\">\n         {{tooltipPosition.clientY+yOffset}}, {{topOffset}}\n          <!--<div *ngFor=\"let markup of positionalStyleMarkups\">\n             <div ><span>{{markup.startIndex}} </span><span>{{markup.endIndex}} </span><span>{{markup.cssStyleTag}}</span></div>\n          </div>-->\n      </div>\n      <div class=\"earlier-version\" *ngFor=\"let earlier_version of earlier_version_list; let i = index\">\n         <span><i>{{i}}:</i>&nbsp;</span>\n         <span *ngIf=\"!earlier_version.markups || earlier_version.markups.length == 0\">{{earlier_version.text}}</span>\n         <ngx-mat-standoffMarkup-component *ngIf=\"earlier_version.markups && earlier_version.markups.length > 0\"\n           [text]=\"earlier_version.text\" [standOffMarkup]=\"earlier_version.markups\" [settings]=\"mySettings\"></ngx-mat-standoffMarkup-component>\n      </div>\n      <div class=\"text\" >\n          <span *ngIf=\"earlier_version_list.length\"><i>{{earlier_version_list.length}}:</i>&nbsp;</span>\n          <span *ngIf=\"!positionalStyleMarkups || positionalStyleMarkups.length == 0\" [ngClass]=\"{'deleted': word.deleted}\">{{word.text}}</span>\n          <ngx-mat-standoffMarkup-component *ngIf=\"positionalStyleMarkups && positionalStyleMarkups.length > 0\"\n           [text]=\"word.text\" [standOffMarkup]=\"positionalStyleMarkups\" [settings]=\"mySettings\"></ngx-mat-standoffMarkup-component>\n       </div>\n       <span class=\"edited_text\" *ngIf=\"word.edited_text\">&gt;{{word.edited_text}}</span>\n       <div class=\"overwritten\" *ngIf=\"overwrittenWord\">\n          <overwritten [word]=\"word\"></overwritten><i>&uuml;berschreibt: </i>\n          <span [ngClass]=\"{'deleted': overwrittenWord.deleted}\">{{overwrittenWord.text}}</span>\n          <span *ngIf=\"overwrittenWord.uncertain_decipherment\">] <i>?</i></span>\n       </div>\n       <editor-comment *ngFor=\"let editor_comment of editor_comments | mergeEditorComment\" [editor_comment]=\"editor_comment\"></editor-comment>\n    </div>\n    <div *ngIf=\"foreignHand\">\n         <span *ngIf=\"!foreignHand.markups || foreignHand.markups.length == 0\">{{foreignHand.text}}</span>\n          <ngx-mat-standoffMarkup-component *ngIf=\"foreignHand.markups && foreignHand.markups.length > 0\"\n           [text]=\"foreignHand.text\" [standOffMarkup]=\"foreignHand.markups\" [settings]=\"mySettings\"></ngx-mat-standoffMarkup-component>\n         <i>\n            <span *ngIf=\"foreignHand.resolution\"> (={{foreignHand.resolution}})</span>\n            <span *ngIf=\"foreignHand.comment\"> {{foreignHand.comment}}</span>, {{foreignHand.pen}}\n         </i>\n         <div *ngIf=\"foreignHand.overwrittenTextByForeignHand\"><i>&uuml;berschreibt: </i>\n            <span *ngIf=\"!foreignHand.overwrittenTextByForeignHand.markups || foreignHand.overwrittenTextByForeignHand.markups.length == 0\">{{foreignHand.overwrittenTextByForeignHand.text}}\n            </span>\n             <ngx-mat-standoffMarkup-component *ngIf=\"foreignHand.overwrittenTextByForeignHand.markups && foreignHand.overwrittenTextByForeignHand.markups.length > 0\"\n              [text]=\"foreignHand.overwrittenTextByForeignHand.text\" [standOffMarkup]=\"foreignHand.overwrittenTextByForeignHand.markups\" [settings]=\"mySettings\">\n             </ngx-mat-standoffMarkup-component>\n             <i>, {{foreignHand.overwrittenTextByForeignHand.pen}}</i>\n         </div>\n    </div>\n    <div *ngIf=\"continuation\">\n       <span *ngIf=\"continuation.show == 'to'\"><i>{{continuation.source.line.number}}</i>&nbsp;nach&nbsp;</span>\n       <i>\n         <span *ngIf=\"continuation.source.manuscript\">{{continuation.reference.manuscript.title}} </span>\n         <span *ngIf=\"continuation.source.page\">{{continuation.reference.page.number}}, </span>\n         {{continuation.reference.line.number}}\n       </i>\n       <span *ngIf=\"continuation.show != 'to'\">&nbsp;nach&nbsp;<i>{{continuation.source.line.number}}</i></span>\n    </div>\n    <div *ngIf=\"continuation && continuation_words.length > 0\">\n       <span *ngIf=\"continuation.show == 'to'\">&rarr; </span>\n       <span *ngFor=\"let word of continuation_words\">\n          {{ (word.earlier_version) ? '[0:' + word.earlier_version + '|1:' : ''}}\n          <ngx-mat-standoffMarkup-component \n           [text]=\"word.text\" [standOffMarkup]=\"word.markups\" [settings]=\"mySettings\"></ngx-mat-standoffMarkup-component>\n         {{ (word.earlier_version) ? ']' : ''}}</span>\n       <span *ngIf=\"continuation.show != 'to'\">&rarr; </span>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, scripts, private, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"nietzsche-app-beta\",\"version\":\"0.9.8.0\",\"scripts\":{\"ng\":\"ng\",\"start\":\"ng serve\",\"build\":\"ng build\",\"test\":\"ng test\",\"lint\":\"ng lint\",\"e2e\":\"ng e2e\",\"compodoc\":\"./node_modules/.bin/compodoc -p tsconfig.app.json\",\"sparqljs\":\"./node_modules/sparqljs/sparql.js\"},\"private\":true,\"dependencies\":{\"@angular/animations\":\"~8.2.14\",\"@angular/cdk\":\"~8.2.3\",\"@angular/common\":\"~8.2.14\",\"@angular/compiler\":\"~8.2.14\",\"@angular/core\":\"~8.2.14\",\"@angular/forms\":\"~8.2.14\",\"@angular/material\":\"^8.2.3\",\"@angular/platform-browser\":\"~8.2.14\",\"@angular/platform-browser-dynamic\":\"~8.2.14\",\"@angular/router\":\"~8.2.14\",\"@ctrl/ngx-codemirror\":\"^5.0.0\",\"@types/rdf-js\":\"^2.0.11\",\"codemirror\":\"^5.62.0\",\"lodash\":\"^4.17.20\",\"n3\":\"^1.10.0\",\"ngx-csv\":\"^0.3.2\",\"ngx-mat-standoff-markup\":\"^0.7.3\",\"rdfjs\":\"^0.0.1\",\"rxjs\":\"~6.4.0\",\"sparqljs\":\"^3.0.1\",\"tslib\":\"^1.10.0\",\"zone.js\":\"~0.9.1\"},\"devDependencies\":{\"@angular-devkit/build-angular\":\"^0.803.25\",\"@angular/cli\":\"~8.3.24\",\"@angular/compiler-cli\":\"~8.2.14\",\"@angular/language-service\":\"~8.2.14\",\"@types/jasmine\":\"~3.3.8\",\"@types/jasminewd2\":\"~2.0.3\",\"@types/node\":\"~8.9.4\",\"codelyzer\":\"^5.0.0\",\"jasmine-core\":\"~3.4.0\",\"jasmine-spec-reporter\":\"~4.2.1\",\"karma\":\"~4.1.0\",\"karma-chrome-launcher\":\"~2.2.0\",\"karma-coverage-istanbul-reporter\":\"~2.0.1\",\"karma-jasmine\":\"~2.0.1\",\"karma-jasmine-html-reporter\":\"^1.4.0\",\"protractor\":\"~5.4.0\",\"ts-node\":\"~7.0.0\",\"tslint\":\"~5.15.0\",\"typescript\":\"~3.5.3\"}}");

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\nbody {\n   padding-right: 50px;\n}\n\n.rect, .rect.unhovered {\n  opacity:0.0;\n}\n\n.rect:hover, .rect.hovered {\n  opacity:0.34000017;\n  fill:#e2fa00;\n  fill-opacity:0.98431373\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtHQUNHLG1CQUFtQjtBQUN0Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1o7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuYm9keSB7XG4gICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xufVxuXG4ucmVjdCwgLnJlY3QudW5ob3ZlcmVkIHtcbiAgb3BhY2l0eTowLjA7XG59XG4ucmVjdDpob3ZlciwgLnJlY3QuaG92ZXJlZCB7XG4gIG9wYWNpdHk6MC4zNDAwMDAxNztcbiAgZmlsbDojZTJmYTAwO1xuICBmaWxsLW9wYWNpdHk6MC45ODQzMTM3M1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm2015/overlay.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");





let AppComponent = class AppComponent {
    constructor(overlayContainer, activatedRoute) {
        this.overlayContainer = overlayContainer;
        this.activatedRoute = activatedRoute;
        this.title = 'Digitale Manuskriptedition: Der späte Nietzsche';
        this.theme = 'standard-theme';
        this.showVersion = true;
        this.version = __webpack_require__(/*! ../../package.json */ "./package.json").version;
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].showVersion != undefined) {
            this.showVersion = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].showVersion;
        }
    }
    ngOnInit() {
        this.overlayContainer.getContainerElement().classList.add(this.theme);
        this.queryParamSub = this.activatedRoute.queryParams.subscribe((queryParams) => {
            this.fullScreen = queryParams.fullscreen;
        });
    }
    onThemeChange() {
        this.overlayContainer.getContainerElement().classList.add(this.theme);
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayContainer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm2015/tree.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_query_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/query.service */ "./src/app/services/query.service.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./home.component */ "./src/app/home.component.ts");
/* harmony import */ var _manuscript_view_component_manuscript_view_component_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./manuscript-view-component/manuscript-view-component.component */ "./src/app/manuscript-view-component/manuscript-view-component.component.ts");
/* harmony import */ var _content_view_tab_component_content_view_tab_component_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./content-view-tab-component/content-view-tab-component.component */ "./src/app/content-view-tab-component/content-view-tab-component.component.ts");
/* harmony import */ var _rhizome_view_component_rhizome_view_component_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./rhizome-view-component/rhizome-view-component.component */ "./src/app/rhizome-view-component/rhizome-view-component.component.ts");
/* harmony import */ var _main_menu_component_main_menu_component_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./main-menu-component/main-menu-component.component */ "./src/app/main-menu-component/main-menu-component.component.ts");
/* harmony import */ var _page_view_wrapper_component_page_view_wrapper_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./page-view-wrapper-component/page-view-wrapper.component */ "./src/app/page-view-wrapper-component/page-view-wrapper.component.ts");
/* harmony import */ var _navigation_list_component_navigation_list_component_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./navigation-list-component/navigation-list-component.component */ "./src/app/navigation-list-component/navigation-list-component.component.ts");
/* harmony import */ var _services_navigation_service_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/navigation-service.service */ "./src/app/services/navigation-service.service.ts");
/* harmony import */ var _tln_edition_tln_edition_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./tln-edition/tln-edition.module */ "./src/app/tln-edition/tln-edition.module.ts");
/* harmony import */ var _navigation_list_component_navtree_directive_directive__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./navigation-list-component/navtree-directive.directive */ "./src/app/navigation-list-component/navtree-directive.directive.ts");
/* harmony import */ var _content_view_tab_component_lazy_image_load_directive_directive__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./content-view-tab-component/lazy-image-load-directive.directive */ "./src/app/content-view-tab-component/lazy-image-load-directive.directive.ts");
/* harmony import */ var _impressum_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./impressum.component */ "./src/app/impressum.component.ts");
/* harmony import */ var _project_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./project.component */ "./src/app/project.component.ts");
/* harmony import */ var _navigation_list_component_navigationlist_list_component_navigationlist_list_component_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./navigation-list-component/navigationlist-list-component/navigationlist-list-component.component */ "./src/app/navigation-list-component/navigationlist-list-component/navigationlist-list-component.component.ts");
/* harmony import */ var _quant_quant_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./quant/quant.component */ "./src/app/quant/quant.component.ts");
/* harmony import */ var _query_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./query.component */ "./src/app/query.component.ts");
/* harmony import */ var _conception_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./conception.component */ "./src/app/conception.component.ts");
/* harmony import */ var _support_support_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./support/support.component */ "./src/app/support/support.component.ts");
/* harmony import */ var _support_heading_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./support/heading.component */ "./src/app/support/heading.component.ts");
/* harmony import */ var _support_add_content_pipe__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./support/add-content.pipe */ "./src/app/support/add-content.pipe.ts");
/* harmony import */ var _support_subheading_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./support/subheading.component */ "./src/app/support/subheading.component.ts");
/* harmony import */ var _support_subsubheading_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./support/subsubheading.component */ "./src/app/support/subsubheading.component.ts");
/* harmony import */ var _support_menu_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./support/menu.component */ "./src/app/support/menu.component.ts");













































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
            _home_component__WEBPACK_IMPORTED_MODULE_20__["HomeComponent"],
            _manuscript_view_component_manuscript_view_component_component__WEBPACK_IMPORTED_MODULE_21__["ManuscriptViewComponentComponent"],
            _content_view_tab_component_content_view_tab_component_component__WEBPACK_IMPORTED_MODULE_22__["ContentViewTabComponentComponent"],
            _rhizome_view_component_rhizome_view_component_component__WEBPACK_IMPORTED_MODULE_23__["RhizomeViewComponentComponent"],
            _main_menu_component_main_menu_component_component__WEBPACK_IMPORTED_MODULE_24__["MainMenuComponentComponent"],
            _page_view_wrapper_component_page_view_wrapper_component__WEBPACK_IMPORTED_MODULE_25__["PageViewWrapperComponent"],
            _navigation_list_component_navigation_list_component_component__WEBPACK_IMPORTED_MODULE_26__["NavigationListComponentComponent"],
            _navigation_list_component_navtree_directive_directive__WEBPACK_IMPORTED_MODULE_29__["NavTree"],
            _content_view_tab_component_lazy_image_load_directive_directive__WEBPACK_IMPORTED_MODULE_30__["LazyImageLoadDirectiveDirective"],
            _impressum_component__WEBPACK_IMPORTED_MODULE_31__["ImpressumComponent"],
            _project_component__WEBPACK_IMPORTED_MODULE_32__["ProjectComponent"],
            _navigation_list_component_navigationlist_list_component_navigationlist_list_component_component__WEBPACK_IMPORTED_MODULE_33__["NavigationlistListComponentComponent"],
            _quant_quant_component__WEBPACK_IMPORTED_MODULE_34__["QuantComponent"],
            _query_component__WEBPACK_IMPORTED_MODULE_35__["QueryComponent"],
            _conception_component__WEBPACK_IMPORTED_MODULE_36__["ConceptionComponent"],
            _support_support_component__WEBPACK_IMPORTED_MODULE_37__["SupportComponent"],
            _support_heading_component__WEBPACK_IMPORTED_MODULE_38__["HeadingComponent"],
            _support_add_content_pipe__WEBPACK_IMPORTED_MODULE_39__["AddContentPipe"],
            _support_subheading_component__WEBPACK_IMPORTED_MODULE_40__["SubheadingComponent"],
            _support_subsubheading_component__WEBPACK_IMPORTED_MODULE_41__["SubSubheadingComponent"],
            _support_menu_component__WEBPACK_IMPORTED_MODULE_42__["MenuComponent"]
        ],
        imports: [
            _app_routing__WEBPACK_IMPORTED_MODULE_19__["routing"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_16__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_9__["MatTreeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tln_edition_tln_edition_module__WEBPACK_IMPORTED_MODULE_28__["TlnEditionModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ],
        providers: [_services_navigation_service_service__WEBPACK_IMPORTED_MODULE_27__["NavigationServiceService"], _services_query_service__WEBPACK_IMPORTED_MODULE_18__["QueryService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _support_support_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./support/support.component */ "./src/app/support/support.component.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/home.component.ts");
/* harmony import */ var _impressum_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./impressum.component */ "./src/app/impressum.component.ts");
/* harmony import */ var _project_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project.component */ "./src/app/project.component.ts");
/* harmony import */ var _query_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./query.component */ "./src/app/query.component.ts");
/* harmony import */ var _conception_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./conception.component */ "./src/app/conception.component.ts");
/* harmony import */ var _content_view_tab_component_content_view_tab_component_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./content-view-tab-component/content-view-tab-component.component */ "./src/app/content-view-tab-component/content-view-tab-component.component.ts");
/* harmony import */ var _content_view_tab_component_content_view_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./content-view-tab-component/content-view-routes */ "./src/app/content-view-tab-component/content-view-routes.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./constants */ "./src/app/constants.ts");











const APP_ROUTES = [
    { path: '', redirectTo: _constants__WEBPACK_IMPORTED_MODULE_10__["HOME_ROUTE"], pathMatch: 'prefix' },
    { path: _constants__WEBPACK_IMPORTED_MODULE_10__["HOME_ROUTE"], component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: _constants__WEBPACK_IMPORTED_MODULE_10__["HELP_ROUTE"], component: _support_support_component__WEBPACK_IMPORTED_MODULE_2__["SupportComponent"] },
    { path: _constants__WEBPACK_IMPORTED_MODULE_10__["CONCEPTION_ROUTE"], component: _conception_component__WEBPACK_IMPORTED_MODULE_7__["ConceptionComponent"] },
    { path: _constants__WEBPACK_IMPORTED_MODULE_10__["CONTENT_VIEW_ROUTE"], component: _content_view_tab_component_content_view_tab_component_component__WEBPACK_IMPORTED_MODULE_8__["ContentViewTabComponentComponent"], children: _content_view_tab_component_content_view_routes__WEBPACK_IMPORTED_MODULE_9__["CONTENT_ROUTES"] },
    { path: _constants__WEBPACK_IMPORTED_MODULE_10__["DATA_ROUTE"], component: _query_component__WEBPACK_IMPORTED_MODULE_6__["QueryComponent"] },
    { path: _constants__WEBPACK_IMPORTED_MODULE_10__["PROJECT_ROUTE"], component: _project_component__WEBPACK_IMPORTED_MODULE_5__["ProjectComponent"] },
    { path: _constants__WEBPACK_IMPORTED_MODULE_10__["IMPRESSUM_ROUTE"], component: _impressum_component__WEBPACK_IMPORTED_MODULE_4__["ImpressumComponent"] },
    { path: '**', redirectTo: _constants__WEBPACK_IMPORTED_MODULE_10__["HOME_ROUTE"], pathMatch: 'prefix' } // any other unknown url will be forwarded to home
];
const routerOptions = {
    useHash: false,
    anchorScrolling: 'enabled'
};
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(APP_ROUTES, routerOptions);


/***/ }),

/***/ "./src/app/conception.component.scss":
/*!*******************************************!*\
  !*** ./src/app/conception.component.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".text {\n  font-size: 12pt;\n  text-align: justify;\n  width: 650px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9kYXRhL2hvbWUva25pc3RlcjAvZ2l0aHVicy9OaWV0enNjaGVCZXRhL25pZXR6c2NoZS1iZXRhLWFwcC9zcmMvYXBwL2NvbmNlcHRpb24uY29tcG9uZW50LnNjc3MiLCJjb25jZXB0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csZUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0NIIiwiZmlsZSI6ImNvbmNlcHRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dCB7XG4gICBmb250LXNpemU6IDEycHQ7XG4gICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgd2lkdGg6IDY1MHB4O1xufVxuIiwiLnRleHQge1xuICBmb250LXNpemU6IDEycHQ7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHdpZHRoOiA2NTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/conception.component.ts":
/*!*****************************************!*\
  !*** ./src/app/conception.component.ts ***!
  \*****************************************/
/*! exports provided: ConceptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConceptionComponent", function() { return ConceptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/app/constants.ts");




let ConceptionComponent = class ConceptionComponent {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.projectLink = '/' + _constants__WEBPACK_IMPORTED_MODULE_3__["PROJECT_ROUTE"];
        this.contentViewLink = '/' + _constants__WEBPACK_IMPORTED_MODULE_3__["CONTENT_VIEW_ROUTE"];
    }
    ngOnInit() {
        this.queryParamSub = this.activatedRoute.queryParams.subscribe((queryParams) => {
            this.queryParams = queryParams;
        });
    }
};
ConceptionComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ConceptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-conception',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./conception.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/conception.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./conception.component.scss */ "./src/app/conception.component.scss")).default]
    })
], ConceptionComponent);



/***/ }),

/***/ "./src/app/constants.ts":
/*!******************************!*\
  !*** ./src/app/constants.ts ***!
  \******************************/
/*! exports provided: CONTENT_VIEW_ROUTE, DOCUMENTATION_ROUTE, DATA_ROUTE, CONCEPTION_ROUTE, HOME_ROUTE, HELP_ROUTE, IMPRESSUM_ROUTE, PROJECT_ROUTE, BASE_URL, NAVTREE_DEFS, RQ_CROSSREF_TREE_MANUSCRIPTS, RQ_CROSSREF_TREE_PAGES, RQ_CROSSREF_TREE_LINES, RQ_CROSSREF_TREE_WORDS, CROSSREF_TREE_DEFS, RQ_GENERIC_TREE_ROOT, RQ_GENERIC_RDF_PROPERTY_TREE, RQ_GENERIC_OBJECT_TREE, GENERIC_ROOT_TREE_DEF */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTENT_VIEW_ROUTE", function() { return CONTENT_VIEW_ROUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOCUMENTATION_ROUTE", function() { return DOCUMENTATION_ROUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA_ROUTE", function() { return DATA_ROUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONCEPTION_ROUTE", function() { return CONCEPTION_ROUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOME_ROUTE", function() { return HOME_ROUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HELP_ROUTE", function() { return HELP_ROUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMPRESSUM_ROUTE", function() { return IMPRESSUM_ROUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROJECT_ROUTE", function() { return PROJECT_ROUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAVTREE_DEFS", function() { return NAVTREE_DEFS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RQ_CROSSREF_TREE_MANUSCRIPTS", function() { return RQ_CROSSREF_TREE_MANUSCRIPTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RQ_CROSSREF_TREE_PAGES", function() { return RQ_CROSSREF_TREE_PAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RQ_CROSSREF_TREE_LINES", function() { return RQ_CROSSREF_TREE_LINES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RQ_CROSSREF_TREE_WORDS", function() { return RQ_CROSSREF_TREE_WORDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CROSSREF_TREE_DEFS", function() { return CROSSREF_TREE_DEFS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RQ_GENERIC_TREE_ROOT", function() { return RQ_GENERIC_TREE_ROOT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RQ_GENERIC_RDF_PROPERTY_TREE", function() { return RQ_GENERIC_RDF_PROPERTY_TREE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RQ_GENERIC_OBJECT_TREE", function() { return RQ_GENERIC_OBJECT_TREE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENERIC_ROOT_TREE_DEF", function() { return GENERIC_ROOT_TREE_DEF; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _tln_edition_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tln-edition/constants */ "./src/app/tln-edition/constants.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BASE_URL", function() { return _tln_edition_constants__WEBPACK_IMPORTED_MODULE_1__["BASE_URL"]; });


const CONTENT_VIEW_ROUTE = 'contentView';
const DOCUMENTATION_ROUTE = 'doku';
const DATA_ROUTE = 'query';
const CONCEPTION_ROUTE = 'conception';
const HOME_ROUTE = 'home';
const HELP_ROUTE = 'support';
const IMPRESSUM_ROUTE = 'impressum';
const PROJECT_ROUTE = 'project';


//export const BASE_URL: string = 'https://nietzsche.fuseki.services.dasch.swiss/nietzsche';
const NAVTREE_DEFS = [
    { id: 'manuscript',
        idx: 0,
        isActive: true,
        label: 'Manuskripte',
        itemQParam: 'manuscript',
        entries: [],
        apiDef: {
            type: 0,
            baseUrl: _tln_edition_constants__WEBPACK_IMPORTED_MODULE_1__["BASE_URL"],
            dataArray: 'results.bindings',
            query: 'manuscripts.rq',
            mapping: {
                id: 'manuscript.value',
                iri: 'manuscript.value',
                type: 'type.value',
                label: 'title.value',
                description: 'gsaSignature.value',
                avatar: 'thumbImage.value'
            }
        }
    }, {
        id: 'page',
        idx: 1,
        isActive: false,
        label: 'Seiten',
        itemQParam: 'page',
        entries: [],
        apiDef: {
            type: 0,
            baseUrl: _tln_edition_constants__WEBPACK_IMPORTED_MODULE_1__["BASE_URL"],
            dataArray: 'results.bindings',
            query: 'getPageData.rq',
            mapping: {
                id: 'page.value',
                iri: 'page.value',
                label: 'pageNumber.value',
                thumb: 'thumb.value',
                idx: 'pageNumber.value',
                svg: 'svgUrl.value',
            }
        }
    }
];
// Queries
const RQ_CROSSREF_TREE_MANUSCRIPTS = `
PREFIX data: <http://rdfh.ch/projects/0068#>
PREFIX tln: <http://www.nie.org/ontology/nietzsche#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
SELECT ?manuscript ?title ?thumbImage ?gsaSignature WHERE {
  ?manuscript a tln:ManuscriptUnity;
      tln:hasTitle ?title;
      tln:hasManuscriptType "Mappe";
      tln:hasPages/rdf:first/tln:hasFaksimileImage/tln:hasThumburl ?thumbImage ;
      tln:hasGsaSignature ?gsaSignature .
      
}`;
const RQ_CROSSREF_TREE_PAGES = `
PREFIX tln: <http://www.nie.org/ontology/nietzsche#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
SELECT DISTINCT ?page ?pageNumber ?type WHERE {
    ?s (tln:hasPages/(rdf:rest*)/rdf:first) ?page.
    ?page tln:hasNumber ?pageNumber.
    ?page a tln:Page.
    BIND (tln:page AS ?type)
    BIND (xsd:integer(REPLACE(?pageNumber, "\\\\D+", "")) AS ?sorting)
  }
  ORDER BY (?sorting)
`;
const RQ_CROSSREF_TREE_LINES = `
PREFIX tln: <http://www.nie.org/ontology/nietzsche#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
SELECT DISTINCT ?line ?lNumber ?type WHERE {
    ?s (tln:hasLines/(rdf:rest*)/rdf:first) ?line.
    ?line a tln:Line.
    BIND (tln:line AS ?type)
  OPTIONAL {
      ?line tln:lineHasNumber ?lNumber.
    }
  }
  ORDER BY (?lNumber)
`;
const RQ_CROSSREF_TREE_WORDS = `
PREFIX tln: <http://www.nie.org/ontology/nietzsche#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX homotypic: <http://www.nie.org/ontology/homotypic#>
SELECT DISTINCT ?word ?line ?text ?type WHERE {
    ?word tln:wordBelongsToLine ?line.
    ?word a tln:SimpleWord.
    BIND(tln:SimpleWord AS ?type)
    OPTIONAL {
      ?word homotypic:hasText ?text.
    }
  }
  ORDER BY (?word)
`;
const CROSSREF_TREE_DEFS = [
    { id: 'manuscript',
        idx: 0,
        isActive: true,
        label: 'Manuskript ',
        itemQParam: 'manuscript',
        entries: [],
        apiDef: {
            type: 0,
            baseUrl: _tln_edition_constants__WEBPACK_IMPORTED_MODULE_1__["BASE_URL"],
            dataArray: 'results.bindings',
            query: RQ_CROSSREF_TREE_MANUSCRIPTS,
            mapping: {
                id: 'manuscript.value',
                iri: 'manuscript.value',
                type: 'type.value',
                label: 'title.value',
                description: 'gsaSignature.value',
                avatar: 'thumbImage.value'
            }
        }
    }, {
        id: 'page',
        idx: 1,
        isActive: false,
        label: 'S. ',
        itemQParam: 'page',
        entries: [],
        apiDef: {
            type: 0,
            baseUrl: _tln_edition_constants__WEBPACK_IMPORTED_MODULE_1__["BASE_URL"],
            dataArray: 'results.bindings',
            query: RQ_CROSSREF_TREE_PAGES,
            mapping: {
                id: 'page.value',
                iri: 'page.value',
                label: 'pageNumber.value',
                type: 'type.value'
            }
        }
    }, {
        id: 'line',
        idx: 2,
        isActive: false,
        label: 'Zeile ',
        itemQParam: '',
        entries: [],
        apiDef: {
            type: 0,
            baseUrl: _tln_edition_constants__WEBPACK_IMPORTED_MODULE_1__["BASE_URL"],
            dataArray: 'results.bindings',
            query: RQ_CROSSREF_TREE_LINES,
            mapping: {
                id: 'line.value',
                iri: 'line.value',
                label: 'lNumber.value',
                type: 'type.value'
            }
        }
    }, {
        id: 'word',
        idx: 3,
        isActive: false,
        label: '',
        itemQParam: '',
        entries: [],
        apiDef: {
            type: 0,
            baseUrl: _tln_edition_constants__WEBPACK_IMPORTED_MODULE_1__["BASE_URL"],
            dataArray: 'results.bindings',
            query: RQ_CROSSREF_TREE_WORDS,
            mapping: {
                id: 'word.value',
                iri: 'word.value',
                label: 'text.value',
                type: 'type.value'
            },
            paramTriple: 2
        }
    }
];
// GENERIC TREES
// Queries
const RQ_GENERIC_TREE_ROOT = `
PREFIX data: <http://rdfh.ch/projects/0068#>
PREFIX tln: <http://www.nie.org/ontology/nietzsche#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
SELECT DISTINCT ?manuscript ?title ?type ?gsaSignature WHERE {
  ?manuscript a tln:ManuscriptUnity;
      tln:hasTitle ?title;
      tln:hasManuscriptType "Mappe";
      tln:hasGsaSignature ?gsaSignature .
      OPTIONAL {
      tln:ManuscriptUnity a ?type
      }
}`;
const RQ_GENERIC_RDF_PROPERTY_TREE = `
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
SELECT DISTINCT ?p ?type ?label ?comment WHERE {
    ?s ?p ?o.
  OPTIONAL {
    ?p rdfs:label ?label.
    ?p rdfs:comment ?comment.
    ?p a ?sth.
    }
  }
  ORDER BY (?label)
  LIMIT 10
  `;
const RQ_GENERIC_OBJECT_TREE = `
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
SELECT DISTINCT ?o ?type ?label ?comment WHERE {
    ?s ?p ?o.
  OPTIONAL {
    ?o rdfs:label ?label.
    ?o rdfs:comment ?comment.
    ?o a ?sth.
    }
  }
  ORDER BY (?label)
  LIMIT 10
  `;
const GENERIC_ROOT_TREE_DEF = [
    { id: 'root',
        idx: 0,
        isActive: true,
        label: 'Manuskript ',
        itemQParam: 'manuscript',
        entries: [],
        apiDef: {
            type: 0,
            baseUrl: _tln_edition_constants__WEBPACK_IMPORTED_MODULE_1__["BASE_URL"],
            dataArray: 'results.bindings',
            query: RQ_GENERIC_TREE_ROOT,
            mapping: {
                id: 'manuscript.value',
                iri: 'manuscript.value',
                type: 'type.value',
                label: 'title.value',
                description: 'gsaSignature.value'
            }
        }
    },
    { id: 'property',
        idx: 1,
        isActive: true,
        label: 'Property ',
        itemQParam: '',
        entries: [],
        apiDef: {
            type: 0,
            baseUrl: _tln_edition_constants__WEBPACK_IMPORTED_MODULE_1__["BASE_URL"],
            dataArray: 'results.bindings',
            query: RQ_GENERIC_RDF_PROPERTY_TREE,
            mapping: {
                id: 'p.value',
                iri: 'p.value',
                type: 'type.value',
                label: 'label.value',
                description: 'comment.value'
            }
        }
    },
    { id: 'object',
        idx: 1,
        isActive: true,
        label: 'Object ',
        itemQParam: '',
        entries: [],
        apiDef: {
            type: 0,
            baseUrl: _tln_edition_constants__WEBPACK_IMPORTED_MODULE_1__["BASE_URL"],
            dataArray: 'results.bindings',
            query: RQ_GENERIC_OBJECT_TREE,
            mapping: {
                id: 'o.value',
                iri: 'o.value',
                type: 'type.value',
                label: 'label.value',
                description: 'comment.value'
            }
        }
    }
];


/***/ }),

/***/ "./src/app/content-view-tab-component/content-view-routes.ts":
/*!*******************************************************************!*\
  !*** ./src/app/content-view-tab-component/content-view-routes.ts ***!
  \*******************************************************************/
/*! exports provided: CONTENT_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTENT_ROUTES", function() { return CONTENT_ROUTES; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _manuscript_view_component_manuscript_view_component_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../manuscript-view-component/manuscript-view-component.component */ "./src/app/manuscript-view-component/manuscript-view-component.component.ts");
/* harmony import */ var _rhizome_view_component_rhizome_view_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rhizome-view-component/rhizome-view-component.component */ "./src/app/rhizome-view-component/rhizome-view-component.component.ts");
/* harmony import */ var _page_view_wrapper_component_page_view_wrapper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../page-view-wrapper-component/page-view-wrapper.component */ "./src/app/page-view-wrapper-component/page-view-wrapper.component.ts");
/* harmony import */ var _tln_edition_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tln-edition/constants */ "./src/app/tln-edition/constants.ts");
/* harmony import */ var _tln_edition_tln_fulltext_tln_fulltext_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tln-edition/tln-fulltext/tln-fulltext.component */ "./src/app/tln-edition/tln-fulltext/tln-fulltext.component.ts");
/* harmony import */ var _quant_quant_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../quant/quant.component */ "./src/app/quant/quant.component.ts");







const CONTENT_ROUTES = [
    { path: _tln_edition_constants__WEBPACK_IMPORTED_MODULE_4__["TLN_MANUSCRIPT_ROUTE"], component: _manuscript_view_component_manuscript_view_component_component__WEBPACK_IMPORTED_MODULE_1__["ManuscriptViewComponentComponent"] },
    { path: _tln_edition_constants__WEBPACK_IMPORTED_MODULE_4__["TLN_VIEWER_ROUTE"], component: _page_view_wrapper_component_page_view_wrapper_component__WEBPACK_IMPORTED_MODULE_3__["PageViewWrapperComponent"] },
    { path: _tln_edition_constants__WEBPACK_IMPORTED_MODULE_4__["TLN_CROSSREF_ROUTE"], component: _rhizome_view_component_rhizome_view_component_component__WEBPACK_IMPORTED_MODULE_2__["RhizomeViewComponentComponent"] },
    { path: _tln_edition_constants__WEBPACK_IMPORTED_MODULE_4__["TLN_SEARCH_ROUTE"], component: _tln_edition_tln_fulltext_tln_fulltext_component__WEBPACK_IMPORTED_MODULE_5__["TlnFulltextComponent"] },
    { path: _tln_edition_constants__WEBPACK_IMPORTED_MODULE_4__["TLN_QUANT_ROUTE"], component: _quant_quant_component__WEBPACK_IMPORTED_MODULE_6__["QuantComponent"] },
    { path: '', redirectTo: _tln_edition_constants__WEBPACK_IMPORTED_MODULE_4__["TLN_MANUSCRIPT_ROUTE"], pathMatch: 'prefix' }
];


/***/ }),

/***/ "./src/app/content-view-tab-component/content-view-tab-component.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/content-view-tab-component/content-view-tab-component.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-drawer-container {\n  width: 100%;\n}\n\n.mat-drawer {\n  padding: 10px;\n  margin-right: 10px;\n  max-height: 100%;\n  min-height: 90%;\n}\n\n.mat-card {\n  width: 100%;\n}\n\n.mat-drawer-content {\n  min-height: 100vh;\n  /*width: 100%;*/\n  height: 100%;\n  overflow-x: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9kYXRhL2hvbWUva25pc3RlcjAvZ2l0aHVicy9OaWV0enNjaGVCZXRhL25pZXR6c2NoZS1iZXRhLWFwcC9zcmMvYXBwL2NvbnRlbnQtdmlldy10YWItY29tcG9uZW50L2NvbnRlbnQtdmlldy10YWItY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIiwiY29udGVudC12aWV3LXRhYi1jb21wb25lbnQvY29udGVudC12aWV3LXRhYi1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxXQUFBO0FDQUY7O0FER0E7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7QUNBRjs7QURHQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0FGIiwiZmlsZSI6ImNvbnRlbnQtdmlldy10YWItY29tcG9uZW50L2NvbnRlbnQtdmlldy10YWItY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdGhlIG5hdmlnYXRpb24gZHJhd2VyIG9uIHRoZSB2ZXJ5IGxlZnQgY29udGFpbmluZyB0aGUgaXRlbXMgdG8gY2hvb3NlIGZyb21cbi5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LWRyYXdlciB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgbWluLWhlaWdodDogOTAlO1xufVxuXG4ubWF0LWNhcmQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1kcmF3ZXItY29udGVudCB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAvKndpZHRoOiAxMDAlOyovXG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteDogYXV0bztcbn1cbiIsIi5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LWRyYXdlciB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgbWluLWhlaWdodDogOTAlO1xufVxuXG4ubWF0LWNhcmQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1kcmF3ZXItY29udGVudCB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAvKndpZHRoOiAxMDAlOyovXG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteDogYXV0bztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/content-view-tab-component/content-view-tab-component.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/content-view-tab-component/content-view-tab-component.component.ts ***!
  \************************************************************************************/
/*! exports provided: ContentViewTabComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentViewTabComponentComponent", function() { return ContentViewTabComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_navigation_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/navigation-service.service */ "./src/app/services/navigation-service.service.ts");
/* harmony import */ var _tln_edition_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tln-edition/constants */ "./src/app/tln-edition/constants.ts");





let ContentViewTabComponentComponent = class ContentViewTabComponentComponent {
    constructor(router, activatedRoute, naviService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.naviService = naviService;
        // navbar on th left for navigating
        this.navBarOpenState = false;
        this.fullscreen = false;
        this.queryParams = {};
        // The links/tabs for routing the correct view-component
        this.navTabLinks = [
            {
                label: 'Manuskriptansicht',
                link: _tln_edition_constants__WEBPACK_IMPORTED_MODULE_4__["TLN_MANUSCRIPT_ROUTE"],
                index: 0,
                isActive: true,
                context: 'manuscript',
                disabled: false
            }, {
                label: 'Seitenansicht',
                link: _tln_edition_constants__WEBPACK_IMPORTED_MODULE_4__["TLN_VIEWER_ROUTE"],
                index: 1,
                isActive: false,
                context: 'page',
                disabled: false
            }, {
                label: 'Querverweise',
                link: _tln_edition_constants__WEBPACK_IMPORTED_MODULE_4__["TLN_CROSSREF_ROUTE"],
                index: 2,
                isActive: false,
                disabled: false
            }, {
                label: 'Suche',
                link: _tln_edition_constants__WEBPACK_IMPORTED_MODULE_4__["TLN_SEARCH_ROUTE"],
                index: 3,
                isActive: false,
                disabled: false
            },
            {
                label: 'Datenabfrage',
                link: _tln_edition_constants__WEBPACK_IMPORTED_MODULE_4__["TLN_QUANT_ROUTE"],
                index: 4,
                isActive: false,
                disabled: false
            },
        ];
        this.activeSubscription = this.activatedRoute.url.subscribe(url => {
            if (!this.navTabLinks.find(nl => nl.link === this.activatedRoute.snapshot.children.pop().routeConfig.path).isActive) {
                this.setActiveLink(this.activatedRoute.snapshot.children.pop().routeConfig.path);
            }
        });
        // subscribe to route event and for marking the active navTab as active
        this.routeSubscription = this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                // if the navigated link is not active, we set it acive
                if (!this.navTabLinks.find(nl => nl.link === this.activatedRoute.snapshot.children.pop().routeConfig.path).isActive) {
                    this.setActiveLink(this.activatedRoute.snapshot.children.pop().routeConfig.path);
                }
            }
        });
        this.queryParamSubscription = this.activatedRoute.queryParams.subscribe((queryParams) => {
            this.queryParams = queryParams;
            if (queryParams.navBarOpenState) {
                this.navBarOpenState = JSON.parse(queryParams.navBarOpenState.toLowerCase());
            }
            if (queryParams.fullscreen) {
                this.fullscreen = JSON.parse(queryParams.fullscreen.toLowerCase());
            }
        });
    }
    ngOnInit() {
        this.navBarOpenMode = 'side'; // side || over || push
        this.setParamsOnInit();
        // If url pasted or page refreshed --> resetting this.queryparams to the query params of the url;
        // needed for active routing in the nav tabs & for general use in the template
    }
    // Sets the isActive prop of a navTabLink to true and all others to false .
    setActiveLink(link) {
        this.navTabLinks.forEach((navTabLink, index) => {
            if (navTabLink.link === link) {
                this.navTabLinks[index].isActive = true;
                if (navTabLink.context) {
                    window.setTimeout(() => this.naviService.updateRoute({ contextView: navTabLink.context }), 300);
                }
            }
            else {
                this.navTabLinks[index].isActive = false;
            }
        });
    }
    /**
     * setParamsOnInit checks if the page is loaded with query params. If a certain query param is missing, it will be set to a default value
     *
     */
    setParamsOnInit() {
        const qParams = {};
        // Set the NavBarOpenstate to true if it is not defined explicitely as false in the url query param onInit.
        if (this.activatedRoute.snapshot.queryParamMap.get('navBarOpenState') !== 'false') {
            qParams.navBarOpenState = 'true';
        }
        // viewMode
        if (!this.activatedRoute.snapshot.queryParamMap.get('viewMode')) {
            qParams.viewMode = 'Transkription/Faksimile';
        }
        // contextView
        if (!this.activatedRoute.snapshot.queryParamMap.get('contextView')) {
            qParams.contextView = 'manuscript';
        }
        // navTabIdx: if none default is null
        if (!this.activatedRoute.snapshot.queryParamMap.get('navTabIdx')) {
            if (this.activatedRoute.snapshot.queryParamMap.get('contextView') === 'manuscript' || qParams.contextView === 'manuscript') {
                qParams.navTabIdx = '0';
            }
            else {
                qParams.navTabIdx = '1';
            }
        }
        this.naviService.updateRoute(qParams);
    }
};
ContentViewTabComponentComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_navigation_service_service__WEBPACK_IMPORTED_MODULE_3__["NavigationServiceService"] }
];
ContentViewTabComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-content-view-tab-component',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./content-view-tab-component.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content-view-tab-component/content-view-tab-component.component.html")).default,
        providers: [_services_navigation_service_service__WEBPACK_IMPORTED_MODULE_3__["NavigationServiceService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./content-view-tab-component.component.scss */ "./src/app/content-view-tab-component/content-view-tab-component.component.scss")).default]
    })
], ContentViewTabComponentComponent);



/***/ }),

/***/ "./src/app/content-view-tab-component/lazy-image-load-directive.directive.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/content-view-tab-component/lazy-image-load-directive.directive.ts ***!
  \***********************************************************************************/
/*! exports provided: LazyImageLoadDirectiveDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyImageLoadDirectiveDirective", function() { return LazyImageLoadDirectiveDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LazyImageLoadDirectiveDirective = class LazyImageLoadDirectiveDirective {
    constructor({ nativeElement }) {
        const supports = 'loading' in HTMLImageElement.prototype;
        if (supports) {
            nativeElement.setAttribute('loading', 'lazy');
        }
    }
};
LazyImageLoadDirectiveDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
LazyImageLoadDirectiveDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: 'img'
    })
], LazyImageLoadDirectiveDirective);

// IF NOT SUPPORTED IN CHROME: Open chrome://flags in Chromium or Chrome Canary.
//   Search for lazy.
//   Enable both the “Enable lazy image loading” and the “Enable lazy frame loading” flag.
//   Restart the browser with the button in the lower right corner of the screen.


/***/ }),

/***/ "./src/app/home.component.css":
/*!************************************!*\
  !*** ./src/app/home.component.css ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".skip {\n   margin-top: 20px;\n}\n.second{\n   margin-left: 10px;\n}\n.hint {\n   width: 700px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtHQUNHLGdCQUFnQjtBQUNuQjtBQUNBO0dBQ0csaUJBQWlCO0FBQ3BCO0FBQ0E7R0FDRyxZQUFZO0FBQ2YiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNraXAge1xuICAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5zZWNvbmR7XG4gICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5oaW50IHtcbiAgIHdpZHRoOiA3MDBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/home.component.ts":
/*!***********************************!*\
  !*** ./src/app/home.component.ts ***!
  \***********************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/app/constants.ts");
/* harmony import */ var _tln_edition_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tln-edition/constants */ "./src/app/tln-edition/constants.ts");




let HomeComponent = class HomeComponent {
    constructor() {
        this.manuscriptLink = ['/' + _constants__WEBPACK_IMPORTED_MODULE_2__["CONTENT_VIEW_ROUTE"], _tln_edition_constants__WEBPACK_IMPORTED_MODULE_3__["TLN_MANUSCRIPT_ROUTE"]];
        this.mpXIVParam = {};
        this.mpXVParam = {};
    }
    ngOnInit() {
        this.mpXIVParam[_tln_edition_constants__WEBPACK_IMPORTED_MODULE_3__["TLN_MANUSCRIPT_PARAM"]] = 'http://rdfh.ch/projects/0068#_Mp_XIV';
        this.mpXVParam[_tln_edition_constants__WEBPACK_IMPORTED_MODULE_3__["TLN_MANUSCRIPT_PARAM"]] = 'http://rdfh.ch/projects/0068#_Mp_XV';
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-component',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/impressum.component.css":
/*!*****************************************!*\
  !*** ./src/app/impressum.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".text {\n   text-align: justify;\n   width: 800px;\n}\n.subcontent {\n   margin-bottom: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltcHJlc3N1bS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0dBQ0csbUJBQW1CO0dBQ25CLFlBQVk7QUFDZjtBQUNBO0dBQ0csbUJBQW1CO0FBQ3RCIiwiZmlsZSI6ImltcHJlc3N1bS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQge1xuICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgIHdpZHRoOiA4MDBweDtcbn1cbi5zdWJjb250ZW50IHtcbiAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/impressum.component.ts":
/*!****************************************!*\
  !*** ./src/app/impressum.component.ts ***!
  \****************************************/
/*! exports provided: ImpressumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImpressumComponent", function() { return ImpressumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ImpressumComponent = class ImpressumComponent {
    constructor() { }
    ngOnInit() {
    }
};
ImpressumComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-impressum',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./impressum.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/impressum.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./impressum.component.css */ "./src/app/impressum.component.css")).default]
    })
], ImpressumComponent);



/***/ }),

/***/ "./src/app/main-menu-component/main-menu-component.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/main-menu-component/main-menu-component.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLW1lbnUtY29tcG9uZW50L21haW4tbWVudS1jb21wb25lbnQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/main-menu-component/main-menu-component.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/main-menu-component/main-menu-component.component.ts ***!
  \**********************************************************************/
/*! exports provided: MainMenuComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainMenuComponentComponent", function() { return MainMenuComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./src/app/constants.ts");




let MainMenuComponentComponent = class MainMenuComponentComponent {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.contentViewLink = [_constants__WEBPACK_IMPORTED_MODULE_3__["CONTENT_VIEW_ROUTE"]];
        this.impressumLink = [_constants__WEBPACK_IMPORTED_MODULE_3__["IMPRESSUM_ROUTE"]];
        this.homeLink = [_constants__WEBPACK_IMPORTED_MODULE_3__["HOME_ROUTE"]];
        this.supportLink = [_constants__WEBPACK_IMPORTED_MODULE_3__["HELP_ROUTE"]];
        this.projectLink = [_constants__WEBPACK_IMPORTED_MODULE_3__["PROJECT_ROUTE"]];
        this.dataLink = [_constants__WEBPACK_IMPORTED_MODULE_3__["DATA_ROUTE"]];
        this.conceptionLink = [_constants__WEBPACK_IMPORTED_MODULE_3__["CONCEPTION_ROUTE"]];
    }
    ngOnInit() {
        this.queryParamSub = this.activatedRoute.queryParams.subscribe((queryParams) => {
            this.fullScreen = queryParams.fullscreen;
            this.queryParams = queryParams;
        });
    }
};
MainMenuComponentComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
MainMenuComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-menu-component',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-menu-component.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main-menu-component/main-menu-component.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-menu-component.component.scss */ "./src/app/main-menu-component/main-menu-component.component.scss")).default]
    })
], MainMenuComponentComponent);



/***/ }),

/***/ "./src/app/manuscript-view-component/manuscript-view-component.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/manuscript-view-component/manuscript-view-component.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content-area {\n  height: 100%;\n  display: table;\n}\n\n.nav-container {\n  height: 100%;\n  width: 50%;\n  display: table-cell;\n}\n\n.content-container {\n  height: 100%;\n  display: table-cell;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9kYXRhL2hvbWUva25pc3RlcjAvZ2l0aHVicy9OaWV0enNjaGVCZXRhL25pZXR6c2NoZS1iZXRhLWFwcC9zcmMvYXBwL21hbnVzY3JpcHQtdmlldy1jb21wb25lbnQvbWFudXNjcmlwdC12aWV3LWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyIsIm1hbnVzY3JpcHQtdmlldy1jb21wb25lbnQvbWFudXNjcmlwdC12aWV3LWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBRUEsVUFBQTtFQUNBLG1CQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0VBR0EsbUJBQUE7QUNGRiIsImZpbGUiOiJtYW51c2NyaXB0LXZpZXctY29tcG9uZW50L21hbnVzY3JpcHQtdmlldy1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1hcmVhIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OnRhYmxlO1xufVxuXG4ubmF2LWNvbnRhaW5lciB7XG4gIGhlaWdodDoxMDAlO1xuICAvL21pbi13aWR0aDogdW5zZXQ7IC8vIG5lZWRlZCBiZWNhdXNlIGFuZ3VsYXIgc2V0cyBhbiBvd24gbWluIHdpZHRoIT9cbiAgd2lkdGg6NTAlO1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xufVxuXG4uY29udGVudC1jb250YWluZXIge1xuICBoZWlnaHQ6MTAwJTtcbiAgLy8gbWluLXdpZHRoOiB1bnNldDsgLy8gbmVlZGVkIGJlY2F1c2UgYW5ndWxhciBzZXRzIGFuIG93biBtaW4gd2lkdGghP1xuICAvLyB3aWR0aDoyMHB4O1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xufVxuIiwiLmNvbnRlbnQtYXJlYSB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogdGFibGU7XG59XG5cbi5uYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogNTAlO1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xufVxuXG4uY29udGVudC1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG59Il19 */");

/***/ }),

/***/ "./src/app/manuscript-view-component/manuscript-view-component.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/manuscript-view-component/manuscript-view-component.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ManuscriptViewComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManuscriptViewComponentComponent", function() { return ManuscriptViewComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ManuscriptViewComponentComponent = class ManuscriptViewComponentComponent {
    constructor() { }
    ngOnInit() {
    }
};
ManuscriptViewComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manuscript-view-component',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manuscript-view-component.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/manuscript-view-component/manuscript-view-component.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manuscript-view-component.component.scss */ "./src/app/manuscript-view-component/manuscript-view-component.component.scss")).default]
    })
], ManuscriptViewComponentComponent);



/***/ }),

/***/ "./src/app/models/models.ts":
/*!**********************************!*\
  !*** ./src/app/models/models.ts ***!
  \**********************************/
/*! exports provided: TlnEntity, NavigationEntity, ApiDef, TlnEntityMapping */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TlnEntity", function() { return TlnEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationEntity", function() { return NavigationEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiDef", function() { return ApiDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TlnEntityMapping", function() { return TlnEntityMapping; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class TlnEntity {
    constructor(id, iri, type, contextView, label, description) {
        this.id = id;
        this.iri = iri;
        this.type = type;
        this.contextView = contextView;
        this.label = label;
        this.description = description;
    }
}
// The navigation entries in each tree for each viewtab (TlnManuscript, TlnPage, PositionalEntity) used by navigation
//
class NavigationEntity {
    constructor(idx, tlnEntity, thumb, img, svg, avatar) {
        this.idx = idx;
        this.tlnEntity = tlnEntity;
        this.thumb = thumb;
        this.img = img;
        this.svg = svg;
        this.avatar = avatar;
    }
}
class ApiDef {
    constructor(type, baseUrl, dataArray, query, mapping, paramTriple) {
        this.type = type;
        this.baseUrl = baseUrl;
        this.dataArray = dataArray;
        this.query = query;
        this.mapping = mapping;
        this.paramTriple = paramTriple;
    }
}
class TlnEntityMapping {
    constructor(id, iri, idx, type, label, description, avatar, svg, thumb) {
        this.id = id;
        this.iri = iri;
        this.idx = idx;
        this.type = type;
        this.label = label;
        this.description = description;
        this.avatar = avatar;
        this.svg = svg;
        this.thumb = thumb;
    }
}


/***/ }),

/***/ "./src/app/navigation-list-component/navigation-list-component.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/navigation-list-component/navigation-list-component.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fixed-nav-container {\n  position: -webkit-sticky;\n  position: sticky;\n  /*max-height: 15vh;*/\n  max-height: 20vh;\n}\n\n.mat-form-field {\n  width: 40%;\n  margin-left: 20%;\n  font-size: small;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9kYXRhL2hvbWUva25pc3RlcjAvZ2l0aHVicy9OaWV0enNjaGVCZXRhL25pZXR6c2NoZS1iZXRhLWFwcC9zcmMvYXBwL25hdmlnYXRpb24tbGlzdC1jb21wb25lbnQvbmF2aWdhdGlvbi1saXN0LWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyIsIm5hdmlnYXRpb24tbGlzdC1jb21wb25lbnQvbmF2aWdhdGlvbi1saXN0LWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRyxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NIIiwiZmlsZSI6Im5hdmlnYXRpb24tbGlzdC1jb21wb25lbnQvbmF2aWdhdGlvbi1saXN0LWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maXhlZC1uYXYtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgLyptYXgtaGVpZ2h0OiAxNXZoOyovXG4gIG1heC1oZWlnaHQ6IDIwdmg7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gICB3aWR0aDogNDAlO1xuICAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgIGZvbnQtc2l6ZTogc21hbGw7XG59XG4iLCIuZml4ZWQtbmF2LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIC8qbWF4LWhlaWdodDogMTV2aDsqL1xuICBtYXgtaGVpZ2h0OiAyMHZoO1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogNDAlO1xuICBtYXJnaW4tbGVmdDogMjAlO1xuICBmb250LXNpemU6IHNtYWxsO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/navigation-list-component/navigation-list-component.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/navigation-list-component/navigation-list-component.component.ts ***!
  \**********************************************************************************/
/*! exports provided: NavigationListComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationListComponentComponent", function() { return NavigationListComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/app/constants.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_navigation_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/navigation-service.service */ "./src/app/services/navigation-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_query_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/query.service */ "./src/app/services/query.service.ts");
/* harmony import */ var _navtree_directive_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navtree-directive.directive */ "./src/app/navigation-list-component/navtree-directive.directive.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);








let NavigationListComponentComponent = 
/**
 * NavigationListComponent
 * Builds/rebuilds the navigation trees for populating the navigationlist-list-component and reacts on changes in the url
 */
class NavigationListComponentComponent {
    constructor(naviService, activatedRoute, queryService) {
        this.naviService = naviService;
        this.activatedRoute = activatedRoute;
        this.queryService = queryService;
        this.unfilteredEntities = []; // the unfiltered tree 
        this.navigationTreeDefs = _constants__WEBPACK_IMPORTED_MODULE_1__["NAVTREE_DEFS"];
        this.navTabIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    clearFilter() {
        this.filterValue = null;
        this.filterTree();
    }
    filterTree() {
        if (this.unfilteredEntities.length == 0) {
            this.unfilteredEntities = JSON.parse(JSON.stringify(this.activeTree.entries));
        }
        if (this.filterValue != undefined && this.filterValue != null && this.filterValue != '') {
            this.activeTree.entries = this.unfilteredEntities.filter(entry => entry.tlnEntity.label.includes(this.filterValue));
        }
        else {
            this.activeTree.entries = this.unfilteredEntities;
            this.unfilteredEntities = [];
        }
    }
    ngOnInit() {
        this.oldQueryParams = this.activatedRoute.snapshot.queryParamMap;
        this.queryParamSubscription = this.activatedRoute.queryParamMap.subscribe((queryParams) => {
            this.reactOnNewQParams(queryParams);
        });
        // The navTabIndex and the activeTree are set accordingly on the emitted tabIndex
        this.navTabIndexChange.subscribe(tabIdx => {
            if (tabIdx !== this.navTabIndex && tabIdx < this.navTrees.length && tabIdx >= 0) {
                this.navTabIndex = tabIdx;
                if (this.filterValue != undefined && this.filterValue != null && this.filterValue != '') {
                    this.clearFilter();
                }
                this.activeTree = this.navTrees[tabIdx];
            }
        });
        this.initNavTrees();
    }
    //
    // INITIAL METHODS, CORE METHODS
    //
    initNavTrees() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.createTreesOnInit();
            yield this.populateNavTrees();
            yield this.setActiveTreeOnInit();
            this.subscribeToSetSelectedItems();
        });
    }
    createTreesOnInit() {
        this.navTrees = [];
        this.navigationTreeDefs.forEach(def => this.navTrees.push(new _navtree_directive_directive__WEBPACK_IMPORTED_MODULE_6__["NavTree"](def.id, def.idx, def.label, [], def.itemQParam, def.description, def.apiDef)));
    }
    /**
     * populateNavTrees creates the first trees if no query params are available in the url:
     * It ceates the manuscripNavTree and the activePageNavTreeData of the first manuscript per default.
     *
     */
    populateNavTrees(tabIdx, item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const tabStartIndex = tabIdx || 0; // where to start refreshing navtrees downward
            for (const treeDef of this.navigationTreeDefs.sort(def => (def.idx))) {
                if (treeDef.idx >= tabStartIndex) { // only create trees if needed
                    this.queryService.getQueryfromFilename(treeDef.apiDef.query).then((query) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                        let queryToRun;
                        // If there is a selectedItem we have to parametrize the query
                        if (treeDef.idx > 0) { // so we have to parametrize the query
                            if (item) {
                                queryToRun = this.queryService.parametrizeQueryWithItem(query, item.id);
                                this.populateNavTree(treeDef, queryToRun);
                            }
                            else {
                                // wait for selected item of the previous tab and parametrize then the query
                                this.navTrees[treeDef.idx - 1].selectedItemSet.subscribe(selItem => {
                                    if (selItem.tabId === treeDef.idx - 1) {
                                        queryToRun = this.queryService.parametrizeQueryWithItem(query, selItem.itemId);
                                        this.populateNavTree(treeDef, queryToRun);
                                    }
                                });
                            }
                        }
                        else {
                            this.populateNavTree(treeDef, query);
                        }
                    }));
                }
            }
        });
    }
    populateNavTree(def, query) {
        const idx = this.navTrees.findIndex(navTreeId => navTreeId.id === def.id);
        let parentLabel;
        if (idx > 0) {
            parentLabel = this.navTrees[idx - 1].selectedItemLabel;
        }
        if (idx !== -1) {
            this.queryService.getData(def.apiDef.baseUrl, query, 'SELECT').then(data => {
                this.navTrees[idx].setNavTreeData(lodash__WEBPACK_IMPORTED_MODULE_7__["get"](data, def.apiDef.dataArray), this.activatedRoute.snapshot.queryParams, parentLabel);
            });
        }
    }
    /**
     * setActiveTreeOnInit listens to the initial queryParam and sets the navTabIdx accordingly.
     * gets the active navTabIndex either from a passed contextView, from active qParam or sets it to 0
     */
    setActiveTreeOnInit() {
        const activeTab = parseInt(this.activatedRoute.snapshot.queryParamMap.get('navTabIdx'), 10);
        this.navTrees.forEach(tree => {
            // If the tree is the active one according to qParam 'navTabIdx, we change to that tree
            if (activeTab === tree.idx) {
                this.navTabIndexChange.emit(activeTab);
            }
        });
    }
    /**
     * subscribeToSetSelectedItems
     * Subscribe to each tree's selectedItemSet and route/set the selectedItem in the qParams if the item is not yet set
     * This applies when the trees are built initially or rebuilt, i.e. in two cases:
     * 1) when no qParam for the trees is set in the route
     * 2) a selected item is changed in a parent tree and the childs qParams are nulled
     */
    subscribeToSetSelectedItems() {
        this.navTrees.forEach(tree => {
            if (!this.activatedRoute.snapshot.queryParamMap.get(tree.qParam)) {
                tree.selectedItemSet.subscribe(item => {
                    // set qParam
                    this.naviService.updateRoute({ [tree.qParam]: item.itemId });
                });
            }
        });
    }
    //
    // REACTING ON CHANGES MADE OUTSIDE OF THE COMPONENT
    //
    reactOnNewQParams(qParams) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // iterating through all queryParams and react if one param has changed
            yield qParams.keys.forEach(key => {
                if (qParams.get(key) !== this.oldQueryParams.get(key)) {
                    this.reactOnParamChange(key, qParams.get(key));
                }
            });
            this.oldQueryParams = this.activatedRoute.snapshot.queryParamMap;
        });
    }
    reactOnParamChange(qParam, newValue) {
        // qParams of the navTrees, e.g. 'page' and 'manuscript'
        if (this.navTrees && this.navTrees.map(tree => tree.qParam).findIndex(param => param === qParam) !== -1) {
            // if a qParam is one of the params defined in navTrees
            this.reactOnItemChange(qParam, newValue);
        }
        if (qParam === 'contextView') {
            this.reactOnContextChange(newValue);
        }
        if (qParam === 'navTabIdx') {
            this.navTabIndexChange.emit(parseInt(newValue, 10));
        }
    }
    reactOnItemChange(param, itemId) {
        // because it might be changed from outside via url update, we have to find the tree according to the changed param
        const parentIdx = this.navTrees.findIndex(tree => tree.qParam === param);
        if (itemId !== this.navTrees[parentIdx].selectedItem) { // only rebuild if it is not yet set.
            this.rebuildTrees(parentIdx, itemId);
        }
    }
    // gets the
    reactOnContextChange(context) {
        const newTabIndex = this.getActiveNavTabIdxFromContext(context);
        this.changeNavTreeViaRoute(newTabIndex);
        // must time out here hence document is not ready to scroll
        // window.setTimeout(() => this.scrollOnToSelectedItem(this.oldQueryParams[context]), 100);
    }
    rebuildTrees(parentIdx, itemId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const itemToSelect = yield this.navTrees[parentIdx].getSelectedById(itemId);
            yield this.navTrees[parentIdx].setSelectedItem(itemToSelect.tlnEntity.id, itemToSelect.tlnEntity.label);
            yield this.rebuildChildNavTrees(itemToSelect, parentIdx);
        });
    }
    rebuildChildNavTrees(item, parentIdx) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // get new data for subTrees and set new params accordingly
            yield this.emptyChildTrees(parentIdx);
            yield this.removeAllChildTreeQParams(parentIdx);
            yield this.populateChildren(parentIdx, item.tlnEntity);
        });
    }
    removeAllChildTreeQParams(tabId) {
        this.navTrees.forEach((tree, index) => {
            if (tree.idx > tabId) {
                this.navTrees[index].selectedItem = null;
                this.naviService.updateRoute({ [tree.qParam]: null });
            }
        });
    }
    emptyChildTrees(parentIdx) {
        this.navTrees.forEach((tree, index) => {
            if (tree.idx > parentIdx) {
                this.navTrees[index].entries = [];
            }
        });
    }
    populateChildren(parentTab, item) {
        if (parentTab + 1 < this.navigationTreeDefs.length) {
            // if an item in a tab with sub tabs is selected, the subtree should be loaded according to that selection and the tab should change
            this.populateNavTrees(parentTab + 1, item);
        }
    }
    /**
     * getActiveNavTabIndexOnInit
     * gets the active navTabIndex either from a passed contextView, from active qParam or sets it to 0
     */
    getActiveNavTabIdxFromContext(con) {
        let navTreeIndex; // the index of the navTree with the qParam corresponding to con
        let navTabIndex;
        if (con) {
            navTreeIndex = this.navigationTreeDefs.findIndex(tree => tree.itemQParam === con);
        }
        if (navTreeIndex >= 0) { // no -1/not found
            navTabIndex = this.navigationTreeDefs[navTreeIndex].idx;
        }
        return navTabIndex;
    }
    /**
     * changeNavTreeViaRoute
     * changes to a new tree/tab in the navtab of the navList. In case of displayed tln-search and tln-crossRef
     * within content-view-component, the contextView is set also corresponding to the trees qParam.
     */
    changeNavTreeViaRoute(idx) {
        if (idx < this.navTrees.length && idx >= 0) {
            const qParams = {};
            qParams['navTabIdx'] = idx;
            const activeView = this.activatedRoute.snapshot.children.pop().routeConfig.path;
            // If the tln-search or the tln-crossRef are active, then change the contextView, hence the app reacts
            // on context change and will set the navTabIdx accordingly
            if (activeView === 'tln-search' || activeView === 'tln-crossref') {
                const newContext = this.navTrees[this.navTrees.findIndex(tree => tree.idx === idx)].qParam;
                if (newContext !== this.activatedRoute.snapshot.queryParamMap.get('contextView')) {
                    qParams['contextView'] = newContext;
                }
            }
            this.naviService.updateRoute(qParams);
        }
    }
};
NavigationListComponentComponent.ctorParameters = () => [
    { type: _services_navigation_service_service__WEBPACK_IMPORTED_MODULE_3__["NavigationServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_query_service__WEBPACK_IMPORTED_MODULE_5__["QueryService"] }
];
NavigationListComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-navigation-list-component',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navigation-list-component.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation-list-component/navigation-list-component.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navigation-list-component.component.scss */ "./src/app/navigation-list-component/navigation-list-component.component.scss")).default]
    })
    /**
     * NavigationListComponent
     * Builds/rebuilds the navigation trees for populating the navigationlist-list-component and reacts on changes in the url
     */
], NavigationListComponentComponent);



/***/ }),

/***/ "./src/app/navigation-list-component/navigationlist-list-component/navigationlist-list-component.component.scss":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/navigation-list-component/navigationlist-list-component/navigationlist-list-component.component.scss ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navlist-container {\n  position: -webkit-sticky;\n  position: sticky;\n  max-height: 85vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  scroll-behavior: smooth;\n}\n\n.mat-nav-list {\n  scroll-behavior: smooth;\n}\n\n.mat-nav-list .mat-list-item {\n  width: 100%;\n  min-height: 72px;\n  height: 100%;\n  /* default is 72px */\n  padding: 0 !important;\n  margin: 0 !important;\n}\n\n.thumbnail {\n  max-width: 80px;\n  max-height: 80px;\n}\n\n.card-item {\n  width: 100%;\n  min-width: 100%;\n  margin-top: 5px;\n  background-color: rgba(255, 255, 255, 0) !important;\n}\n\n.active-item {\n  background: linear-gradient(to right, rgba(255, 255, 255, 0), #dadada);\n}\n\n.head-icon {\n  margin-top: 25px;\n}\n\n.content-icon {\n  margin-left: -16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9kYXRhL2hvbWUva25pc3RlcjAvZ2l0aHVicy9OaWV0enNjaGVCZXRhL25pZXR6c2NoZS1iZXRhLWFwcC9zcmMvYXBwL25hdmlnYXRpb24tbGlzdC1jb21wb25lbnQvbmF2aWdhdGlvbmxpc3QtbGlzdC1jb21wb25lbnQvbmF2aWdhdGlvbmxpc3QtbGlzdC1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiLCJuYXZpZ2F0aW9uLWxpc3QtY29tcG9uZW50L25hdmlnYXRpb25saXN0LWxpc3QtY29tcG9uZW50L25hdmlnYXRpb25saXN0LWxpc3QtY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7RUFBQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUFjLG9CQUFBO0VBQ2QscUJBQUE7RUFDQSxvQkFBQTtBQ0VGOztBRENBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDRUY7O0FEQ0E7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxtREFBQTtBQ0VGOztBRENBO0VBQ0Usc0VBQUE7QUNFRjs7QURBQTtFQUNHLGdCQUFBO0FDR0g7O0FEREE7RUFDRyxrQkFBQTtBQ0lIIiwiZmlsZSI6Im5hdmlnYXRpb24tbGlzdC1jb21wb25lbnQvbmF2aWdhdGlvbmxpc3QtbGlzdC1jb21wb25lbnQvbmF2aWdhdGlvbmxpc3QtbGlzdC1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2bGlzdC1jb250YWluZXIge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBtYXgtaGVpZ2h0OiA4NXZoO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG4ubWF0LW5hdi1saXN0IHtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbi5tYXQtbmF2LWxpc3QgLm1hdC1saXN0LWl0ZW0ge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogNzJweDtcbiAgaGVpZ2h0OiAxMDAlOyAvKiBkZWZhdWx0IGlzIDcycHggKi9cbiAgcGFkZGluZzogMCAhaW1wb3J0YW50OztcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG5cbi50aHVtYm5haWwge1xuICBtYXgtd2lkdGg6IDgwcHg7XG4gIG1heC1oZWlnaHQ6IDgwcHg7XG59XG5cbi5jYXJkLWl0ZW0ge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgIWltcG9ydGFudDtcbn1cblxuLmFjdGl2ZS1pdGVtIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApICwgI2RhZGFkYSk7XG59XG4uaGVhZC1pY29uIHtcbiAgIG1hcmdpbi10b3A6IDI1cHg7XG59XG4uY29udGVudC1pY29uIHtcbiAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbn1cbiIsIi5uYXZsaXN0LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIG1heC1oZWlnaHQ6IDg1dmg7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbi5tYXQtbmF2LWxpc3Qge1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuLm1hdC1uYXYtbGlzdCAubWF0LWxpc3QtaXRlbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiA3MnB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8qIGRlZmF1bHQgaXMgNzJweCAqL1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuXG4udGh1bWJuYWlsIHtcbiAgbWF4LXdpZHRoOiA4MHB4O1xuICBtYXgtaGVpZ2h0OiA4MHB4O1xufVxuXG4uY2FyZC1pdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApICFpbXBvcnRhbnQ7XG59XG5cbi5hY3RpdmUtaXRlbSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgI2RhZGFkYSk7XG59XG5cbi5oZWFkLWljb24ge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4uY29udGVudC1pY29uIHtcbiAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/navigation-list-component/navigationlist-list-component/navigationlist-list-component.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/navigation-list-component/navigationlist-list-component/navigationlist-list-component.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: NavigationlistListComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationlistListComponentComponent", function() { return NavigationlistListComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_navigation_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/navigation-service.service */ "./src/app/services/navigation-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants */ "./src/app/constants.ts");





let NavigationlistListComponentComponent = class NavigationlistListComponentComponent {
    constructor(naviService, route) {
        this.naviService = naviService;
        this.route = route;
    }
    ngOnChanges() {
        if (this.navTree && document) {
            this.scrollOnToSelectedItem(this.route.snapshot.queryParamMap.get(this.navTree.qParam));
        }
    }
    onSelectNavItem(item) {
        if (this.navTree.selectedItem !== item.tlnEntity.id) {
            this.naviService.updateRoute({ [this.navTree.qParam]: item.tlnEntity.id });
            this.scrollOnToSelectedItem(item.tlnEntity.id);
        }
        else { // If clicked the already selected item ...
            const qParams = {};
            let relPath;
            if (this.navTree.idx < _constants__WEBPACK_IMPORTED_MODULE_4__["NAVTREE_DEFS"].length - 1) { // if it is not the last tab/tree we switch one tab deeper
                qParams['navTabIdx'] = this.navTree.idx + 1;
                this.naviService.updateRoute(qParams);
            }
            if (this.navTree.idx === _constants__WEBPACK_IMPORTED_MODULE_4__["NAVTREE_DEFS"].length - 1 && this.route.children[0].snapshot.routeConfig.path === 'tln-manuscript') { // if it is the last available tab/tree we change the context
                qParams['contextView'] = _constants__WEBPACK_IMPORTED_MODULE_4__["NAVTREE_DEFS"][_constants__WEBPACK_IMPORTED_MODULE_4__["NAVTREE_DEFS"].findIndex(tree => tree.id === this.navTree.id)].itemQParam;
                relPath = 'tln-viewer';
                this.naviService.updateRoute(qParams, relPath);
            }
        }
    }
    scrollOnToSelectedItem(itemId) {
        window.setTimeout(() => {
            if (document.getElementById(itemId)) {
                const offSetTop = document.getElementById(itemId).offsetTop;
                document.getElementById('navlist').scrollTop = offSetTop - 100;
            }
        }, 100);
    }
};
NavigationlistListComponentComponent.ctorParameters = () => [
    { type: _services_navigation_service_service__WEBPACK_IMPORTED_MODULE_2__["NavigationServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NavigationlistListComponentComponent.prototype, "navTree", void 0);
NavigationlistListComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navigationlist-list-component',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navigationlist-list-component.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation-list-component/navigationlist-list-component/navigationlist-list-component.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navigationlist-list-component.component.scss */ "./src/app/navigation-list-component/navigationlist-list-component/navigationlist-list-component.component.scss")).default]
    })
], NavigationlistListComponentComponent);



/***/ }),

/***/ "./src/app/navigation-list-component/navtree-directive.directive.ts":
/*!**************************************************************************!*\
  !*** ./src/app/navigation-list-component/navtree-directive.directive.ts ***!
  \**************************************************************************/
/*! exports provided: NavTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavTree", function() { return NavTree; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/models */ "./src/app/models/models.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);




let NavTree = class NavTree {
    constructor(id, idx, label, entries, qParam, description, apiDef, selectedItem, selectedItemLabel, parentLabel) {
        this.id = id;
        this.idx = idx;
        this.label = label;
        this.qParam = qParam;
        this.entries = entries || [];
        this.description = description;
        this.apiDef = apiDef;
        this.selectedItem = selectedItem;
        this.selectedItemLabel = selectedItemLabel;
        this.selectedItemSet = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.parentLabel = parentLabel;
    }
    setNavTreeData(data, queryParams, parentLabel) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.parentLabel = parentLabel;
            const selectedId = queryParams[this.qParam];
            if (selectedId && selectedId !== '') {
                const selectedLabel = yield lodash__WEBPACK_IMPORTED_MODULE_3__["get"](data[data.findIndex(item => item[this.apiDef.mapping.id] === selectedId)], this.apiDef.mapping.label);
                this.setSelectedItem(selectedId, selectedLabel);
            }
            else {
                const firstEntry = yield lodash__WEBPACK_IMPORTED_MODULE_3__["get"](data[0], this.apiDef.mapping.id);
                yield this.setSelectedItem(firstEntry, yield lodash__WEBPACK_IMPORTED_MODULE_3__["get"](data[0], this.apiDef.mapping.label));
            }
            this.entries = []; // resetting tree data of the given tab
            data.forEach((entry, index) => {
                // (id: string, iri: string, type: string, navIndex: number, label?: string)
                const entity = new _models_models__WEBPACK_IMPORTED_MODULE_2__["TlnEntity"](lodash__WEBPACK_IMPORTED_MODULE_3__["get"](entry, this.apiDef.mapping.id), lodash__WEBPACK_IMPORTED_MODULE_3__["get"](entry, this.apiDef.mapping.iri), lodash__WEBPACK_IMPORTED_MODULE_3__["get"](entry, this.apiDef.mapping.type) ||
                    null, index, lodash__WEBPACK_IMPORTED_MODULE_3__["get"](entry, this.apiDef.mapping.label) || '', lodash__WEBPACK_IMPORTED_MODULE_3__["get"](entry, this.apiDef.mapping.description || ''));
                const thumb = lodash__WEBPACK_IMPORTED_MODULE_3__["get"](entry, this.apiDef.mapping.thumb);
                let svg;
                if (lodash__WEBPACK_IMPORTED_MODULE_3__["get"](entry, this.apiDef.mapping.svg)) {
                    svg = lodash__WEBPACK_IMPORTED_MODULE_3__["get"](entry, this.apiDef.mapping.svg);
                }
                const avatar = lodash__WEBPACK_IMPORTED_MODULE_3__["get"](entry, this.apiDef.mapping.avatar);
                const navEntity = new _models_models__WEBPACK_IMPORTED_MODULE_2__["NavigationEntity"](index, entity, thumb, '', svg, avatar);
                this.entries.push(navEntity);
            });
        });
    }
    setSelectedItem(itemId, itemLabel) {
        this.selectedItem = itemId;
        this.selectedItemLabel = itemLabel;
        //
        this.selectedItemSet.emit({ tabId: this.idx, itemId });
        //
    }
    getSelectedById(itemId) {
        const idx = this.entries.findIndex(item => item.tlnEntity.id === itemId);
        if (idx !== -1) {
            return this.entries[idx];
        }
        else {
            console.log('no item with id', itemId, 'found');
        }
    }
};
NavTree.ctorParameters = () => [
    { type: String },
    { type: Number },
    { type: String },
    { type: Array },
    { type: String },
    { type: String },
    { type: _models_models__WEBPACK_IMPORTED_MODULE_2__["ApiDef"] },
    { type: String },
    { type: String },
    { type: String }
];
NavTree = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appNavtreeDirective]'
    })
], NavTree);



/***/ }),

/***/ "./src/app/ontology-viewer/content.component.css":
/*!*******************************************************!*\
  !*** ./src/app/ontology-viewer/content.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a {\n   font-weight: normal;\n   margin-right: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9udG9sb2d5LXZpZXdlci9jb250ZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7R0FDRyxtQkFBbUI7R0FDbkIsaUJBQWlCO0FBQ3BCIiwiZmlsZSI6Im9udG9sb2d5LXZpZXdlci9jb250ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcbiAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/ontology-viewer/content.component.ts":
/*!******************************************************!*\
  !*** ./src/app/ontology-viewer/content.component.ts ***!
  \******************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ContentComponent = class ContentComponent {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.links = [];
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe((queryParams) => {
            this.queryParams = queryParams;
        });
        if (this.links.length == 0) {
            if (typeof this.content == 'string') {
                this.text = this.content;
            }
            else {
                this.links = [this.content];
            }
        }
    }
};
ContentComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ContentComponent.prototype, "content", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ContentComponent.prototype, "links", void 0);
ContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'content',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./content.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ontology-viewer/content.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./content.component.css */ "./src/app/ontology-viewer/content.component.css")).default]
    })
], ContentComponent);



/***/ }),

/***/ "./src/app/ontology-viewer/ontologies2namespaces.pipe.ts":
/*!***************************************************************!*\
  !*** ./src/app/ontology-viewer/ontologies2namespaces.pipe.ts ***!
  \***************************************************************/
/*! exports provided: Ontologies2namespacesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ontologies2namespacesPipe", function() { return Ontologies2namespacesPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Ontologies2namespacesPipe = class Ontologies2namespacesPipe {
    transform(ontologies, optional_namespaces) {
        let namespaces = [];
        ontologies.forEach(ontology => {
            namespaces.push({
                prefix: ontology.prefix,
                isExternal: false,
                iri: ontology.iri + '#'
            });
        });
        if (optional_namespaces != undefined && optional_namespaces != null) {
            return namespaces.concat(optional_namespaces);
        }
        return namespaces;
    }
};
Ontologies2namespacesPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'ontologies2namespaces'
    })
], Ontologies2namespacesPipe);



/***/ }),

/***/ "./src/app/ontology-viewer/ontology-classes.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/ontology-viewer/ontology-classes.component.ts ***!
  \***************************************************************/
/*! exports provided: OntologyClassesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OntologyClassesComponent", function() { return OntologyClassesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ontology_query_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ontology-query.service */ "./src/app/ontology-viewer/ontology-query.service.ts");
/* harmony import */ var _ontology_retriever__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ontology-retriever */ "./src/app/ontology-viewer/ontology-retriever.ts");




let OntologyClassesComponent = class OntologyClassesComponent extends _ontology_retriever__WEBPACK_IMPORTED_MODULE_3__["OntologyRetriever"] {
    constructor(queryService) {
        super(queryService);
        this.queryService = queryService;
        this.query = `
  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
  PREFIX owl: <http://www.w3.org/2002/07/owl#>

  SELECT ?class ?label ?comment ?superClass WHERE {
      ?class a owl:Class;
         rdfs:isDefinedBy ?ontology.
         OPTIONAL { ?class rdfs:label ?label }
         OPTIONAL { ?class rdfs:comment ?comment }
         OPTIONAL { ?class rdfs:subClassOf ?superClass.
               FILTER(!isBlank(?superClass))
               FILTER (?class != ?superClass)
         }
   }`;
    }
};
OntologyClassesComponent.ctorParameters = () => [
    { type: _ontology_query_service__WEBPACK_IMPORTED_MODULE_2__["OntologyQueryService"] }
];
OntologyClassesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ontology-classes',
        template: `<ontology-display *ngIf="dataMappings.length > 0" [dataMappings]="dataMappings | sortSubjectsAlpha"></ontology-display>`
    })
], OntologyClassesComponent);



/***/ }),

/***/ "./src/app/ontology-viewer/ontology-definition.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/ontology-viewer/ontology-definition.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvbnRvbG9neS12aWV3ZXIvb250b2xvZ3ktZGVmaW5pdGlvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/ontology-viewer/ontology-definition.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/ontology-viewer/ontology-definition.component.ts ***!
  \******************************************************************/
/*! exports provided: OntologyDefinitionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OntologyDefinitionComponent", function() { return OntologyDefinitionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ontology_query_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ontology-query.service */ "./src/app/ontology-viewer/ontology-query.service.ts");
/* harmony import */ var _sparqljs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sparqljs */ "./src/app/ontology-viewer/sparqljs.ts");




let OntologyDefinitionComponent = class OntologyDefinitionComponent {
    constructor(queryService) {
        this.queryService = queryService;
        this.dataMapping = { subject: null, subjectType: null, queryDataMappings: [] };
        this.query = `
  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
  PREFIX owl: <http://www.w3.org/2002/07/owl#>
  PREFIX dct: <http://purl.org/dc/terms/>

  SELECT ?title ?description ?creator ?contributor ?license ?publisher ?version WHERE {
      ?ontology a owl:Ontology.
         OPTIONAL { ?ontology dct:license ?license }
         OPTIONAL { ?ontology dct:title ?title }
         OPTIONAL { ?ontology dct:description ?description }
      	OPTIONAL { ?ontology dct:creator ?creator }
         OPTIONAL { ?ontology dct:publisher ?publisher}
         OPTIONAL { ?ontology dct:contributor ?contributor } 
         OPTIONAL { ?ontology owl:versionInfo ?version } 
   }`;
    }
    ngOnInit() {
        if (this.ontology != undefined && this.ontology != null) {
            let parser = new _sparqljs__WEBPACK_IMPORTED_MODULE_3__["SparqlParser"](this.queryService);
            parser.fetchData(this, 'dataMapping', this.query, 'ontology', this.ontology.iri, this.namespaces);
        }
    }
};
OntologyDefinitionComponent.ctorParameters = () => [
    { type: _ontology_query_service__WEBPACK_IMPORTED_MODULE_2__["OntologyQueryService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], OntologyDefinitionComponent.prototype, "ontology", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], OntologyDefinitionComponent.prototype, "namespaces", void 0);
OntologyDefinitionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ontology-definition',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ontology-definition.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ontology-viewer/ontology-definition.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ontology-definition.component.css */ "./src/app/ontology-viewer/ontology-definition.component.css")).default]
    })
], OntologyDefinitionComponent);



/***/ }),

/***/ "./src/app/ontology-viewer/ontology-display.component.css":
/*!****************************************************************!*\
  !*** ./src/app/ontology-viewer/ontology-display.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvbnRvbG9neS12aWV3ZXIvb250b2xvZ3ktZGlzcGxheS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/ontology-viewer/ontology-display.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/ontology-viewer/ontology-display.component.ts ***!
  \***************************************************************/
/*! exports provided: OntologyDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OntologyDisplayComponent", function() { return OntologyDisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OntologyDisplayComponent = class OntologyDisplayComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], OntologyDisplayComponent.prototype, "dataMappings", void 0);
OntologyDisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ontology-display',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ontology-display.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ontology-viewer/ontology-display.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ontology-display.component.css */ "./src/app/ontology-viewer/ontology-display.component.css")).default]
    })
], OntologyDisplayComponent);



/***/ }),

/***/ "./src/app/ontology-viewer/ontology-properties.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/ontology-viewer/ontology-properties.component.ts ***!
  \******************************************************************/
/*! exports provided: OntologyPropertiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OntologyPropertiesComponent", function() { return OntologyPropertiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ontology_query_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ontology-query.service */ "./src/app/ontology-viewer/ontology-query.service.ts");
/* harmony import */ var _ontology_retriever__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ontology-retriever */ "./src/app/ontology-viewer/ontology-retriever.ts");




let OntologyPropertiesComponent = class OntologyPropertiesComponent extends _ontology_retriever__WEBPACK_IMPORTED_MODULE_3__["OntologyRetriever"] {
    constructor(queryService) {
        super(queryService);
        this.queryService = queryService;
    }
};
OntologyPropertiesComponent.ctorParameters = () => [
    { type: _ontology_query_service__WEBPACK_IMPORTED_MODULE_2__["OntologyQueryService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], OntologyPropertiesComponent.prototype, "query", void 0);
OntologyPropertiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ontology-properties',
        template: `<ontology-display *ngIf="dataMappings.length > 0" [dataMappings]="dataMappings | sortSubjectsAlpha"></ontology-display>`
    })
], OntologyPropertiesComponent);



/***/ }),

/***/ "./src/app/ontology-viewer/ontology-query.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/ontology-viewer/ontology-query.service.ts ***!
  \***********************************************************/
/*! exports provided: OntologyQueryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OntologyQueryService", function() { return OntologyQueryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let OntologyQueryService = class OntologyQueryService {
    constructor(http) {
        this.http = http;
        this.cache = {};
    }
    /**
     * Gets the data from an endpoint via http post
     *
     * @param query:  The query to run.
     * @param this.baseUrl: The URL of the endpoint
     * @returns response
     */
    getData(query) {
        let httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/sparql-query',
                'Accept': 'application/sparql-results+json; charset=UTF-8' })
        };
        return this.http.post(this.baseUrl, query, httpOptions);
    }
    getOldData(query) {
        let httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/sparql-query',
                'Accept': 'application/sparql-results+json; charset=UTF-8' })
        };
        if (this.cache[query]) {
            console.log('Returning cached value!');
            return this.cache[this.baseUrl + query];
        }
        this.cache[query] = this.http.post(this.baseUrl, query, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
            delete this.cache[this.baseUrl + query];
            this.handleError(error);
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
        }));
        return this.cache[this.baseUrl + query];
    }
    handleError(error) {
        switch (error.status) {
            case 0:
                // A client-side or network error occurred. Handle it accordingly.
                console.error('The backend data server is offline:', error.error);
                break;
            default:
                console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.');
    }
};
OntologyQueryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
OntologyQueryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], OntologyQueryService);



/***/ }),

/***/ "./src/app/ontology-viewer/ontology-retriever.ts":
/*!*******************************************************!*\
  !*** ./src/app/ontology-viewer/ontology-retriever.ts ***!
  \*******************************************************/
/*! exports provided: OntologyRetriever */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OntologyRetriever", function() { return OntologyRetriever; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _sparqljs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sparqljs */ "./src/app/ontology-viewer/sparqljs.ts");



class OntologyRetriever {
    constructor(queryService) {
        this.queryService = queryService;
        this.dataMappings = [];
    }
    ngOnInit() {
        if (this.ontology != undefined && this.ontology != null && this.query != undefined && this.query != null) {
            let parser = new _sparqljs__WEBPACK_IMPORTED_MODULE_2__["SparqlParser"](this.queryService);
            parser.fetchArrayData(this, 'dataMappings', this.query, 'ontology', this.ontology.iri, this.namespaces);
            //console.log(SparqlParser.getQuery(this.query, 'ontology', this.ontology.iri));
        }
    }
}
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], OntologyRetriever.prototype, "ontology", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], OntologyRetriever.prototype, "namespaces", void 0);


/***/ }),

/***/ "./src/app/ontology-viewer/ontology-table.component.css":
/*!**************************************************************!*\
  !*** ./src/app/ontology-viewer/ontology-table.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n   margin-top: 20px;\n   width: 100%;\n   border-collapse: collapse;\n   border-spacing: 5% 2em;\n}\ntr:nth-child(even){background-color: #f2f2f2;}\nth {\n   border: 1px solid #ddd;\n   background-color: #f2f2f2;\n   padding-left: 10px !important;\n}\ntd {\n border: 1px solid #ddd;\n padding-left: 10px !important;\n}\n.predicate {\n   width: 20%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9udG9sb2d5LXZpZXdlci9vbnRvbG9neS10YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0dBQ0csZ0JBQWdCO0dBQ2hCLFdBQVc7R0FDWCx5QkFBeUI7R0FDekIsc0JBQXNCO0FBQ3pCO0FBQ0EsbUJBQW1CLHlCQUF5QixDQUFDO0FBQzdDO0dBQ0csc0JBQXNCO0dBQ3RCLHlCQUF5QjtHQUN6Qiw2QkFBNkI7QUFDaEM7QUFDQTtDQUNDLHNCQUFzQjtDQUN0Qiw2QkFBNkI7QUFDOUI7QUFDQTtHQUNHLFVBQVU7QUFDYiIsImZpbGUiOiJvbnRvbG9neS12aWV3ZXIvb250b2xvZ3ktdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICB3aWR0aDogMTAwJTtcbiAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICBib3JkZXItc3BhY2luZzogNSUgMmVtO1xufVxudHI6bnRoLWNoaWxkKGV2ZW4pe2JhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7fVxudGgge1xuICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbn1cbnRkIHtcbiBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xufVxuLnByZWRpY2F0ZSB7XG4gICB3aWR0aDogMjAlO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/ontology-viewer/ontology-table.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/ontology-viewer/ontology-table.component.ts ***!
  \*************************************************************/
/*! exports provided: OntologyTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OntologyTableComponent", function() { return OntologyTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OntologyTableComponent = class OntologyTableComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], OntologyTableComponent.prototype, "dataMapping", void 0);
OntologyTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ontology-table',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ontology-table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ontology-viewer/ontology-table.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ontology-table.component.css */ "./src/app/ontology-viewer/ontology-table.component.css")).default]
    })
], OntologyTableComponent);



/***/ }),

/***/ "./src/app/ontology-viewer/ontology-viewer.component.css":
/*!***************************************************************!*\
  !*** ./src/app/ontology-viewer/ontology-viewer.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvbnRvbG9neS12aWV3ZXIvb250b2xvZ3ktdmlld2VyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/ontology-viewer/ontology-viewer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/ontology-viewer/ontology-viewer.component.ts ***!
  \**************************************************************/
/*! exports provided: OntologyViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OntologyViewerComponent", function() { return OntologyViewerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ontology_query_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ontology-query.service */ "./src/app/ontology-viewer/ontology-query.service.ts");
/* harmony import */ var _sparqljs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sparqljs */ "./src/app/ontology-viewer/sparqljs.ts");




let OntologyViewerComponent = class OntologyViewerComponent {
    constructor(queryService) {
        this.queryService = queryService;
        this.query = `
  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
  PREFIX owl: <http://www.w3.org/2002/07/owl#>
  PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

  SELECT ?property ?label ?comment ?domain ?range ?superProp WHERE {
      ?property  a ?propertyType;
                 rdfs:isDefinedBy ?ontology.
         OPTIONAL { ?property rdfs:label ?label }
         OPTIONAL { ?property rdfs:domain ?domain.
         ?domain  rdfs:isDefinedBy ?ontology}
         OPTIONAL { ?property rdfs:range ?range }
         OPTIONAL { ?property rdfs:comment ?comment }
         OPTIONAL { ?property rdfs:subPropertyOf ?superProp.
                    ?superProp rdfs:isDefinedBy ?ontology.
                    FILTER(?property != ?superProp)
         }
         FILTER(!isBlank(?range))
   }`;
    }
    ngOnInit() {
        this.objectPropertyQuery = _sparqljs__WEBPACK_IMPORTED_MODULE_3__["SparqlParser"].getQuery(this.query, 'propertyType', 'http://www.w3.org/2002/07/owl#ObjectProperty');
        this.datatypePropertyQuery = _sparqljs__WEBPACK_IMPORTED_MODULE_3__["SparqlParser"].getQuery(this.query, 'propertyType', 'http://www.w3.org/2002/07/owl#DatatypeProperty');
        this.queryService.baseUrl = this.baseUrl;
    }
};
OntologyViewerComponent.ctorParameters = () => [
    { type: _ontology_query_service__WEBPACK_IMPORTED_MODULE_2__["OntologyQueryService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], OntologyViewerComponent.prototype, "baseUrl", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], OntologyViewerComponent.prototype, "ontology", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], OntologyViewerComponent.prototype, "namespaces", void 0);
OntologyViewerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ontology-viewer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ontology-viewer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ontology-viewer/ontology-viewer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ontology-viewer.component.css */ "./src/app/ontology-viewer/ontology-viewer.component.css")).default]
    })
], OntologyViewerComponent);



/***/ }),

/***/ "./src/app/ontology-viewer/ontology-viewer.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/ontology-viewer/ontology-viewer.module.ts ***!
  \***********************************************************/
/*! exports provided: OntologyViewerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OntologyViewerModule", function() { return OntologyViewerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _ontology_viewer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ontology-viewer.component */ "./src/app/ontology-viewer/ontology-viewer.component.ts");
/* harmony import */ var _ontology_query_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ontology-query.service */ "./src/app/ontology-viewer/ontology-query.service.ts");
/* harmony import */ var _ontology_definition_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ontology-definition.component */ "./src/app/ontology-viewer/ontology-definition.component.ts");
/* harmony import */ var _ontology_table_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ontology-table.component */ "./src/app/ontology-viewer/ontology-table.component.ts");
/* harmony import */ var _ontology_classes_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ontology-classes.component */ "./src/app/ontology-viewer/ontology-classes.component.ts");
/* harmony import */ var _content_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./content.component */ "./src/app/ontology-viewer/content.component.ts");
/* harmony import */ var _ontology_properties_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ontology-properties.component */ "./src/app/ontology-viewer/ontology-properties.component.ts");
/* harmony import */ var _unique_entry_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./unique-entry.pipe */ "./src/app/ontology-viewer/unique-entry.pipe.ts");
/* harmony import */ var _ontologies2namespaces_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ontologies2namespaces.pipe */ "./src/app/ontology-viewer/ontologies2namespaces.pipe.ts");
/* harmony import */ var _sort_subjects_alpha_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./sort-subjects-alpha.pipe */ "./src/app/ontology-viewer/sort-subjects-alpha.pipe.ts");
/* harmony import */ var _ontology_display_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ontology-display.component */ "./src/app/ontology-viewer/ontology-display.component.ts");



















let OntologyViewerModule = class OntologyViewerModule {
};
OntologyViewerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ontology_viewer_component__WEBPACK_IMPORTED_MODULE_8__["OntologyViewerComponent"], _ontology_definition_component__WEBPACK_IMPORTED_MODULE_10__["OntologyDefinitionComponent"], _ontology_table_component__WEBPACK_IMPORTED_MODULE_11__["OntologyTableComponent"], _ontology_classes_component__WEBPACK_IMPORTED_MODULE_12__["OntologyClassesComponent"], _content_component__WEBPACK_IMPORTED_MODULE_13__["ContentComponent"], _ontology_properties_component__WEBPACK_IMPORTED_MODULE_14__["OntologyPropertiesComponent"], _unique_entry_pipe__WEBPACK_IMPORTED_MODULE_15__["UniqueEntryPipe"], _ontologies2namespaces_pipe__WEBPACK_IMPORTED_MODULE_16__["Ontologies2namespacesPipe"], _sort_subjects_alpha_pipe__WEBPACK_IMPORTED_MODULE_17__["SortSubjectsAlphaPipe"], _ontology_display_component__WEBPACK_IMPORTED_MODULE_18__["OntologyDisplayComponent"]],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatBadgeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatBottomSheetModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTreeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"]
        ],
        exports: [
            _ontology_viewer_component__WEBPACK_IMPORTED_MODULE_8__["OntologyViewerComponent"],
            _ontologies2namespaces_pipe__WEBPACK_IMPORTED_MODULE_16__["Ontologies2namespacesPipe"]
        ],
        providers: [
            _ontology_query_service__WEBPACK_IMPORTED_MODULE_9__["OntologyQueryService"]
        ]
    })
], OntologyViewerModule);



/***/ }),

/***/ "./src/app/ontology-viewer/sort-subjects-alpha.pipe.ts":
/*!*************************************************************!*\
  !*** ./src/app/ontology-viewer/sort-subjects-alpha.pipe.ts ***!
  \*************************************************************/
/*! exports provided: SortSubjectsAlphaPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortSubjectsAlphaPipe", function() { return SortSubjectsAlphaPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SortSubjectsAlphaPipe = class SortSubjectsAlphaPipe {
    transform(dataMappings) {
        if (dataMappings.length > 0) {
            dataMappings.sort((a, b) => {
                return (a.subject < b.subject) ? -1 : 1;
            });
        }
        return dataMappings;
    }
};
SortSubjectsAlphaPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'sortSubjectsAlpha'
    })
], SortSubjectsAlphaPipe);



/***/ }),

/***/ "./src/app/ontology-viewer/sparqljs.ts":
/*!*********************************************!*\
  !*** ./src/app/ontology-viewer/sparqljs.ts ***!
  \*********************************************/
/*! exports provided: SparqlParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SparqlParser", function() { return SparqlParser; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var sparqljs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sparqljs */ "./node_modules/sparqljs/sparql.js");
/* harmony import */ var sparqljs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sparqljs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");



class SparqlParser {
    constructor(queryService) {
        this.queryService = queryService;
        this.namespaces = [{ prefix: 'rdf', iri: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#', isExternal: true },
            { prefix: 'rdfs', iri: 'http://www.w3.org/2000/01/rdf-schema#', isExternal: true },
            { prefix: 'owl', iri: 'http://www.w3.org/2002/07/owl#', isExternal: true },
            { prefix: 'xsd', iri: 'http://www.w3.org/2001/XMLSchema#', isExternal: true }];
    }
    fetchArrayData(component, target_key, query, key, iri, namespaces) {
        if (namespaces != undefined && namespaces != null) {
            this.namespaces = Array.from(new Set(this.namespaces.concat(namespaces)));
        }
        const paramQuery = SparqlParser.getQuery(query, key, iri);
        let parsedQuery = this.createParsedQuery(paramQuery);
        this.queryService.getData(paramQuery).subscribe(fusekiResults => {
            fusekiResults.results.bindings.forEach(fusekiResult => {
                let dataMapping = this.mapQuery2Data(fusekiResult, parsedQuery, component.ontology);
                let oldItem = component[target_key].filter(item => item.subject == dataMapping.subject);
                if (oldItem.length > 0) {
                    oldItem[0].queryDataMappings = oldItem[0].queryDataMappings.concat(dataMapping.queryDataMappings);
                }
                else {
                    component[target_key].push(dataMapping);
                }
            });
        });
    }
    fetchData(component, target_key, query, key, iri, namespaces) {
        if (namespaces != undefined && namespaces != null) {
            this.namespaces = Array.from(new Set(this.namespaces.concat(namespaces)));
        }
        const paramQuery = SparqlParser.getQuery(query, key, iri);
        let parsedQuery = this.createParsedQuery(paramQuery);
        this.queryService.getData(paramQuery).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(fusekiResults => {
            let fusekiResult = fusekiResults.results.bindings[0];
            component[target_key] = this.mapQuery2Data(fusekiResult, parsedQuery, component.ontology);
        });
    }
    createParsedQuery(paramQuery) {
        let parser = new sparqljs__WEBPACK_IMPORTED_MODULE_1__["Parser"]();
        let sparqlGenerator = new sparqljs__WEBPACK_IMPORTED_MODULE_1__["Generator"]({});
        let parsedQuery = parser.parse(paramQuery);
        let prefixes = parsedQuery.prefixes;
        Object.keys(prefixes).forEach(key => {
            if (this.namespaces.filter(namespace => namespace.prefix == key).length == 0) {
                this.namespaces.push({ prefix: key, iri: prefixes[key], isExternal: true });
            }
        });
        return parsedQuery;
    }
    mapQuery2Data(result, parsedQuery, ontology) {
        let queryDataMappings = [];
        let dataMapping = { subject: null, subjectType: null, queryDataMappings: queryDataMappings };
        this.mapData2Query(dataMapping, parsedQuery, result, ontology);
        return dataMapping;
    }
    mapData2Query(dataMapping, parsedQuery, result, ontology) {
        let variables = parsedQuery.variables.map(variable => variable['value']);
        parsedQuery.where.forEach(where => {
            if (where['type'] == 'bgp') {
                where['triples'].forEach((triple) => {
                    this.addContent(dataMapping, triple, variables, result, false, ontology);
                });
            }
            else if (where['type'] == 'optional' || where['type'] == 'union') {
                where['patterns'].forEach(pattern => {
                    if (pattern['triples'] != undefined) {
                        pattern['triples'].forEach((triple) => {
                            this.addContent(dataMapping, triple, variables, result, true, ontology);
                        });
                    }
                });
            }
        });
    }
    addContent(dataMapping, triple, variables, result, isOptional, ontology) {
        if (variables.includes(triple.subject.value) && !variables.includes(triple.object.value) && triple.object.value != ontology.iri) {
            dataMapping.subject = this.replacePrefix(result[triple.subject.value]['value']);
            dataMapping.subjectType = this.createLink(triple.object.value);
        }
        else if (variables.includes(triple.object.value) && (!isOptional || result.hasOwnProperty(triple.object.value))) {
            let link = this.createLink(result[triple.object.value]['value']);
            let queryDataMapping = {
                variable: triple.object.value,
                predicate: this.createLink(triple.predicate.value),
                value: result[triple.object.value]['value'],
                links: (link != null) ? [link] : [],
                isOptional: isOptional
            };
            dataMapping.queryDataMappings.push(queryDataMapping);
        }
        else if (!variables.includes(triple.object.value) && !isOptional && triple.subject.value == ontology.iri) {
            dataMapping.subject = ontology.prefix;
            dataMapping.subjectType = this.createLink(triple.object.value);
        }
    }
    createLink(namedNode) {
        let link = null;
        this.namespaces.forEach(namespace => {
            if (namedNode.startsWith(namespace.iri)) {
                let newValue = namedNode.replace(namespace.iri, namespace.prefix + ':');
                link = { target: (namespace.isExternal) ? namedNode : newValue, value: newValue, external: namespace.isExternal };
            }
        });
        if (link == null && namedNode.startsWith('http')) {
            link = { target: namedNode, value: namedNode, external: true };
        }
        //console.log(namedNode, link);
        return link;
    }
    replacePrefix(namedNode) {
        this.namespaces.forEach(namespace => {
            namedNode = namedNode.replace(namespace.iri, namespace.prefix + ':');
        });
        return namedNode;
    }
    static getQuery(query, key, iri) {
        let parser = new sparqljs__WEBPACK_IMPORTED_MODULE_1__["Parser"]();
        let sparqlGenerator = new sparqljs__WEBPACK_IMPORTED_MODULE_1__["Generator"]({});
        let parsedQuery = parser.parse(query);
        for (var k = 0; k < parsedQuery.where.length; k++) {
            if (parsedQuery.where[k].patterns != undefined) {
                for (var j = 0; j < parsedQuery.where[k].patterns.length; j++) {
                    if (parsedQuery.where[k].patterns[j].triples != undefined) {
                        for (var i = 0; i < parsedQuery.where[k].patterns[j].triples.length; i++) {
                            if (parsedQuery.where[k].patterns[j].triples[i]['subject']['value'] == key) {
                                parsedQuery.where[k].patterns[j].triples[i]['subject'] = { termType: "NamedNode", value: iri };
                            }
                            else if (parsedQuery.where[k].patterns[j].triples[i]['object']['value'] == key) {
                                parsedQuery.where[k].patterns[j].triples[i]['object'] = { termType: "NamedNode", value: iri };
                            }
                            else if (parsedQuery.where[k].patterns[j].triples[i]['predicate']['value'] == key) {
                                parsedQuery.where[k].patterns[j].triples[i]['predicate'] = { termType: "NamedNode", value: iri };
                            }
                        }
                    }
                }
            }
            else if (parsedQuery.where[k].triples != undefined) {
                for (var i = 0; i < parsedQuery.where[k].triples.length; i++) {
                    if (parsedQuery.where[k].triples[i]['subject']['value'] == key) {
                        parsedQuery.where[k].triples[i]['subject'] = { termType: "NamedNode", value: iri };
                    }
                    else if (parsedQuery.where[k].triples[i]['object']['value'] == key) {
                        parsedQuery.where[k].triples[i]['object'] = { termType: "NamedNode", value: iri };
                    }
                    else if (parsedQuery.where[k].triples[i]['predicate']['value'] == key) {
                        parsedQuery.where[k].triples[i]['predicate'] = { termType: "NamedNode", value: iri };
                    }
                }
            }
        }
        return sparqlGenerator.stringify(parsedQuery);
    }
}


/***/ }),

/***/ "./src/app/ontology-viewer/unique-entry.pipe.ts":
/*!******************************************************!*\
  !*** ./src/app/ontology-viewer/unique-entry.pipe.ts ***!
  \******************************************************/
/*! exports provided: UniqueEntryPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueEntryPipe", function() { return UniqueEntryPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UniqueEntryPipe = class UniqueEntryPipe {
    transform(dataMapping) {
        let queryDataMappings = [];
        let keys = new Set(dataMapping.queryDataMappings.map(queryDataMapping => queryDataMapping.variable));
        keys.forEach(key => {
            let items = dataMapping.queryDataMappings.filter(queryDataMapping => queryDataMapping.variable == key);
            if (items.length == 1 || items[0].links.length == 0) {
                queryDataMappings.push(items[0]);
            }
            else {
                let newItem = items[0];
                for (var i = 1; i < items.length; i++) {
                    if (newItem.links.filter(link => link.value == items[i].links[0].value).length == 0) {
                        newItem.links.push(items[i].links[0]);
                    }
                }
                queryDataMappings.push(newItem);
            }
        });
        dataMapping.queryDataMappings = queryDataMappings;
        return dataMapping;
    }
};
UniqueEntryPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'uniqueEntry'
    })
], UniqueEntryPipe);



/***/ }),

/***/ "./src/app/page-view-wrapper-component/page-view-wrapper.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/page-view-wrapper-component/page-view-wrapper.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#content {\n  overflow-x: hidden;\n}\n\n#wrapper {\n  overflow-x: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9kYXRhL2hvbWUva25pc3RlcjAvZ2l0aHVicy9OaWV0enNjaGVCZXRhL25pZXR6c2NoZS1iZXRhLWFwcC9zcmMvYXBwL3BhZ2Utdmlldy13cmFwcGVyLWNvbXBvbmVudC9wYWdlLXZpZXctd3JhcHBlci5jb21wb25lbnQuc2NzcyIsInBhZ2Utdmlldy13cmFwcGVyLWNvbXBvbmVudC9wYWdlLXZpZXctd3JhcHBlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGIiwiZmlsZSI6InBhZ2Utdmlldy13cmFwcGVyLWNvbXBvbmVudC9wYWdlLXZpZXctd3JhcHBlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250ZW50IHtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4jd3JhcHBlciB7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cbiIsIiNjb250ZW50IHtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4jd3JhcHBlciB7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/page-view-wrapper-component/page-view-wrapper.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/page-view-wrapper-component/page-view-wrapper.component.ts ***!
  \****************************************************************************/
/*! exports provided: PageViewWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageViewWrapperComponent", function() { return PageViewWrapperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let PageViewWrapperComponent = class PageViewWrapperComponent {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.showAllLines = false;
    }
    ngOnInit() {
        this.innerHeight = window.innerHeight;
        this.activatedRoute.queryParams.subscribe((queryParams) => this.fullscreen = (queryParams.fullscreen === 'true'));
    }
    onResize(event) {
        this.ngOnInit();
    }
    ngAfterViewInit() {
        window.setTimeout(() => this.logHeights(), 500);
    }
    logHeights() {
        console.log('Window inner height', window.innerHeight);
        console.log('Window outer height', window.outerHeight);
        const elemIds = ['wrapper', 'navigator', 'content', 'tooltip-container', 'page'];
        elemIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                console.log('--------------------');
                console.log(id);
                console.log(el);
                // including the element's border
                const height = el.offsetHeight;
                // not including the element's border
                const cHeight = el.clientHeight;
                console.log('height with border: ', height);
                console.log('height without border: ', cHeight);
            }
        });
    }
};
PageViewWrapperComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PageViewWrapperComponent.prototype, "showAllLines", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])
], PageViewWrapperComponent.prototype, "onResize", null);
PageViewWrapperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-view-wrapper-component',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-view-wrapper.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-view-wrapper-component/page-view-wrapper.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-view-wrapper.component.scss */ "./src/app/page-view-wrapper-component/page-view-wrapper.component.scss")).default]
    })
], PageViewWrapperComponent);



/***/ }),

/***/ "./src/app/page-view/common/matrix.ts":
/*!********************************************!*\
  !*** ./src/app/page-view/common/matrix.ts ***!
  \********************************************/
/*! exports provided: Matrix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Matrix", function() { return Matrix; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Matrix {
    constructor(matrix_string, zoomFactor, height, width, rotation) {
        this.A = 0;
        this.B = 1;
        this.C = 2;
        this.D = 3;
        this.E = 4;
        this.F = 5;
        this.matrix = [1, 0, 0, 1, 0, 0];
        this.degree_matrix_mapping = {
            0: [1, 0, 0, 1, 0, 0],
            90: [0, 1, -1, 0, 0, 0],
            180: [-1, 0, 0, -1, 0, 0],
            270: [0, -1, 1, 0, 0, 0]
        };
        if (matrix_string != null) {
            this.parseMatrixString(matrix_string);
        }
        if (rotation != undefined && rotation != null) {
            this.updateRotation(rotation);
        }
        if (zoomFactor != null && height != null && width != null) {
            this.updateOffset(zoomFactor, height, width);
        }
    }
    get90DegreeRotation() {
        let filtered = Object.entries(this.degree_matrix_mapping).filter(key_value => JSON.stringify(key_value[1].slice(0, -2)) == JSON.stringify(this.matrix.slice(0, -2)));
        return (filtered.length > 0) ? Number(filtered[0][0]) : -1;
    }
    parseMatrixString(matrix_string) {
        if (matrix_string.startsWith('matrix')) {
            this.matrix = matrix_string.replace('matrix(', '').replace(')', '').split(' ').map(n => Number(n));
        }
        else if (matrix_string.startsWith('rotation')) {
            let angle = Number(matrix_string.replace('rotation(', '').replace(')', ''));
            let radians = Math.PI / 180 * angle;
            this.matrix[this.A] = Math.round(Math.cos(radians));
            this.matrix[this.B] = Math.sin(radians);
            this.matrix[this.C] = Math.sin(radians) * -1;
            this.matrix[this.D] = Math.round(Math.cos(radians));
        }
    }
    updateOffset(zoomFactor, height, width) {
        if (this.matrix[this.B] == 0 && this.matrix[this.C] == 0) {
            this.matrix[this.E] = 0;
            this.matrix[this.F] = 0;
        }
        else {
            this.matrix[this.E] = zoomFactor * (height - width) / 2;
            this.matrix[this.F] = -1 * zoomFactor * (height - width) / 2;
        }
    }
    updateRotation(addRotation) {
        let rotation = (this.get90DegreeRotation() + addRotation) % 360;
        this.matrix = (this.degree_matrix_mapping[rotation] != undefined) ? this.degree_matrix_mapping[rotation] : this.degree_matrix_mapping[0];
    }
    /**
     * Return transform matrix as a string in the format 'matrix(1.0 0.0 0.0 1.0 0.0 0.0)'
     * */
    toString() {
        return 'matrix(' + this.matrix.map(n => String(n)).join(' ') + ')';
    }
}


/***/ }),

/***/ "./src/app/page-view/common/shared_functions.ts":
/*!******************************************************!*\
  !*** ./src/app/page-view/common/shared_functions.ts ***!
  \******************************************************/
/*! exports provided: createLocalZoomFactor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLocalZoomFactor", function() { return createLocalZoomFactor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

/**
 * Create the local zoom factor for a textfield according to the maximum height or width.
 **/
function createLocalZoomFactor(text_field, max_height, max_width) {
    if (text_field != null && text_field != undefined) {
        let t_height = Number(text_field.height);
        let t_width = Number(text_field.width);
        let local_zoom = max_height / t_height;
        if (max_height == -1 && max_width != -1) {
            local_zoom = max_width / t_width;
        }
        else if (max_width == -1 && t_height < t_width) {
            local_zoom = (window.innerWidth / 2 - 100) / t_width;
        }
        return local_zoom;
    }
    return 1;
}


/***/ }),

/***/ "./src/app/page-view/configurable-component.ts":
/*!*****************************************************!*\
  !*** ./src/app/page-view/configurable-component.ts ***!
  \*****************************************************/
/*! exports provided: ConfigurableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurableComponent", function() { return ConfigurableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


/**
 * This is a super class of components that can be configured by passing
 * a configuration to their inputs and running 'processConfiguration' in
 * 'ngOnChanges'.
 *
 * E.g. given a configuration '{"ComponentName": { "ComponentProperty": value }}'
 * if "ComponentName" is the name of the subclass component then
 * 'processConfiguration' will update its property with name
 * "ComponentProperty" to this value. If configuration uses wildcard "*" then
 * all components that have a property with name "ComponentProperty" will
 * update to this value.
 **/
class ConfigurableComponent {
    constructor() {
        /**
         * index of configuration_listeners pointing to primary name of component
         **/
        this.primary_name_index = 1;
        /**
         * list of configuration keys
         **/
        this.configuration_listeners = ['*', this.constructor.name];
    }
    /**
     * Process configuration by updating properties to given values if the keys
     * in configuration_listeners are part of the configuration.
     **/
    processConfiguration() {
        this.configuration_listeners.forEach(key => {
            if (key in this.configuration) {
                Object.getOwnPropertyNames(this.configuration[key]).forEach(conf_key => {
                    if (conf_key in this) {
                        this[conf_key] = this.configuration[key][conf_key];
                    }
                });
            }
        });
    }
    /**
     * Add a further configuration key
     **/
    addConfigurationName(configuration_listener) {
        if (this.configuration_listeners.indexOf(configuration_listener) == -1) {
            this.configuration_listeners.push(configuration_listener);
        }
    }
    /**
     * Get the primary name of the component.
     **/
    getConfigurationName() {
        return this.configuration_listeners[this.primary_name_index];
    }
    /**
     * update configuration
     **/
    ngOnChanges() {
        if (this.configuration != null) {
            this.processConfiguration();
        }
    }
    static updateConfiguration(oldConfiguration, newConfiguration) {
        if (oldConfiguration != null) {
            Object.getOwnPropertyNames(newConfiguration).forEach(key => {
                if (key in oldConfiguration && typeof oldConfiguration[key] == 'object' && typeof newConfiguration[key] == 'object') {
                    oldConfiguration[key] = this.updateConfiguration(oldConfiguration[key], newConfiguration[key]);
                }
                else {
                    oldConfiguration[key] = newConfiguration[key];
                }
            });
            return oldConfiguration;
        }
        else {
            return newConfiguration;
        }
    }
}
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ConfigurableComponent.prototype, "configuration", void 0);


/***/ }),

/***/ "./src/app/page-view/copyright/copyright-sheet/copyright-sheet.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/page-view/copyright/copyright-sheet/copyright-sheet.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLXZpZXcvY29weXJpZ2h0L2NvcHlyaWdodC1zaGVldC9jb3B5cmlnaHQtc2hlZXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/page-view/copyright/copyright-sheet/copyright-sheet.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/page-view/copyright/copyright-sheet/copyright-sheet.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CopyrightSheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopyrightSheetComponent", function() { return CopyrightSheetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");



let CopyrightSheetComponent = class CopyrightSheetComponent {
    constructor(copyright) {
        this.copyright = copyright;
    }
    ngOnInit() {
    }
};
CopyrightSheetComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MAT_BOTTOM_SHEET_DATA"],] }] }
];
CopyrightSheetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'copyright-sheet',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./copyright-sheet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-view/copyright/copyright-sheet/copyright-sheet.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./copyright-sheet.component.css */ "./src/app/page-view/copyright/copyright-sheet/copyright-sheet.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MAT_BOTTOM_SHEET_DATA"]))
], CopyrightSheetComponent);



/***/ }),

/***/ "./src/app/page-view/copyright/copyright.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-view/copyright/copyright.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#circle {\n   fill: none;\n}\n#cc {\n   fill: grey;\n   opacity: 0.2;\n   cursor: pointer;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2Utdmlldy9jb3B5cmlnaHQvY29weXJpZ2h0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7R0FDRyxVQUFVO0FBQ2I7QUFDQTtHQUNHLFVBQVU7R0FDVixZQUFZO0dBQ1osZUFBZTtBQUNsQiIsImZpbGUiOiJwYWdlLXZpZXcvY29weXJpZ2h0L2NvcHlyaWdodC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NpcmNsZSB7XG4gICBmaWxsOiBub25lO1xufVxuI2NjIHtcbiAgIGZpbGw6IGdyZXk7XG4gICBvcGFjaXR5OiAwLjI7XG4gICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/page-view/copyright/copyright.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-view/copyright/copyright.component.ts ***!
  \************************************************************/
/*! exports provided: CopyrightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopyrightComponent", function() { return CopyrightComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
/* harmony import */ var _page_view_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../page-view.service */ "./src/app/page-view/page-view.service.ts");
/* harmony import */ var _copyright_sheet_copyright_sheet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./copyright-sheet/copyright-sheet.component */ "./src/app/page-view/copyright/copyright-sheet/copyright-sheet.component.ts");





let CopyrightComponent = class CopyrightComponent {
    constructor(bottomSheet, pageViewService) {
        this.bottomSheet = bottomSheet;
        this.pageViewService = pageViewService;
        this.highlight = false;
    }
    ngOnInit() {
    }
    setHighlight(highlight) {
        this.highlight = highlight;
    }
    showCopyrightInformation(e) {
        /*let point: Point = { visible: true, clientX: e.clientX, clientY: e.clientY, layerX: e.layerX, layerY: e.layerY }
        this.pageViewService.copyrightService(this.copyright, point);*/
        this.bottomSheet.open(_copyright_sheet_copyright_sheet_component__WEBPACK_IMPORTED_MODULE_4__["CopyrightSheetComponent"], {
            data: this.copyright
        });
    }
};
CopyrightComponent.ctorParameters = () => [
    { type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheet"] },
    { type: _page_view_service__WEBPACK_IMPORTED_MODULE_3__["PageViewService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CopyrightComponent.prototype, "dimension", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CopyrightComponent.prototype, "copyright", void 0);
CopyrightComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'copyright',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./copyright.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-view/copyright/copyright.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./copyright.component.css */ "./src/app/page-view/copyright/copyright.component.css")).default]
    })
], CopyrightComponent);



/***/ }),

/***/ "./src/app/page-view/highlight_status.ts":
/*!***********************************************!*\
  !*** ./src/app/page-view/highlight_status.ts ***!
  \***********************************************/
/*! exports provided: HIGHTLIGHT_CASES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HIGHTLIGHT_CASES", function() { return HIGHTLIGHT_CASES; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var HIGHTLIGHT_CASES;
(function (HIGHTLIGHT_CASES) {
    HIGHTLIGHT_CASES["DEFAULT"] = "default";
    HIGHTLIGHT_CASES["LINE_HOVERED"] = "hovered line";
    HIGHTLIGHT_CASES["SEARCHED_WORD"] = "text of word == findText";
    HIGHTLIGHT_CASES["SELECTED_LINE"] = "selected line";
    HIGHTLIGHT_CASES["SELECTED_WORD"] = "selected word";
    HIGHTLIGHT_CASES["WORD_HOVERED"] = "hovered word";
})(HIGHTLIGHT_CASES || (HIGHTLIGHT_CASES = {}));


/***/ }),

/***/ "./src/app/page-view/interacted.directive.ts":
/*!***************************************************!*\
  !*** ./src/app/page-view/interacted.directive.ts ***!
  \***************************************************/
/*! exports provided: InteractedDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractedDirective", function() { return InteractedDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _page_view_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-view.service */ "./src/app/page-view/page-view.service.ts");



/**
 * This directive informs the {@link /injectables/PageViewService.html|PageViewService} about
 * mouse events on interactable objects and scrolls interactable objects in view if they are
 * invisible.
 **/
let InteractedDirective = class InteractedDirective {
    constructor(pageViewService, el) {
        this.pageViewService = pageViewService;
        this.el = el;
        /**
         * the identification string of this Interactable's textfield  (e.g. 'first textfield' or 'second textfield')
         **/
        this.identity = 'first textfield';
        /**
         * The time (in milliseconds) the timer should wait before
         * the element is scrolled in view.
         **/
        this.delay = 500;
        /**
         * The ID of the timeout set by {@link /directives/InteractedDirective.html#timeoutScroll|timeoutScroll}.
         **/
        this.timeoutID = -1;
        /**
         * Whether or not the element should scroll into view when the timer expires.
         **/
        this.doScroll = false;
        this.xyOffset = { x: 0, y: 0 };
    }
    /**
     * Subscribe to on/offHovered and onClicked methods of the {@link /injectables/PageViewService.html|PageViewService}
     * and scroll hovered object in view if it is invisible.
     **/
    ngOnInit() {
        if (this.container != null && this.container != undefined) {
            let containerRect = this.container.getBoundingClientRect();
            this.xyOffset = { x: containerRect.left, y: containerRect.top };
        }
        this.interactedObject.textfield_identity = this.identity;
        this.pageViewService.onClickedWord.subscribe((clickedWord) => {
            this.scrollIntoViewIfNeeded(clickedWord, 'Word', 0);
        });
        this.pageViewService.onHoveredWord.subscribe((hoveredWord) => {
            this.scrollIntoViewIfNeeded(hoveredWord, 'Word');
        });
        this.pageViewService.offHoveredWord.subscribe((hoveredWord) => {
            this.clearTimeout();
        });
        this.pageViewService.offHoveredLine.subscribe((hoveredLine) => {
            this.clearTimeout();
        });
        this.pageViewService.onHoveredLine.subscribe((hoveredLine) => {
            this.scrollIntoViewIfNeeded(hoveredLine, 'Line');
        });
        this.pageViewService.onClickedLine.subscribe((clickedLine) => {
            this.scrollIntoViewIfNeeded(clickedLine, 'Line', 0);
        });
    }
    /**
     * Clear timeout and prevent element from scrolling into view.
     **/
    clearTimeout() {
        if (this.timeoutID != -1) {
            this.doScroll = false;
            clearTimeout(this.timeoutID);
            this.timeoutID = -1;
        }
    }
    /**
     * Scroll interactable object in view if it is invisible.
     * @param hoveredItem interactable object that is hovered
     * @param hoveredType string representation of object's type (i.e. 'Word' | 'Line')
     **/
    scrollIntoViewIfNeeded(hoveredItem, hoveredType, delay = this.delay) {
        if (hoveredType == 'Word' && this.interactedObject.datatype == 'Word' && this.identity != hoveredItem.textfield_identity) {
            let hoveredWord = hoveredItem;
            let currentWord = this.interactedObject;
            if (currentWord.id == hoveredWord.id && currentWord.is_top_object && this.isElementInvisible()) {
                this.timeoutScroll(delay);
            }
        }
        else if (hoveredType == 'Line' && this.interactedObject.datatype == 'Line') {
            let hoveredLine = hoveredItem;
            let currentLine = this.interactedObject;
            if (currentLine !== hoveredLine && currentLine.id == hoveredLine.id && this.isElementInvisible()) {
                this.timeoutScroll(delay);
            }
        }
    }
    /**
     * Scroll element in view if timeout has not been canceled during its countdown.
     **/
    timeoutScroll(delay) {
        let behavior = (delay == 0) ? "instant" : "smooth";
        this.doScroll = true;
        this.timeoutID = window.setTimeout(() => {
            if (this.doScroll) {
                this.el.nativeElement.scrollIntoView({ 'behavior': behavior });
            }
        }, delay);
    }
    /**
     * Return whether interactable object is invisible, i.e. whether it is outside of
     * its scrollable container's viewport.
     **/
    isElementInvisible() {
        if (this.container == null || this.container == undefined || this.container.getAttribute('class') == 'inline') {
            return false;
        }
        let myRect = this.el.nativeElement.getBoundingClientRect();
        let containerRect = this.container.getBoundingClientRect();
        return myRect.top < containerRect.top
            || myRect.bottom > containerRect.bottom
            || myRect.left < containerRect.left
            || myRect.right > containerRect.right;
    }
    /**
     * informs the {@link /injectables/PageViewService.html|PageViewService} about
     * click events on {@link #interactedObject|interactedObject}.
     **/
    onMouseClick(e) {
        if (e.ctrlKey && 'id' in this.interactedObject) {
            alert('The ID of this element is <' + this.interactedObject['id'] + '>');
        }
        this.pageViewService.onClickService(this.interactedObject, { visible: true, layerX: e.layerX, layerY: e.layerY, clientX: e.clientX, clientY: e.clientY });
    }
    /**
     * informs the {@link /injectables/PageViewService.html|PageViewService} about
     * mouse enter events on {@link #interactedObject|interactedObject}.
     **/
    onMouseEnter(e) {
        this.pageViewService.onHoverService(this.interactedObject, { visible: true, layerX: e.layerX, layerY: e.layerY, clientX: e.clientX, clientY: e.clientY });
    }
    /**
     * informs the {@link /injectables/PageViewService.html|PageViewService} about
     * mouse leave events on {@link #interactedObject|interactedObject}.
     **/
    onMouseLeave() {
        this.pageViewService.offHoverService(this.interactedObject);
    }
};
InteractedDirective.ctorParameters = () => [
    { type: _page_view_service__WEBPACK_IMPORTED_MODULE_2__["PageViewService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('interactedObject')
], InteractedDirective.prototype, "interactedObject", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], InteractedDirective.prototype, "identity", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], InteractedDirective.prototype, "container", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event'])
], InteractedDirective.prototype, "onMouseClick", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseenter', ['$event'])
], InteractedDirective.prototype, "onMouseEnter", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseleave')
], InteractedDirective.prototype, "onMouseLeave", null);
InteractedDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[interactedObject]'
    })
], InteractedDirective);



/***/ }),

/***/ "./src/app/page-view/margin-field/line-reference/line-reference.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/page-view/margin-field/line-reference/line-reference.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".unhighlighted {\n   fill: white;\n   opacity: 0.0;\n}\n.highlighted {\n   fill: lightgrey;\n   opacity: 0.3;\n}\n.mouse-pointer {\n   cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2Utdmlldy9tYXJnaW4tZmllbGQvbGluZS1yZWZlcmVuY2UvbGluZS1yZWZlcmVuY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtHQUNHLFdBQVc7R0FDWCxZQUFZO0FBQ2Y7QUFDQTtHQUNHLGVBQWU7R0FDZixZQUFZO0FBQ2Y7QUFDQTtHQUNHLGVBQWU7QUFDbEIiLCJmaWxlIjoicGFnZS12aWV3L21hcmdpbi1maWVsZC9saW5lLXJlZmVyZW5jZS9saW5lLXJlZmVyZW5jZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVuaGlnaGxpZ2h0ZWQge1xuICAgZmlsbDogd2hpdGU7XG4gICBvcGFjaXR5OiAwLjA7XG59XG4uaGlnaGxpZ2h0ZWQge1xuICAgZmlsbDogbGlnaHRncmV5O1xuICAgb3BhY2l0eTogMC4zO1xufVxuLm1vdXNlLXBvaW50ZXIge1xuICAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/page-view/margin-field/line-reference/line-reference.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/page-view/margin-field/line-reference/line-reference.component.ts ***!
  \***********************************************************************************/
/*! exports provided: LineReferenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineReferenceComponent", function() { return LineReferenceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _page_view_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../page-view.service */ "./src/app/page-view/page-view.service.ts");



let LineReferenceComponent = class LineReferenceComponent {
    constructor(pageViewService) {
        this.pageViewService = pageViewService;
        this.highlighted = false;
    }
    ngOnInit() {
        if (this.line != null && this.referenceName != '' && ((this.referenceName == 'to' && this.line.continuesTo != null)
            || (this.referenceName == 'from' && this.line.continuesFrom != null))) {
            this.reference = (this.referenceName == 'to') ? this.line.continuesTo : this.line.continuesFrom;
            this.continuation = { source: this.line.source, reference: this.reference, datatype: 'Continuation', show: this.referenceName };
        }
    }
    showReference(show, e) {
        this.highlighted = show;
        let point = { visible: show, clientX: e.clientX - 10, clientY: e.clientY - 80, layerX: e.layerX, layerY: e.layerY };
        if (show) {
            this.pageViewService.onHoverService(this.continuation, point);
            this.pageViewService.onHoverService(this.line);
        }
        else {
            this.pageViewService.offHoverService(this.continuation);
            this.pageViewService.offHoverService(this.line);
        }
    }
    changeLocation() {
        this.pageViewService.referenceService(this.reference);
    }
};
LineReferenceComponent.ctorParameters = () => [
    { type: _page_view_service__WEBPACK_IMPORTED_MODULE_2__["PageViewService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LineReferenceComponent.prototype, "line", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('showReference')
], LineReferenceComponent.prototype, "referenceName", void 0);
LineReferenceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'line-reference',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./line-reference.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-view/margin-field/line-reference/line-reference.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./line-reference.component.css */ "./src/app/page-view/margin-field/line-reference/line-reference.component.css")).default]
    })
], LineReferenceComponent);



/***/ }),

/***/ "./src/app/page-view/margin-field/margin-field.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/page-view/margin-field/margin-field.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".marginfield {\n  background-color: white;\n  cursor: default;\n}\n\n.marginfield .text {\n   font-size: 8px;\n}\n\n.marginfield .unhighlighted {\n   fill: white;\n   opacity: 0.0;\n}\n\n.marginfield .highlight {\n   fill: yellow;\n   opacity: 0.3;\n}\n\n.marginfield .border {\n  stroke: #e2fa00;\n  stroke-width:5;\n  opacity: 0.3;\n}\n\n.marginfield .howered_line {\n  fill: #fa301c;\n  opacity: 0.3;\n}\n\n.marginfield .same_word {\n  fill: #c9fac5;\n  opacity: 0.3;\n}\n\n.text_fadeout {\n  fill: #a4a4a4;\n}\n\n.hover {\n  transform: scale(1.5);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2Utdmlldy9tYXJnaW4tZmllbGQvbWFyZ2luLWZpZWxkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQTtHQUNHLGNBQWM7QUFDakI7O0FBRUE7R0FDRyxXQUFXO0dBQ1gsWUFBWTtBQUNmOztBQUNBO0dBQ0csWUFBWTtHQUNaLFlBQVk7QUFDZjs7QUFDQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsWUFBWTtBQUNkOztBQUNBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkIiLCJmaWxlIjoicGFnZS12aWV3L21hcmdpbi1maWVsZC9tYXJnaW4tZmllbGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXJnaW5maWVsZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5tYXJnaW5maWVsZCAudGV4dCB7XG4gICBmb250LXNpemU6IDhweDtcbn1cblxuLm1hcmdpbmZpZWxkIC51bmhpZ2hsaWdodGVkIHtcbiAgIGZpbGw6IHdoaXRlO1xuICAgb3BhY2l0eTogMC4wO1xufVxuLm1hcmdpbmZpZWxkIC5oaWdobGlnaHQge1xuICAgZmlsbDogeWVsbG93O1xuICAgb3BhY2l0eTogMC4zO1xufVxuLm1hcmdpbmZpZWxkIC5ib3JkZXIge1xuICBzdHJva2U6ICNlMmZhMDA7XG4gIHN0cm9rZS13aWR0aDo1O1xuICBvcGFjaXR5OiAwLjM7XG59XG4ubWFyZ2luZmllbGQgLmhvd2VyZWRfbGluZSB7XG4gIGZpbGw6ICNmYTMwMWM7XG4gIG9wYWNpdHk6IDAuMztcbn1cblxuLm1hcmdpbmZpZWxkIC5zYW1lX3dvcmQge1xuICBmaWxsOiAjYzlmYWM1O1xuICBvcGFjaXR5OiAwLjM7XG59XG5cbi50ZXh0X2ZhZGVvdXQge1xuICBmaWxsOiAjYTRhNGE0O1xufVxuXG4uaG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/page-view/margin-field/margin-field.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/page-view/margin-field/margin-field.component.ts ***!
  \******************************************************************/
/*! exports provided: MarginFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarginFieldComponent", function() { return MarginFieldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _page_view_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../page-view.service */ "./src/app/page-view/page-view.service.ts");
/* harmony import */ var _highlight_status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../highlight_status */ "./src/app/page-view/highlight_status.ts");
/* harmony import */ var _common_shared_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/shared_functions */ "./src/app/page-view/common/shared_functions.ts");





/**
 * This component displays an Array of lines.
 **/
let MarginFieldComponent = class MarginFieldComponent {
    /**
     * @param lineservice an information source about (un-)hovered and clicked Lines/Words.
     **/
    constructor(lineservice) {
        this.lineservice = lineservice;
        /**
         * the hovered status for a line
         **/
        this.HOVERED_STATUS = _highlight_status__WEBPACK_IMPORTED_MODULE_3__["HIGHTLIGHT_CASES"].LINE_HOVERED;
        this.SELECTED_STATUS = _highlight_status__WEBPACK_IMPORTED_MODULE_3__["HIGHTLIGHT_CASES"].SELECTED_LINE;
        /**
         * the height of a line rect.
         **/
        this.line_height = 8;
        /**
         * the length of the line rect.
         **/
        this.line_length = 10;
        /**
         * x coordinate of the line rect.
         **/
        this.line_x = 5;
        /**
         * the height of the margin field.
         **/
        this.margin_height = 973.91998;
        /**
         * geometrical top position of the margin field.
         **/
        this.margin_top = 0;
        /**
         * the width of the margin field.
         **/
        this.margin_width = 30;
        /**
         * specifies reference type that should be displayed
         **/
        this.showReference = "to";
        /**
         * show all lines or even lines only (default)
         **/
        this.linesWithWords = [];
        this.rotation = 0;
        this.matrix = 'matrix(1 0 0 1 0 0)';
        /**
         * The viewbox of this svg component.
         **/
        this.viewBox = '';
        /**
         * initial maximum height of margin field.
         **/
        this.max_height = -1;
        /**
         * initial maximum width of margin field.
         **/
        this.max_width = -1;
        /**
         * identifiers of selected lines that should be highlighted.
         **/
        this.selectedLines = [];
        /**
         * global zoom factor
         **/
        this.zoomFactor = 1;
        /**
         * local zoom factor
         **/
        this.local_zoom = -1;
        this.updateLines = false;
    }
    /**
    * Initialize geometrical information and subscribe to {@link /injectables/PageViewService.html|PageViewService}.
    **/
    ngOnInit() {
        if (this.max_height == -1 && this.max_width == -1) {
            this.max_height = screen.availHeight;
        }
        this.viewBox = 0 + ' ' + this.margin_top + ' ' + this.margin_width + ' ' + this.margin_height;
        if (this.text_field != null) {
            this.updateViewBox();
        }
        this.lineservice.onHoveredLine.subscribe((changedLine) => { this.hoveredLine = changedLine; });
        this.lineservice.onHoveredContinuation.subscribe((changedContinuation) => { this.hoveredReferenceLine = changedContinuation.reference.line; });
        this.lineservice.offHoveredContinuation.subscribe((changedContinuation) => { this.hoveredReferenceLine = null; });
        this.lineservice.offHoveredLine.subscribe((changedLine) => { this.hoveredLine = null; });
        this.lineservice.onHoveredWord.subscribe((changedWord) => { this.hoveredWord = changedWord; });
        this.lineservice.offHoveredWord.subscribe((changedWord) => { this.hoveredWord = null; });
    }
    /**
    * Update viewBox if there is a change.
    **/
    ngOnChanges(changes) {
        if (this.text_field != null) {
            this.updateViewBox();
        }
    }
    /**
    * Update viewBox: set
    * {@link #margin_height|margin_height},
    * {@link #margin_top|margin_top},
    * {@link #viewBox|viewBox}
    * and {@link #local_zoom|local_zoom} according to
    * {@link #text_field|text_field}.
    **/
    updateViewBox() {
        this.lines.forEach(line => line.datatype = "Line");
        if (this.showReference == 'to') {
            this.margin_width = (this.lines.some(line => line.continuesTo != null || line.continuesTo != undefined)) ? this.line_length * 2 + 30 : 30;
        }
        else {
            let hasReference = this.lines.some(line => line.continuesFrom != null || line.continuesFrom != undefined);
            this.margin_width = (this.showReference == 'from' && hasReference) ? this.line_length * 2 + 30 : 30;
            this.line_x = (this.showReference == 'from' && hasReference) ? 2 * this.line_length : 5;
        }
        this.margin_height = this.text_field.height;
        this.margin_top = this.text_field.top;
        this.viewBox = 0 + ' ' + this.margin_top + ' ' + this.margin_width + ' ' + this.margin_height;
        if (this.local_zoom == -1 && this.text_field != undefined && this.text_field != null) {
            this.local_zoom = Object(_common_shared_functions__WEBPACK_IMPORTED_MODULE_4__["createLocalZoomFactor"])(this.text_field, this.max_height, this.max_width);
        }
        if (this.rotation == 180) {
            this.matrix = (this.transform == null)
                ? 'matrix(-1 0 0 -1 0 0)'
                : 'matrix(-1 0 0 -1 0 ' + -1 * (Number(this.text_field.height) - Number(this.text_field.width)) * this.local_zoom * this.zoomFactor + ')';
        }
        else {
            this.matrix = 'matrix(1 0 0 1 0 0)';
        }
    }
    /**
    * Get the hover status of a line, i.e. whether it is hovered
    * ({@link /miscellaneous/enumerations.html#HIGHTLIGHT_CASES|HIGHTLIGHT_CASES.LINE_HOVERED})
    * or not ({@link /miscellaneous/enumerations.html#HIGHTLIGHT_CASES|HIGHTLIGHT_CASES.DEFAULT}).
    **/
    getHoverStatus(line) {
        if ((this.hoveredLine != undefined && this.hoveredLine != null && line.id == this.hoveredLine.id)
            || (this.hoveredReferenceLine != undefined && this.hoveredReferenceLine != null && line.id == this.hoveredReferenceLine.id)
            || (this.hoveredWord != undefined && this.hoveredWord != null && line.id == this.hoveredWord.line)) {
            return _highlight_status__WEBPACK_IMPORTED_MODULE_3__["HIGHTLIGHT_CASES"].LINE_HOVERED;
        }
        else if (this.selectedLines.length > 0 && this.selectedLines.indexOf(line.id) > -1) {
            return _highlight_status__WEBPACK_IMPORTED_MODULE_3__["HIGHTLIGHT_CASES"].SELECTED_LINE;
        }
        else {
            return _highlight_status__WEBPACK_IMPORTED_MODULE_3__["HIGHTLIGHT_CASES"].DEFAULT;
        }
    }
    /**
     * Assign a style to the rects of a line.
     **/
    assignStyle(line, hoveredWord, hoveredLine, hoverStatus) {
        return (this.extAssignStyle != null) ? this.extAssignStyle(line, hoveredWord, hoveredLine, hoverStatus) : {};
    }
    hasWordsOnLine(line) {
        return this.linesWithWords.length > 0 && this.linesWithWords.indexOf(line) > -1;
    }
};
MarginFieldComponent.ctorParameters = () => [
    { type: _page_view_service__WEBPACK_IMPORTED_MODULE_2__["PageViewService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MarginFieldComponent.prototype, "container", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MarginFieldComponent.prototype, "lines", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MarginFieldComponent.prototype, "showReference", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MarginFieldComponent.prototype, "linesWithWords", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MarginFieldComponent.prototype, "text_field", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MarginFieldComponent.prototype, "transform", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MarginFieldComponent.prototype, "rotation", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MarginFieldComponent.prototype, "max_height", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MarginFieldComponent.prototype, "max_width", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MarginFieldComponent.prototype, "selectedLines", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MarginFieldComponent.prototype, "zoomFactor", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('assignStyle')
], MarginFieldComponent.prototype, "extAssignStyle", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MarginFieldComponent.prototype, "local_zoom", void 0);
MarginFieldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'margin-field',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./margin-field.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-view/margin-field/margin-field.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./margin-field.component.css */ "./src/app/page-view/margin-field/margin-field.component.css")).default]
    })
], MarginFieldComponent);



/***/ }),

/***/ "./src/app/page-view/page-view.component.css":
/*!***************************************************!*\
  !*** ./src/app/page-view/page-view.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#page {\n   width: 100%;\n   margin: 0;\n   padding: 0;\n   white-space: nowrap;\n}\n.inline {\n   display: inline-block;\n}\n.breakline {\n   display: block;\n   height: 50%;\n   overflow: scroll;\n}\n.gap {\n   display: inline-block;\n   width: 1px;\n   height: 100%;\n   margin: 0;\n}\n#margin {\n   vertical-align:top;\n   display: inline-block;\n   height: 100%;\n   margin: 0;\n}\n#textfield {\n   vertical-align:top;\n   display: inline-block;\n   /*width: 95%;*/\n   height: 100%;\n   margin: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2Utdmlldy9wYWdlLXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtHQUNHLFdBQVc7R0FDWCxTQUFTO0dBQ1QsVUFBVTtHQUNWLG1CQUFtQjtBQUN0QjtBQUNBO0dBQ0cscUJBQXFCO0FBQ3hCO0FBQ0E7R0FDRyxjQUFjO0dBQ2QsV0FBVztHQUNYLGdCQUFnQjtBQUNuQjtBQUNBO0dBQ0cscUJBQXFCO0dBQ3JCLFVBQVU7R0FDVixZQUFZO0dBQ1osU0FBUztBQUNaO0FBQ0E7R0FDRyxrQkFBa0I7R0FDbEIscUJBQXFCO0dBQ3JCLFlBQVk7R0FDWixTQUFTO0FBQ1o7QUFDQTtHQUNHLGtCQUFrQjtHQUNsQixxQkFBcUI7R0FDckIsY0FBYztHQUNkLFlBQVk7R0FDWixTQUFTO0FBQ1oiLCJmaWxlIjoicGFnZS12aWV3L3BhZ2Utdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3BhZ2Uge1xuICAgd2lkdGg6IDEwMCU7XG4gICBtYXJnaW46IDA7XG4gICBwYWRkaW5nOiAwO1xuICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5pbmxpbmUge1xuICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmJyZWFrbGluZSB7XG4gICBkaXNwbGF5OiBibG9jaztcbiAgIGhlaWdodDogNTAlO1xuICAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cbi5nYXAge1xuICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgd2lkdGg6IDFweDtcbiAgIGhlaWdodDogMTAwJTtcbiAgIG1hcmdpbjogMDtcbn1cbiNtYXJnaW4ge1xuICAgdmVydGljYWwtYWxpZ246dG9wO1xuICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgaGVpZ2h0OiAxMDAlO1xuICAgbWFyZ2luOiAwO1xufVxuI3RleHRmaWVsZCB7XG4gICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XG4gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAvKndpZHRoOiA5NSU7Ki9cbiAgIGhlaWdodDogMTAwJTtcbiAgIG1hcmdpbjogMDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/page-view/page-view.component.ts":
/*!**************************************************!*\
  !*** ./src/app/page-view/page-view.component.ts ***!
  \**************************************************/
/*! exports provided: PageViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageViewComponent", function() { return PageViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _common_matrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/matrix */ "./src/app/page-view/common/matrix.ts");
/* harmony import */ var _common_shared_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/shared_functions */ "./src/app/page-view/common/shared_functions.ts");




/**
 * This component displays one or two {@link /components/TextFieldComponent.html|TextFieldComponent(s)}
 * and its or their {@link /components/MarginFieldComponent.html|MarginFieldComponent(s)}.
 **/
let PageViewComponent = class PageViewComponent {
    constructor() {
        /**
         * first texts written by foreign hand
         **/
        this.first_foreign_texts = [];
        this.first_unevenlines = [];
        /**
         * Identification of first textfield.
         **/
        this.first_textfield_id = 'first textfield';
        /**
         * the zoom factor for the first image that will be used by {@link /components/TextFieldComponent.html|TextFieldComponent}.
         **/
        this.first_local_zoom_factor = -1;
        /**
         * the (initial) maximum height of the image(s).
         **/
        this.max_height = -1;
        /**
         * the (initial) maximum width of the image(s).
         **/
        this.max_width = -1;
        /**
         * should primary url be used for image. use secondary url if false.
         **/
        this.preferPrimaryUrl = true;
        /**
         * Rotation value, i.e. one of [ 0, 90, 180, 270 ].
         **/
        this.rotation = 0;
        /**
         * second texts written by foreign hand
         **/
        this.second_foreign_texts = [];
        this.second_unevenlines = [];
        /**
         * Identification of second textfield.
         **/
        this.second_textfield_id = 'second textfield';
        /**
         * the zoom factor for the second image that will be used by {@link /components/TextFieldComponent.html|TextFieldComponent}.
         **/
        this.second_local_zoom_factor = -1;
        /**
         * global zoom factor.
         **/
        this.zoomFactor = 1;
        /**
         * identifiers of selected words that should be highlighted.
         **/
        this.selectedWords = [];
        /**
         * identifiers of selected lines that should be highlighted.
         **/
        this.selectedLines = [];
        this.showAllLines = false;
        this.showReferenceLeft = 'from';
        this.showReferenceRight = 'to';
    }
    /**
     * sets {@link /components/PageViewComponent.html#max_height|max_height} if it is unset.
     **/
    ngOnInit() {
        if (this.max_height == -1 && this.max_width == -1) {
            this.max_height = screen.availHeight;
        }
        this.checkImages();
    }
    ngOnChanges() {
        if (this.showAllLines) {
            this.dontShowReference = true;
            let allLinesFirst = new Set(this.first_words.map(word => word.line));
            let allLinesSecond = new Set(this.second_words.map(word => word.line));
            this.first_unevenlines = this.first_lines.filter(line => (line.number % 2 == 1 && allLinesFirst.has(line.id)));
            this.second_unevenlines = this.second_lines.filter(line => (line.number % 2 == 1 && allLinesSecond.has(line.id)));
        }
        if (this.dontShowReference != undefined && this.dontShowReference != null && this.dontShowReference) {
            this.showReferenceLeft = '';
            this.showReferenceRight = '';
        }
        else {
            this.showReferenceLeft = 'from';
            this.showReferenceRight = 'to';
        }
        this.checkImages();
        if (this.first_image != null && this.first_image != undefined) {
            this.first_local_zoom_factor = Object(_common_shared_functions__WEBPACK_IMPORTED_MODULE_3__["createLocalZoomFactor"])(this.first_image.text_field, this.max_height, this.max_width);
        }
        if (this.second_image != null && this.second_image != undefined) {
            this.second_local_zoom_factor = Object(_common_shared_functions__WEBPACK_IMPORTED_MODULE_3__["createLocalZoomFactor"])(this.second_image.text_field, this.max_height, this.max_width);
        }
    }
    /**
     * Check whether only part of image should be displayed and update TextField
     **/
    checkImages() {
        if (this.first_image != null && this.first_image != undefined && this.startLineId != null && this.startLineId != undefined) {
            if (this.first_lines != null && this.first_lines != undefined && this.first_lines.length > 0) {
                this.first_image = this.updateTextField(this.first_image, this.first_lines);
            }
            if (this.second_lines != null && this.second_lines != undefined && this.second_lines.length > 0) {
                this.second_image = this.updateTextField(this.second_image, this.second_lines);
            }
        }
    }
    /**
     * Return whether transfomation of image resulting from the transform matrix and the
     * current rotation angle (i.e. one of [ 0, 90, 180, 270 ]) requires
     * a dimension switch, i.e. replacement of width and height value.
     * */
    switchDimensions(transform) {
        return (new _common_matrix__WEBPACK_IMPORTED_MODULE_2__["Matrix"](transform, 1, 0, 0, this.rotation)).get90DegreeRotation() % 180 == 90;
    }
    updateTextField(image, lines) {
        let endLineId = (this.endLineId != null && this.endLineId != undefined) ? this.endLineId : this.startLineId;
        let startLines = lines.filter(line => line.id == this.startLineId);
        let endLines = lines.filter(line => line.id == endLineId);
        if (startLines.length > 0 && endLines.length > 0) {
            let top = (startLines[0].top > 10) ? startLines[0].top - 10 : startLines[0].top;
            let height = (endLines[0].bottom - top) + 10;
            let text_field = { top: top, left: image.text_field.left, width: image.text_field.width, height: height };
            return { x: image.x, y: image.y, width: image.width, height: image.height, filename: image.filename,
                URL: image.URL, secondaryURL: image.secondaryURL, text_field: text_field, transform: image.transform,
                copyright: image.copyright };
        }
        return image;
    }
    /**
     * Returns whether the two images can be displayed as columns.
     **/
    hasColumnStyle() {
        if (this.zoomFactor <= 1 || this.first_image == null || this.second_image == null) {
            return true;
        }
        let newLeftWidth = this.max_height / this.first_image.text_field.height * this.zoomFactor * this.first_image.text_field.width;
        let newRightWidth = this.max_height / this.second_image.text_field.height * this.zoomFactor * this.second_image.text_field.width;
        return newLeftWidth + newRightWidth < screen.availWidth;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PageViewComponent.prototype, "configuration", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PageViewComponent.prototype, "findText", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PageViewComponent.prototype, "first_foreign_texts", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PageViewComponent.prototype, "first_image", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PageViewComponent.prototype, "first_lines", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PageViewComponent.prototype, "first_words", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PageViewComponent.prototype, "max_height", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PageViewComponent.prototype, "max_width", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PageViewComponent.prototype, "preferPrimaryUrl", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PageViewComponent.prototype, "rotation", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PageViewComponent.prototype, "second_foreign_texts", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PageViewComponent.prototype, "second_image", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PageViewComponent.prototype, "second_lines", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PageViewComponent.prototype, "second_words", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('assignClass')
], PageViewComponent.prototype, "assignClass", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('assignStyle')
], PageViewComponent.prototype, "assignStyle", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PageViewComponent.prototype, "zoomFactor", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PageViewComponent.prototype, "selectedWords", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PageViewComponent.prototype, "selectedLines", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('startLine')
], PageViewComponent.prototype, "startLineId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('endLine')
], PageViewComponent.prototype, "endLineId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PageViewComponent.prototype, "showAllLines", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PageViewComponent.prototype, "dontShowReference", void 0);
PageViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-view/page-view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-view.component.css */ "./src/app/page-view/page-view.component.css")).default]
    })
], PageViewComponent);



/***/ }),

/***/ "./src/app/page-view/page-view.module.ts":
/*!***********************************************!*\
  !*** ./src/app/page-view/page-view.module.ts ***!
  \***********************************************/
/*! exports provided: PageViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageViewModule", function() { return PageViewModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _margin_field_margin_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./margin-field/margin-field.component */ "./src/app/page-view/margin-field/margin-field.component.ts");
/* harmony import */ var _textfield_component_textfield_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./textfield-component/textfield.component */ "./src/app/page-view/textfield-component/textfield.component.ts");
/* harmony import */ var _interacted_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interacted.directive */ "./src/app/page-view/interacted.directive.ts");
/* harmony import */ var _page_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-view.component */ "./src/app/page-view/page-view.component.ts");
/* harmony import */ var _page_view_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page-view.service */ "./src/app/page-view/page-view.service.ts");
/* harmony import */ var _copyright_copyright_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./copyright/copyright.component */ "./src/app/page-view/copyright/copyright.component.ts");
/* harmony import */ var _margin_field_line_reference_line_reference_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./margin-field/line-reference/line-reference.component */ "./src/app/page-view/margin-field/line-reference/line-reference.component.ts");
/* harmony import */ var _copyright_copyright_sheet_copyright_sheet_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./copyright/copyright-sheet/copyright-sheet.component */ "./src/app/page-view/copyright/copyright-sheet/copyright-sheet.component.ts");












let PageViewModule = class PageViewModule {
};
PageViewModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _interacted_directive__WEBPACK_IMPORTED_MODULE_6__["InteractedDirective"],
            _margin_field_margin_field_component__WEBPACK_IMPORTED_MODULE_4__["MarginFieldComponent"],
            _textfield_component_textfield_component__WEBPACK_IMPORTED_MODULE_5__["TextFieldComponent"],
            _page_view_component__WEBPACK_IMPORTED_MODULE_7__["PageViewComponent"],
            _copyright_copyright_component__WEBPACK_IMPORTED_MODULE_9__["CopyrightComponent"],
            _margin_field_line_reference_line_reference_component__WEBPACK_IMPORTED_MODULE_10__["LineReferenceComponent"],
            _copyright_copyright_sheet_copyright_sheet_component__WEBPACK_IMPORTED_MODULE_11__["CopyrightSheetComponent"]
        ],
        imports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheetModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        providers: [
            _page_view_service__WEBPACK_IMPORTED_MODULE_8__["PageViewService"]
        ],
        exports: [
            _margin_field_margin_field_component__WEBPACK_IMPORTED_MODULE_4__["MarginFieldComponent"],
            _textfield_component_textfield_component__WEBPACK_IMPORTED_MODULE_5__["TextFieldComponent"],
            _page_view_component__WEBPACK_IMPORTED_MODULE_7__["PageViewComponent"],
            _copyright_copyright_component__WEBPACK_IMPORTED_MODULE_9__["CopyrightComponent"]
        ],
        entryComponents: [_copyright_copyright_sheet_copyright_sheet_component__WEBPACK_IMPORTED_MODULE_11__["CopyrightSheetComponent"]]
    })
], PageViewModule);



/***/ }),

/***/ "./src/app/page-view/page-view.service.ts":
/*!************************************************!*\
  !*** ./src/app/page-view/page-view.service.ts ***!
  \************************************************/
/*! exports provided: PageViewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageViewService", function() { return PageViewService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


/**
 * This is an information service about clicked and (un-)hovered
 * {@link /interfaces/Line.html|Lines},
 * {@link /miscellaneous/typealiases.html#Word|Words}.
 * and {@link /interfaces/TextByForeignHand.html|TextByForeignHands}.
 * */
let PageViewService = class PageViewService {
    /**
     * This is an information service about clicked and (un-)hovered
     * {@link /interfaces/Line.html|Lines},
     * {@link /miscellaneous/typealiases.html#Word|Words}.
     * and {@link /interfaces/TextByForeignHand.html|TextByForeignHands}.
     * */
    constructor() {
        /**
         * hovered line emitter
         **/
        this.onHoveredLine = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * off hovered line emitter
         **/
        this.offHoveredLine = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * clicked line emitter
         **/
        this.onClickedLine = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * hovered word emitter
         **/
        this.onHoveredWord = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * off hovered word emitter
         **/
        this.offHoveredWord = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * clicked word emitter
         **/
        this.onClickedWord = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * clicked text by foreign hand emitter
         **/
        this.onClickedTextByForeignHand = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * hovered text by foreign hand emitter
         **/
        this.onHoveredTextByForeignHand = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * off hovered text by foreign hand emitter
         **/
        this.offHoveredTextByForeignHand = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * hovered line continuation
         **/
        this.onHoveredContinuation = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * off hovered line continuation
         **/
        this.offHoveredContinuation = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * point where mouse hovered/clicked
         **/
        this.mousePosition = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Reference change emitter, subscribe in order to navigate to reference.
         **/
        this.reference = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * copyright change emitter
         * */
        this.copyright = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    referenceService(reference) {
        this.reference.emit(reference);
    }
    copyrightService(copyright, point) {
        this.copyright.emit(copyright);
        if (point != null && point != undefined) {
            this.mousePosition.emit(point);
        }
    }
    /**
     * emit an event on 'onClicked' + interactable.datatype
     **/
    onClickService(interactable, point) {
        this['onClicked' + interactable.datatype].emit(interactable);
        if (interactable.datatype != 'Line' && point != null && point != undefined) {
            this.mousePosition.emit(point);
        }
    }
    /**
     * emit an event on 'onHover' + interactable.datatype
     **/
    onHoverService(interactable, point) {
        this['onHovered' + interactable.datatype].emit(interactable);
        if (interactable.datatype != 'Line' && point != null && point != undefined) {
            this.mousePosition.emit(point);
        }
    }
    /**
     * emit an event on 'offHover' + interactable.datatype
     **/
    offHoverService(interactable) {
        this['offHovered' + interactable.datatype].emit(interactable);
        this.mousePosition.emit({ visible: false, clientX: -1, clientY: -1, layerX: -1, layerY: -1 });
    }
};
PageViewService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], PageViewService);



/***/ }),

/***/ "./src/app/page-view/textfield-component/textfield.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/page-view/textfield-component/textfield.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".textfield {\n  /*background-color: #DADADA;*/\n}\n.textfield .deleted {\n  fill: grey;\n  opacity: 0.3;\n}\n.textfield .highlight_red {\n  fill: #e20000;\n  opacity: 0.3;\n}\n.textfield .highlight_yellow {\n  fill: #e2fa00;\n  opacity: 0.3;\n}\n.textfield .highlight_magenta {\n  fill: #FF00FF;\n  opacity: 0.3;\n}\n.textfield .highlight_foreign_text {\n  fill: blue;\n  opacity: 0.5;\n}\n.textfield .unhighlighted {\n  opacity: 0.0;\n}\n.textfield .highlight_path {\n   stroke: red;\n   fill: none;\n   stroke-width: 0.2;\n}\n.textfield .unhighlighted_path {\n   stroke: none;\n   fill: none;\n   opacity: 0.0;\n}\n.textfield .border {\n  stroke: #e2fa00;\n  stroke-width:5;\n  opacity: 0.3;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2Utdmlldy90ZXh0ZmllbGQtY29tcG9uZW50L3RleHRmaWVsZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtHQUNHLFdBQVc7R0FDWCxVQUFVO0dBQ1YsaUJBQWlCO0FBQ3BCO0FBQ0E7R0FDRyxZQUFZO0dBQ1osVUFBVTtHQUNWLFlBQVk7QUFDZjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxZQUFZO0FBQ2QiLCJmaWxlIjoicGFnZS12aWV3L3RleHRmaWVsZC1jb21wb25lbnQvdGV4dGZpZWxkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dGZpZWxkIHtcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjREFEQURBOyovXG59XG4udGV4dGZpZWxkIC5kZWxldGVkIHtcbiAgZmlsbDogZ3JleTtcbiAgb3BhY2l0eTogMC4zO1xufVxuLnRleHRmaWVsZCAuaGlnaGxpZ2h0X3JlZCB7XG4gIGZpbGw6ICNlMjAwMDA7XG4gIG9wYWNpdHk6IDAuMztcbn1cbi50ZXh0ZmllbGQgLmhpZ2hsaWdodF95ZWxsb3cge1xuICBmaWxsOiAjZTJmYTAwO1xuICBvcGFjaXR5OiAwLjM7XG59XG4udGV4dGZpZWxkIC5oaWdobGlnaHRfbWFnZW50YSB7XG4gIGZpbGw6ICNGRjAwRkY7XG4gIG9wYWNpdHk6IDAuMztcbn1cbi50ZXh0ZmllbGQgLmhpZ2hsaWdodF9mb3JlaWduX3RleHQge1xuICBmaWxsOiBibHVlO1xuICBvcGFjaXR5OiAwLjU7XG59XG4udGV4dGZpZWxkIC51bmhpZ2hsaWdodGVkIHtcbiAgb3BhY2l0eTogMC4wO1xufVxuLnRleHRmaWVsZCAuaGlnaGxpZ2h0X3BhdGgge1xuICAgc3Ryb2tlOiByZWQ7XG4gICBmaWxsOiBub25lO1xuICAgc3Ryb2tlLXdpZHRoOiAwLjI7XG59XG4udGV4dGZpZWxkIC51bmhpZ2hsaWdodGVkX3BhdGgge1xuICAgc3Ryb2tlOiBub25lO1xuICAgZmlsbDogbm9uZTtcbiAgIG9wYWNpdHk6IDAuMDtcbn1cbi50ZXh0ZmllbGQgLmJvcmRlciB7XG4gIHN0cm9rZTogI2UyZmEwMDtcbiAgc3Ryb2tlLXdpZHRoOjU7XG4gIG9wYWNpdHk6IDAuMztcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/page-view/textfield-component/textfield.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/page-view/textfield-component/textfield.component.ts ***!
  \**********************************************************************/
/*! exports provided: TextFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextFieldComponent", function() { return TextFieldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _page_view_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../page-view.service */ "./src/app/page-view/page-view.service.ts");
/* harmony import */ var _highlight_status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../highlight_status */ "./src/app/page-view/highlight_status.ts");
/* harmony import */ var _configurable_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configurable-component */ "./src/app/page-view/configurable-component.ts");
/* harmony import */ var _common_matrix__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/matrix */ "./src/app/page-view/common/matrix.ts");
/* harmony import */ var _common_shared_functions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/shared_functions */ "./src/app/page-view/common/shared_functions.ts");







/**
 * This component displays an image with word hovers.
 **/
let TextFieldComponent = class TextFieldComponent extends _configurable_component__WEBPACK_IMPORTED_MODULE_4__["ConfigurableComponent"] {
    /**
     * @param pageViewService an information source about (un-)hovered and clicked Lines/Words.
     * */
    constructor(pageViewService) {
        super();
        this.pageViewService = pageViewService;
        /**
         * Debug mode.
         **/
        this.debug = false;
        /**
         * texts written by foreign hand
         **/
        this.foreign_texts = [];
        /**
         * textfield's identity.
         **/
        this.identity = 'first textfield';
        /**
         * The (unzoomed) height of the root svg.
         *
         * (The actual height is 'image_height*local_zoom*zoomFactor'
         * */
        this.image_height = 400;
        /**
         * image properties for the svg-image.
         * */
        this.imageSpec = { x: 0, y: 0, height: 973.91998, width: 2038.5601, URL: null, secondaryURL: null, transform: 'matrix(1 0 0 1 0 0)' };
        /**
         * The (unzoomed) width of the root svg.
         *
         * (The actual width is 'image_width*local_zoom*zoomFactor'
         * */
        this.image_width = 300;
        /**
         * the viewBox of the root svg specifying the area of the svg that will be shown.
         * */
        this.viewBox = '';
        /**
         * the (initial) maximum height of the image.
         **/
        this.max_height = -1;
        /**
         * the (initial) maximum width of the image.
         **/
        this.max_width = -1;
        /**
         * should primary Url be used for image. Use secondary Url if false.
         **/
        this.preferPrimaryUrl = true;
        /**
         * Rotation value, i.e. one of [ 0, 90, 180, 270 ].
         **/
        this.rotation = 0;
        /**
         * Use extended tooltip.
         **/
        this.useExtendedTooltip = false;
        /**
         * global zoom factor.
         **/
        this.zoomFactor = 1;
        /**
         * local zoom factor that sets the height and width of the image according to {@link #max_height|max_height}.
         * */
        this.local_zoom = -1;
        /**
         * identifiers of selected words that should be highlighted.
         **/
        this.selectedWords = [];
        /**
         * identifiers of selected lines that should be highlighted.
         **/
        this.selectedLines = [];
    }
    ngOnInit() {
        if (this.max_height == -1 && this.max_width == -1) {
            this.max_height = screen.availHeight;
        }
        if (this.image.text_field != null) {
            this.updateImageProperties();
        }
        else if (this.imageSpec != null) {
            this.image_width = this.imageSpec.width;
            this.image_height = this.imageSpec.height;
            this.viewBox = '0 0 ' + this.image_width + ' ' + this.image_height;
        }
        this.pageViewService.onClickedWord.subscribe((changedWord) => this.clickedWord = changedWord);
        this.pageViewService.onHoveredWord.subscribe((changedWord) => this.hoveredWord = changedWord);
        this.pageViewService.offHoveredWord.subscribe((changedWord) => { this.hoveredWord = null; });
        this.pageViewService.onHoveredLine.subscribe((changedLine) => { this.hoveredLine = changedLine; });
        this.pageViewService.offHoveredLine.subscribe((changedLine) => { this.hoveredLine = null; });
        this.pageViewService.onHoveredTextByForeignHand.subscribe((changedForeignText) => { this.hoveredTextByForeignHand = changedForeignText; });
        this.pageViewService.offHoveredTextByForeignHand.subscribe((changedForeignText) => { this.hoveredTextByForeignHand = null; });
    }
    ngOnChanges() {
        super.ngOnChanges();
        if (this.image.text_field != null) {
            this.updateImageProperties();
        }
        if (this.debug && this.findText != null && this.findText != '') {
            let words = this.words.filter(word => word.text == this.findText);
            if (words.length > 0) {
                this.pageViewService.onHoverService(words[0], { visible: true, clientX: 100, clientY: 100, layerX: -1, layerY: -1 });
            }
        }
    }
    /**
     * Update image properties: use textfield in order to specify the area of the image that will be shown.
     *
     * @param URL set alternative image url. This will be used on image load error (see Template)
     **/
    updateImageProperties(URL) {
        let previous_word = null;
        for (var i = 0; i < this.words.length; i++) {
            this.words[i].datatype = "Word";
            if (previous_word == null || previous_word.id != this.words[i].id) {
                previous_word = this.words[i];
                previous_word.is_top_object = true;
            }
            else if (previous_word.top > this.words[i].top) {
                previous_word.is_top_object = false;
                previous_word = this.words[i];
                previous_word.is_top_object = true;
            }
            else {
                this.words[i].is_top_object = false;
            }
        }
        this.foreign_texts.forEach(foreignText => foreignText.datatype = "TextByForeignHand");
        let image_left = this.image.text_field.left;
        let image_top = this.image.text_field.top;
        this.image_width = this.image.text_field.width;
        this.image_height = this.image.text_field.height;
        if (this.local_zoom == -1 && this.image != undefined && this.image != null) {
            this.local_zoom = Object(_common_shared_functions__WEBPACK_IMPORTED_MODULE_6__["createLocalZoomFactor"])(this.image.text_field, this.max_height, this.max_width);
        }
        this.imageSpec.x = this.image.x;
        this.imageSpec.y = this.image.y;
        this.imageSpec.height = this.image.height;
        this.imageSpec.width = this.image.width;
        this.imageSpec.URL = (this.preferPrimaryUrl) ? this.image.URL : this.image.secondaryURL;
        this.imageSpec.secondaryURL = (this.preferPrimaryUrl) ? this.image.URL : this.image.URL;
        if (URL != null) {
            this.imageSpec.secondaryURL = this.imageSpec.URL;
            this.imageSpec.URL = URL;
        }
        this.viewBox = image_left + ' ' + image_top + ' ' + this.image_width + ' ' + this.image_height;
        let matrix = new _common_matrix__WEBPACK_IMPORTED_MODULE_5__["Matrix"](this.image.transform, this.local_zoom * this.zoomFactor, this.image_height, this.image_width, this.rotation);
        this.imageSpec.transform = matrix.toString();
    }
    /**
     * Return the position (i.e. '{ x: x, y: y }')  for the copyright symbol.
     * @param dimension dimension of the copyright symbol.
     **/
    getCopyrightPosition(dimension) {
        if (this.image.text_field != null && this.image.text_field != undefined) {
            let positions = [
                { x: Number(this.image.text_field.left) + 10 / this.zoomFactor,
                    y: Number(this.image.text_field.top) + 10 / this.zoomFactor },
                { x: Number(this.image.text_field.left),
                    y: Number(this.image.text_field.top) },
                { x: Number(this.image.text_field.width) + Number(this.image.text_field.left) - 15 / this.zoomFactor - dimension,
                    y: Number(this.image.text_field.height) + Number(this.image.text_field.top) - 15 / this.zoomFactor - dimension },
                { x: Number(this.image.text_field.width) + Number(this.image.text_field.left) - dimension,
                    y: Number(this.image.text_field.height) + Number(this.image.text_field.top) - dimension },
                { x: Number(this.image.text_field.left) + 10 / this.zoomFactor,
                    y: Number(this.image.text_field.height) + Number(this.image.text_field.top) - 10 / this.zoomFactor - dimension },
                { x: Number(this.image.text_field.width) + Number(this.image.text_field.left) - 10 / this.zoomFactor - dimension,
                    y: Number(this.image.text_field.top) + 10 / this.zoomFactor },
                { x: Number(this.image.text_field.width) + Number(this.image.text_field.left) - dimension,
                    y: Number(this.image.text_field.top) }
            ];
            let default_index = 1;
            let index = 0;
            let position_found = false;
            while (!position_found && index < positions.length) {
                let left = positions[index].x;
                let top = positions[index].y;
                if (!this.doesPositionConflict(left, top, dimension, this.words)
                    && !this.doesPositionConflict(left, top, dimension, this.foreign_texts)) {
                    position_found = true;
                }
                else {
                    index++;
                }
            }
            let left = (index < positions.length) ? positions[index].x : positions[default_index].x;
            let top = (index < positions.length) ? positions[index].y : positions[default_index].y;
            return { x: `${left}px`, y: `${top}px` };
        }
        else {
            return { x: '0px', y: '0px' };
        }
    }
    /**
     * Return whether position specified by left, top and dimension does conflict with one of the positional objects' position.
     *
     * @param left left of position
     * @param top top of position
     * @param dimension dimension of position
     * @param positionalObjects Array of positions
     **/
    doesPositionConflict(left, top, dimension, positionalObjects) {
        let conflicts = positionalObjects.filter(positionalObject => !(Number(positionalObject.left) + Number(positionalObject.width) < left || Number(positionalObject.left) > left + dimension
            || Number(positionalObject.top) > top + dimension || Number(positionalObject.top) + Number(positionalObject.height) < top));
        return conflicts.length > 0;
    }
    /**
     * Get the hover status of the word as one of the {@link /miscellaneous/enumerations.html#HIGHTLIGHT_CASES|HIGHTLIGHT_CASES}.
     **/
    getHoverStatus(word, skipFindText = false) {
        if (this.selectedWords.indexOf(word.id) > -1
            || this.selectedLines.indexOf(word.line) > -1) {
            return _highlight_status__WEBPACK_IMPORTED_MODULE_3__["HIGHTLIGHT_CASES"].SELECTED_WORD;
        }
        if (!skipFindText && this.findText != null && this.findText != '') {
            let findRegex = '^[^\\w]*(' + this.findText.split(' ').join('|') + ')';
            return (word.text.match(findRegex)
                || (word.edited_text != null && word.edited_text.match(findRegex))) ? _highlight_status__WEBPACK_IMPORTED_MODULE_3__["HIGHTLIGHT_CASES"].SEARCHED_WORD : this.getHoverStatus(word, true);
        }
        if (typeof this.hoveredLine !== 'undefined' && this.hoveredLine !== null) {
            return (this.hoveredLine.id == word.line
                || (this.hoveredLine.continuesTo != undefined && this.hoveredLine.continuesTo != null && this.hoveredLine.continuesTo.line.id == word.line)
                || (this.hoveredLine.continuesFrom != undefined && this.hoveredLine.continuesFrom != null && this.hoveredLine.continuesFrom.line.id == word.line))
                ? _highlight_status__WEBPACK_IMPORTED_MODULE_3__["HIGHTLIGHT_CASES"].LINE_HOVERED : _highlight_status__WEBPACK_IMPORTED_MODULE_3__["HIGHTLIGHT_CASES"].DEFAULT;
        }
        else if (typeof this.hoveredWord !== 'undefined' && this.hoveredWord !== null) {
            return (this.hoveredWord.id == word.id) ? _highlight_status__WEBPACK_IMPORTED_MODULE_3__["HIGHTLIGHT_CASES"].WORD_HOVERED : _highlight_status__WEBPACK_IMPORTED_MODULE_3__["HIGHTLIGHT_CASES"].DEFAULT;
        }
        return _highlight_status__WEBPACK_IMPORTED_MODULE_3__["HIGHTLIGHT_CASES"].DEFAULT;
    }
    /**
     * Return a css class for word that will be used with [ngClass] in order to (un-)highlight the word's rect.
     *
     * If a function has been passed to Input {@link #assignClass|assignClass},
     * this function will call it if {@link #getHoverStatus|getHoverStatus(word)} == {@link /miscellaneous/enumerations.html#HIGHTLIGHT_CASES|HIGHTLIGHT_CASES.DEFAULT}.
     **/
    assignClass(positionalObject, elementName) {
        if (positionalObject.datatype == 'TextByForeignHand') {
            return (this.hoveredTextByForeignHand != null && this.hoveredTextByForeignHand.id == positionalObject.id) ?
                'text_field highlight_foreign_text' : 'text_field unhighlighted';
        }
        let word = positionalObject;
        if (elementName != null) {
            return (this.getHoverStatus(word) == _highlight_status__WEBPACK_IMPORTED_MODULE_3__["HIGHTLIGHT_CASES"].DEFAULT) ? `text_field unhighlighted_${elementName}` : `text_field highlight_${elementName}`;
        }
        switch (this.getHoverStatus(word)) {
            case _highlight_status__WEBPACK_IMPORTED_MODULE_3__["HIGHTLIGHT_CASES"].SELECTED_WORD: {
                return 'textfield highlight_magenta';
            }
            case _highlight_status__WEBPACK_IMPORTED_MODULE_3__["HIGHTLIGHT_CASES"].SEARCHED_WORD: {
                return 'textfield highlight_red';
            }
            case _highlight_status__WEBPACK_IMPORTED_MODULE_3__["HIGHTLIGHT_CASES"].LINE_HOVERED: {
                return (word.deleted) ? 'textfield deleted' : 'textfield highlight_yellow';
            }
            case _highlight_status__WEBPACK_IMPORTED_MODULE_3__["HIGHTLIGHT_CASES"].WORD_HOVERED: {
                return (word.deleted) ? 'textfield deleted' : 'textfield highlight_yellow';
            }
            case _highlight_status__WEBPACK_IMPORTED_MODULE_3__["HIGHTLIGHT_CASES"].DEFAULT: {
                return (this.externalAssignClassAfter != null) ? this.externalAssignClassAfter(word, this.hoveredWord, this.hoveredLine) : 'textfield unhighlighted';
            }
        }
    }
    /**
    * Assign a style to the rects of a line.
    **/
    assignStyle(word, hoveredWord, hoveredLine, hoverStatus) {
        return (this.extAssignStyle != null) ? this.extAssignStyle(word, hoveredWord, hoveredLine, hoverStatus) : {};
    }
    msg(URL) {
        if (this.preferPrimaryUrl) {
            // console.log(URL + ' TODO: show smaller image during loading');
        }
    }
};
TextFieldComponent.ctorParameters = () => [
    { type: _page_view_service__WEBPACK_IMPORTED_MODULE_2__["PageViewService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TextFieldComponent.prototype, "container", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TextFieldComponent.prototype, "findText", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TextFieldComponent.prototype, "foreign_texts", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TextFieldComponent.prototype, "image", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TextFieldComponent.prototype, "identity", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TextFieldComponent.prototype, "max_height", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TextFieldComponent.prototype, "max_width", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TextFieldComponent.prototype, "preferPrimaryUrl", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TextFieldComponent.prototype, "rotation", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TextFieldComponent.prototype, "useExtendedTooltip", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TextFieldComponent.prototype, "words", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TextFieldComponent.prototype, "zoomFactor", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TextFieldComponent.prototype, "local_zoom", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('assignClass')
], TextFieldComponent.prototype, "externalAssignClassAfter", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('assignStyle')
], TextFieldComponent.prototype, "extAssignStyle", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TextFieldComponent.prototype, "selectedWords", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TextFieldComponent.prototype, "selectedLines", void 0);
TextFieldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'text-field',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./textfield.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-view/textfield-component/textfield.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./textfield.component.css */ "./src/app/page-view/textfield-component/textfield.component.css")).default]
    })
], TextFieldComponent);



/***/ }),

/***/ "./src/app/project.component.css":
/*!***************************************!*\
  !*** ./src/app/project.component.css ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".text {\n   font-size: 12pt;\n   text-align: justify;\n   width: 650px;\n}\n.img {\n   margin-top: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtHQUNHLGVBQWU7R0FDZixtQkFBbUI7R0FDbkIsWUFBWTtBQUNmO0FBQ0E7R0FDRyxnQkFBZ0I7QUFDbkIiLCJmaWxlIjoicHJvamVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQge1xuICAgZm9udC1zaXplOiAxMnB0O1xuICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgIHdpZHRoOiA2NTBweDtcbn1cbi5pbWcge1xuICAgbWFyZ2luLXRvcDogMjBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/project.component.ts":
/*!**************************************!*\
  !*** ./src/app/project.component.ts ***!
  \**************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProjectComponent = class ProjectComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-project',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./project.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/project.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./project.component.css */ "./src/app/project.component.css")).default]
    })
], ProjectComponent);



/***/ }),

/***/ "./src/app/quant/quant.component.scss":
/*!********************************************!*\
  !*** ./src/app/quant/quant.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content-area {\n  height: 100%;\n  width: 80%;\n}\n\n.nav-container {\n  height: 100%;\n  width: 50%;\n  display: table-cell;\n}\n\n.content-container {\n  height: 100%;\n  display: table-cell;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9kYXRhL2hvbWUva25pc3RlcjAvZ2l0aHVicy9OaWV0enNjaGVCZXRhL25pZXR6c2NoZS1iZXRhLWFwcC9zcmMvYXBwL3F1YW50L3F1YW50LmNvbXBvbmVudC5zY3NzIiwicXVhbnQvcXVhbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUVBLFVBQUE7RUFDQSxtQkFBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtFQUdBLG1CQUFBO0FDRkYiLCJmaWxlIjoicXVhbnQvcXVhbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1hcmVhIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogODAlO1xufVxuXG4ubmF2LWNvbnRhaW5lciB7XG4gIGhlaWdodDoxMDAlO1xuICAvL21pbi13aWR0aDogdW5zZXQ7IC8vIG5lZWRlZCBiZWNhdXNlIGFuZ3VsYXIgc2V0cyBhbiBvd24gbWluIHdpZHRoIT9cbiAgd2lkdGg6NTAlO1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xufVxuXG4uY29udGVudC1jb250YWluZXIge1xuICBoZWlnaHQ6MTAwJTtcbiAgLy8gbWluLXdpZHRoOiB1bnNldDsgLy8gbmVlZGVkIGJlY2F1c2UgYW5ndWxhciBzZXRzIGFuIG93biBtaW4gd2lkdGghP1xuICAvLyB3aWR0aDoyMHB4O1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xufVxuIiwiLmNvbnRlbnQtYXJlYSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDgwJTtcbn1cblxuLm5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiA1MCU7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG59XG5cbi5jb250ZW50LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/quant/quant.component.ts":
/*!******************************************!*\
  !*** ./src/app/quant/quant.component.ts ***!
  \******************************************/
/*! exports provided: QuantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuantComponent", function() { return QuantComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let QuantComponent = class QuantComponent {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.leftOffset = 361;
        this.width = 1000;
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe((queryParams) => {
            this.width = (queryParams.navBarOpenState === 'true') ? window.innerWidth - this.leftOffset : window.innerWidth - 20;
        });
    }
};
QuantComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
QuantComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quant',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quant.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/quant/quant.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quant.component.scss */ "./src/app/quant/quant.component.scss")).default]
    })
], QuantComponent);



/***/ }),

/***/ "./src/app/query.component.scss":
/*!**************************************!*\
  !*** ./src/app/query.component.scss ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdWVyeS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/query.component.ts":
/*!************************************!*\
  !*** ./src/app/query.component.ts ***!
  \************************************/
/*! exports provided: QueryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryComponent", function() { return QueryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/app/constants.ts");



let QueryComponent = class QueryComponent {
    constructor() {
        this.routePrefix = _constants__WEBPACK_IMPORTED_MODULE_2__["CONTENT_VIEW_ROUTE"];
    }
    ngOnInit() {
    }
};
QueryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-query',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./query.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/query.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./query.component.scss */ "./src/app/query.component.scss")).default]
    })
], QueryComponent);



/***/ }),

/***/ "./src/app/rhizome-view-component/rhizome-view-component.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/rhizome-view-component/rhizome-view-component.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#page {\n   margin-top: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJoaXpvbWUtdmlldy1jb21wb25lbnQvcmhpem9tZS12aWV3LWNvbXBvbmVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0dBQ0csZ0JBQWdCO0FBQ25CIiwiZmlsZSI6InJoaXpvbWUtdmlldy1jb21wb25lbnQvcmhpem9tZS12aWV3LWNvbXBvbmVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3BhZ2Uge1xuICAgbWFyZ2luLXRvcDogMTBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/rhizome-view-component/rhizome-view-component.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/rhizome-view-component/rhizome-view-component.component.ts ***!
  \****************************************************************************/
/*! exports provided: RhizomeViewComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RhizomeViewComponentComponent", function() { return RhizomeViewComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let RhizomeViewComponentComponent = class RhizomeViewComponentComponent {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe((queryParams) => this.fullscreen = (queryParams.fullscreen === 'true'));
    }
};
RhizomeViewComponentComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
RhizomeViewComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rhizome-view-component',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./rhizome-view-component.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/rhizome-view-component/rhizome-view-component.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./rhizome-view-component.component.css */ "./src/app/rhizome-view-component/rhizome-view-component.component.css")).default]
    })
], RhizomeViewComponentComponent);



/***/ }),

/***/ "./src/app/services/navigation-service.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/navigation-service.service.ts ***!
  \********************************************************/
/*! exports provided: NavigationServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationServiceService", function() { return NavigationServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let NavigationServiceService = class NavigationServiceService {
    constructor(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    /**
     * updateRoute
     * routes to the active url with the actual or passed query params of this class.
     */
    updateRoute(qParams, relPath) {
        if (relPath) {
            this.router.navigate([relPath], { relativeTo: this.activatedRoute, queryParams: qParams, queryParamsHandling: 'merge' });
        }
        else {
            this.router.navigate([], { relativeTo: this.activatedRoute, queryParams: qParams, queryParamsHandling: 'merge' });
        }
    }
};
NavigationServiceService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
NavigationServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], NavigationServiceService);



/***/ }),

/***/ "./src/app/services/query.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/query.service.ts ***!
  \*******************************************/
/*! exports provided: QueryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryService", function() { return QueryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var sparqljs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sparqljs */ "./node_modules/sparqljs/sparql.js");
/* harmony import */ var sparqljs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sparqljs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let QueryService = class QueryService {
    constructor(http) {
        this.http = http;
        this.parser = new sparqljs__WEBPACK_IMPORTED_MODULE_2__["Parser"]();
        this.sparqlGenerator = new sparqljs__WEBPACK_IMPORTED_MODULE_2__["Generator"]({});
    }
    /**
     * Gets the data from an endpoint via http post
     *
     * @param baseUrl:  The url of the endpoint.
     * @param query:  The query to run.
     * @param queryType: "CONSTRUCT" or "QUERY"
     * @returns the response.
     */
    getData(baseUrl, query, queryType) {
        let httpOptions;
        if (queryType === 'CONSTRUCT') {
            //  A construct does contain a text as response, not a json, so responseType must be 'text' to avoid parse errors
            httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/sparql-query', 'Accept': 'text/turtle' }),
                responseType: 'text' };
            return this.http.post(baseUrl, query, httpOptions).toPromise();
        }
        else {
            httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/sparql-query',
                    'Accept': 'application/sparql-results+json; charset=UTF-8' }) };
            return this.http.post(baseUrl, query, httpOptions).toPromise();
        }
    }
    /**
     * Gets a text file by its name from the directory assets/queries.
     *
     * @param filename  The name of the file + file name extension.
     * @returns the text of the file.
     */
    getQueryfromFilename(filename) {
        return this.http.get('../assets/queries/' + filename, { responseType: 'text' }).toPromise();
    }
    /**
     * Gets a query string from a given file in the directory assets/queries.
     *
     * @param filename  The name of the file + file name extension.
     * @returns The JSON equivalence of the parsed query.
     */
    parseQueryFromFile(filename) {
        return this.getQueryfromFilename(filename)
            .then(query => {
            this.parser.parse(query);
        });
    }
    /**
     * getQueryForItem()
     * Parametrizes a given baseQuery with a iri passed, so the iri will be the resource of the where clause
     *
     * @param subjectIri:  The iri of the selected resource
     * @param baseQuery: name of the query to parametrize
     * @param propertyIri: The iri of the selected property
     * @param objectIri: The iri of the selected object
     * @returns the query for the resource.
     */
    parametrizeQueryWithItem(baseQuery, subjectIri, propertyIri, objectIri) {
        let parsedQuery = this.parser.parse(baseQuery);
        // parametrize/reset the subject iri to the word's iri we like to query for
        if (subjectIri && subjectIri !== '') {
            parsedQuery.where[0].triples[0].subject = { 'termType': 'NamedNode', 'value': decodeURI(subjectIri) };
        }
        if (propertyIri && propertyIri !== '') {
            parsedQuery.where[0].triples[0].predicate = { 'termType': 'NamedNode', 'value': decodeURI(propertyIri) };
        }
        if (objectIri && objectIri !== '') {
            parsedQuery.where[0].triples[0].object = { 'termType': 'NamedNode', 'value': decodeURI(objectIri) };
        }
        // generate the new query string and return it
        return this.sparqlGenerator.stringify(parsedQuery);
    }
};
QueryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
QueryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], QueryService);



/***/ }),

/***/ "./src/app/support/add-content.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/support/add-content.pipe.ts ***!
  \*********************************************/
/*! exports provided: AddContentPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddContentPipe", function() { return AddContentPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AddContentPipe = class AddContentPipe {
    transform(index, titles) {
        //titles.push({ title: title, link: title.replace(/ /g, '_')});
        //return title;
        console.log(titles.length, index);
        if (titles == undefined || titles == null || titles.length <= index)
            return '';
        return '#' + titles[index].link;
    }
};
AddContentPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'addContent'
    })
], AddContentPipe);



/***/ }),

/***/ "./src/app/support/heading.component.scss":
/*!************************************************!*\
  !*** ./src/app/support/heading.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdXBwb3J0L2hlYWRpbmcuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/support/heading.component.ts":
/*!**********************************************!*\
  !*** ./src/app/support/heading.component.ts ***!
  \**********************************************/
/*! exports provided: HeadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadingComponent", function() { return HeadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeadingComponent = class HeadingComponent {
    constructor() {
        this.tableOfContentsChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.level = 0;
        this.indexChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        const sectioning = this.getSectioning();
        this.prefix = sectioning.prefix;
        if (this.href == undefined || this.href == null) {
            this.href = sectioning.href;
        }
        this.tableOfContents.push({ title: this.title, link: this.href, level: this.level,
            sectionNumber: sectioning.sectionNumber, subsectionNumber: sectioning.subsectionNumber, prefix: sectioning.prefix });
        this.indexChanged.emit(this.tableOfContents.length);
        this.tableOfContentsChanged.emit(this.tableOfContents);
    }
    getSectioning() {
        if (this.tableOfContents.length == 0) {
            return { prefix: '1.', sectionNumber: 1, href: this.title.replace(/ /g, '_') };
        }
        let sectionNumber = this.tableOfContents[this.tableOfContents.length - 1].sectionNumber;
        if (this.level == 0) {
            sectionNumber += 1;
            return { prefix: String(sectionNumber) + '.', sectionNumber: sectionNumber, href: this.title.replace(/ /g, '_') };
        }
        let parents = this.tableOfContents.filter(content => content.level == 0);
        const href = parents[parents.length - 1].title.replace(/ /g, '_') + '_' + this.title.replace(/ /g, '_');
        const subsectionNumber = (this.tableOfContents[this.tableOfContents.length - 1].subsectionNumber != undefined)
            ? this.tableOfContents[this.tableOfContents.length - 1].subsectionNumber + 1
            : 1;
        return { prefix: String(sectionNumber) + '.' + String(subsectionNumber), sectionNumber: sectionNumber, subsectionNumber: subsectionNumber, href: href };
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], HeadingComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], HeadingComponent.prototype, "href", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], HeadingComponent.prototype, "tableOfContents", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], HeadingComponent.prototype, "tableOfContentsChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], HeadingComponent.prototype, "level", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], HeadingComponent.prototype, "indexChanged", void 0);
HeadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'heading',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./heading.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/support/heading.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./heading.component.scss */ "./src/app/support/heading.component.scss")).default]
    })
], HeadingComponent);



/***/ }),

/***/ "./src/app/support/menu.component.scss":
/*!*********************************************!*\
  !*** ./src/app/support/menu.component.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button {\n  white-space: nowrap;\n  display: inline;\n}\n\n.level0 {\n  text-decoration: underline;\n}\n\n.level1 {\n  margin-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9kYXRhL2hvbWUva25pc3RlcjAvZ2l0aHVicy9OaWV0enNjaGVCZXRhL25pZXR6c2NoZS1iZXRhLWFwcC9zcmMvYXBwL3N1cHBvcnQvbWVudS5jb21wb25lbnQuc2NzcyIsInN1cHBvcnQvbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNHLG1CQUFBO0VBQ0EsZUFBQTtBQ0NIOztBREdBO0VBQ0csMEJBQUE7QUNBSDs7QURFQTtFQUNHLGlCQUFBO0FDQ0giLCJmaWxlIjoic3VwcG9ydC9tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcbiAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICBkaXNwbGF5OiBpbmxpbmU7XG59XG4jbXltZW51e1xufVxuLmxldmVsMCB7XG4gICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgXG59XG4ubGV2ZWwxIHtcbiAgIG1hcmdpbi1sZWZ0OiAxNXB4OyBcbn1cbiIsImJ1dHRvbiB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cblxuLmxldmVsMCB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4ubGV2ZWwxIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/support/menu.component.ts":
/*!*******************************************!*\
  !*** ./src/app/support/menu.component.ts ***!
  \*******************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let MenuComponent = class MenuComponent {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.titles = [];
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe((queryParams) => {
            this.queryParams = queryParams;
        });
    }
};
MenuComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MenuComponent.prototype, "titles", void 0);
MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/support/menu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu.component.scss */ "./src/app/support/menu.component.scss")).default]
    })
], MenuComponent);



/***/ }),

/***/ "./src/app/support/subheading.component.ts":
/*!*************************************************!*\
  !*** ./src/app/support/subheading.component.ts ***!
  \*************************************************/
/*! exports provided: SubheadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubheadingComponent", function() { return SubheadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _heading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./heading.component */ "./src/app/support/heading.component.ts");



let SubheadingComponent = class SubheadingComponent extends _heading_component__WEBPACK_IMPORTED_MODULE_2__["HeadingComponent"] {
    constructor() {
        super();
        this.level = 1;
    }
};
SubheadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'subheading',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./heading.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/support/heading.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./heading.component.scss */ "./src/app/support/heading.component.scss")).default]
    })
], SubheadingComponent);



/***/ }),

/***/ "./src/app/support/subsubheading.component.ts":
/*!****************************************************!*\
  !*** ./src/app/support/subsubheading.component.ts ***!
  \****************************************************/
/*! exports provided: SubSubheadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubSubheadingComponent", function() { return SubSubheadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _heading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./heading.component */ "./src/app/support/heading.component.ts");



let SubSubheadingComponent = class SubSubheadingComponent extends _heading_component__WEBPACK_IMPORTED_MODULE_2__["HeadingComponent"] {
    constructor() {
        super();
        this.level = 2;
    }
};
SubSubheadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'subsubheading',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./heading.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/support/heading.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./heading.component.scss */ "./src/app/support/heading.component.scss")).default]
    })
], SubSubheadingComponent);



/***/ }),

/***/ "./src/app/support/support.component.scss":
/*!************************************************!*\
  !*** ./src/app/support/support.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ol li::marker {\n  color: red;\n}\n\n.roman {\n  color: red;\n}\n\n.img-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 650px;\n}\n\n.img {\n  flex-basis: 40%;\n}\n\n.img-text {\n  font-size: 12pt;\n  padding-left: 20px;\n  text-align: justify;\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  -moz-hyphens: auto;\n  lang: de;\n}\n\n.text {\n  font-size: 12pt;\n  text-align: justify;\n}\n\ntd.text {\n  width: 320px;\n}\n\ndiv.text {\n  width: 650px;\n}\n\nli {\n  width: 650px;\n}\n\n#navi {\n  width: 100%;\n  height: 50px;\n  margin: 0;\n  padding: 0;\n  white-space: nowrap;\n}\n\n.level0 {\n  text-decoration: underline;\n}\n\n.level1 {\n  margin-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9kYXRhL2hvbWUva25pc3RlcjAvZ2l0aHVicy9OaWV0enNjaGVCZXRhL25pZXR6c2NoZS1iZXRhLWFwcC9zcmMvYXBwL3N1cHBvcnQvc3VwcG9ydC5jb21wb25lbnQuc2NzcyIsInN1cHBvcnQvc3VwcG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7QUNDRjs7QURDQTtFQUNHLFVBQUE7QUNFSDs7QURBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQ0dKOztBRERBO0VBQ0csZUFBQTtBQ0lIOztBREZBO0VBQ0csZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtNQUFBLGlCQUFBO1VBQUEsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQ0tIOztBREhBO0VBQ0csZUFBQTtFQUNBLG1CQUFBO0FDTUg7O0FESkE7RUFDRyxZQUFBO0FDT0g7O0FETEE7RUFDRyxZQUFBO0FDUUg7O0FETkE7RUFDRyxZQUFBO0FDU0g7O0FEUEE7RUFDRyxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUNVSDs7QURSQTtFQUNHLDBCQUFBO0FDV0g7O0FEVEE7RUFDRyxpQkFBQTtBQ1lIIiwiZmlsZSI6InN1cHBvcnQvc3VwcG9ydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm9sIGxpOjptYXJrZXIge1xuICBjb2xvcjogcmVkO1xufVxuLnJvbWFuIHtcbiAgIGNvbG9yOiByZWQ7XG59XG4uaW1nLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiA2NTBweDtcbn1cbi5pbWcge1xuICAgZmxleC1iYXNpczogNDAlXG59XG4uaW1nLXRleHQge1xuICAgZm9udC1zaXplOiAxMnB0O1xuICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgIGh5cGhlbnM6IGF1dG87XG4gICAtbW96LWh5cGhlbnM6IGF1dG87XG4gICBsYW5nOiBkZTtcbn1cbi50ZXh0IHtcbiAgIGZvbnQtc2l6ZTogMTJwdDtcbiAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG50ZC50ZXh0IHtcbiAgIHdpZHRoOiAzMjBweDtcbn1cbmRpdi50ZXh0IHtcbiAgIHdpZHRoOiA2NTBweDtcbn1cbmxpIHtcbiAgIHdpZHRoOiA2NTBweDtcbn1cbiNuYXZpIHtcbiAgIHdpZHRoOiAxMDAlO1xuICAgaGVpZ2h0OiA1MHB4O1xuICAgbWFyZ2luOiAwO1xuICAgcGFkZGluZzogMDtcbiAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4ubGV2ZWwwIHtcbiAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyBcbn1cbi5sZXZlbDEge1xuICAgbWFyZ2luLWxlZnQ6IDE1cHg7IFxufVxuIiwib2wgbGk6Om1hcmtlciB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5yb21hbiB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5pbWctY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiA2NTBweDtcbn1cblxuLmltZyB7XG4gIGZsZXgtYmFzaXM6IDQwJTtcbn1cblxuLmltZy10ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB0O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGh5cGhlbnM6IGF1dG87XG4gIC1tb3otaHlwaGVuczogYXV0bztcbiAgbGFuZzogZGU7XG59XG5cbi50ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB0O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG50ZC50ZXh0IHtcbiAgd2lkdGg6IDMyMHB4O1xufVxuXG5kaXYudGV4dCB7XG4gIHdpZHRoOiA2NTBweDtcbn1cblxubGkge1xuICB3aWR0aDogNjUwcHg7XG59XG5cbiNuYXZpIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4ubGV2ZWwwIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5sZXZlbDEge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/support/support.component.ts":
/*!**********************************************!*\
  !*** ./src/app/support/support.component.ts ***!
  \**********************************************/
/*! exports provided: SupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportComponent", function() { return SupportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./src/app/constants.ts");




let SupportComponent = class SupportComponent {
    constructor(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.titles = [];
        this.contentViewLink = ['/' + _constants__WEBPACK_IMPORTED_MODULE_3__["CONTENT_VIEW_ROUTE"]];
        this.impressumLink = [_constants__WEBPACK_IMPORTED_MODULE_3__["IMPRESSUM_ROUTE"]];
        this.homeLink = [_constants__WEBPACK_IMPORTED_MODULE_3__["HOME_ROUTE"]];
        this.supportLink = [_constants__WEBPACK_IMPORTED_MODULE_3__["HELP_ROUTE"]];
        this.projectLink = [_constants__WEBPACK_IMPORTED_MODULE_3__["PROJECT_ROUTE"]];
        this.dataLink = [_constants__WEBPACK_IMPORTED_MODULE_3__["DATA_ROUTE"]];
        this.conceptionLink = [_constants__WEBPACK_IMPORTED_MODULE_3__["CONCEPTION_ROUTE"]];
        this.index = 0;
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe((queryParams) => {
            this.queryParams = queryParams;
        });
    }
    getContentClass(level) {
        return 'level' + level;
    }
    getNextChildFragment(index, titles) {
        if (titles == undefined || titles == null || titles.length <= index)
            return '';
        return titles[index].link;
    }
    moveToMenuItem(hash) {
        console.log(hash);
        this.router.navigate([], { queryParams: this.queryParams, fragment: hash });
        setTimeout(() => {
            window.location = window.location;
        }, 200);
    }
};
SupportComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SupportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'support',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./support.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/support/support.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./support.component.scss */ "./src/app/support/support.component.scss")).default]
    })
], SupportComponent);



/***/ }),

/***/ "./src/app/tln-edition/common/cache.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/tln-edition/common/cache.service.ts ***!
  \*****************************************************/
/*! exports provided: CacheService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheService", function() { return CacheService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CacheService = class CacheService {
    constructor() {
        this.cache = {};
    }
    getItem(key) {
        try {
            return JSON.parse(localStorage.getItem(key));
        }
        catch (e) {
            try {
                return this.cache[key];
            }
            catch (e) {
                return null;
            }
        }
    }
    removeItem(key) {
        try {
            delete this.cache[key];
        }
        catch (e) { }
        try {
            localStorage.removeItem(key);
        }
        catch (e) { }
    }
    setItem(key, data) {
        this.cache[key] = data;
        try {
            localStorage.setItem(key, JSON.stringify(data));
        }
        catch (e) {
            localStorage.clear();
        }
    }
};
CacheService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CacheService);



/***/ }),

/***/ "./src/app/tln-edition/common/page-result-filter.pipe.ts":
/*!***************************************************************!*\
  !*** ./src/app/tln-edition/common/page-result-filter.pipe.ts ***!
  \***************************************************************/
/*! exports provided: PageResultFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageResultFilterPipe", function() { return PageResultFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageResultFilterPipe = class PageResultFilterPipe {
    transform(results, range) {
        if (results.length <= range.start) {
            return results;
        }
        return results.slice(range.start, range.end);
    }
};
PageResultFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'pageResultFilter'
    })
], PageResultFilterPipe);



/***/ }),

/***/ "./src/app/tln-edition/common/paginator-result-status.ts":
/*!***************************************************************!*\
  !*** ./src/app/tln-edition/common/paginator-result-status.ts ***!
  \***************************************************************/
/*! exports provided: PaginatorResultStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorResultStatus", function() { return PaginatorResultStatus; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class PaginatorResultStatus {
    constructor(resultLength, pageIndexUpdater) {
        this.resultIndex = 0;
        this.pageSizeOptions = [5, 10, 25, 100];
        this.resultLength = resultLength;
        this.resultRange = { start: 0, end: this.resultLength - 1 };
        this.pageIndexUpdater = pageIndexUpdater;
    }
    updateResultRange(index) {
        this.resultRange = null;
        this.resultIndex = index;
        let newStart = index * this.resultLength;
        let newEnd = newStart + this.resultLength;
        this.resultRange = { start: newStart, end: newEnd };
        //console.log(this.resultRange);
    }
    showResults(event) {
        this.resultLength = event.pageSize;
        this.updateResultRange(event.pageIndex);
        if (this.pageIndexUpdater != null) {
            this.pageIndexUpdater.change.emit(event.pageIndex);
        }
    }
}


/***/ }),

/***/ "./src/app/tln-edition/common/select-array.ts":
/*!****************************************************!*\
  !*** ./src/app/tln-edition/common/select-array.ts ***!
  \****************************************************/
/*! exports provided: SelectFromArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectFromArray", function() { return SelectFromArray; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class SelectFromArray {
    constructor(onInit, compareMapping) {
        this.onInit = onInit;
        this.compareMapping = compareMapping;
    }
    getItem(item, path) {
        if (path.length == 1) {
            return item[path[0]];
        }
        else {
            return this.getItem(item[path[0]], path.slice(1));
        }
    }
    processData() {
        const target = this.getItem(this.onInit, this.compareMapping.targetArrayKey.slice());
        const compareValue = this.onInit[this.compareMapping.compareValueKey];
        this.onInit[this.compareMapping.sourceArrayKey].forEach(item => {
            if (item[this.compareMapping.commonPropertyKey] === compareValue && target.indexOf(item) == -1) {
                target.push(item);
            }
        });
        this.onInit[this.compareMapping.arrayUpdated]();
    }
}


/***/ }),

/***/ "./src/app/tln-edition/constants.ts":
/*!******************************************!*\
  !*** ./src/app/tln-edition/constants.ts ***!
  \******************************************/
/*! exports provided: HIGHTLIGHT_CASES, DATA_PROCESSING_STATUS, VIEW_OPTIONS, DEFAULT_VIEW_OPTION, BASE_URL, ONTOLOTY_PREFIX, DATA_PREFIX, TLN_CROSSREF_ROUTE, TLN_CROSSREF_EDITOR_ROUTE, TLN_SEARCH_ROUTE, TLN_MANUSCRIPT_ROUTE, TLN_QUANT_ROUTE, TLN_VIEWER_ROUTE, TLN_CONTEXT_VIEW_PARAM, TLN_FULLSCREEN_PARAM, TLN_FIND_PARAM, TLN_MANUSCRIPT_PARAM, TLN_NAV_BAR_OPEN_STATE_PARAM, TLN_PAGE_PARAM, TLN_QUERY_PARAM, TLN_QUANT_QUERY_PARAM, TLN_QUANT_RESULT_INDEX_PARAM, TLN_RESULT_INDEX_PARAM, TLN_ROTATION_PARAM, TLN_SEARCH_QUERY_PARAM, TLN_SELECTED_LINES_PARAM, TLN_SELECTED_WORDS_PARAM, TLN_TEXT_GENETIC_ORDER_PARAM, TLN_VIEW_OPTION_PARAM, TLN_MULTI_INSTANCE_ZOOM_PARAM, TLN_ZOOM_PARAM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA_PROCESSING_STATUS", function() { return DATA_PROCESSING_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEW_OPTIONS", function() { return VIEW_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_VIEW_OPTION", function() { return DEFAULT_VIEW_OPTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_URL", function() { return BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ONTOLOTY_PREFIX", function() { return ONTOLOTY_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA_PREFIX", function() { return DATA_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TLN_CROSSREF_ROUTE", function() { return TLN_CROSSREF_ROUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TLN_CROSSREF_EDITOR_ROUTE", function() { return TLN_CROSSREF_EDITOR_ROUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TLN_SEARCH_ROUTE", function() { return TLN_SEARCH_ROUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TLN_MANUSCRIPT_ROUTE", function() { return TLN_MANUSCRIPT_ROUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TLN_QUANT_ROUTE", function() { return TLN_QUANT_ROUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TLN_VIEWER_ROUTE", function() { return TLN_VIEWER_ROUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TLN_CONTEXT_VIEW_PARAM", function() { return TLN_CONTEXT_VIEW_PARAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TLN_FULLSCREEN_PARAM", function() { return TLN_FULLSCREEN_PARAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TLN_FIND_PARAM", function() { return TLN_FIND_PARAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TLN_MANUSCRIPT_PARAM", function() { return TLN_MANUSCRIPT_PARAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TLN_NAV_BAR_OPEN_STATE_PARAM", function() { return TLN_NAV_BAR_OPEN_STATE_PARAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TLN_PAGE_PARAM", function() { return TLN_PAGE_PARAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TLN_QUERY_PARAM", function() { return TLN_QUERY_PARAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TLN_QUANT_QUERY_PARAM", function() { return TLN_QUANT_QUERY_PARAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TLN_QUANT_RESULT_INDEX_PARAM", function() { return TLN_QUANT_RESULT_INDEX_PARAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TLN_RESULT_INDEX_PARAM", function() { return TLN_RESULT_INDEX_PARAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TLN_ROTATION_PARAM", function() { return TLN_ROTATION_PARAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TLN_SEARCH_QUERY_PARAM", function() { return TLN_SEARCH_QUERY_PARAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TLN_SELECTED_LINES_PARAM", function() { return TLN_SELECTED_LINES_PARAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TLN_SELECTED_WORDS_PARAM", function() { return TLN_SELECTED_WORDS_PARAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TLN_TEXT_GENETIC_ORDER_PARAM", function() { return TLN_TEXT_GENETIC_ORDER_PARAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TLN_VIEW_OPTION_PARAM", function() { return TLN_VIEW_OPTION_PARAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TLN_MULTI_INSTANCE_ZOOM_PARAM", function() { return TLN_MULTI_INSTANCE_ZOOM_PARAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TLN_ZOOM_PARAM", function() { return TLN_ZOOM_PARAM; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _page_view_highlight_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../page-view/highlight_status */ "./src/app/page-view/highlight_status.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HIGHTLIGHT_CASES", function() { return _page_view_highlight_status__WEBPACK_IMPORTED_MODULE_1__["HIGHTLIGHT_CASES"]; });



var DATA_PROCESSING_STATUS;
(function (DATA_PROCESSING_STATUS) {
    DATA_PROCESSING_STATUS["COMPLETE"] = "complete";
    DATA_PROCESSING_STATUS["MIXED"] = "mixed";
    DATA_PROCESSING_STATUS["BLANK"] = "blank";
})(DATA_PROCESSING_STATUS || (DATA_PROCESSING_STATUS = {}));
var VIEW_OPTIONS;
(function (VIEW_OPTIONS) {
    VIEW_OPTIONS["TRANSKRIPTION"] = "Transkription";
    VIEW_OPTIONS["FAKSIMILE"] = "Faksimile";
    VIEW_OPTIONS["SYNOPSIS"] = "Transkription/Faksimile";
    VIEW_OPTIONS["SYNOPSIS_B"] = "Faksimile/Transkription";
})(VIEW_OPTIONS || (VIEW_OPTIONS = {}));
const DEFAULT_VIEW_OPTION = VIEW_OPTIONS.SYNOPSIS_B;
const BASE_URL = 'https://nietzsche.fuseki.services.dasch.swiss/nietzsche';
const ONTOLOTY_PREFIX = 'http://www.nie.org/ontology/nietzsche#';
const DATA_PREFIX = 'http://rdfh.ch/projects/0068#';
/**
 * Route for TlnCrossrefComponent
 **/
const TLN_CROSSREF_ROUTE = 'tln-crossref';
/**
 * Route for TlnCrossrefComponent
 **/
const TLN_CROSSREF_EDITOR_ROUTE = 'tln-crossref-editor';
/**
 * Route for TlnFulltextComponent
 **/
const TLN_SEARCH_ROUTE = 'tln-search';
/**
 * Route for TlnManuscriptViewComponent
 **/
const TLN_MANUSCRIPT_ROUTE = 'tln-manuscript';
/**
 * Route for TlnQuantComponent
 **/
const TLN_QUANT_ROUTE = 'tln-quant';
/**
 * Route for TlnViewerComponent
 **/
const TLN_VIEWER_ROUTE = 'tln-viewer';
/**
 * Param that refers to the context that should be shown, i.e. 'page' or 'manuscript'.
 **/
const TLN_CONTEXT_VIEW_PARAM = 'contextView';
/**
 * Param that toggles fullscreen, value type: boolean.
 **/
const TLN_FULLSCREEN_PARAM = 'fullscreen';
/**
 * Param for find text in page.
 **/
const TLN_FIND_PARAM = 'find';
/**
 * Param for manuscript iri.
 **/
const TLN_MANUSCRIPT_PARAM = 'manuscript';
/**
 * Param for navigation bar open state.
 **/
const TLN_NAV_BAR_OPEN_STATE_PARAM = 'navBarOpenState';
/**
 * Param for page iri.
 **/
const TLN_PAGE_PARAM = 'page';
/**
 * Param for query params, type: string.
 **/
const TLN_QUERY_PARAM = 'query';
/**
 * Param for quant query params, type: complex.
 **/
const TLN_QUANT_QUERY_PARAM = 'quantQuery';
/**
 * Param for result index, type: number.
 **/
const TLN_QUANT_RESULT_INDEX_PARAM = 'quantResultIndex';
/**
 * Param for result index, type: number.
 **/
const TLN_RESULT_INDEX_PARAM = 'resultIndex';
/**
 * Param for rotation value, type: number.
 **/
const TLN_ROTATION_PARAM = 'rotation';
/**
 * Param for search query params, type: complex.
 **/
const TLN_SEARCH_QUERY_PARAM = 'searchQuery';
/**
 * Param for selected lines.
 **/
const TLN_SELECTED_LINES_PARAM = 'selectedLines';
/**
 * Param for selected lines.
 **/
const TLN_SELECTED_WORDS_PARAM = 'selectedWords';
/**
 * Param for iri of a genetic order of text versions.
 **/
const TLN_TEXT_GENETIC_ORDER_PARAM = 'geneticOrder';
/**
 * Param for selected view option, e.g. 'Transkription', 'Faksimile', etc.
 **/
const TLN_VIEW_OPTION_PARAM = 'viewMode';
/**
 * Param for multi instance zoom (i.e. tln-crossref and tln-fulltext).
 **/
const TLN_MULTI_INSTANCE_ZOOM_PARAM = 'multiInstanceZoom';
/**
 * Param for zoom in tln-viewer.
 **/
const TLN_ZOOM_PARAM = 'zoom';


/***/ }),

/***/ "./src/app/tln-edition/data_handler.ts":
/*!*********************************************!*\
  !*** ./src/app/tln-edition/data_handler.ts ***!
  \*********************************************/
/*! exports provided: DataHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataHandler", function() { return DataHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _datatypes_basic_datatype__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datatypes/basic_datatype */ "./src/app/tln-edition/datatypes/basic_datatype.ts");




/**
 * This class retrieves data from  a query service and instantiates it using
 * corresponding handlers.
 **/
class DataHandler {
    /**
     * @param component the component that uses this data handler
     **/
    constructor(component) {
        this.component = component;
        this.dataTimestamp = 0;
        this.debug = false;
        /**
         * whether or not DataHandler is ready to retrieve data
         **/
        this.ready = false;
        this.stop_processing = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.start_processing = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.processing_finished = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    /**
     * add a {@link /interfaces/Handler.html|Handler}
     * or an Array of handler keys to DataHandler.
     **/
    addHandler(key, handler) {
        this[key] = handler;
    }
    processData(results, handler, key, is_target_array, iri, next_iri) {
        if (is_target_array) {
            this.processArrayData(results, handler, key, iri, next_iri);
        }
        else {
            this.processObjectData(results, handler, key, iri, next_iri);
        }
    }
    processArrayData(results, handler, key, iri, next_iri) {
        this.component[key] = (handler.use_id) ? handler.convertData(results, iri, this[key]['service']) : handler.convertData(results, null, this[key]['service']);
        this.processing_finished.emit(true);
        if (this.component[key].length > 0 && this[key]['next_key'] != null) {
            let use_next_iri = (next_iri != null) ? next_iri : this.component[key][0].id;
            this.getData(this[key]['next_key'], use_next_iri);
        }
        else if (this[key]['process_data'] != undefined && this[key]['process_data'] != null) {
            this[key]['process_data'].processData();
        }
    }
    processObjectData(results, handler, key, iri, next_iri) {
        this.component[key] = handler.convertData(results, iri, this[key]['service'])[0];
        this.processing_finished.emit(true);
        if (next_iri != null && this[key]['next_key'] != null) {
            this.getData(this[key]['next_key'], next_iri);
        }
        else if (this[key]['process_data'] != undefined && this[key]['process_data'] != null) {
            this[key]['process_data'].processData();
        }
    }
    /**
     * Retrieve and instantiate data
     * @param key data handler key
     * @param iri iri that should be passed to query
     * @param next_iri use next_iri instead of the iri of the first item in the current data array.
     **/
    getData(key, iri, next_iri) {
        if (Array.isArray(this[key])) {
            this[key].forEach(value => this.getData(value, iri));
            if (next_iri != null && this[key]['next_key'] != null) {
                this.getData(this[key]['next_key'], next_iri);
            }
        }
        else {
            this.start_processing.emit(true);
            const handler = this[key]['handler'];
            if (this.debug && key == 'status') {
                console.log(handler.getQuery(iri, handler.query_key));
            }
            const is_target_array = Array.isArray(this.component[key]);
            const query = handler.getQuery(iri, handler.query_key);
            const queryKey = encodeURI(query).replace('+', '');
            this.queryService.getData(handler.getQuery(iri, handler.query_key)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.stop_processing)).subscribe(results => {
                this.processData(results, handler, key, is_target_array, iri, next_iri);
            });
        }
    }
    getData4Keys(key, datatypeKeyIriMapping) {
        if (Array.isArray(this[key])) {
            this[key].forEach(value => this.getData4Keys(value, datatypeKeyIriMapping));
        }
        else {
            let handler = this[key]['handler'];
            if (this.debug) {
                console.log(this[key]['handler'], datatypeKeyIriMapping);
            }
            let is_target_array = Array.isArray(this.component[key]);
            let iri = datatypeKeyIriMapping.mapping[datatypeKeyIriMapping.idIndex];
            if (!is_target_array) {
                this.queryService.getData(handler.getComplexQuery(datatypeKeyIriMapping.mapping)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.stop_processing) || Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(results => {
                    this.component[key] = handler.convertData(results, iri, this[key]['service'])[0];
                });
            }
            else {
                this.queryService.getData(handler.getQuery(datatypeKeyIriMapping.mapping)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.stop_processing)).subscribe(results => {
                    this.component[key] = (handler.use_id) ? handler.convertData(results, iri) : handler.convertData(results);
                    if (this.component[key].length > 0 && this[key]['next_key'] != null) {
                        datatypeKeyIriMapping.mapping[datatypeKeyIriMapping.idIndex] = this.component[key][0].id;
                        this.getData4Keys(this[key]['next_key'], datatypeKeyIriMapping);
                    }
                });
            }
        }
    }
    getDataWithNewHandlerIf(key, subjectIri, typeIri, handlerTrue, handlerFalse, iri, next_iri) {
        let complexMapping = [{ key: 'id', iri: subjectIri }, { key: 'type', iri: typeIri }];
        this.queryService.getData(_datatypes_basic_datatype__WEBPACK_IMPORTED_MODULE_3__["AskResult"].getComplexQuery(complexMapping)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(result => {
            this[key] = (_datatypes_basic_datatype__WEBPACK_IMPORTED_MODULE_3__["AskResult"].getAnswer(result)) ? handlerTrue : handlerFalse;
            console.log(key, subjectIri, typeIri, result, this[key]);
            this.getData(key, iri, next_iri);
        });
    }
    conditionalAddHandler(askQuery, key, handlerTrue, handlerFalse) {
        this.queryService.getData(askQuery).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(result => {
            this[key] = (_datatypes_basic_datatype__WEBPACK_IMPORTED_MODULE_3__["AskResult"].getAnswer(result)) ? handlerTrue : handlerFalse;
        });
    }
    pageExists(pageIri, componentKey) {
        this.queryService.getData(_datatypes_basic_datatype__WEBPACK_IMPORTED_MODULE_3__["PageExists"].getQuery(pageIri)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(result => {
            this.component[componentKey] = _datatypes_basic_datatype__WEBPACK_IMPORTED_MODULE_3__["PageExists"].getAnswer(result);
            if (!this.component[componentKey]) {
                alert('In dieser Version ist folgende Seite nicht vorhanden: ' + pageIri);
            }
        });
    }
    retrieveLocalData(queryKey) {
        const rawData = sessionStorage.getItem(queryKey);
        if (rawData != null) {
            const data = JSON.parse(rawData);
            if (data.timestamp > this.dataTimestamp) {
                return data.results;
            }
        }
        return null;
    }
    storeDataLocally(results, queryKey) {
        const data = { timestamp: Date.now(), results: results };
        try {
            sessionStorage.setItem(queryKey, JSON.stringify(data));
            console.log(sessionStorage.length);
        }
        catch (e) {
            console.log(e);
            sessionStorage.clear();
        }
    }
    /**
     * reset all data belonging to key
     **/
    resetData(key) {
        this.queryService.resetData(key);
        if (Array.isArray(this[key])) {
            this[key].forEach(value => this.resetData(value));
        }
        else {
            this.component[key] = (Array.isArray(this.component[key])) ? [] : null;
        }
    }
    /**
     * set a query service to DataHandler and switch status ready to true.
     **/
    setQueryService(queryService) {
        this.queryService = queryService;
        this.ready = true;
        this.queryService.error_emitter.subscribe(error => {
            this.processing_finished.emit(true);
        });
    }
}


/***/ }),

/***/ "./src/app/tln-edition/datatypes/basic_datatype.ts":
/*!*********************************************************!*\
  !*** ./src/app/tln-edition/datatypes/basic_datatype.ts ***!
  \*********************************************************/
/*! exports provided: FusekiResultsInstance, BasicResultBindingElement, AskResult, PageExists, IsReconstructedKonvolut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FusekiResultsInstance", function() { return FusekiResultsInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicResultBindingElement", function() { return BasicResultBindingElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AskResult", function() { return AskResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageExists", function() { return PageExists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsReconstructedKonvolut", function() { return IsReconstructedKonvolut; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var sparqljs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sparqljs */ "./node_modules/sparqljs/sparql.js");
/* harmony import */ var sparqljs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sparqljs__WEBPACK_IMPORTED_MODULE_1__);


class FusekiResultsInstance {
    static fixFusekiResults(fusekiResults) {
        if (fusekiResults.results.bindings.length > 0
            && Object.keys(Array.of(...fusekiResults.results.bindings)[0]).length < fusekiResults.head.vars.length) {
            fusekiResults.head.vars = fusekiResults.head.vars.filter(key => Object.keys(Array.of(...fusekiResults.results.bindings)[0]).includes(key));
        }
    }
}
/**
 * This is the basic datatype that instantiates an element of {@link /interfaces/FusekiResults.html|FusekiResults}.
 *
 * All datatypes can be subclassed from this type in order to create SPARQL-queries, retrieve data and convert it
 * to the corresponding datatypes.
 **/
class BasicResultBindingElement {
    /**
     * The constructor creates a datatype from the data.
     *
     * @param id if omitted the id will be retrieved from data
     **/
    constructor(data, id, service) {
        this.data = data;
        this.service = service;
        if (id != undefined && id != null && id != '') {
            let key = (Object.getPrototypeOf(this).constructor.use_id
                && Object.getPrototypeOf(this).constructor.query_key != null)
                ? Object.getPrototypeOf(this).constructor.query_key : 'id';
            this[key] = id;
        }
        if (this.id == null) {
            this.id = this.getData4Key('id');
        }
    }
    /**
     * This function returns the value of the content specified by "key" from  {@link /classes/BasicResultBindingElement.html#data|data}.
     *
     * @param key the key that specifies the content
     *
     * @returns {any} the value of the content if key exists else null
     **/
    getData4Key(key) {
        if (!this.data.hasOwnProperty(key)) {
            return null;
        }
        if (this.data[key].datatype == 'http://www.w3.org/2001/XMLSchema#boolean') {
            return JSON.parse(this.data[key].value);
        }
        else if (this.data[key].datatype == 'http://www.w3.org/2001/XMLSchema#integer') {
            return Number(this.data[key].value);
        }
        return this.data[key].value;
    }
    removeService() {
        this.service = null;
    }
    /**
     * This method returns the SPARQL query of this BasicResultBindingElement.
     * The query can be modified by providing an "id" and "key" such that every "key" in
     * the query will be replaced by "id".
     *
     * If "key" is omitted {@link /classes/BasicResultBindingElement.html#default_key|default_key} will be used.
     *
     * @param id will replace key in query
     * @param key will be replaced by id.
     **/
    static getQuery(id, key) {
        if (typeof (id) === 'undefined' || id === null || id == '') {
            return this.query;
        }
        else {
            if (key == null || key == '') {
                key = this.default_key;
            }
            let parser = new sparqljs__WEBPACK_IMPORTED_MODULE_1__["Parser"]();
            let sparqlGenerator = new sparqljs__WEBPACK_IMPORTED_MODULE_1__["Generator"]({});
            let parsedQuery = parser.parse(this.query);
            for (var k = 0; k < parsedQuery.where.length; k++) {
                if (parsedQuery.where[k].patterns != undefined) {
                    for (var j = 0; j < parsedQuery.where[k].patterns.length; j++) {
                        if (parsedQuery.where[k].patterns[j].triples != undefined) {
                            for (var i = 0; i < parsedQuery.where[k].patterns[j].triples.length; i++) {
                                if (parsedQuery.where[k].patterns[j].triples[i]['subject']['value'] == key) {
                                    parsedQuery.where[k].patterns[j].triples[i]['subject'] = { termType: "NamedNode", value: id };
                                }
                                else if (parsedQuery.where[k].patterns[j].triples[i]['object']['value'] == key) {
                                    parsedQuery.where[k].patterns[j].triples[i]['object'] = { termType: "NamedNode", value: id };
                                }
                                else if (parsedQuery.where[k].patterns[j].triples[i]['predicate']['value'] == key) {
                                    parsedQuery.where[k].patterns[j].triples[i]['predicate'] = { termType: "NamedNode", value: id };
                                }
                            }
                        }
                    }
                }
                else if (parsedQuery.where[k].triples != undefined) {
                    for (var i = 0; i < parsedQuery.where[k].triples.length; i++) {
                        if (parsedQuery.where[k].triples[i]['subject']['value'] == key) {
                            parsedQuery.where[k].triples[i]['subject'] = { termType: "NamedNode", value: id };
                        }
                        else if (parsedQuery.where[k].triples[i]['object']['value'] == key) {
                            parsedQuery.where[k].triples[i]['object'] = { termType: "NamedNode", value: id };
                        }
                        else if (parsedQuery.where[k].triples[i]['predicate']['value'] == key) {
                            parsedQuery.where[k].triples[i]['predicate'] = { termType: "NamedNode", value: id };
                        }
                    }
                }
            }
            return sparqlGenerator.stringify(parsedQuery);
        }
    }
    static contentConforms2Type(data) {
        let parser = new sparqljs__WEBPACK_IMPORTED_MODULE_1__["Parser"]();
        let parsedQuery = parser.parse(this.query);
        let variableCounter = parsedQuery['variables'].length;
        parsedQuery['variables'].forEach(item => {
            if (data.head.vars.includes(item.value)) {
                variableCounter--;
            }
        });
        return variableCounter == 0;
    }
    static getComplexQuery(keyIriMapping) {
        let parser = new sparqljs__WEBPACK_IMPORTED_MODULE_1__["Parser"]();
        let sparqlGenerator = new sparqljs__WEBPACK_IMPORTED_MODULE_1__["Generator"]({});
        let parsedQuery = parser.parse(this.query);
        for (let mapping of keyIriMapping) {
            let key = mapping.key;
            let id = mapping.iri;
            for (var i = 0; i < parsedQuery.where[0].triples.length; i++) {
                if (parsedQuery.where[0].triples[i]['subject']['value'] == key) {
                    parsedQuery.where[0].triples[i]['subject'] = { termType: "NamedNode", value: id };
                }
                else if (parsedQuery.where[0].triples[i]['object']['value'] == key) {
                    parsedQuery.where[0].triples[i]['object'] = { termType: "NamedNode", value: id };
                }
                else if (parsedQuery.where[0].triples[i]['predicate']['value'] == key) {
                    parsedQuery.where[0].triples[i]['predicate'] = { termType: "NamedNode", value: id };
                }
            }
        }
        return sparqlGenerator.stringify(parsedQuery);
    }
    /**
     * This function returns 'results.bindings' of {@link /interfaces/FusekiResults.html|FusekiResults}.
     **/
    static getContent(data) {
        return data['results']['bindings'];
    }
    /**
     * This static function instantiates the subclasses of {@link /classes/BasicResultBindingElement.html|BasicResultBindingElement} from
     * the data retrieved by executing the query that is provided by {@link /classes/BasicResultBindingElement.html#getQuery|getQuery}.
     *
     * @param this a subclass of BasicResultBindingElement
     * @param data the fuseki result json
     * @param id the id that has been used in order to retrieve the data and that will identify the instantiation of the subclass.
     * @param service a means to communicate with the data holder.
     *
     * @returns Array of subclass instantiations
     **/
    static convertData(data, id, service) {
        let elements = [];
        let content = this.getContent(data);
        for (var i = 0; i < content.length; i++) {
            let element = new this(content[i], id, service);
            elements.push(element);
        }
        return elements;
    }
}
/**
 * the internal default key for replacing {@link /classes/BasicResultBindingElement.html#query|query} by "id"
 * in {@link /classes/BasicResultBindingElement.html#getQuery|getQuery} if "key" is omitted.
 **/
BasicResultBindingElement.default_key = 'id';
/**
 * the SPARQL-query of this datatype.
 **/
BasicResultBindingElement.query = `SELECT ?id ?p ?o WHERE { ?id ?p ?o. }`;
/**
 * the public key for replacing {@link /classes/BasicResultBindingElement.html#query|query} by "id".
 **/
BasicResultBindingElement.query_key = null;
/**
 * whether or not to pass the id used for the query to the constructor and
 * use it as the value of the property specified by query_key.
 **/
BasicResultBindingElement.use_id = false;
class AskResult extends BasicResultBindingElement {
    static getAnswer(answer) {
        return answer.boolean;
    }
}
AskResult.query = `
   PREFIX tln: <http://www.nie.org/ontology/nietzsche#>
   ASK { 
      ?id a ?type.
   }`;
class PageExists extends AskResult {
}
PageExists.query = `
   PREFIX tln: <http://www.nie.org/ontology/nietzsche#>
   ASK { 
      ?id a tln:Page.
   }`;
PageExists.query_key = 'id';
class IsReconstructedKonvolut extends AskResult {
}
IsReconstructedKonvolut.query = `
   PREFIX tln: <http://www.nie.org/ontology/nietzsche#>
   ASK { 
      ?id a tln:ReconstructedKonvolut.
   }`;
IsReconstructedKonvolut.query_key = 'id';


/***/ }),

/***/ "./src/app/tln-edition/datatypes/deletion_path.ts":
/*!********************************************************!*\
  !*** ./src/app/tln-edition/datatypes/deletion_path.ts ***!
  \********************************************************/
/*! exports provided: DeletionPathRepresentation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletionPathRepresentation", function() { return DeletionPathRepresentation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _basic_datatype__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic_datatype */ "./src/app/tln-edition/datatypes/basic_datatype.ts");


/**
 * This is the deletion path instantiation of an element of {@link /interfaces/FusekiResults.html|FusekiResults}.
 * It extends {@link /classes/BasicResultBindingElement.html|BasicResultBindingElement}.
 **/
class DeletionPathRepresentation extends _basic_datatype__WEBPACK_IMPORTED_MODULE_1__["BasicResultBindingElement"] {
    /**
     * The constructor creates a datatype from the data.
     *
     * @param id if omitted the id will be retrieved from data
     **/
    constructor(data, id, service) {
        super(data, id, service);
        /**
         * the internal default key for replacing {@link /classes/TlnLine.html#query|query} by "id"
         * in {@link /classes/TlnLine.html#getQuery|getQuery} if "key" is omitted.
         **/
        this.openInTarget = 'viewer';
        this.selectedWords = [];
        this.lineNumber = this.getData4Key('lineNumber');
        this.pageNumber = this.getData4Key('pageNumber');
        this.page = this.getData4Key('page');
        this.title = this.getData4Key('title');
        this.manuscript = this.getData4Key('manuscript');
        this.word = this.getData4Key('word');
        this.representation = this.title + ' ' + this.pageNumber + ', ' + this.lineNumber + ' (' + this.id.substring(this.id.lastIndexOf('_') + 1) + ')';
    }
    static convertData(data, id, service) {
        let elements = [];
        let content = this.getContent(data);
        for (var i = 0; i < content.length; i++) {
            let element = new this(content[i], id, service);
            if (elements.length > 0) {
                elements[0]['selectedWords'].push(element['word']);
            }
            else {
                element['selectedWords'].push(element['word']);
                elements.push(element);
            }
        }
        return elements;
    }
    getRouterInformation(launchExternally) {
        return { title: this.title, number: this.pageNumber, page: this.page,
            manuscript: this.manuscript, selectedWords: this.selectedWords, launchExternally: launchExternally };
    }
}
DeletionPathRepresentation.default_key = 'id';
DeletionPathRepresentation.query_key = 'id';
/**
 * the SPARQL-query of this datatype.
 **/
DeletionPathRepresentation.query = `
   PREFIX tln: <http://www.nie.org/ontology/nietzsche#>
   PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

   SELECT distinct ?word ?lineNumber ?pageNumber ?title ?page ?manuscript WHERE {
      ?id ^tln:wordIsDeletedByPath ?word.
      ?word tln:wordBelongsToLine ?line.
      ?line tln:lineHasNumber ?lineNumber.
      OPTIONAL {
      ?page tln:hasWords/rdf:rest*/rdf:first ?word;
            tln:hasNumber ?pageNumber.}
      OPTIONAL {
            ?wholeWord tln:wordHasWordParts/rdf:rest*/rdf:first ?word.
            ?page tln:hasWords/rdf:rest*/rdf:first ?wholeWord;
            tln:hasNumber ?pageNumber.}
      ?manuscriptId tln:hasPages/rdf:rest*/rdf:first ?page;
            tln:hasTitle ?title.
   } `;


/***/ }),

/***/ "./src/app/tln-edition/datatypes/earlier_version.ts":
/*!**********************************************************!*\
  !*** ./src/app/tln-edition/datatypes/earlier_version.ts ***!
  \**********************************************************/
/*! exports provided: TlnEarlierVersionStub, TlnOverwrittenStub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TlnEarlierVersionStub", function() { return TlnEarlierVersionStub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TlnOverwrittenStub", function() { return TlnOverwrittenStub; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _word__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./word */ "./src/app/tln-edition/datatypes/word.ts");
/* harmony import */ var _positional_markup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./positional-markup */ "./src/app/tln-edition/datatypes/positional-markup.ts");



/**
 * This is the 'earlier version' stub instantiation of an element of {@link /interfaces/FusekiResults.html|FusekiResults}.
 **/
class TlnEarlierVersionStub extends _word__WEBPACK_IMPORTED_MODULE_1__["WordStub"] {
    /**
     * The constructor creates a datatype from the data.
     *
     * @param id the id will be retrieved from data anyway
     **/
    constructor(data, id, service) {
        super(data, id, service);
        this.markups = [];
        this.id = this.getData4Key('id');
    }
    static convertData(data, id, service) {
        let elements = [];
        let content = this.getContent(data);
        for (var i = 0; i < content.length; i++) {
            let element = new this(content[i], id, service);
            element['markups'] = (content[i]['markup'] != undefined) ?
                _positional_markup__WEBPACK_IMPORTED_MODULE_2__["TlnFilteredPositionalStyleMarkup"].convertData({ head: { vars: [] }, results: { bindings: [content[i]] } }) : [];
            if (elements.length > 0 && elements[elements.length - 1].id == element.id && element['markups'] != undefined && element['markups'] != null && element['markups'].length > 0) {
                elements[elements.length - 1]['markups'].push(element['markups'][0]);
            }
            else {
                elements.push(element);
            }
        }
        return elements;
    }
}
/**
 * the SPARQL-query of this datatype.
 **/
TlnEarlierVersionStub.query = `
   PREFIX tln: <http://www.nie.org/ontology/nietzsche#>
   PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
   PREFIX homotypic: <http://www.nie.org/ontology/homotypic#>
   PREFIX stoff: <http://www.nie.org/ontology/standoff#>

   SELECT ?id ?text ?markup ?sStyle ?start ?end WHERE {
      ?word tln:wordHasEarlierVersion ?id.
      ?id tln:hasText ?text.
      OPTIONAL {
         ?id homotypic:hasMarkup ?markup.
         ?markup stoff:hasCSS ?sStyle;
          stoff:standoffMarkupHasStartIndex ?start;
          stoff:standoffMarkupHasEndIndex ?end.
      }
   }`;
class TlnOverwrittenStub extends TlnEarlierVersionStub {
    /**
    * The constructor creates a datatype from the data.
    *
    * @param id if omitted the id will be retrieved from data
    **/
    constructor(data, id, service) {
        super(data, id, service);
        this.deleted = this.getData4Key('deleted');
        this.uncertain_decipherment = this.getData4Key('uncertain_decipherment');
    }
}
/**
 * the SPARQL-query of this datatype.
 **/
TlnOverwrittenStub.query = `
   PREFIX tln: <http://www.nie.org/ontology/nietzsche#>
   PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

   SELECT ?id ?text ?uncertain_decipherment ?deleted WHERE {
      ?word (tln:wordHasWordParts/rdf:rest*/rdf:first/tln:overwritesWord|tln:overwritesWord) ?id. 
      ?id tln:hasText ?text.
      OPTIONAL {
         ?id tln:wordHasEditorComment ?comment.
         ?comment a tln:UncertainDecipherment.
    		BIND(true as ?isUncertainDecipherment)
      }
      BIND(IF(bound(?isUncertainDecipherment), true, false) as ?uncertain_decipherment)
      BIND(exists{ ?id tln:wordIsDeletedByPath ?path } as ?deleted) 
   }`;


/***/ }),

/***/ "./src/app/tln-edition/datatypes/editor_comment.ts":
/*!*********************************************************!*\
  !*** ./src/app/tln-edition/datatypes/editor_comment.ts ***!
  \*********************************************************/
/*! exports provided: TlnPageEditorCommentStub, TlnEditorCommentStub, TlnLineEditorComment, TlnEditorComment, TlnOverwrittenWordEditorComment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TlnPageEditorCommentStub", function() { return TlnPageEditorCommentStub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TlnEditorCommentStub", function() { return TlnEditorCommentStub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TlnLineEditorComment", function() { return TlnLineEditorComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TlnEditorComment", function() { return TlnEditorComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TlnOverwrittenWordEditorComment", function() { return TlnOverwrittenWordEditorComment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _basic_datatype__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic_datatype */ "./src/app/tln-edition/datatypes/basic_datatype.ts");
/* harmony import */ var _positional_markup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./positional-markup */ "./src/app/tln-edition/datatypes/positional-markup.ts");



/**
 * This is the 'editor comment' of page instantiation of an element of {@link /interfaces/FusekiResults.html|FusekiResults}.
 **/
class TlnPageEditorCommentStub extends _basic_datatype__WEBPACK_IMPORTED_MODULE_1__["BasicResultBindingElement"] {
    /**
    * The constructor creates a datatype from the data.
    *
    * @param id if omitted the id will be retrieved from data
    **/
    constructor(data, id, service) {
        super(data, id, service);
        this.editorClass = this.getData4Key('editorClass');
        this.isUncertain = this.getData4Key('isUncertain');
        this.comment = this.getData4Key('comment');
    }
}
TlnPageEditorCommentStub.default_key = 'page';
TlnPageEditorCommentStub.query_key = 'page';
/**
 * the SPARQL-query of this datatype.
 **/
TlnPageEditorCommentStub.query = `
   PREFIX tln: <http://www.nie.org/ontology/nietzsche#>
   PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
   PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

   SELECT ?id ?editorClass ?comment ?isUncertain WHERE {
      ?page a tln:Page; tln:hasEditorComments/rdf:rest*/rdf:first ?id.
      ?id a ?editorClass;
          tln:hasComment ?comment;
          tln:isUncertain ?isUncertain.
      FILTER (?editorClass != rdfs:Resource)
   }`;
/**
 * This is the 'editor comment' stub instantiation of an element of {@link /interfaces/FusekiResults.html|FusekiResults}.
 **/
class TlnEditorCommentStub extends TlnPageEditorCommentStub {
    /**
    * The constructor creates a datatype from the data.
    *
    * @param id if omitted the id will be retrieved from data
    **/
    constructor(data, id, service) {
        super(data, id, service);
        this.editorClass = this.getData4Key('editorClass');
        this.isUncertain = this.getData4Key('isUncertain');
        this.comment = this.getData4Key('comment');
        this.correction = this.getData4Key('correction');
        this.text = this.getData4Key('text');
        this.textWithMarkup = this.getData4Key('textWithMarkup');
    }
}
TlnEditorCommentStub.default_key = 'word';
TlnEditorCommentStub.query_key = 'word';
/**
 * the SPARQL-query of this datatype.
 **/
TlnEditorCommentStub.query = `
   PREFIX tln: <http://www.nie.org/ontology/nietzsche#>
   PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
   PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

   SELECT ?id ?editorClass ?comment ?correction ?text ?textWithMarkup ?isUncertain WHERE {
     { ?word tln:wordHasEditorComment ?id. } UNION {
       ?word tln:wordHasWordParts/rdf:rest*/rdf:first/tln:wordHasEditorComment ?id.
     }
     ?id a ?editorClass;
      tln:isUncertain ?isUncertain.
     FILTER (?editorClass != rdfs:Resource)
     OPTIONAL { ?id tln:hasComment ?comment.}
     OPTIONAL { ?id tln:hasCorrectionText ?correction;
                  tln:isUncertain true.}
     OPTIONAL { ?id tln:commentHasText ?textWithMarkup.
                ?textWithMarkup tln:textHasContent ?text.
     }
   }`;
class TlnLineEditorComment extends TlnEditorCommentStub {
    /**
    * The constructor creates a datatype from the data.
    *
    * @param id if omitted the id will be retrieved from data
    **/
    constructor(data, id, service) {
        super(data, id, service);
        this.tLine = {
            id: this.getData4Key('line'),
            number: this.getData4Key('number'),
            bottom: this.getData4Key('bottom'),
            top: this.getData4Key('top')
        };
        const reference = this.getData4Key('reference');
        if (reference != undefined && reference != null) {
            this.lineContinuationReference = {
                isToRef: this.getData4Key('isToRef'),
                refTitle: this.getData4Key('refTitle'),
                refPageNumber: this.getData4Key('refPageNumber'),
                refLine: this.getData4Key('refLine')
            };
        }
    }
    static convertData(data, id, service) {
        let elements = [];
        let content = this.getContent(data);
        for (var i = 0; i < content.length; i++) {
            let element = new TlnLineEditorComment(content[i], id, service);
            if (elements.length > 0 && elements[elements.length - 1].id == element.id) {
                if (elements[elements.length - 1].editorClass.endsWith('EditorComment')) {
                    elements[elements.length - 1].editorClass = element.editorClass;
                }
            }
            else {
                elements.push(element);
            }
        }
        return elements;
    }
}
TlnLineEditorComment.default_key = 'page';
TlnLineEditorComment.query_key = 'page';
/**
 * the SPARQL-query of this datatype.
 **/
TlnLineEditorComment.query = `
   PREFIX tln: <http://www.nie.org/ontology/nietzsche#>
   PREFIX stoff: <http://www.nie.org/ontology/standoff#>
   PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
   PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

   SELECT DISTINCT ?id ?line ?number ?top ?bottom ?editorClass ?comment ?reference ?isToRef ?refTitle ?refPageNumber ?refLine ?isUncertain WHERE {
     ?page tln:hasLines/rdf:rest*/rdf:first ?line.
     ?line tln:lineHasEditorComment ?id;
           tln:lineHasNumber ?number;
           tln:lineHasTopValueOnTranskription ?top;
           tln:lineHasBottomValueOnTranskription ?bottom.
     ?id a ?editorClass;
      tln:isUncertain ?isUncertain.
     FILTER (!isBlank(?editorClass) && ?editorClass != rdfs:Resource)
     OPTIONAL { ?id tln:hasComment ?comment.}
     OPTIONAL { ?id tln:lineContinuationHasReference ?reference;
                    tln:isLineAContinuationTo ?isToRef.
                ?reference tln:hasPageNumber ?refPageNumber;
                           tln:firstLineOfReference ?refLine.
                OPTIONAL { ?reference tln:hasTitle ?refTitle }
     }
   }`;
class TlnEditorComment extends TlnLineEditorComment {
    /**
    * The constructor creates a datatype from the data.
    *
    * @param id if omitted the id will be retrieved from data
    **/
    constructor(data, id, service) {
        super(data, id, service);
        this.underlineLine = false;
        this.markups = [];
        this.word = {
            id: this.getData4Key('word'),
            text: this.getData4Key('text'),
            line: (this.tLine != null) ? this.tLine.id : null,
            line_number: (this.tLine != null) ? this.tLine.number : -1,
            deleted: false,
            left: -1,
            top: -1,
            width: -1,
            height: -1
        };
    }
    static convertData(data, id, service) {
        let elements = [];
        let content = this.getContent(data);
        for (var i = 0; i < content.length; i++) {
            let element = (new this(content[i], id, service));
            element.markups = (content[i]['markup'] != undefined) ?
                _positional_markup__WEBPACK_IMPORTED_MODULE_2__["TlnEditorCommentMarkup"].convertData({ head: { vars: [] }, results: { bindings: [content[i]] } }) : [];
            if (elements.length > 0 && elements[elements.length - 1].id == element.id) {
                if (elements[elements.length - 1].editorClass == element.editorClass) {
                    elements[elements.length - 1].markups = elements[elements.length - 1].markups.concat(element.markups);
                }
                else if (elements[elements.length - 1].editorClass.endsWith('EditorComment')) {
                    elements[elements.length - 1].editorClass = element.editorClass;
                }
            }
            else {
                elements.push(element);
            }
        }
        return elements;
    }
}
TlnEditorComment.default_key = 'page';
TlnEditorComment.query_key = 'page';
/**
 * the SPARQL-query of this datatype.
 **/
TlnEditorComment.query = `
   PREFIX tln: <http://www.nie.org/ontology/nietzsche#>
   PREFIX stoff: <http://www.nie.org/ontology/standoff#>
   PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
   PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

   SELECT DISTINCT ?id ?word ?line ?text ?number ?top ?bottom ?editorClass ?comment ?commentIsUncertain ?correction ?markup ?sStyle ?start ?end ?isUncertain WHERE {
     ?page tln:hasWords/rdf:rest*/rdf:first ?word.
     { ?word tln:wordHasEditorComment ?id. } UNION {
       ?word tln:wordHasWordParts/rdf:rest*/rdf:first/tln:wordHasEditorComment ?id.
     }
     ?id a ?editorClass;
         tln:isUncertain ?isUncertain.
     FILTER (?editorClass != rdfs:Resource)
     ?word tln:hasText ?wordText;
           tln:wordBelongsToLine ?line.
     ?line tln:lineHasNumber ?number;
           tln:lineHasTopValueOnTranskription ?top;
           tln:lineHasBottomValueOnTranskription ?bottom.
     OPTIONAL { ?id tln:hasComment ?comment.}
     OPTIONAL { ?word tln:hasEditedText ?editedText.}
     OPTIONAL { ?id tln:hasCorrectionText ?editorCorrection;
                  tln:isUncertain true.}
     OPTIONAL { ?id tln:commentHasText ?textWithMarkup.
                ?textWithMarkup tln:textHasContent ?contentText;
                                tln:textHasMarkup ?markup.
                ?markup stoff:hasCSS ?sStyle;
                        stoff:standoffMarkupHasStartIndex ?start;
                        stoff:standoffMarkupHasEndIndex ?end.
     }
     BIND(IF(BOUND(?contentText), ?contentText, ?wordText) AS ?text)
     BIND(IF(BOUND(?editorCorrection), ?editorCorrection, ?editedText) AS ?correction)
   }`;
class TlnOverwrittenWordEditorComment extends TlnEditorComment {
    /**
    * The constructor creates a datatype from the data.
    *
    * @param id if omitted the id will be retrieved from data
    **/
    constructor(data, id, service) {
        super(data, id, service);
        this.underlineLine = true;
        this.overwritten_text = this.getData4Key('overwritten_text');
    }
}
/**
 * the SPARQL-query of this datatype.
 **/
TlnOverwrittenWordEditorComment.query = `
   PREFIX tln: <http://www.nie.org/ontology/nietzsche#>
   PREFIX stoff: <http://www.nie.org/ontology/standoff#>
   PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
   PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

   SELECT DISTINCT ?id ?word ?line ?text ?overwritten_text ?number ?top ?bottom ?editorClass ?comment ?commentIsUncertain ?correction ?markup ?sStyle ?start ?end ?isUncertain WHERE {
     ?page tln:hasWords/rdf:rest*/rdf:first ?word.
     ?word tln:overwritesWord ?overwrittenWord.
     ?overwrittenWord tln:wordHasEditorComment ?id;
           tln:hasText ?wordText. 
     ?id a ?editorClass;
         tln:isUncertain ?isUncertain.
     FILTER (?editorClass != rdfs:Resource)
     ?word tln:wordBelongsToLine ?line;
           tln:hasText ?text.
     ?line tln:lineHasNumber ?number;
           tln:lineHasTopValueOnTranskription ?top;
           tln:lineHasBottomValueOnTranskription ?bottom.
     OPTIONAL { ?id tln:hasComment ?comment.}
     OPTIONAL { ?id tln:hasCorrectionText ?correction;
                  tln:isUncertain true.}
     OPTIONAL { ?word tln:hasStandoffMarkup4PartThatOverwritesWord ?markup.
                ?markup stoff:hasCSS ?sStyle;
                        stoff:standoffMarkupHasStartIndex ?start;
                        stoff:standoffMarkupHasEndIndex ?end.
     }
     BIND(IF(BOUND(?contentText), ?contentText, ?wordText) AS ?overwritten_text)
   }`;


/***/ }),

/***/ "./src/app/tln-edition/datatypes/faksimile_image.ts":
/*!**********************************************************!*\
  !*** ./src/app/tln-edition/datatypes/faksimile_image.ts ***!
  \**********************************************************/
/*! exports provided: FaksimileImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaksimileImage", function() { return FaksimileImage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image */ "./src/app/tln-edition/datatypes/image.ts");


/**
 * This is the faksimile image instantiation of an element of {@link /interfaces/FusekiResults.html|FusekiResults}.
 * It extends {@link /classes/TlnImage.html|TlnImage}.
 **/
class FaksimileImage extends _image__WEBPACK_IMPORTED_MODULE_1__["TlnImage"] {
    constructor(data, id, service) {
        super(data, id, service);
        this.copyright = {
            originalUrl: 'http://www.nietzschesource.org/DFGA/' + this.filename.replace('.jpg', ''),
            licenseTextUrl: 'http://creativecommons.org/licenses/by-nc-nd/4.0/deed.de',
            license: 'CC BY-NC-ND 4.0',
            text: 'Dieses Faksimile wird von <a target="_new" href="http://www.nietzschesource.org">nietzschesource.org</a>  gehostet und wird hier unver&auml;ndert dargestellt.'
        };
    }
}
/**
 * the SPARQL-query of this datatype
 **/
FaksimileImage.query = `
   PREFIX tln: <http://www.nie.org/ontology/nietzsche#>

   SELECT ?id ?filename ?URL ?secondaryURL ?width ?height ?t_left ?t_top ?t_width ?t_height ?page ?transform WHERE {
      ?id a tln:FaksimileImage;
           tln:hasFileName ?filename;
           tln:hasPrimaryurl ?URL;
           tln:hasSecondaryurl ?secondaryURL;
           tln:hasWidth ?width;
           tln:hasHeight ?height;
           tln:hasTextField ?textfield.
      ?textfield tln:hasLeft ?t_left;
           tln:hasTop ?t_top;
           tln:hasWidth ?t_width;
           tln:hasHeight ?t_height;
           ^tln:pageIsOnFaksimileTextField ?page.
      OPTIONAL { ?id tln:hasTransform ?transform. }
   }`;


/***/ }),

/***/ "./src/app/tln-edition/datatypes/foreign_text.ts":
/*!*******************************************************!*\
  !*** ./src/app/tln-edition/datatypes/foreign_text.ts ***!
  \*******************************************************/
/*! exports provided: TlnTextByForeignHand, FaksimileTextByForeignHand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TlnTextByForeignHand", function() { return TlnTextByForeignHand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaksimileTextByForeignHand", function() { return FaksimileTextByForeignHand; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _positional_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./positional_object */ "./src/app/tln-edition/datatypes/positional_object.ts");
/* harmony import */ var _positional_markup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./positional-markup */ "./src/app/tln-edition/datatypes/positional-markup.ts");



/**
 * This is the 'text by foreign hand' instantiation of an element of {@link /interfaces/FusekiResults.html|FusekiResults}.
 * It extends {@link /classes/BasicResultBindingElement.html|BasicResultBindingElement}.
 **/
class TlnTextByForeignHand extends _positional_object__WEBPACK_IMPORTED_MODULE_1__["TlnPositionalObject"] {
    /**
    * The constructor creates a datatype from the data.
    *
    * @param id if omitted the id will be retrieved from data
    **/
    constructor(data, id, service) {
        super(data, id, service);
        this.markups = [];
        this.text = this.getData4Key('text');
        this.pen = this.getData4Key('pen');
        this.resolution = this.getData4Key('resolution');
        this.comment = this.getData4Key('comment');
    }
    static convertData(data, id, service) {
        let elements = [];
        let content = this.getContent(data);
        for (var i = 0; i < content.length; i++) {
            let element = new TlnTextByForeignHand(content[i], id, service);
            if (content[i]['markup'] != undefined && content[i]['markup']['value'] != null) {
                element.markups = _positional_markup__WEBPACK_IMPORTED_MODULE_2__["TlnPositionalStyleMarkup"].convertData({ head: { vars: [] }, results: { bindings: [content[i]] } }, content[i]['markup']['value']);
            }
            if (content[i]['idOFH'] != undefined && content[i]['idOFH']['value'] != null) {
                //let results = Object.fromEntries(Object.entries(content[i]).filter(key_value =>key_value[0].endsWith('OFH')))
                let contentObject = Object.fromEntries(Object.entries(content[i]).filter(key_value => key_value[0].endsWith('OFH')).map(key_value => [key_value[0].replace('OFH', ''), key_value[1]]));
                let overwritten_mark = TlnTextByForeignHand.convertData({ head: { vars: [] }, results: { bindings: [contentObject] } }, content[i]['idOFH']['value'])[0];
                if (elements.length > 0 && elements[elements.length - 1].id == element.id
                    && elements[elements.length - 1].overwrittenTextByForeignHand != undefined && elements[elements.length - 1].overwrittenTextByForeignHand != null) {
                    overwritten_mark.markups.forEach(markup => { elements[elements.length - 1].overwrittenTextByForeignHand.markups.push(markup); });
                }
                else {
                    element.overwrittenTextByForeignHand = overwritten_mark;
                }
            }
            if (elements.length > 0 && elements[elements.length - 1].id == element.id) {
                element.markups.forEach(markup => { elements[elements.length - 1].markups.push(markup); });
                if (element.overwrittenTextByForeignHand != undefined && element.overwrittenTextByForeignHand != null) {
                    elements[elements.length - 1].overwrittenTextByForeignHand = element.overwrittenTextByForeignHand;
                }
            }
            else {
                elements.push(element);
            }
        }
        //console.log(elements)
        return elements;
    }
}
/**
 * the SPARQL-query of this datatype.
 **/
TlnTextByForeignHand.query = `
   PREFIX tln: <http://www.nie.org/ontology/nietzsche#>
   PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

   SELECT ?id ?text ?pen ?left ?top ?width ?height ?resolution ?comment ?transform ?markup ?sStyle ?start ?end 
          ?idOFH ?textOFH ?penOFH ?markupOFH ?startOFH ?endOFH ?sStyleOFH
   WHERE {
      ?page tln:hasMarkForeignHands/rdf:rest*/rdf:first ?id.
      ?id  tln:textOfForeignHands ?textOfForeignHands;
           tln:penOfForeignHands ?pen;
           tln:hasTranskriptionPosition ?tp.
      ?textOfForeignHands tln:textHasContent ?text.
    	?tp tln:hasLeft ?left; tln:hasTop ?top; tln:hasWidth ?width; tln:hasHeight ?height.
      OPTIONAl { ?id tln:resolutionOfAbbreviation ?resolution.}
      OPTIONAl { ?id tln:foreignHandHasCommentByEditors ?comment.}
      OPTIONAl { ?textOfForeignHands  tln:textHasMarkup ?markup.
                 ?markup tln:standoffTagHasEndIndex ?end;
                         tln:standoffTagHasStartIndex ?start;
                         tln:standoffTagHasCSS ?sStyle.
      }
      OPTIONAl { ?tp tln:hasTransform ?transform.}
      OPTIONAL { ?id tln:foreignHandOverwritesForeignHand ?idOFH.
    				?idOFH tln:textOfForeignHands ?textOfForeignHandsOFH;
             			tln:penOfForeignHands ?penOFH.
    				?textOfForeignHandsOFH tln:textHasContent ?textOFH.
               OPTIONAL {
				      ?textOfForeignHandsOFH tln:textHasMarkup ?markupOFH.
       			   ?markupOFH tln:standoffTagHasEndIndex ?endOFH;
                         tln:standoffTagHasStartIndex ?startOFH;
                         tln:standoffTagHasCSS ?sStyleOFH.
    	         }
      }
   } `;
/**
 * This is the faksimile text by foreign hand instantiation of an element of {@link /interfaces/FusekiResults.html|FusekiResults}.
 * It extends {@link /classes/BasicResultBindingElement.html|BasicResultBindingElement}.
 **/
class FaksimileTextByForeignHand extends TlnTextByForeignHand {
}
/**
 * the SPARQL-query of this datatype.
 **/
FaksimileTextByForeignHand.query = `
   PREFIX tln: <http://www.nie.org/ontology/nietzsche#>
   PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

   SELECT ?id ?text ?pen ?left ?top ?width ?height ?resolution ?comment ?transform ?markup ?sStyle ?start ?end
          ?idOFH ?textOFH ?penOFH ?markupOFH ?startOFH ?endOFH ?sStyleOFH
   WHERE {
      ?page tln:hasMarkForeignHands/rdf:rest*/rdf:first ?id.
      ?id  tln:textOfForeignHands ?textOfForeignHands;
           tln:penOfForeignHands ?pen;
           tln:hasFaksimilePosition ?fp.
      ?textOfForeignHands tln:textHasContent ?text.
    	?fp tln:hasLeft ?left; tln:hasTop ?top; tln:hasWidth ?width; tln:hasHeight ?height.
      OPTIONAl { ?id tln:resolutionOfAbbreviation ?resolution.}
      OPTIONAl { ?id tln:foreignHandHasCommentByEditors ?comment.}
      OPTIONAl { ?textOfForeignHands  tln:textHasMarkup ?markup.
                 ?markup tln:standoffTagHasEndIndex ?end;
                         tln:standoffTagHasStartIndex ?start;
                         tln:standoffTagHasCSS ?sStyle.
      }
      OPTIONAl { ?fp tln:hasTransform ?transform.}
      OPTIONAL { ?id tln:foreignHandOverwritesForeignHand ?idOFH.
    				?idOFH tln:textOfForeignHands ?textOfForeignHandsOFH;
             			tln:penOfForeignHands ?penOFH.
    				?textOfForeignHandsOFH tln:textHasContent ?textOFH.
               OPTIONAL {
				      ?textOfForeignHandsOFH tln:textHasMarkup ?markupOFH.
       			   ?markupOFH tln:standoffTagHasEndIndex ?endOFH;
                         tln:standoffTagHasStartIndex ?startOFH;
                         tln:standoffTagHasCSS ?sStyleOFH.
    	         }
      }

   } `;


/***/ }),

/***/ "./src/app/tln-edition/datatypes/image.ts":
/*!************************************************!*\
  !*** ./src/app/tln-edition/datatypes/image.ts ***!
  \************************************************/
/*! exports provided: TlnImage, TlnTextField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TlnImage", function() { return TlnImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TlnTextField", function() { return TlnTextField; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _basic_datatype__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic_datatype */ "./src/app/tln-edition/datatypes/basic_datatype.ts");


class TlnImage extends _basic_datatype__WEBPACK_IMPORTED_MODULE_1__["BasicResultBindingElement"] {
    constructor(data, id, service) {
        super(data, id, service);
        this.x = 0;
        this.y = 0;
        this.filename = this.getData4Key('filename');
        this.width = this.getData4Key('width');
        this.height = this.getData4Key('height');
        this.URL = this.getData4Key('URL');
        this.secondaryURL = this.getData4Key('secondaryURL');
        this.transform = this.getData4Key('transform');
        this.text_field = new TlnTextField(this.getData4Key('t_left'), this.getData4Key('t_top'), this.getData4Key('t_width'), this.getData4Key('t_height'));
    }
}
TlnImage.default_key = 'page';
TlnImage.query = `
   PREFIX tln: <http://www.nie.org/ontology/nietzsche#>

   SELECT ?id ?filename ?width ?height ?URL ?secondaryURL ?t_left ?t_top ?t_width ?t_height ?page ?transform WHERE {
      ?id a tln:Image;
           tln:hasPrimaryurl ?URL;
           tln:hasSecondaryurl ?secondaryURL;
           tln:hasFileName ?filename;
           tln:hasWidth ?width;
           tln:hasHeight ?height;
           tln:hasTextField ?textfield.
      ?textfield tln:hasLeft ?t_left;
           tln:hasTop ?t_top;
           tln:hasWidth ?t_width;
           tln:hasHeight ?t_height;
           ^tln:pageIsOnTextField ?page.
      OPTIONAL { ?id tln:hasTransform ?transform. }
   }`;
class TlnTextField {
    constructor(left, top, width, height) {
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
    }
}


/***/ }),

/***/ "./src/app/tln-edition/datatypes/imprint.ts":
/*!**************************************************!*\
  !*** ./src/app/tln-edition/datatypes/imprint.ts ***!
  \**************************************************/
/*! exports provided: TlnImprint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TlnImprint", function() { return TlnImprint; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _basic_datatype__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic_datatype */ "./src/app/tln-edition/datatypes/basic_datatype.ts");


/**
 * This is the 'editor comment' stub instantiation of an element of {@link /interfaces/FusekiResults.html|FusekiResults}.
 **/
class TlnImprint extends _basic_datatype__WEBPACK_IMPORTED_MODULE_1__["BasicResultBindingElement"] {
    /**
    * The constructor creates a datatype from the data.
    *
    * @param id if omitted the id will be retrieved from data
    **/
    constructor(data, id, service) {
        super(data, id, service);
        this.lines = [];
        this.reference = this.getData4Key('reference');
    }
    static convertData(data, id, service) {
        let elements = [];
        let content = this.getContent(data);
        for (var i = 0; i < content.length; i++) {
            let element = new TlnImprint(content[i], id, service);
            if (content[i]['line'] != undefined && content[i]['line'] != null) {
                element.lines.push({
                    id: content[i]['line']['value'],
                    number: Number(content[i]['lineNumber']['value']),
                    bottom: -1,
                    top: -1
                });
            }
            if (elements.length > 0 && elements[elements.length - 1].id == element.id
                && element.lines.length > 0) {
                elements[elements.length - 1].lines.push(element.lines[0]);
            }
            else {
                elements.push(element);
            }
        }
        //console.log(elements)
        return elements;
    }
}
TlnImprint.default_key = 'page';
TlnImprint.query_key = 'page';
/**
 * the SPARQL-query of this datatype.
 **/
TlnImprint.query = `
   PREFIX tln: <http://www.nie.org/ontology/nietzsche#>
   PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
   PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

   SELECT ?id ?reference ?line ?lineNumber WHERE {
      ?page a tln:Page;
         tln:hasImprints/rdf:rest*/rdf:first ?id.
     ?id tln:imprintHasReference ?reference.
     OPTIONAL { ?id tln:imprintRefersToLines/rdf:rest*/rdf:first ?line.
                ?line tln:lineHasNumber ?lineNumber .
     }
   }`;


/***/ }),

/***/ "./src/app/tln-edition/datatypes/line.ts":
/*!***********************************************!*\
  !*** ./src/app/tln-edition/datatypes/line.ts ***!
  \***********************************************/
/*! exports provided: LineRepresentation, TlnLine, FaksimileLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineRepresentation", function() { return LineRepresentation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TlnLine", function() { return TlnLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaksimileLine", function() { return FaksimileLine; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _basic_datatype__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic_datatype */ "./src/app/tln-edition/datatypes/basic_datatype.ts");


/**
 * This is the simple line instantiation of an element of {@link /interfaces/FusekiResults.html|FusekiResults}.
 * It extends {@link /classes/BasicResultBindingElement.html|BasicResultBindingElement}.
 **/
class LineRepresentation extends _basic_datatype__WEBPACK_IMPORTED_MODULE_1__["BasicResultBindingElement"] {
    /**
     * The constructor creates a datatype from the data.
     *
     * @param id if omitted the id will be retrieved from data
     **/
    constructor(data, id, service) {
        super(data, id, service);
        this.openInTarget = 'viewer';
        this.lineNumber = this.getData4Key('lineNumber');
        this.pageNumber = this.getData4Key('pageNumber');
        this.page = this.getData4Key('page');
        this.title = this.getData4Key('title');
        this.manuscript = this.getData4Key('manuscript');
        this.representation = this.title + " " + this.pageNumber + ", " + this.lineNumber;
    }
    getRouterInformation(launchExternally) {
        return { title: this.title, number: this.pageNumber, page: this.page,
            manuscript: this.manuscript, selectedLines: [this.id], launchExternally: launchExternally };
    }
}
/**
 * the internal default key for replacing {@link /classes/TlnLine.html#query|query} by "id"
 * in {@link /classes/TlnLine.html#getQuery|getQuery} if "key" is omitted.
 **/
LineRepresentation.default_key = 'id';
LineRepresentation.query_key = 'id';
/**
 * the SPARQL-query of this datatype.
 **/
LineRepresentation.query = `
   PREFIX tln: <http://www.nie.org/ontology/nietzsche#>
   PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

   SELECT ?lineNumber ?pageNumber ?title ?page ?manuscript WHERE {
      ?id a tln:Line; tln:lineHasNumber ?lineNumber.
      ?page tln:hasLines/rdf:rest*/rdf:first ?id;
            tln:hasNumber ?pageNumber.
      ?manuscriptId tln:hasPages/rdf:rest*/rdf:first ?page;
            tln:hasTitle ?title.
   } `;
/**
 * This is the line instantiation of an element of {@link /interfaces/FusekiResults.html|FusekiResults}.
 * It extends {@link /classes/BasicResultBindingElement.html|BasicResultBindingElement}.
 **/
class TlnLine extends _basic_datatype__WEBPACK_IMPORTED_MODULE_1__["BasicResultBindingElement"] {
    /**
     * The constructor creates a datatype from the data.
     *
     * @param id if omitted the id will be retrieved from data
     **/
    constructor(data, id, service) {
        super(data, id, service);
        this.number = this.getData4Key('number');
        this.top = this.getData4Key('top');
        this.bottom = this.getData4Key('bottom');
        let pageNumber = this.getData4Key('pageNumber');
        let manuscriptTitle = this.getData4Key('manuscriptTitle');
        let continuesTo = this.getData4Key('toLine');
        let continuesFrom = this.getData4Key('fromLine');
        if (continuesTo != null) {
            let manuscript = { id: this.getData4Key('toManuscript'), title: this.getData4Key('toManuscriptTitle') };
            let page = { id: this.getData4Key('toPage'), number: this.getData4Key('toPageNumber') };
            let line = { id: continuesTo, number: this.getData4Key('toLineNumber') };
            this.continuesTo = { manuscript: manuscript, page: page, line: line };
        }
        if (continuesFrom != null) {
            let manuscript = { id: this.getData4Key('fromManuscript'), title: this.getData4Key('fromManuscriptTitle') };
            let page = { id: this.getData4Key('fromPage'), number: this.getData4Key('fromPageNumber') };
            let line = { id: continuesFrom, number: this.getData4Key('fromLineNumber') };
            this.continuesFrom = { manuscript: manuscript, page: page, line: line };
        }
        if (this.continuesFrom != null || this.continuesTo != null) {
            let reference = (this.continuesTo != null) ? this.continuesTo : this.continuesFrom;
            let manuscript = (this.getData4Key('manuscriptId') == reference.manuscript.id) ? null :
                { id: this.getData4Key('manuscriptId'), title: this.getData4Key('manuscriptTitle') };
            let page = (this.page == reference.page.id) ? null :
                { id: this.page, number: this.getData4Key('pageNumber') };
            this.source = { manuscript: manuscript, page: page, line: { id: this.id, number: this.number } };
        }
    }
}
/**
 * the internal default key for replacing {@link /classes/TlnLine.html#query|query} by "id"
 * in {@link /classes/TlnLine.html#getQuery|getQuery} if "key" is omitted.
 **/
TlnLine.default_key = 'page';
TlnLine.use_id = true;
/**
 * the SPARQL-query of this datatype.
 **/
TlnLine.query = `
   PREFIX tln: <http://www.nie.org/ontology/nietzsche#>
   PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

   SELECT ?id ?number ?top ?bottom 
   ?pageNumber ?manuscriptId ?manuscriptTitle
   ?toLine ?toLineNumber ?toPage ?toPageNumber ?toManuscript ?toManuscriptTitle 
   ?fromLine ?fromLineNumber ?fromPage ?fromPageNumber ?fromManuscript ?fromManuscriptTitle 
   WHERE {
      ?page tln:hasLines/rdf:rest*/rdf:first ?id;
            tln:hasNumber ?pageNumber.
      ?id a tln:Line; tln:lineHasNumber ?number;
            tln:lineHasTopValueOnTranskription ?top;
            tln:lineHasBottomValueOnTranskription ?bottom.
      ?manuscriptId tln:hasPages/rdf:rest*/rdf:first ?page;
            tln:hasTitle ?manuscriptTitle.
      OPTIONAL { 
         ?id tln:lineContinuesOn ?toLine.
         ?toLine tln:lineHasNumber ?toLineNumber.
         ?toPage tln:hasLines/rdf:rest*/rdf:first ?toLine; tln:hasNumber ?toPageNumber.
         ?toManuscript tln:hasPages/rdf:rest*/rdf:first ?toPage; tln:hasTitle ?toManuscriptTitle.
      }
      OPTIONAL { 
         ?id ^tln:lineContinuesOn ?fromLine.
         ?fromLine tln:lineHasNumber ?fromLineNumber.
         ?fromPage tln:hasLines/rdf:rest*/rdf:first ?fromLine; tln:hasNumber ?fromPageNumber.
         ?fromManuscript tln:hasPages/rdf:rest*/rdf:first ?fromPage; tln:hasTitle ?fromManuscriptTitle.
      }
   } `;
/**
 * the public key for replacing {@link /classes/TlnLine.html#query|query} by "id".
 **/
TlnLine.query_key = 'page';
/**
 * This is the faksimile line instantiation of an element of {@link /interfaces/FusekiResults.html|FusekiResults}.
 * It extends {@link /classes/TlnLine.html|TlnLine}.
 **/
class FaksimileLine extends TlnLine {
}
/**
 * the SPARQL-query of this datatype.
 **/
FaksimileLine.query = `
   PREFIX tln: <http://www.nie.org/ontology/nietzsche#>
   PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

   SELECT ?id ?number ?top ?bottom
   ?pageNumber ?manuscriptId ?manuscriptTitle
   ?toLine ?toLineNumber ?toPage ?toPageNumber ?toManuscript ?toManuscriptTitle 
   ?fromLine ?fromLineNumber ?fromPage ?fromPageNumber ?fromManuscript ?fromManuscriptTitle 
   WHERE {
      ?page tln:hasLines/rdf:rest*/rdf:first ?id;
            tln:hasNumber ?pageNumber.
      ?id a tln:Line; tln:lineHasNumber ?number;
         tln:lineHasInnerTopValueOnFaksimile ?top;
         tln:lineHasInnerBottomValueOnFaksimile ?i_bottom.
      ?manuscriptId tln:hasPages/rdf:rest*/rdf:first ?page;
            tln:hasTitle ?manuscriptTitle.
      BIND( (?top+?i_bottom)/2 as ?bottom).
      OPTIONAL { 
         ?id tln:lineContinuesOn ?toLine.
         ?toLine tln:lineHasNumber ?toLineNumber.
         ?toPage tln:hasLines/rdf:rest*/rdf:first ?toLine; tln:hasNumber ?toPageNumber.
         ?toManuscript tln:hasPages/rdf:rest*/rdf:first ?toPage; tln:hasTitle ?toManuscriptTitle.
      }
      OPTIONAL { 
         ?id ^tln:lineContinuesOn ?fromLine.
         ?fromLine tln:lineHasNumber ?fromLineNumber.
         ?fromPage tln:hasLines/rdf:rest*/rdf:first ?fromLine; tln:hasNumber ?fromPageNumber.
         ?fromManuscript tln:hasPages/rdf:rest*/rdf:first ?fromPage; tln:hasTitle ?fromManuscriptTitle.
      }
   } `;


/***/ }),

/***/ "./src/app/tln-edition/datatypes/line_reference.ts":
/*!*********************************************************!*\
  !*** ./src/app/tln-edition/datatypes/line_reference.ts ***!
  \*********************************************************/
/*! exports provided: TlnLineReference */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TlnLineReference", function() { return TlnLineReference; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _basic_datatype__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic_datatype */ "./src/app/tln-edition/datatypes/basic_datatype.ts");


class TlnLineReference extends _basic_datatype__WEBPACK_IMPORTED_MODULE_1__["BasicResultBindingElement"] {
    /**
     * The constructor creates a datatype from the data.
     *
     * @param id if omitted the id will be retrieved from data
     **/
    constructor(data, id, service) {
        super(data, id, service);
        this.line = { id: this.id, number: this.getData4Key('line_number') };
        this.page = { id: this.getData4Key('page_id'), number: this.getData4Key('page') };
        this.manuscript = { id: this.getData4Key('manuscript'), title: this.getData4Key('title') };
    }
}
/**
 * the internal default key for replacing {@link /classes/TlnLine.html#query|query} by "id"
 * in {@link /classes/TlnLine.html#getQuery|getQuery} if "key" is omitted.
 **/
TlnLineReference.default_key = 'page';
/**
 * the SPARQL-query of this datatype.
 **/
TlnLineReference.query = `
   PREFIX tln: <http://www.nie.org/ontology/nietzsche#>
   PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

   SELECT ?id ?page ?page_id ?manuscript ?title ?line_number WHERE {
      ?id a tln:Line; tln:lineHasNumber ?line_number.
      ?page_id tln:hasLines/rdf:rest*/rdf:first ?id; tln:hasNumber ?page.
      ?manuscript tln:hasPages/rdf:rest*/rdf:first ?page_id; tln:hasTitle ?title.
   } `;
/**
 * the public key for replacing {@link /classes/TlnLine.html#query|query} by "id".
 **/
TlnLineReference.query_key = 'id';


/***/ }),

/***/ "./src/app/tln-edition/datatypes/manuscript.ts":
/*!*****************************************************!*\
  !*** ./src/app/tln-edition/datatypes/manuscript.ts ***!
  \*****************************************************/
/*! exports provided: ManuscriptStub, ManuscriptLeaf, ManuscriptInfoLeaf, TlnExtManuscript, Manuscript4Selection, ManuscriptPages, ReconstructedKonvolut, ManuscriptDescription, ManuscriptEarlierDescription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManuscriptStub", function() { return ManuscriptStub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManuscriptLeaf", function() { return ManuscriptLeaf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManuscriptInfoLeaf", function() { return ManuscriptInfoLeaf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TlnExtManuscript", function() { return TlnExtManuscript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Manuscript4Selection", function() { return Manuscript4Selection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManuscriptPages", function() { return ManuscriptPages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReconstructedKonvolut", function() { return ReconstructedKonvolut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManuscriptDescription", function() { return ManuscriptDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManuscriptEarlierDescription", function() { return ManuscriptEarlierDescription; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _basic_datatype__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic_datatype */ "./src/app/tln-edition/datatypes/basic_datatype.ts");
/* harmony import */ var _positional_markup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./positional-markup */ "./src/app/tln-edition/datatypes/positional-markup.ts");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page */ "./src/app/tln-edition/datatypes/page.ts");




class ManuscriptStub extends _basic_datatype__WEBPACK_IMPORTED_MODULE_1__["BasicResultBindingElement"] {
    constructor(data, id, service) {
        super(data, id, service);
        this.openInTarget = 'manuscript';
        this.title = this.getData4Key('title');
        this.type = this.getData4Key('type');
        this.representation = this.title;
    }
    getRouterInformation(launchExternally) {
        return { title: this.title, manuscript: this.id, launchExternally: launchExternally };
    }
}
ManuscriptStub.query = `
   PREFIX data: <http://rdfh.ch/projects/0068#>
   PREFIX tln: <http://www.nie.org/ontology/nietzsche#>

   SELECT ?id ?title ?type WHERE {
      ?id a tln:ArchivalManuscriptUnity ;
      tln:hasTitle ?title;
      tln:hasManuscriptType ?type.
   }`;
class ManuscriptLeaf extends _basic_datatype__WEBPACK_IMPORTED_MODULE_1__["BasicResultBindingElement"] {
    constructor(data, id, service) {
        super(data, id, service);
        this.description = this.getData4Key('description');
        this.originally = this.getData4Key('originally');
    }
}
ManuscriptLeaf.default_key = 'manuscript';
ManuscriptLeaf.query_key = 'manuscript';
ManuscriptLeaf.query = `
   PREFIX data: <http://rdfh.ch/projects/0068#>
   PREFIX tln: <http://www.nie.org/ontology/nietzsche#>
   PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

   SELECT distinct ?id ?description ?originally WHERE {
      ?manuscript a tln:ArchivalManuscriptUnity ;
      tln:hasPages/rdf:rest*/rdf:first ?page.
      ?page tln:hasFaksimileImage ?image.
      ?image ^tln:isDepictedBy ?id.
      ?id tln:leafHasDescription ?descriptionId.
      ?descriptionId tln:textHasContent ?description.
      OPTIONAL { ?descriptionId tln:leafHasDescriptionAboutOriginalConstitution ?originally }
   }`;
class ManuscriptInfoLeaf extends ManuscriptLeaf {
}
ManuscriptInfoLeaf.default_key = 'page';
ManuscriptInfoLeaf.query_key = 'page';
ManuscriptInfoLeaf.query = `
   PREFIX tln: <http://www.nie.org/ontology/nietzsche#>
   PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

   SELECT distinct ?id ?description ?originally WHERE {
      ?page tln:hasFaksimileImage ?image.
      ?image ^tln:isDepictedBy ?id.
      ?id tln:leafHasDescription ?descriptionId.
      ?descriptionId tln:textHasContent ?description.
      OPTIONAL { ?descriptionId tln:leafHasDescriptionAboutOriginalConstitution ?originally }
   }`;
class TlnExtManuscript extends ManuscriptStub {
    constructor(data, id, service) {
        super(data, id, service);
        this.thumbImage = this.getData4Key('thumbImage');
        this.gsaSignature = this.getData4Key('gsaSignature');
        this.archivalicSignature = this.getData4Key('archivalicSignature');
    }
}
/**
 * the internal default key for replacing {@link /classes/TlnLine.html#query|query} by "id"
 * in {@link /classes/TlnLine.html#getQuery|getQuery} if "key" is omitted.
 **/
TlnExtManuscript.default_key = 'manuscript';
TlnExtManuscript.query = `
   PREFIX data: <http://rdfh.ch/projects/0068#>
   PREFIX tln: <http://www.nie.org/ontology/nietzsche#>
   PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
   PREFIX stoff: <http://www.nie.org/ontology/standoff#>

   SELECT DISTINCT ?gsaSignature ?title ?thumbImage ?type ?archivalicSignature WHERE {
      ?manuscript  tln:hasPages/rdf:first/tln:hasFaksimileImage/tln:hasThumburl ?thumbImage;
                   tln:hasGsaSignature ?gsaSignature;
                   tln:hasTitle ?title;
                   tln:hasManuscriptType ?type.  
      OPTIONAL {
        ?manuscript tln:hasArchivalicSignature ?archivalicSignature. 
      }
   }`;
/**
 * the public key for replacing {@link /classes/TlnLine.html#query|query} by "id".
 **/
TlnExtManuscript.query_key = 'manuscript';
class Manuscript4Selection extends ManuscriptStub {
}
Manuscript4Selection.query = `
   PREFIX data: <http://rdfh.ch/projects/0068#>
   PREFIX tln: <http://www.nie.org/ontology/nietzsche#>
   PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
   PREFIX stoff: <http://www.nie.org/ontology/standoff#>

   SELECT DISTINCT ?id ?title ?type WHERE {
      ?id a tln:ArchivalManuscriptUnity; 
         tln:hasTitle ?title;
         tln:archivalManuscriptUnityHasDataProcessingStatus ?status;
         tln:hasManuscriptType ?type.
      FILTER (?status != "blank")
   }`;
class ManuscriptPages extends ManuscriptStub {
    constructor(data, id, service) {
        super(data, id, service);
        this.pages = [];
    }
    static convertData(data, id, service) {
        let elements = [];
        let content = this.getContent(data);
        for (var i = 0; i < content.length; i++) {
            let element = new ManuscriptPages(content[i], id, service);
            let pages = [];
            if (content[i]['page'] != undefined && content[i]['page'] != null) {
                pages = (content[i]['title'] != undefined && content[i]['title'] != null)
                    ? _page__WEBPACK_IMPORTED_MODULE_3__["TlnPage"].convertData({ head: { vars: [] }, results: { bindings: [content[i]] } }, content[i]['page']['value'])
                    : _page__WEBPACK_IMPORTED_MODULE_3__["PageStub"].convertData({ head: { vars: [] }, results: { bindings: [content[i]] } }, content[i]['page']['value']);
            }
            if (elements.length > 0 && elements[elements.length - 1].id == element.id) {
                if (pages.length > 0) {
                    elements[elements.length - 1].pages.push(pages[0]);
                }
            }
            else {
                if (pages.length > 0) {
                    element.pages.push(pages[0]);
                }
                elements.push(element);
            }
        }
        //console.log(elements)
        return elements;
    }
}
/**
 * the internal default key for replacing {@link /classes/TlnLine.html#query|query} by "id"
 * in {@link /classes/TlnLine.html#getQuery|getQuery} if "key" is omitted.
 **/
ManuscriptPages.default_key = 'id';
ManuscriptPages.query = `
   PREFIX data: <http://rdfh.ch/projects/0068#>
   PREFIX tln: <http://www.nie.org/ontology/nietzsche#>
   PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
   PREFIX stoff: <http://www.nie.org/ontology/standoff#>

   SELECT DISTINCT ?id ?title ?type ?page ?number WHERE {
      ?id a tln:ArchivalManuscriptUnity; 
         tln:hasTitle ?title;
         tln:hasManuscriptType ?type;
         tln:hasPages/rdf:rest*/rdf:first ?page.  
      ?page tln:hasNumber ?number.
      FILTER (?type = "Mappe")
   }`;
/**
 * the public key for replacing {@link /classes/TlnLine.html#query|query} by "id".
 **/
ManuscriptPages.query_key = 'id';
class ReconstructedKonvolut extends ManuscriptStub {
    constructor(data, id, service) {
        super(data, id, service);
        this.pages = [];
        this.title = this.getData4Key('manuscriptTitle');
        this.description = this.getData4Key('description');
    }
    static convertData(data, id, service) {
        let elements = [];
        let content = this.getContent(data);
        for (var i = 0; i < content.length; i++) {
            let element = new ReconstructedKonvolut(content[i], id, service);
            let pages = [];
            if (content[i]['page'] != undefined && content[i]['page'] != null) {
                pages = (content[i]['title'] != undefined && content[i]['title'] != null)
                    ? _page__WEBPACK_IMPORTED_MODULE_3__["TlnPage"].convertData({ head: { vars: [] }, results: { bindings: [content[i]] } }, content[i]['page']['value'])
                    : _page__WEBPACK_IMPORTED_MODULE_3__["PageStub"].convertData({ head: { vars: [] }, results: { bindings: [content[i]] } }, content[i]['page']['value']);
            }
            if (elements.length > 0 && elements[elements.length - 1].id == element.id) {
                if (pages.length > 0) {
                    elements[elements.length - 1].pages.push(pages[0]);
                }
            }
            else {
                if (pages.length > 0) {
                    element.pages.push(pages[0]);
                }
                elements.push(element);
            }
        }
        //console.log(elements)
        return elements;
    }
}
/**
 * the internal default key for replacing {@link /classes/TlnLine.html#query|query} by "id"
 * in {@link /classes/TlnLine.html#getQuery|getQuery} if "key" is omitted.
 **/
ReconstructedKonvolut.default_key = 'manuscript';
ReconstructedKonvolut.query = `
   PREFIX data: <http://rdfh.ch/projects/0068#>
   PREFIX tln: <http://www.nie.org/ontology/nietzsche#>
   PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
   PREFIX stoff: <http://www.nie.org/ontology/standoff#>

   SELECT DISTINCT ?id ?manuscriptTitle ?title ?type ?page ?number ?description WHERE {
      ?manuscript  tln:partsBelongToReconstructedKonvolut ?id. 
      ?id tln:hasTitle ?manuscriptTitle;
          tln:hasDescription/tln:textHasContent ?description;
          tln:hasManuscriptType ?type;
          tln:hasPages/rdf:rest*/rdf:first ?page.  
      OPTIONAL { ?page tln:hasNumber ?number.}
      OPTIONAL {  
         ?archivalicUnity a tln:ArchivalManuscriptUnity;
               tln:hasPages/rdf:rest*/rdf:first ?page;
               tln:hasTitle ?title.
      }
   }`;
/**
 * the public key for replacing {@link /classes/TlnLine.html#query|query} by "id".
 **/
ReconstructedKonvolut.query_key = 'manuscript';
class ManuscriptDescription extends _basic_datatype__WEBPACK_IMPORTED_MODULE_1__["BasicResultBindingElement"] {
    constructor(data, id, service) {
        super(data, id, service);
        this.text = this.getData4Key('text');
        this.markups = [];
    }
    static convertData(data, id, service) {
        let elements = [];
        let content = this.getContent(data);
        for (var i = 0; i < content.length; i++) {
            let element = new ManuscriptDescription(content[i], id, service);
            let markups = (content[i]['description_markup'] != undefined && content[i]['description_markup'] != null) ?
                _positional_markup__WEBPACK_IMPORTED_MODULE_2__["TlnPositionalStyleMarkup"].convertData({ head: { vars: [] }, results: { bindings: [content[i]] } }, content[i]['description_markup']['value']) : [];
            if (elements.length > 0 && elements[elements.length - 1].id == element.id) {
                if (markups.length > 0) {
                    elements[elements.length - 1].markups.push(markups[0]);
                }
            }
            else {
                if (markups.length > 0) {
                    element.markups.push(markups[0]);
                }
                elements.push(element);
            }
        }
        //console.log(elements)
        return elements;
    }
}
/**
 * the internal default key for replacing {@link /classes/TlnLine.html#query|query} by "id"
 * in {@link /classes/TlnLine.html#getQuery|getQuery} if "key" is omitted.
 **/
ManuscriptDescription.default_key = 'manuscript';
ManuscriptDescription.query = `
   PREFIX data: <http://rdfh.ch/projects/0068#>
   PREFIX tln: <http://www.nie.org/ontology/nietzsche#>
   PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
   PREFIX stoff: <http://www.nie.org/ontology/standoff#>

   SELECT DISTINCT ?id ?text ?description_markup ?sStyle ?start ?end WHERE {
      ?manuscript  tln:hasDescription ?id.
      ?id tln:textHasContent ?text.
   OPTIONAL { ?id tln:textHasMarkup ?description_markup.
            ?description_markup stoff:hasCSS ?sStyle;
                          stoff:standoffMarkupHasStartIndex ?start;
                          stoff:standoffMarkupHasEndIndex ?end.}
   }`;
/**
 * the public key for replacing {@link /classes/TlnLine.html#query|query} by "id".
 **/
ManuscriptDescription.query_key = 'manuscript';
class ManuscriptEarlierDescription extends _basic_datatype__WEBPACK_IMPORTED_MODULE_1__["BasicResultBindingElement"] {
    constructor(data, id, service) {
        super(data, id, service);
        this.text = this.getData4Key('text');
        this.author = this.getData4Key('author');
        this.citation = this.getData4Key('citation');
        this.markups = [];
    }
    static convertData(data, id, service) {
        let elements = [];
        let content = this.getContent(data);
        for (var i = 0; i < content.length; i++) {
            let element = new ManuscriptEarlierDescription(content[i], id, service);
            let markups = (content[i]['description_markup'] != undefined && content[i]['description_markup'] != null) ?
                _positional_markup__WEBPACK_IMPORTED_MODULE_2__["TlnPositionalStyleMarkup"].convertData({ head: { vars: [] }, results: { bindings: [content[i]] } }, content[i]['description_markup']['value']) : [];
            if (elements.length > 0 && elements[elements.length - 1].id == element.id) {
                if (markups.length > 0) {
                    elements[elements.length - 1].markups.push(markups[0]);
                }
            }
            else {
                if (markups.length > 0) {
                    element.markups.push(markups[0]);
                }
                elements.push(element);
            }
        }
        //console.log(elements)
        return elements;
    }
}
/**
 * the internal default key for replacing {@link /classes/TlnLine.html#query|query} by "id"
 * in {@link /classes/TlnLine.html#getQuery|getQuery} if "key" is omitted.
 **/
ManuscriptEarlierDescription.default_key = 'manuscript';
ManuscriptEarlierDescription.query = `
   PREFIX data: <http://rdfh.ch/projects/0068#>
   PREFIX tln: <http://www.nie.org/ontology/nietzsche#>
   PREFIX stoff: <http://www.nie.org/ontology/standoff#>

   SELECT ?id ?text ?author ?citation ?description_markup ?sStyle ?start ?end WHERE {
      ?manuscript  tln:hasEarlierDescriptions ?id.  
      ?id tln:textHasContent ?text;
               tln:hasAuthor ?author;
               tln:hasCitation ?citation.
   OPTIONAL { ?id tln:textHasMarkup ?description_markup.
            ?description_markup stoff:hasCSS ?sStyle;
                          stoff:standoffMarkupHasStartIndex ?start;
                          stoff:standoffMarkupHasEndIndex ?end.}
   }`;
/**
 * the public key for replacing {@link /classes/TlnLine.html#query|query} by "id".
 **/
ManuscriptEarlierDescription.query_key = 'manuscript';


/***/ }),

/***/ "./src/app/tln-edition/datatypes/navigation.ts":
/*!*****************************************************!*\
  !*** ./src/app/tln-edition/datatypes/navigation.ts ***!
  \*****************************************************/
/*! exports provided: TlnManuscriptUnity, TlnNavigationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TlnManuscriptUnity", function() { return TlnManuscriptUnity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TlnNavigationPage", function() { return TlnNavigationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _basic_datatype__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic_datatype */ "./src/app/tln-edition/datatypes/basic_datatype.ts");


class TlnManuscriptUnity extends _basic_datatype__WEBPACK_IMPORTED_MODULE_1__["BasicResultBindingElement"] {
    constructor(data, id, service) {
        super(data, id, service);
        this.title = this.getData4Key('title');
        this.numberOfPages = this.getData4Key('numberOfPages');
        this.firstPage = { id: this.getData4Key('firstItem'), number: this.getData4Key('firstNumber'), title: this.title, index: 1 };
        this.lastPage = { id: this.getData4Key('lastItem'), number: this.getData4Key('lastNumber'), title: this.title, index: this.numberOfPages };
    }
}
TlnManuscriptUnity.query = `
   PREFIX tln: <http://www.nie.org/ontology/nietzsche#>
   PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
   PREFIX list: <http://jena.apache.org/ARQ/list#>

   SELECT ?title ?numberOfPages ?firstItem ?firstNumber ?lastItem ?lastNumber WHERE {
      ?id a tln:ManuscriptUnity;
         tln:hasTitle ?title;
         tln:hasPages ?list.
      ?list list:length ?numberOfPages;
            rdf:first ?firstItem;
            rdf:rest* ?lastNode.
      ?lastNode rdf:first ?lastItem;
                rdf:rest rdf:nil.
      ?firstItem tln:hasNumber ?firstNumber.
      ?lastItem tln:hasNumber ?lastNumber.
   }`;
TlnManuscriptUnity.query_key = 'id';
class TlnNavigationPage extends _basic_datatype__WEBPACK_IMPORTED_MODULE_1__["BasicResultBindingElement"] {
    constructor(data, id, service) {
        super(data, id, service);
        this.title = this.getData4Key('title');
        this.number = this.getData4Key('number');
        let previous = this.getData4Key('previous');
        let next = this.getData4Key('next');
        if (previous != null) {
            this.previous = { id: previous, number: this.getData4Key('previousNumber'), title: this.title, index: this.getData4Key('previousIndex') + 1 };
        }
        if (next != null) {
            this.next = { id: next, number: this.getData4Key('nextNumber'), title: this.title, index: this.getData4Key('nextIndex') + 1 };
        }
    }
}
TlnNavigationPage.query = `
   PREFIX tln: <http://www.nie.org/ontology/nietzsche#>
   PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
   PREFIX list: <http://jena.apache.org/ARQ/list#>

   SELECT ?title ?number  ?previous ?previousNumber  ?next ?nextNumber  ?previousIndex ?nextIndex WHERE {
      ?id tln:hasNumber ?number.
      ?unity a tln:ArchivalManuscriptUnity;
         tln:hasTitle ?title;
         tln:hasPages ?list.
      ?list rdf:rest* ?node.
      ?node rdf:first ?id.
      OPTIONAL { ?node ^rdf:rest/rdf:first ?previous.
                 ?previous tln:hasNumber ?previousNumber.
                 ?list list:index (?previousIndex ?previous);
      }
      OPTIONAL { ?node rdf:rest/rdf:first ?next.
                 ?next tln:hasNumber ?nextNumber.
                 ?list list:index (?nextIndex ?next);
      }
   }`;
TlnNavigationPage.query_key = 'id';


/***/ }),

/***/ "./src/app/tln-edition/datatypes/page.ts":
/*!***********************************************!*\
  !*** ./src/app/tln-edition/datatypes/page.ts ***!
  \***********************************************/
/*! exports provided: PageStub, TlnPage, TlnPageWithFaksimile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageStub", function() { return PageStub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TlnPage", function() { return TlnPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TlnPageWithFaksimile", function() { return TlnPageWithFaksimile; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _basic_datatype__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic_datatype */ "./src/app/tln-edition/datatypes/basic_datatype.ts");


class PageStub extends _basic_datatype__WEBPACK_IMPORTED_MODULE_1__["BasicResultBindingElement"] {
    constructor(data, id, service) {
        super(data, id, service);
        this.number = this.getData4Key('number');
    }
}
PageStub.query = `
   PREFIX tln: <http://www.nie.org/ontology/nietzsche#>
   PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

   SELECT ?id ?number WHERE {
      ?manuscript a tln:ArchivalManuscriptUnity;
         tln:hasPages/rdf:rest*/rdf:first ?id.
      ?id tln:hasNumber ?number.
      FILTER EXISTS { ?id tln:hasImage ?image }
   }`;
PageStub.query_key = 'manuscript';
class TlnPage extends PageStub {
    constructor(data, id, service) {
        super(data, id, service);
        this.openInTarget = 'viewer';
        this.title = this.getData4Key('title');
        this.manuscript = this.getData4Key('manuscript');
        this.representation = this.title + ' ' + this.number;
        if (this.service != null) {
            this.service.setCurrentIri(this.id, this.manuscript);
            //this.service.setTitle(this.title + ", " + this.number);
        }
    }
    getRouterInformation(launchExternally) {
        return { title: this.title, number: this.number, page: this.id, manuscript: this.manuscript, launchExternally: launchExternally };
    }
}
TlnPage.query = `
   PREFIX tln: <http://www.nie.org/ontology/nietzsche#>
   PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

   SELECT ?id ?title ?number ?manuscript WHERE {
      ?manuscript a tln:ArchivalManuscriptUnity;
         tln:hasTitle ?title;
         tln:hasPages/rdf:rest*/rdf:first ?id.
      ?id a tln:Page; tln:hasNumber ?number.
   }`;
TlnPage.query_key = 'id';
class TlnPageWithFaksimile extends TlnPage {
    constructor(data, id, service) {
        super(data, id, service);
        this.image = this.getData4Key('image');
        this.originalThumb = this.getData4Key('originalThumb');
    }
}
TlnPageWithFaksimile.query = `
   PREFIX tln: <http://www.nie.org/ontology/nietzsche#>
   PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

   SELECT ?id ?title ?number ?manuscript ?image ?originalThumb WHERE {
      ?leaf tln:isDepictedBy ?faksimile. 
      ?faksimile tln:hasThumburl ?image.
      OPTIONAL { ?faksimile tln:hasOriginalThumburl ?originalThumb. }
      ?id tln:hasFaksimileImage ?faksimile;
         tln:hasNumber ?number.
      ?manuscript a tln:ArchivalManuscriptUnity;
         tln:hasTitle ?title;
         tln:hasPages/rdf:rest*/rdf:first ?id.
   }`;
TlnPageWithFaksimile.query_key = 'leaf';


/***/ }),

/***/ "./src/app/tln-edition/datatypes/positional-markup.ts":
/*!************************************************************!*\
  !*** ./src/app/tln-edition/datatypes/positional-markup.ts ***!
  \************************************************************/
/*! exports provided: TlnPositionalStyleMarkup, TlnFilteredPositionalStyleMarkup, TlnEditorCommentMarkup, TlnOverwrittenMarkup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TlnPositionalStyleMarkup", function() { return TlnPositionalStyleMarkup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TlnFilteredPositionalStyleMarkup", function() { return TlnFilteredPositionalStyleMarkup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TlnEditorCommentMarkup", function() { return TlnEditorCommentMarkup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TlnOverwrittenMarkup", function() { return TlnOverwrittenMarkup; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _basic_datatype__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic_datatype */ "./src/app/tln-edition/datatypes/basic_datatype.ts");


/**
 * This is the line instantiation of an element of {@link /interfaces/FusekiResults.html|FusekiResults}.
 * It extends {@link /classes/BasicResultBindingElement.html|BasicResultBindingElement}.
 **/
class TlnPositionalStyleMarkup extends _basic_datatype__WEBPACK_IMPORTED_MODULE_1__["BasicResultBindingElement"] {
    /**
     * The constructor creates a datatype from the data.
     *
     * @param id if omitted the id will be retrieved from data
     **/
    constructor(data, id, service) {
        super(data, id, service);
        /**
         * standoff type: 0 === markup via css tag; 1 === apply css class
         **/
        this.sType = 0;
        this.sStyle = this.getData4Key('sStyle');
        this.end = this.getData4Key('end');
        this.start = this.getData4Key('start');
    }
}
/**
 * the internal default key for replacing {@link /classes/TlnLine.html#query|query} by "id"
 * in {@link /classes/TlnLine.html#getQuery|getQuery} if "key" is omitted.
 **/
TlnPositionalStyleMarkup.default_key = 'word';
/**
 * the SPARQL-query of this datatype.
 **/
TlnPositionalStyleMarkup.query = `
   PREFIX homotypic: <http://www.nie.org/ontology/homotypic#>
   PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
   PREFIX stoff: <http://www.nie.org/ontology/standoff#>
   PREFIX tln: <http://www.nie.org/ontology/nietzsche#>

   SELECT ?id ?sStyle ?start ?end WHERE {
      ?word homotypic:hasMarkup ?id. 
      ?id stoff:hasCSS ?sStyle;
          stoff:standoffMarkupHasStartIndex ?start;
          stoff:standoffMarkupHasEndIndex ?end.
   } `;
TlnPositionalStyleMarkup.query_key = 'word';
class TlnFilteredPositionalStyleMarkup extends TlnPositionalStyleMarkup {
    constructor(data, id, service) {
        super(data, id, service);
        this.regex = new RegExp('font-size:[0-9]\+%[;]*');
        console.log(this.sStyle, this.start, this.end);
        this.sStyle = this.sStyle.replace(this.regex, '') + 'filter: invert(1);';
    }
}
class TlnEditorCommentMarkup extends TlnPositionalStyleMarkup {
    constructor(data, id, service) {
        super(data, id, service);
        this.sStyle = this.sStyle + 'color: red;';
    }
}
/**
 * the internal default key for replacing {@link /classes/TlnLine.html#query|query} by "id"
 * in {@link /classes/TlnLine.html#getQuery|getQuery} if "key" is omitted.
 **/
TlnEditorCommentMarkup.default_key = 'text';
/**
 * the SPARQL-query of this datatype.
 **/
TlnEditorCommentMarkup.query = `
   PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
   PREFIX stoff: <http://www.nie.org/ontology/standoff#>
   PREFIX tln: <http://www.nie.org/ontology/nietzsche#>

   SELECT ?sStyle ?start ?end WHERE {
      ?text tln:textHasMarkup ?id.
      ?id stoff:hasCSS ?sStyle;
          stoff:standoffMarkupHasStartIndex ?start;
          stoff:standoffMarkupHasEndIndex ?end.
   } `;
TlnEditorCommentMarkup.query_key = 'text';
class TlnOverwrittenMarkup extends TlnPositionalStyleMarkup {
    constructor(data, id, service) {
        super(data, id, service);
        this.sStyle = this.sStyle + 'color: red;';
        console.log(this.sStyle);
    }
}
/**
 * the SPARQL-query of this datatype.
 **/
TlnOverwrittenMarkup.query = `
   PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
   PREFIX stoff: <http://www.nie.org/ontology/standoff#>
   PREFIX tln: <http://www.nie.org/ontology/nietzsche#>

   SELECT ?sStyle ?start ?end WHERE {
      ?word tln:hasStandoffMarkup4PartThatOverwritesWord ?id.
      ?id stoff:hasCSS ?sStyle;
          stoff:standoffMarkupHasStartIndex ?start;
          stoff:standoffMarkupHasEndIndex ?end.
   } `;


/***/ }),

/***/ "./src/app/tln-edition/datatypes/positional_object.ts":
/*!************************************************************!*\
  !*** ./src/app/tln-edition/datatypes/positional_object.ts ***!
  \************************************************************/
/*! exports provided: TlnPositionalObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TlnPositionalObject", function() { return TlnPositionalObject; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _basic_datatype__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic_datatype */ "./src/app/tln-edition/datatypes/basic_datatype.ts");


/**
 * This is the 'text by foreign hand' instantiation of an element of {@link /interfaces/FusekiResults.html|FusekiResults}.
 * It extends {@link /classes/BasicResultBindingElement.html|BasicResultBindingElement}.
 **/
class TlnPositionalObject extends _basic_datatype__WEBPACK_IMPORTED_MODULE_1__["BasicResultBindingElement"] {
    /**
    * The constructor creates a datatype from the data.
    *
    * @param id if omitted the id will be retrieved from data
    **/
    constructor(data, id, service) {
        super(data, id, service);
        this.left = this.getData4Key('left');
        this.top = this.getData4Key('top');
        this.width = this.getData4Key('width');
        this.height = this.getData4Key('height');
        this.transform = this.getData4Key('transform');
    }
}
/**
 * the internal default key for replacing {@link /classes/TlnWord.html#query|query} by "id"
 * in {@link /classes/TlnWord.html#getQuery|getQuery} if "key" is omitted.
 **/
TlnPositionalObject.default_key = 'page';
/**
 * the public key for replacing {@link /classes/TlnWord.html#query|query} by "id".
 **/
TlnPositionalObject.query_key = 'page';


/***/ }),

/***/ "./src/app/tln-edition/datatypes/preview_data.ts":
/*!*******************************************************!*\
  !*** ./src/app/tln-edition/datatypes/preview_data.ts ***!
  \*******************************************************/
/*! exports provided: TlnPreviewWord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TlnPreviewWord", function() { return TlnPreviewWord; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _word__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./word */ "./src/app/tln-edition/datatypes/word.ts");
/* harmony import */ var _positional_markup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./positional-markup */ "./src/app/tln-edition/datatypes/positional-markup.ts");



class TlnPreviewWord extends _word__WEBPACK_IMPORTED_MODULE_1__["TlnWord"] {
    /**
    * The constructor creates a datatype from the data.
    *
    * @param id if omitted the id will be retrieved from data
    **/
    constructor(data, id, service) {
        super(data, id, service);
        this.markups = [];
        this.earlier_version = this.getData4Key('earlier_version');
        this.left = this.getData4Key('left');
        this.top = this.getData4Key('top');
    }
    static convertData(data, id, service) {
        let elements = [];
        let content = this.getContent(data);
        for (var i = 0; i < content.length; i++) {
            let element = new TlnPreviewWord(content[i], id, service);
            element.markups = _positional_markup__WEBPACK_IMPORTED_MODULE_2__["TlnFilteredPositionalStyleMarkup"].convertData({ head: { vars: [] }, results: { bindings: [content[i]] } }, content[i]['markup_id']);
            if (elements.length > 0 && element.id == elements[elements.length - 1].id) {
                elements[elements.length - 1].markups.push(element.markups[0]);
                if (element.top < elements[elements.length - 1].top && element.left < elements[elements.length - 1].left) {
                    elements[elements.length - 1].left = element.left;
                }
            }
            else {
                elements.push(element);
            }
        }
        elements.sort((w0, w1) => {
            return w0.left - w1.left;
        });
        return elements;
    }
}
/**
 * the internal default key for replacing {@link /classes/TlnLine.html#query|query} by "id"
 * in {@link /classes/TlnLine.html#getQuery|getQuery} if "key" is omitted.
 **/
TlnPreviewWord.default_key = 'line';
TlnPreviewWord.query_key = 'line';
/**
 * the SPARQL-query of this datatype.
 **/
TlnPreviewWord.query = `
   PREFIX homotypic: <http://www.nie.org/ontology/homotypic#>
   PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
   PREFIX stoff: <http://www.nie.org/ontology/standoff#>
   PREFIX tln: <http://www.nie.org/ontology/nietzsche#>

   SELECT DISTINCT ?id ?text ?markup_id ?sStyle ?start ?end ?left ?top ?earlier_version WHERE {
      ?id a tln:Word; 
            tln:wordBelongsToLine ?line; 
            tln:hasTranskriptionPosition/tln:hasLeft ?left;
            tln:hasTranskriptionPosition/tln:hasTop ?top;
            tln:hasText ?text;
            homotypic:hasMarkup ?markup_id. 
      ?markup_id stoff:hasCSS ?sStyle;
          stoff:standoffMarkupHasStartIndex ?start;
          stoff:standoffMarkupHasEndIndex ?end.

      FILTER(NOT EXISTS {?word tln:wordHasWordParts/rdf:rest*/rdf:first ?id})
      FILTER(NOT EXISTS {?word (tln:wordHasEarlierVersion|tln:overwritesWord) ?id})
      OPTIONAL { ?id (tln:wordHasEarlierVersion|tln:overwritesWord)/tln:hasText ?earlier_version}
   }`;


/***/ }),

/***/ "./src/app/tln-edition/datatypes/quant.ts":
/*!************************************************!*\
  !*** ./src/app/tln-edition/datatypes/quant.ts ***!
  \************************************************/
/*! exports provided: NumericResultRow, SelectableWordProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumericResultRow", function() { return NumericResultRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectableWordProperty", function() { return SelectableWordProperty; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var sparqljs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sparqljs */ "./node_modules/sparqljs/sparql.js");
/* harmony import */ var sparqljs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sparqljs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _basic_datatype__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic_datatype */ "./src/app/tln-edition/datatypes/basic_datatype.ts");
/* harmony import */ var _query_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./query_json */ "./src/app/tln-edition/datatypes/query_json.ts");




class NumericResultRow extends _basic_datatype__WEBPACK_IMPORTED_MODULE_2__["BasicResultBindingElement"] {
    constructor(data, id, service) {
        super(data, id, service);
        this.wordIds = [];
        this.numProperties = 1;
        this.numPropertiesPercent = 1;
        this.numPropertiesIncludeMulti = 1;
        this.numTextPercent = 1;
        this.numPropertyTextPercent = 1;
        this.numText = this.getData4Key('numText');
        this.total = this.getData4Key('total');
        this.wordIds.push(this.getData4Key('word'));
        this.updatePercentages();
    }
    updateResult(item) {
        this.wordIds = this.wordIds.concat(item.wordIds);
        this.numPropertiesIncludeMulti = this.wordIds.length;
        this.numProperties = (new Set(this.wordIds)).size;
        this.updatePercentages();
    }
    updatePercentages() {
        this.numPropertiesPercent = Math.round((this.numProperties / this.total) * 10000) / 100;
        this.numTextPercent = Math.round((this.numText / this.total) * 10000) / 100;
        this.numPropertyTextPercent = Math.round((this.numProperties / this.numText) * 10000) / 100;
    }
    static convertData(data, id, service) {
        if (!this.contentConforms2Type(data)) {
            return [];
        }
        let elements = [];
        let content = this.getContent(data);
        for (var i = 0; i < content.length; i++) {
            let element = new NumericResultRow(content[i], service);
            if (elements.length > 0 && elements[elements.length - 1].id == element.id) {
                elements[elements.length - 1].updateResult(element);
            }
            else {
                elements.push(element);
            }
        }
        //console.log(elements)
        return elements;
    }
    static createGroup(whereItems, aggregate_variable, group) {
        if (group != undefined && group != null) {
            return {
                type: "group",
                patterns: [
                    { queryType: "SELECT",
                        variables: [
                            { expression: { type: "aggregate", aggregation: "count", distinct: false, expression: { termType: "Variable", value: group } },
                                variable: { termType: "Variable", value: aggregate_variable } },
                            { termType: "Variable", value: group }
                        ],
                        where: whereItems,
                        type: "query",
                        group: [{ expression: { termType: "Variable", value: group } }]
                    }
                ]
            };
        }
        else {
            return {
                type: "group",
                patterns: [
                    { queryType: "SELECT",
                        variables: [
                            { expression: { type: "aggregate", aggregation: "count", distinct: false, expression: { termType: "Variable", value: this.word_variable } },
                                variable: { termType: "Variable", value: aggregate_variable } }
                        ],
                        where: [{ type: "bgp", triples: whereItems }],
                        type: "query"
                    }
                ]
            };
        }
    }
    static hasTextObject(textQuality) {
        const hasText = (textQuality.clean) ? NumericResultRow.hasCleanText : NumericResultRow.hasText;
        const objectVariable = (textQuality.preferEditedText) ? NumericResultRow.raw_text_variable : NumericResultRow.text_variable;
        return {
            subject: { termType: "Variable", value: NumericResultRow.word_variable },
            predicate: { termType: "NamedNode", value: hasText },
            object: { termType: "Variable", value: objectVariable }
        };
    }
    static optionalEditedTextObject(textQuality) {
        const hasEditedText = (textQuality.clean) ? NumericResultRow.hasCleanEditedText : NumericResultRow.hasEditedText;
        return { type: "optional", patterns: [{ type: "bgp", triples: [{
                            subject: { termType: "Variable", value: NumericResultRow.word_variable },
                            predicate: { termType: "NamedNode", value: hasEditedText },
                            object: { termType: "Variable", value: NumericResultRow.edited_text_variable }
                        }] }]
        };
    }
    static insertTextConditions(parsedQuery, textQuality) {
        parsedQuery['where'][0].triples.push(this.hasTextObject(textQuality));
        if (textQuality.preferEditedText) {
            parsedQuery['where'].push(this.optionalEditedTextObject(textQuality));
            parsedQuery['where'].push(this.bindObject);
        }
    }
    static getSelectableQuery(selectableProperties, scopus, filterSelectedWordIds, textQuality, text, ignoreCase, orderDesc) {
        let parser = new sparqljs__WEBPACK_IMPORTED_MODULE_1__["Parser"]();
        let sparqlGenerator = new sparqljs__WEBPACK_IMPORTED_MODULE_1__["Generator"]({});
        let parsedQuery = parser.parse(this.query);
        let basicWhereTriples = parsedQuery.where[0].triples.slice();
        this.insertTextConditions(parsedQuery, textQuality);
        const whereBeforeProperties = JSON.parse(JSON.stringify(parsedQuery.where)); //deep cloning
        selectableProperties.forEach(selectableProperty => {
            parsedQuery.where[0].triples.push({
                subject: { termType: "Variable", value: this.word_variable },
                predicate: { termType: "NamedNode", value: selectableProperty.id },
                object: { termType: "Variable", value: selectableProperty.id.substring(selectableProperty.id.indexOf('#') + 1) }
            });
        });
        if (text != undefined && text != null && text != '') {
            let regexFilter = { type: "filter", expression: {
                    type: "operation", operator: "regex", args: [
                        { termType: "Variable", value: this.text_variable },
                        { termType: "Literal", value: text }
                    ]
                }
            };
            if (ignoreCase != undefined && ignoreCase) {
                regexFilter.expression.args.push({ termType: "Literal", value: "i" });
            }
            parsedQuery.where.push(regexFilter);
        }
        if (filterSelectedWordIds.length > 0) {
            let filters = filterSelectedWordIds.map(word => _query_json__WEBPACK_IMPORTED_MODULE_3__["QueryJson"].createEqualsOperation(word, this.word_variable));
            let filterObject = _query_json__WEBPACK_IMPORTED_MODULE_3__["QueryJson"].createFilterObject(filters);
            parsedQuery.where.push(filterObject);
        }
        let totalGroup = this.createGroup(basicWhereTriples, "total");
        let numGroup = this.createGroup(whereBeforeProperties, "numText", this.text_variable);
        if (scopus.length > 0) {
            let filters = scopus.map(manuscript => _query_json__WEBPACK_IMPORTED_MODULE_3__["QueryJson"].createEqualsOperation(manuscript.id, this.manuscript_variable));
            let filterObject = _query_json__WEBPACK_IMPORTED_MODULE_3__["QueryJson"].createFilterObject(filters);
            parsedQuery.where.push(filterObject);
            totalGroup['patterns'][0].where.push(filterObject);
            numGroup['patterns'][0].where.push(filterObject);
        }
        parsedQuery.where.push(totalGroup);
        parsedQuery.where.push(numGroup);
        parsedQuery['order'] = [this.orderObject];
        return sparqlGenerator.stringify(parsedQuery);
    }
}
NumericResultRow.hasText = "http://www.nie.org/ontology/nietzsche#hasText";
NumericResultRow.hasCleanText = "http://www.nie.org/ontology/nietzsche#hasCleanText";
NumericResultRow.hasEditedText = "http://www.nie.org/ontology/nietzsche#hasEditedText";
NumericResultRow.hasCleanEditedText = "http://www.nie.org/ontology/nietzsche#hasCleanEditedText";
NumericResultRow.manuscript_variable = "manuscript";
NumericResultRow.text_variable = "id";
NumericResultRow.raw_text_variable = "raw_text";
NumericResultRow.edited_text_variable = "edited_text";
NumericResultRow.word_variable = "word";
NumericResultRow.bindObject = { type: "bind", variable: { termType: "Variable", value: NumericResultRow.text_variable },
    expression: { type: "operation", operator: "if", args: [
            { type: "operation", operator: "bound", args: [{ termType: "Variable", value: NumericResultRow.edited_text_variable }] },
            { termType: "Variable", value: NumericResultRow.edited_text_variable },
            { termType: "Variable", value: NumericResultRow.raw_text_variable },
        ] }
};
NumericResultRow.orderObject = { expression: { termType: "Variable", value: NumericResultRow.text_variable }, descending: false };
NumericResultRow.punctuationPattern = /[.,!;:\-_–()“„]/g;
NumericResultRow.query = `
   PREFIX tln: <http://www.nie.org/ontology/nietzsche#>
   PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

   SELECT ?id ?word ?numText ?total  WHERE { 
      ?manuscript a tln:ArchivalManuscriptUnity;
            tln:hasManuscriptType "Mappe";
            tln:hasPages/rdf:rest*/rdf:first ?page.
      ?page a tln:Page; 
        tln:hasWords/rdf:rest*/rdf:first ?word.
   }`;
class SelectableWordProperty extends _basic_datatype__WEBPACK_IMPORTED_MODULE_2__["BasicResultBindingElement"] {
    //propName: string;
    constructor(data, id, service) {
        super(data, id, service);
        this.id = this.getData4Key('id');
        this.label = this.getData4Key('label');
        //this.propName = this.getData4Key('propName');
    }
}
SelectableWordProperty.query = `
   PREFIX tln: <http://www.nie.org/ontology/nietzsche#>
   PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
   PREFIX skos: <http://www.w3.org/2004/02/skos/core#>

   SELECT DISTINCT  ?id ?label ?propName WHERE {
      ?id rdfs:subPropertyOf tln:selectableWordProperty;
                skos:prefLabel ?label.
      #BIND(STRAFTER(STR(?id), STR(tln:)) as ?propName)
   }`;


/***/ }),

/***/ "./src/app/tln-edition/datatypes/query_json.ts":
/*!*****************************************************!*\
  !*** ./src/app/tln-edition/datatypes/query_json.ts ***!
  \*****************************************************/
/*! exports provided: Literal, NamedNode, Variable, QueryObject, Operation, BGP, QueryJson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Literal", function() { return Literal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NamedNode", function() { return NamedNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Variable", function() { return Variable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryObject", function() { return QueryObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Operation", function() { return Operation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BGP", function() { return BGP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryJson", function() { return QueryJson; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var sparqljs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sparqljs */ "./node_modules/sparqljs/sparql.js");
/* harmony import */ var sparqljs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sparqljs__WEBPACK_IMPORTED_MODULE_1__);


class Literal {
    constructor(value) {
        this.termType = "Literal";
        this.value = value;
    }
}
class NamedNode {
    constructor(value) {
        this.termType = "NamedNode";
        this.value = value;
    }
}
class Variable {
    constructor(value) {
        this.termType = "Variable";
        this.value = value;
    }
}
class QueryObject {
    constructor(type) {
        this.type = type;
    }
}
class Operation extends QueryObject {
    constructor(operator, args) {
        super("operation");
        this.operator = operator;
        this.args = args;
    }
}
class BGP extends QueryObject {
    constructor(triples) {
        super("bgp");
        this.triples = triples;
    }
}
class QueryJson {
    static toString(parsedQuery) {
        const sparqlGenerator = new sparqljs__WEBPACK_IMPORTED_MODULE_1__["Generator"]({});
        return sparqlGenerator.stringify(parsedQuery);
    }
    static parseQuery(query) {
        const parser = new sparqljs__WEBPACK_IMPORTED_MODULE_1__["Parser"]();
        return parser.parse(query);
    }
    static createFilterObject(filters) {
        let filterObject = { type: "filter", expression: null };
        if (filters.length > 1) {
            filterObject.expression = { type: "operation", operator: "||", args: [] };
            let filter = filters.pop();
            this.pushFilter2Args(filters, filterObject.expression.args, filter);
        }
        else {
            filterObject.expression = filters[0];
        }
        return filterObject;
    }
    static createEqualsOperation(id, variable_name) {
        return new Operation("=", [new Variable(variable_name), new NamedNode(id)]);
    }
    static createRegexOperation(variable_name, regex, flag) {
        let args = [new Variable(variable_name), new Literal(regex)];
        if (flag != undefined && flag != null && flag != '') {
            args.push(new Literal(flag));
        }
        return new Operation("regex", args);
    }
    static pushFilter2Args(filters, args, latestFilter) {
        if (filters.length > 1) {
            let filter = filters.pop();
            let disjunction = { type: "operation", operator: "||", args: [] };
            disjunction.args.push(filter);
            disjunction.args.push(latestFilter);
            this.pushFilter2Args(filters, args, disjunction);
        }
        else {
            args.push(latestFilter);
            args.push(filters.pop());
        }
    }
    static hasSyntaxError(query) {
        const parser = new sparqljs__WEBPACK_IMPORTED_MODULE_1__["Parser"]();
        try {
            const parsedQuery = parser.parse(query);
        }
        catch (e) {
            return true;
        }
        return false;
    }
    static getSyntaxError(query) {
        const parser = new sparqljs__WEBPACK_IMPORTED_MODULE_1__["Parser"]();
        try {
            const parsedQuery = parser.parse(query);
        }
        catch (e) {
            return String(e);
        }
        return '';
    }
    static splitWhereBGP(bgp, key) {
        let triplesWithKey = bgp.triples.filter(triple => triple.subject.value == key);
        let triplesWithOutKey = bgp.triples.filter(triple => triple.subject.value != key);
        return [new BGP(triplesWithKey), new BGP(triplesWithOutKey)];
    }
}


/***/ }),

/***/ "./src/app/tln-edition/datatypes/search.ts":
/*!*************************************************!*\
  !*** ./src/app/tln-edition/datatypes/search.ts ***!
  \*************************************************/
/*! exports provided: TlnExtWord, PageResult, FoundPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TlnExtWord", function() { return TlnExtWord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageResult", function() { return PageResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoundPage", function() { return FoundPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _basic_datatype__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic_datatype */ "./src/app/tln-edition/datatypes/basic_datatype.ts");
/* harmony import */ var _query_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./query_json */ "./src/app/tln-edition/datatypes/query_json.ts");
/* harmony import */ var _word__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./word */ "./src/app/tln-edition/datatypes/word.ts");




class TlnExtWord extends _word__WEBPACK_IMPORTED_MODULE_3__["TlnWord"] {
    constructor(data, id, service) {
        super(data, id, service);
        this.startLine = this.getData4Key('startLine');
        this.endLine = this.getData4Key('endLine');
    }
}
class PageResult {
    constructor(words) {
        this.words = [];
        this.words = words;
    }
    getWords() {
        return this.words.map(word => word.id);
    }
    getStartLine() {
        let sortedWords = this.words.sort((word0, word1) => word0.line_number - word1.line_number);
        if (sortedWords.length == 0) {
            return '';
        }
        return (sortedWords[0].startLine != undefined && sortedWords[0].startLine != null) ? sortedWords[0].startLine : sortedWords[0].line;
    }
    getEndLine() {
        let sortedWords = this.words.sort((word0, word1) => word0.line_number - word1.line_number);
        if (sortedWords.length == 0) {
            return '';
        }
        return (sortedWords[sortedWords.length - 1].endLine != undefined && sortedWords[sortedWords.length - 1].endLine != null)
            ? sortedWords[sortedWords.length - 1].endLine : sortedWords[sortedWords.length - 1].line;
    }
}
class FoundPage extends _basic_datatype__WEBPACK_IMPORTED_MODULE_1__["BasicResultBindingElement"] {
    constructor(data, id, service) {
        super(data, id, service);
        this.results = [];
        this.title = this.getData4Key('title');
        this.number = this.getData4Key('number');
        this.manuscript = this.getData4Key('manuscript');
    }
    removeIncompleteResults(searchTerms, ignoreCaseFlag) {
        this.results = this.results.filter(result => searchTerms.every(searchText => result.words.filter(word => word.text.match(new RegExp('^[^\w\s]*' + searchText + '.*', ignoreCaseFlag))).length > 0));
    }
    /**
     * This method returns the parametrized SPARQL query of this FoundPage
     *
     * If "key" is omitted {@link /classes/BasicResultBindingElement.html#default_key|default_key} will be used.
     *
     * @param find the search text
     * @param korpus (optional) restrict search on selected ManuscriptPages.
     **/
    static getSeachQuery(find, ignoreCase, korpus, manuscript_variable) {
        let words = find.split(' ');
        let find_regex = words.join('.*') + '.*';
        let or_find_regex = '^[^\\w]?(' + words.join('.*|') + '.*)';
        let parsedQuery = _query_json__WEBPACK_IMPORTED_MODULE_2__["QueryJson"].parseQuery(this.query);
        let ignoreCaseFlag = (ignoreCase) ? 'i' : '';
        let join_filters = [_query_json__WEBPACK_IMPORTED_MODULE_2__["QueryJson"].createRegexOperation('fulltext', find_regex, 's' + ignoreCaseFlag)];
        parsedQuery.where[1] = _query_json__WEBPACK_IMPORTED_MODULE_2__["QueryJson"].createFilterObject(join_filters);
        if (korpus.length > 0 && manuscript_variable != undefined && manuscript_variable != null) {
            let equal_filters = korpus.map(manuscript => _query_json__WEBPACK_IMPORTED_MODULE_2__["QueryJson"].createEqualsOperation(manuscript.id, manuscript_variable));
            parsedQuery.where[3] = _query_json__WEBPACK_IMPORTED_MODULE_2__["QueryJson"].createFilterObject(equal_filters);
        }
        let or_filters = [_query_json__WEBPACK_IMPORTED_MODULE_2__["QueryJson"].createRegexOperation('text', or_find_regex, ignoreCaseFlag)];
        parsedQuery.where.push(_query_json__WEBPACK_IMPORTED_MODULE_2__["QueryJson"].createFilterObject(or_filters));
        return _query_json__WEBPACK_IMPORTED_MODULE_2__["QueryJson"].toString(parsedQuery);
    }
    static convertData(data, id, service) {
        let elements = [];
        let pages = [];
        let searchTerms = service.getSearchTerms();
        let content = this.getContent(data);
        let currentResult = null;
        let currentPage = null;
        for (var i = 0; i < content.length; i++) {
            let page = new FoundPage(content[i], id, service);
            if (content[i]['word'] != undefined && content[i]['word'] != null) {
                let words = TlnExtWord.convertData({ head: { vars: [] }, results: { bindings: [content[i]] } }, content[i]['word']['value']);
                if (pages.length == 0 || pages.map(page => page.id).indexOf(page.id) == -1) {
                    currentResult = new PageResult(words);
                    currentPage = page;
                    currentPage.results.push(currentResult);
                    pages.push(currentPage);
                }
                else {
                    if (currentResult.words.indexOf(words[0]) == -1) {
                        if (currentResult.words.length > 0
                            && (Math.abs(Math.min(...currentResult.words.map(word => word.line_number)) - words[0].line_number) > 4
                                || Math.abs(Math.max(...currentResult.words.map(word => word.line_number)) - words[0].line_number) > 4)) {
                            currentResult = new PageResult(words);
                            currentPage.results.push(currentResult);
                        }
                        else {
                            currentResult.words.push(words[0]);
                        }
                    }
                }
            }
        }
        pages.forEach(page => page.removeIncompleteResults(searchTerms, service.getIgnoreCaseFlag()));
        return pages.filter(page => page.results.length > 0);
    }
}
FoundPage.query = `
   PREFIX tln: <http://www.nie.org/ontology/nietzsche#>
   PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

   SELECT DISTINCT ?id ?manuscript ?title ?number ?word ?text ?line ?line_number ?startLine ?endLine WHERE {
      ?id tln:hasPseudoText ?fulltext.
      FILTER(?fulltext != "none").
      ?manuscript a tln:ArchivalManuscriptUnity;
         tln:hasManuscriptType "Mappe";
         tln:hasPages/rdf:rest*/rdf:first ?id;
         tln:hasTitle ?title.
      FILTER(?manuscript != "none").
      ?id a tln:Page;
          tln:hasNumber ?number;
          tln:hasWords/rdf:rest*/rdf:first ?word.
      ?word tln:hasOutputText ?text;
          tln:wordBelongsToLine ?line.
      ?line tln:lineHasNumber ?line_number.
      OPTIONAL{ ?previouseNode rdf:rest/rdf:first ?line;
                     rdf:first ?startLine.}
      OPTIONAL{ ?myNode rdf:first ?line;
                     rdf:rest/rdf:first ?endLine.}
   } order by ?id ?line_number`;


/***/ }),

/***/ "./src/app/tln-edition/datatypes/status.ts":
/*!*************************************************!*\
  !*** ./src/app/tln-edition/datatypes/status.ts ***!
  \*************************************************/
/*! exports provided: TlnStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TlnStatus", function() { return TlnStatus; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _basic_datatype__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic_datatype */ "./src/app/tln-edition/datatypes/basic_datatype.ts");


/**
 * This is the page/manuscript status instantiation of an element of {@link /interfaces/FusekiResults.html|FusekiResults}.
 **/
class TlnStatus extends _basic_datatype__WEBPACK_IMPORTED_MODULE_1__["BasicResultBindingElement"] {
    /**
    * The constructor creates a datatype from the data.
    *
    * @param id if omitted the id will be retrieved from data
    **/
    constructor(data, id, service) {
        super(data, id, service);
        this.status = this.getData4Key('status');
        if (this.status == undefined || this.status == null) {
            this.status = 'complete';
        }
    }
}
TlnStatus.default_key = 'id';
TlnStatus.query_key = 'id';
/**
 * the SPARQL-query of this datatype.
 **/
TlnStatus.query = `
   PREFIX tln: <http://www.nie.org/ontology/nietzsche#>
   PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
   PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

   SELECT ?id ?status WHERE {
      { ?id tln:archivalManuscriptUnityHasDataProcessingStatus ?status } 
      UNION 
      { ?id tln:pageHasDataProcessingStatus ?status }
   }`;


/***/ }),

/***/ "./src/app/tln-edition/datatypes/svg_image.ts":
/*!****************************************************!*\
  !*** ./src/app/tln-edition/datatypes/svg_image.ts ***!
  \****************************************************/
/*! exports provided: SVGImage, SVGImageClip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGImage", function() { return SVGImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGImageClip", function() { return SVGImageClip; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image */ "./src/app/tln-edition/datatypes/image.ts");


class SVGImage extends _image__WEBPACK_IMPORTED_MODULE_1__["TlnImage"] {
    constructor(data, id, service) {
        super(data, id, service);
        this.x = this.text_field.left;
        this.y = this.text_field.top;
    }
}
SVGImage.query = `
   PREFIX tln: <http://www.nie.org/ontology/nietzsche#>

   SELECT ?id ?filename ?width ?height ?URL ?secondaryURL ?t_left ?t_top ?t_width ?t_height ?page WHERE {
      ?id a tln:SVGImage;
           tln:hasPrimaryurl ?URL;
           tln:hasSecondaryurl ?secondaryURL;
           tln:hasFileName ?filename;
           tln:hasWidth ?width;
           tln:hasHeight ?height;
           tln:hasTextField ?textfield.
      ?textfield tln:hasLeft ?t_left;
           tln:hasTop ?t_top;
           tln:hasWidth ?t_width;
           tln:hasHeight ?t_height;
           ^tln:pageIsOnTextField ?page.
   }`;
class SVGImageClip extends SVGImage {
    constructor(data, id, service) {
        super(data, id, service);
        this.y = this.getData4Key('y');
    }
}
SVGImageClip.query = `
   PREFIX tln: <http://www.nie.org/ontology/nietzsche#>
   PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

   SELECT ?id ?filename ?width ?height ?URL ?secondaryURL ?t_left ?t_top ?t_width ?t_height ?page ?y ?end_bottom WHERE {
      ?id a tln:SVGImage;
           tln:hasPrimaryurl ?URL;
           tln:hasSecondaryurl ?secondaryURL;
           tln:hasFileName ?filename;
           tln:hasWidth ?width;
           tln:hasHeight ?height;
           tln:hasTextField ?textfield.
      ?textfield tln:hasLeft ?t_left;
           tln:hasTop ?y;
           tln:hasWidth ?t_width;
           ^tln:pageIsOnTextField ?page.
       ?page tln:hasLines ?lines.
       ?lines rdf:rest* ?start_node;
              rdf:rest* ?end_node.
       ?start_node rdf:first ?startLine;.
       ?end_node rdf:first ?endLine;.
       ?startLine tln:lineHasTopValueOnTranskription ?start_top.
       ?endLine tln:lineHasBottomValueOnTranskription ?end_bottom.
       OPTIONAL { ?start_node ^rdf:rest/rdf:first ?previousLine.
         ?previousLine tln:lineHasBottomValueOnTranskription ?previous_bottom. 
       }
       OPTIONAL { ?end_node rdf:rest/rdf:first/rdf:rest/rdf:first ?nextLine.
         ?nextLine tln:lineHasTopValueOnTranskription ?next_top. 
       }
       BIND(IF(bound(?previous_bottom), ?previous_bottom+1, ?start_top - 5) as ?t_top)
       BIND(IF(bound(?next_top), ?next_top-?t_top, ?end_bottom - ?t_top + 10) as ?t_height)
   }`;


/***/ }),

/***/ "./src/app/tln-edition/datatypes/text_version.ts":
/*!*******************************************************!*\
  !*** ./src/app/tln-edition/datatypes/text_version.ts ***!
  \*******************************************************/
/*! exports provided: TlnTextVersion, TlnTextUnity, TlnTextGeneticOrder, TlnStandaloneTextVersion, TlnPageWithTextGeneticOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TlnTextVersion", function() { return TlnTextVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TlnTextUnity", function() { return TlnTextUnity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TlnTextGeneticOrder", function() { return TlnTextGeneticOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TlnStandaloneTextVersion", function() { return TlnStandaloneTextVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TlnPageWithTextGeneticOrder", function() { return TlnPageWithTextGeneticOrder; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _basic_datatype__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic_datatype */ "./src/app/tln-edition/datatypes/basic_datatype.ts");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page */ "./src/app/tln-edition/datatypes/page.ts");



class TlnTextVersion extends _basic_datatype__WEBPACK_IMPORTED_MODULE_1__["BasicResultBindingElement"] {
    constructor(data, id, service) {
        super(data, id, service);
        this.textUnities = [];
        this.title = this.getData4Key('title');
        this.extUrl = this.getData4Key('extUrl');
        this.manuscript = this.getData4Key('manuscript');
    }
}
class TlnTextUnity extends _basic_datatype__WEBPACK_IMPORTED_MODULE_1__["BasicResultBindingElement"] {
    constructor(data, id, service) {
        super(data, id, service);
        this.number = this.getData4Key('number');
        this.startLine = this.getData4Key('startLine');
        this.endLine = this.getData4Key('endLine');
        this.belongsToPage = this.getData4Key('text_page');
        this.startLineIri = this.getData4Key('startLineIri');
        this.endLineIri = this.getData4Key('endLineIri');
        this.hasFaksimileImage = this.getData4Key('hasFaksimileImage');
    }
}
/**
 * This is the text version instantiation of an element of {@link /interfaces/FusekiResults.html|FusekiResults}.
 * It extends {@link /classes/BasicResultBindingElement.html|BasicResultBindingElement}.
 **/
class TlnTextGeneticOrder extends _basic_datatype__WEBPACK_IMPORTED_MODULE_1__["BasicResultBindingElement"] {
    /**
     * The constructor creates a datatype from the data.
     *
     * @param id if omitted the id will be retrieved from data
     **/
    constructor(data, id, service) {
        super(data, id, service);
        this.textVersions = [];
    }
    static convertData(data, id, service) {
        let elements = [];
        let content = this.getContent(data);
        for (var i = 0; i < content.length; i++) {
            let element = new TlnTextGeneticOrder(content[i], service);
            let versions = TlnTextVersion.convertData({ head: { vars: [] }, results: { bindings: [content[i]] } }, content[i]['text_version']['value']);
            let text_unities = (content[i]['text_unity'] != undefined) ?
                TlnTextUnity.convertData({ head: { vars: [] }, results: { bindings: [content[i]] } }, content[i]['text_unity']['value']) : [];
            /*if (text_unities.length > 0){
               console.log(text_unities[0]);
            }*/
            if (elements.length > 0 && elements[elements.length - 1].id == element.id) {
                if (elements[elements.length - 1].textVersions.length > 0
                    && elements[elements.length - 1].textVersions[elements[elements.length - 1].textVersions.length - 1].id == versions[0].id) {
                    if (text_unities.length > 0) {
                        elements[elements.length - 1].textVersions[elements[elements.length - 1].textVersions.length - 1].textUnities.push(text_unities[0]);
                    }
                }
                else {
                    if (text_unities.length > 0) {
                        versions[0].textUnities.push(text_unities[0]);
                    }
                    elements[elements.length - 1].textVersions.push(versions[0]);
                }
            }
            else {
                if (text_unities.length > 0) {
                    versions[0].textUnities.push(text_unities[0]);
                }
                element.textVersions.push(versions[0]);
                elements.push(element);
            }
        }
        //console.log(elements)
        return elements;
    }
}
/**
 * the internal default key for replacing {@link /classes/TlnLine.html#query|query} by "id"
 * in {@link /classes/TlnLine.html#getQuery|getQuery} if "key" is omitted.
 **/
TlnTextGeneticOrder.default_key = 'page';
/**
 * the SPARQL-query of this datatype.
 **/
TlnTextGeneticOrder.query = `
   PREFIX tln: <http://www.nie.org/ontology/nietzsche#>
   PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
   
   SELECT distinct ?id ?text_version ?text_unity ?text_page ?number ?startLine ?endLine ?title WHERE {
      {?version a tln:IdentifiedTextVersion;
  		   tln:identifiesAsVersion/rdf:rest*/rdf:first ?page.
      } UNION {
      ?version a tln:IdentifiedTextVersion;
  		   tln:identifiesAsVersion/rdf:rest*/rdf:first/tln:belongsToPage ?page.
      }
      ?id tln:hasGeneticOrder/rdf:rest*/rdf:first ?version;
          tln:hasGeneticOrder/rdf:rest*/rdf:first ?text_version.
   
      OPTIONAL { ?text_version tln:identifiesAsVersion/rdf:rest*/rdf:first ?text_unity.
         OPTIONAL { ?text_unity tln:hasNumber ?number.
                    ?manuscript a tln:ArchivalManuscriptUnity;
                        tln:hasTitle ?title;
                        tln:hasPages/rdf:rest*/rdf:first ?text_unity.
         }
         OPTIONAL { ?text_unity tln:belongsToPage ?text_page; 
                           tln:startLine/tln:lineHasNumber?startLine;
                           tln:endLine/tln:lineHasNumber ?endLine.
      			   ?text_page tln:hasNumber ?number.
      			   ?manuscript a tln:ArchivalManuscriptUnity;
                     tln:hasTitle ?title;
                     tln:hasPages/rdf:rest*/rdf:first ?text_page.
         }
      }
      OPTIONAL { ?text_version tln:textUnitHasTitle ?title.}
   }`;
/**
 * the public key for replacing {@link /classes/TlnLine.html#query|query} by "id".
 **/
TlnTextGeneticOrder.query_key = 'page';
class TlnStandaloneTextVersion extends TlnTextVersion {
    constructor(data, id, service) {
        super(data, id, service);
        if (this.service != null) {
            this.service.initSelecteTextVersion(this);
        }
    }
    static convertData(data, id, service) {
        let elements = [];
        let content = this.getContent(data);
        for (var i = 0; i < content.length; i++) {
            let element = new TlnStandaloneTextVersion(content[i], id, service);
            let text_unities = (content[i]['text_unity'] != undefined) ?
                TlnTextUnity.convertData({ head: { vars: [] }, results: { bindings: [content[i]] } }, content[i]['text_unity']['value']) : [];
            if (elements.length > 0 && elements[elements.length - 1].id == element.id) {
                if (text_unities.length > 0) {
                    elements[elements.length - 1].textUnities.push(text_unities[0]);
                }
            }
            else {
                if (text_unities.length > 0) {
                    element.textUnities.push(text_unities[0]);
                }
                elements.push(element);
            }
        }
        //console.log(elements)
        return elements;
    }
}
/**
 * the internal default key for replacing {@link /classes/TlnLine.html#query|query} by "id"
 * in {@link /classes/TlnLine.html#getQuery|getQuery} if "key" is omitted.
 **/
TlnStandaloneTextVersion.default_key = 'geneticOrder';
/**
 * the SPARQL-query of this datatype.
 **/
TlnStandaloneTextVersion.query = `
   PREFIX tln: <http://www.nie.org/ontology/nietzsche#>
   PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
   
   SELECT distinct ?id ?text_unity ?text_page ?manuscript ?number ?startLine ?startLineIri ?endLine ?endLineIri ?title ?extUrl ?hasFaksimileImage WHERE {
      ?geneticOrder a tln:TextGenesis;
          tln:hasGeneticOrder/rdf:rest*/rdf:first ?id.
   
      OPTIONAL { ?id tln:identifiesAsVersion/rdf:rest*/rdf:first ?text_unity.
         OPTIONAL { ?text_unity tln:hasNumber ?number.
                    ?manuscript a tln:ArchivalManuscriptUnity;
                        tln:hasTitle ?title;
                        tln:hasPages/rdf:rest*/rdf:first ?text_unity.
            BIND(exists{ ?text_unity tln:hasFaksimileImage ?image } as ?hasFaksimileImage)
         }
         OPTIONAL { ?text_unity tln:belongsToPage ?text_page; 
                           tln:startLine ?startLineIri;
                           tln:endLine ?endLineIri.
      			   ?text_page tln:hasNumber ?number.
                  ?startLineIri tln:lineHasNumber?startLine.
                  ?endLineIri tln:lineHasNumber ?endLine.
      			   ?manuscript a tln:ArchivalManuscriptUnity;
                     tln:hasTitle ?title;
                     tln:hasPages/rdf:rest*/rdf:first ?text_page.
            BIND(exists{ ?text_page tln:hasFaksimileImage ?image } as ?hasFaksimileImage)
         }
      }
      OPTIONAL { ?id tln:textUnitHasTitle ?title; tln:textUnitHasUrl ?extUrl.}
   }`;
/**
 * the public key for replacing {@link /classes/TlnLine.html#query|query} by "id".
 **/
TlnStandaloneTextVersion.query_key = 'geneticOrder';
class TlnPageWithTextGeneticOrder extends _page__WEBPACK_IMPORTED_MODULE_2__["PageStub"] {
}
/**
 * the internal default key for replacing {@link /classes/TlnLine.html#query|query} by "id"
 * in {@link /classes/TlnLine.html#getQuery|getQuery} if "key" is omitted.
 **/
TlnPageWithTextGeneticOrder.default_key = 'manuscript';
/**
 * the SPARQL-query of this datatype.
 **/
TlnPageWithTextGeneticOrder.query = `
   PREFIX tln: <http://www.nie.org/ontology/nietzsche#>
   PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
   
   SELECT distinct ?id ?number WHERE {
      ?manuscript tln:hasPages/rdf:rest*/rdf:first ?id.
      {?version a tln:IdentifiedTextVersion;
  		   tln:identifiesAsVersion/rdf:rest*/rdf:first ?id.
      } UNION {
      ?version a tln:IdentifiedTextVersion;
  		   tln:identifiesAsVersion/rdf:rest*/rdf:first/tln:belongsToPage ?id.
      }
      ?id tln:hasNumber ?number.
     }`;
/**
 * the public key for replacing {@link /classes/TlnLine.html#query|query} by "id".
 **/
TlnPageWithTextGeneticOrder.query_key = 'manuscript';


/***/ }),

/***/ "./src/app/tln-edition/datatypes/type.ts":
/*!***********************************************!*\
  !*** ./src/app/tln-edition/datatypes/type.ts ***!
  \***********************************************/
/*! exports provided: TlnType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TlnType", function() { return TlnType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _basic_datatype__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic_datatype */ "./src/app/tln-edition/datatypes/basic_datatype.ts");


/**
 * This is the datatype instantiation of an element of {@link /interfaces/FusekiResults.html|FusekiResults}.
 **/
class TlnType extends _basic_datatype__WEBPACK_IMPORTED_MODULE_1__["BasicResultBindingElement"] {
    /**
    * The constructor creates a datatype from the data.
    *
    * @param id if omitted the id will be retrieved from data
    **/
    constructor(data, id, service) {
        super(data, id, service);
        this.type = this.getData4Key('type');
    }
}
TlnType.default_key = 'id';
TlnType.query_key = 'id';
/**
 * the SPARQL-query of this datatype.
 **/
TlnType.query = `
   PREFIX tln: <http://www.nie.org/ontology/nietzsche#>
   PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

   SELECT distinct ?type WHERE {
       ?id a ?type.
       ?type rdfs:isDefinedBy <http://www.nie.org/ontology/nietzsche>.
   }`;


/***/ }),

/***/ "./src/app/tln-edition/datatypes/word.ts":
/*!***********************************************!*\
  !*** ./src/app/tln-edition/datatypes/word.ts ***!
  \***********************************************/
/*! exports provided: TlnWord, FaksimileWord, WordStub, WordWithLine, WordRepresentation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TlnWord", function() { return TlnWord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaksimileWord", function() { return FaksimileWord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordStub", function() { return WordStub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordWithLine", function() { return WordWithLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordRepresentation", function() { return WordRepresentation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _basic_datatype__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic_datatype */ "./src/app/tln-edition/datatypes/basic_datatype.ts");
/* harmony import */ var _positional_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./positional_object */ "./src/app/tln-edition/datatypes/positional_object.ts");



/**
 * This is the word instantiation of an element of {@link /interfaces/FusekiResults.html|FusekiResults}.
 * It extends {@link /classes/BasicResultBindingElement.html|BasicResultBindingElement}.
 **/
class TlnWord extends _positional_object__WEBPACK_IMPORTED_MODULE_2__["TlnPositionalObject"] {
    /**
    * The constructor creates a datatype from the data.
    *
    * @param id if omitted the id will be retrieved from data
    **/
    constructor(data, id, service) {
        super(data, id, service);
        this.text = this.getData4Key('text');
        this.edited_text = this.getData4Key('edited_text');
        this.line = this.getData4Key('line');
        this.line_number = this.getData4Key('line_number');
        this.deleted = this.getData4Key('deleted');
        let undeleted = this.getData4Key('undeleted');
        if (undeleted) {
            this.deleted = false;
        }
        this.deletion_path = this.getData4Key('deletion_path');
    }
}
/**
 * the SPARQL-query of this datatype.
 **/
TlnWord.query = `
   PREFIX tln: <http://www.nie.org/ontology/nietzsche#>
   PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

   SELECT ?id ?text ?edited_text ?left ?top ?width ?height ?transform ?line ?line_number ?deleted ?deletion_path ?undeleted WHERE {
      ?page tln:hasWords/rdf:rest*/rdf:first ?id.
      ?id tln:wordBelongsToLine ?line; 
            tln:hasText ?text;
            tln:hasTranskriptionPosition ?tp.
    	?tp tln:hasLeft ?left; tln:hasTop ?top; tln:hasWidth ?width; tln:hasHeight ?height.
      ?line tln:lineHasNumber ?line_number.
      BIND(exists{
            {?id tln:wordIsDeletedByPath ?path} 
            UNION{ ?id tln:wordHasWordParts/rdf:rest*/rdf:first ?word_part.
                   ?word_part tln:hasTranskriptionPosition ?tp; tln:wordIsDeletedByPath ?path}
          } as ?deleted)
      BIND(exists{
            {?id tln:wordIsUndeletedFromPath ?path} 
            UNION{ ?id tln:wordHasWordParts/rdf:rest*/rdf:first ?word_part.
                   ?word_part tln:hasTranskriptionPosition ?tp; tln:wordIsUndeletedFromPath ?path}
          } as ?undeleted)
      OPTIONAl { ?tp tln:hasTransform ?transform.}
      OPTIONAl { ?id tln:hasEditedText ?edited_text.}
      OPTIONAl { ?id tln:wordIsDeletedByPath/tln:hasDAttribute ?deletion_path.}
      OPTIONAl { ?id tln:wordHasWordParts/rdf:rest*/rdf:first ?word_part.
                   ?word_part tln:hasTranskriptionPosition ?tp; tln:wordIsDeletedByPath/tln:hasDAttribute ?deletion_path}
   } `;
/**
 * This is the faksimile word instantiation of an element of {@link /interfaces/FusekiResults.html|FusekiResults}.
 * It extends {@link /classes/BasicResultBindingElement.html|BasicResultBindingElement}.
 **/
class FaksimileWord extends TlnWord {
}
/**
 * the SPARQL-query of this datatype.
 **/
FaksimileWord.query = `
   PREFIX tln: <http://www.nie.org/ontology/nietzsche#>
   PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

   SELECT ?id ?text ?edited_text ?left ?top ?width ?height ?transform ?line ?line_number ?deleted ?undeleted WHERE {
      ?page tln:hasWords/rdf:rest*/rdf:first ?id.
      ?id tln:wordBelongsToLine ?line; 
            tln:hasText ?text;
            tln:hasFaksimilePosition ?fp.
    	?fp tln:hasLeft ?left; tln:hasTop ?top; tln:hasWidth ?width; tln:hasHeight ?height.
      ?line tln:lineHasNumber ?line_number.
      BIND(exists{{?id tln:wordIsDeletedByPath ?path} UNION { ?id tln:wordHasWordParts/rdf:rest*/rdf:first/tln:wordIsDeletedByPath ?path}
      } as ?deleted)
      BIND(exists{
            {?id tln:wordIsUndeletedFromPath ?path}
            UNION{ ?id tln:wordHasWordParts/rdf:rest*/rdf:first ?word_part.
                   ?word_part tln:hasTranskriptionPosition ?tp; tln:wordIsUndeletedFromPath ?path}
          } as ?undeleted)
      OPTIONAl { ?fp tln:hasTransform ?transform.}
      OPTIONAl { ?id tln:hasEditedText ?edited_text.}
   } `;
/**
 * This is the word stub instantiation of an element of {@link /interfaces/FusekiResults.html|FusekiResults}.
 * It extends {@link /classes/BasicResultBindingElement.html|BasicResultBindingElement}.
 **/
class WordStub extends _basic_datatype__WEBPACK_IMPORTED_MODULE_1__["BasicResultBindingElement"] {
    /**
    * The constructor creates a datatype from the data.
    *
    * @param id if omitted the id will be retrieved from data
    **/
    constructor(data, id, service) {
        super(data, id, service);
        this.text = this.getData4Key('text');
    }
}
/**
 * the internal default key for replacing {@link /classes/TlnWord.html#query|query} by "id"
 * in {@link /classes/TlnWord.html#getQuery|getQuery} if "key" is omitted.
 **/
WordStub.default_key = 'word';
/**
 * the public key for replacing {@link /classes/TlnWord.html#query|query} by "id".
 **/
WordStub.query_key = 'word';
/**
 * the SPARQL-query of this datatype.
 **/
WordStub.query = `
   PREFIX tln: <http://www.nie.org/ontology/nietzsche#>
   PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

   SELECT ?id ?text WHERE {
      ?id a tln:Word;
         tln:hasText ?text.
   }`;
class WordWithLine extends WordStub {
    /**
    * The constructor creates a datatype from the data.
    *
    * @param id if omitted the id will be retrieved from data
    **/
    constructor(data, id, service) {
        super(data, id, service);
        this.lineNumber = this.getData4Key('lineNumber');
    }
}
/**
 * the internal default key for replacing {@link /classes/TlnWord.html#query|query} by "id"
 * in {@link /classes/TlnWord.html#getQuery|getQuery} if "key" is omitted.
 **/
WordWithLine.default_key = 'id';
/**
 * the public key for replacing {@link /classes/TlnWord.html#query|query} by "id".
 **/
WordWithLine.query_key = 'id';
/**
 * the SPARQL-query of this datatype.
 **/
WordWithLine.query = `
   PREFIX tln: <http://www.nie.org/ontology/nietzsche#>
   PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

   SELECT ?text ?lineNumber WHERE {
      ?id a tln:Word;
         tln:wordBelongsToLine ?line;
         tln:hasText ?text.
      ?line tln:lineHasNumber ?lineNumber.
   }`;
class WordRepresentation extends WordWithLine {
    /**
    * The constructor creates a datatype from the data.
    *
    * @param id if omitted the id will be retrieved from data
    **/
    constructor(data, id, service) {
        super(data, id, service);
        this.openInTarget = 'viewer';
        this.pageNumber = this.getData4Key('pageNumber');
        this.page = this.getData4Key('page');
        this.title = this.getData4Key('title');
        this.manuscript = this.getData4Key('manuscript');
        this.representation = this.title + " " + this.pageNumber + ", " + this.lineNumber + " (" + this.text + ")";
    }
    getRouterInformation(launchExternally) {
        return { title: this.title, number: this.pageNumber, page: this.page,
            manuscript: this.manuscript, selectedWords: [this.id], launchExternally: launchExternally };
    }
}
/**
 * the internal default key for replacing {@link /classes/TlnWord.html#query|query} by "id"
 * in {@link /classes/TlnWord.html#getQuery|getQuery} if "key" is omitted.
 **/
WordRepresentation.default_key = 'id';
/**
 * the public key for replacing {@link /classes/TlnWord.html#query|query} by "id".
 **/
WordRepresentation.query_key = 'id';
/**
 * the SPARQL-query of this datatype.
 **/
WordRepresentation.query = `
   PREFIX tln: <http://www.nie.org/ontology/nietzsche#>
   PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

   SELECT ?text ?lineNumber ?pageNumber ?title ?page ?manuscript WHERE {
      ?id a tln:Word;
         tln:wordBelongsToLine ?line;
         tln:hasText ?text.
      ?line tln:lineHasNumber ?lineNumber.
      ?page a tln:Page;
         tln:hasNumber ?pageNumber;
         tln:hasWords/rdf:rest*/rdf:first ?id.
      ?manuscript a tln:ArchivalManuscriptUnity;
         tln:hasPages/rdf:rest*/rdf:first ?page;
         tln:hasTitle ?title.
   }`;


/***/ }),

/***/ "./src/app/tln-edition/datatypes/word_presentation.ts":
/*!************************************************************!*\
  !*** ./src/app/tln-edition/datatypes/word_presentation.ts ***!
  \************************************************************/
/*! exports provided: PresentationWord, PageWords, ManuscriptPageWords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentationWord", function() { return PresentationWord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageWords", function() { return PageWords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManuscriptPageWords", function() { return ManuscriptPageWords; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var sparqljs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sparqljs */ "./node_modules/sparqljs/sparql.js");
/* harmony import */ var sparqljs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sparqljs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _manuscript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manuscript */ "./src/app/tln-edition/datatypes/manuscript.ts");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page */ "./src/app/tln-edition/datatypes/page.ts");
/* harmony import */ var _word__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./word */ "./src/app/tln-edition/datatypes/word.ts");
/* harmony import */ var _query_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./query_json */ "./src/app/tln-edition/datatypes/query_json.ts");






class PresentationWord extends _word__WEBPACK_IMPORTED_MODULE_4__["WordStub"] {
    constructor(data, id, service) {
        super(data, id, service);
        this.line_number = this.getData4Key('line_number');
    }
}
class PageWords extends _page__WEBPACK_IMPORTED_MODULE_3__["PageStub"] {
    constructor(data, id, service) {
        super(data, id, service);
        this.words = [];
    }
}
class ManuscriptPageWords extends _manuscript__WEBPACK_IMPORTED_MODULE_2__["ManuscriptStub"] {
    constructor(data, id, service) {
        super(data, id, service);
        this.pages = [];
    }
    static convertData(data, id, service) {
        let manuscripts = [];
        let content = this.getContent(data);
        for (var i = 0; i < content.length; i++) {
            let manuscript = new ManuscriptPageWords(content[i], id, service);
            let page = PageWords.convertData({ head: { vars: [] }, results: { bindings: [content[i]] } }, content[i]['page']['value'])[0];
            let word = PresentationWord.convertData({ head: { vars: [] }, results: { bindings: [content[i]] } }, content[i]['word']['value'])[0];
            if (manuscripts.length > 0 && manuscript.id == manuscripts[manuscripts.length - 1].id) {
                if (manuscripts[manuscripts.length - 1].pages.length > 0
                    && page.id == manuscripts[manuscripts.length - 1].pages[manuscripts[manuscripts.length - 1].pages.length - 1].id) {
                    manuscripts[manuscripts.length - 1].pages[manuscripts[manuscripts.length - 1].pages.length - 1].words.push(word);
                }
                else {
                    if (manuscripts[manuscripts.length - 1].pages.length > 0) {
                        console.log(page);
                    }
                    page.words.push(word);
                    manuscripts[manuscripts.length - 1].pages.push(page);
                }
            }
            else {
                page.words.push(word);
                manuscript.pages.push(page);
                manuscripts.push(manuscript);
            }
        }
        return manuscripts;
    }
    static getParameterizedQuery(wordIds) {
        let parser = new sparqljs__WEBPACK_IMPORTED_MODULE_1__["Parser"]();
        let sparqlGenerator = new sparqljs__WEBPACK_IMPORTED_MODULE_1__["Generator"]({});
        let parsedQuery = parser.parse(this.query);
        let filters = wordIds.map(id => _query_json__WEBPACK_IMPORTED_MODULE_5__["QueryJson"].createEqualsOperation(id, this.query_key));
        let filterObject = _query_json__WEBPACK_IMPORTED_MODULE_5__["QueryJson"].createFilterObject(filters);
        parsedQuery.where.push(filterObject);
        return sparqlGenerator.stringify(parsedQuery);
    }
}
ManuscriptPageWords.query_key = 'word';
ManuscriptPageWords.default_key = 'word';
ManuscriptPageWords.query = `
   PREFIX tln: <http://www.nie.org/ontology/nietzsche#>
   PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

   SELECT ?id ?word ?title ?type ?page ?number ?text ?line_number WHERE {
      ?word tln:hasText ?text;
         tln:wordBelongsToLine/tln:lineHasNumber ?line_number.
      ?page a tln:Page;
        tln:hasWords/rdf:rest*/rdf:first ?word;
        tln:hasNumber ?number.
      ?id a tln:ArchivalManuscriptUnity;
            tln:hasPages/rdf:rest*/rdf:first ?page;
            tln:hasManuscriptType ?type;
            tln:hasTitle ?title.
   } ORDER BY ?id ?page`;


/***/ }),

/***/ "./src/app/tln-edition/debug.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/tln-edition/debug.pipe.ts ***!
  \*******************************************/
/*! exports provided: DebugPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebugPipe", function() { return DebugPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DebugPipe = class DebugPipe {
    transform(value) {
        console.log(value);
        return value;
    }
};
DebugPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'debug'
    })
], DebugPipe);



/***/ }),

/***/ "./src/app/tln-edition/quant_data_handler.ts":
/*!***************************************************!*\
  !*** ./src/app/tln-edition/quant_data_handler.ts ***!
  \***************************************************/
/*! exports provided: QuantitativeDataHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuantitativeDataHandler", function() { return QuantitativeDataHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _data_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data_handler */ "./src/app/tln-edition/data_handler.ts");



/**
 * This class retrieves quantitative data from  a query service and instantiates it using
 * corresponding handlers.
 **/
class QuantitativeDataHandler extends _data_handler__WEBPACK_IMPORTED_MODULE_2__["DataHandler"] {
    /**
     * @param component the component that uses this data handler
     **/
    constructor(component) {
        super(component);
        this.component = component;
    }
    /**
     * Retrieve and instantiate data
     * @param key data handler key
     * @param query iri that should be passed to query
     **/
    getData4Query(key, query, raw_data_key) {
        this.start_processing.emit(true);
        let handler = this[key]['handler'];
        this.queryService.getData(query).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.stop_processing)).subscribe(results => {
            this.component[key] = handler.convertData(results);
            if (raw_data_key != undefined && raw_data_key != null) {
                this.component[raw_data_key] = results;
            }
            this.processing_finished.emit(true);
            if (this[key]['process_data'] != undefined && this[key]['process_data'] != null) {
                this[key]['process_data'].processData();
            }
        });
    }
    /**
     * Retrieve raw data
     * @param raw_data_key where to store raw data in component
     * @param query query that should be executed
     **/
    getRawData4Query(raw_data_key, query, dataProcessor) {
        this.start_processing.emit(true);
        this.queryService.getData(query).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.stop_processing)).subscribe(results => {
            this.component[raw_data_key] = results;
            this.processing_finished.emit(true);
            if (dataProcessor != undefined && dataProcessor != null) {
                dataProcessor.processData();
            }
        });
    }
    /**
     * Retrieve and instantiate data
     * @param key data handler key
     * @param query iri that should be passed to query
     * @param searchTermsString string containing the search terms
     **/
    getSearchData(key, query, searchTermsString) {
        this.start_processing.emit(true);
        let handler = this[key]['handler'];
        this.queryService.getData(query).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.stop_processing)).subscribe(results => {
            this.component[key] = handler.convertData(results, null, this[key]['service']);
            this.processing_finished.emit(true);
            if (this[key]['process_data'] != undefined && this[key]['process_data'] != null) {
                this[key]['process_data'].processData();
            }
        });
    }
}


/***/ }),

/***/ "./src/app/tln-edition/route-reader.ts":
/*!*********************************************!*\
  !*** ./src/app/tln-edition/route-reader.ts ***!
  \*********************************************/
/*! exports provided: RouteReader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteReader", function() { return RouteReader; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class RouteReader {
    constructor(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(params => {
            this.readParams(params);
        });
    }
    readParams(params) {
        this.routerParams = params;
        for (let key of Object.keys(this.mapping)) {
            if (this.mapping[key]['ignore'] == undefined || !this.mapping[key]['ignore']) {
                let paramsKey = this.mapping[key]['param'];
                if (this.routerParams[paramsKey] != null) {
                    if (this.mapping[key]['type'] == 'number') {
                        this[key] = Number(this.routerParams[paramsKey]);
                    }
                    else if (this.mapping[key]['type'] == 'boolean') {
                        this[key] = (this.routerParams[paramsKey] == 'true');
                    }
                    else if (this.mapping[key]['type'] == 'URI' || this.mapping[key]['type'] == 'URL') {
                        this[key] = decodeURI(this.routerParams[paramsKey]);
                    }
                    else if (this.mapping[key]['type'] == 'complex') {
                        this[key] = JSON.parse(this.routerParams[paramsKey]);
                    }
                    else if (Array.isArray(this[key]) && !Array.isArray(this.routerParams[paramsKey])) {
                        this[key] = JSON.parse(this.routerParams[paramsKey]);
                    }
                    else {
                        this[key] = this.routerParams[paramsKey];
                    }
                    if (this.mapping[key]['debug'] != null) {
                        console.log(this.mapping[key]['debug'], this[key]);
                    }
                }
            }
        }
    }
}


/***/ }),

/***/ "./src/app/tln-edition/route-updater.ts":
/*!**********************************************!*\
  !*** ./src/app/tln-edition/route-updater.ts ***!
  \**********************************************/
/*! exports provided: RouteUpdater */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteUpdater", function() { return RouteUpdater; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _route_reader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./route-reader */ "./src/app/tln-edition/route-reader.ts");


class RouteUpdater extends _route_reader__WEBPACK_IMPORTED_MODULE_1__["RouteReader"] {
    constructor(router, activatedRoute) {
        super(router, activatedRoute);
        this.router = router;
        this.activatedRoute = activatedRoute;
        if (this.currentRoute == undefined || this.currentRoute == null) {
            this.currentRoute = (this.activatedRoute.snapshot.routeConfig != null)
                ? this.activatedRoute.snapshot.routeConfig.path : null;
        }
    }
    setParam(key, value) {
        if (this.mapping.hasOwnProperty(key)) {
            this[key] = value;
            this.updateParams();
        }
    }
    removeData(dataBearer) {
        if (typeof dataBearer != 'string' && typeof dataBearer != 'number' && typeof dataBearer != 'boolean') {
            if (Array.isArray(dataBearer)) {
                dataBearer.forEach(data => this.removeData(data));
            }
            else {
                dataBearer['data'] = null;
                Object.values(dataBearer).forEach(item => {
                    if (item != null) {
                        this.removeData(item);
                    }
                });
            }
        }
    }
    updateParams(launch) {
        let newRouterParam = {};
        for (let key of Object.keys(this.mapping)) {
            let paramsKey = this.mapping[key]['param'];
            if (this[key] != null) {
                if (this.mapping[key]['type'] == 'complex' || (Array.isArray(this[key]) && this[key].length > 0)) {
                    this.removeData(this[key]);
                    newRouterParam[paramsKey] = JSON.stringify(this[key]);
                }
                else if (this.mapping[key]['type'] == 'URI' || this.mapping[key]['type'] == 'URL') {
                    newRouterParam[paramsKey] = encodeURI(this[key]);
                }
                else {
                    newRouterParam[paramsKey] = this[key];
                }
            }
        }
        let parentActivatedRoute = (this.activatedRoute.parent != null) ? this.activatedRoute.parent : this.parentActivatedRoute;
        if (parentActivatedRoute != undefined && parentActivatedRoute != null) {
            parentActivatedRoute.url.subscribe(url => {
                let parentPath = url[0].path;
                if (launch != undefined && launch) {
                    let link = this.router.createUrlTree([parentPath + '/' + this.currentRoute], { queryParams: newRouterParam, queryParamsHandling: 'merge' });
                    window.open(link.toString(), '_blank');
                }
                else {
                    this.router.navigate([parentPath + '/' + this.currentRoute], { queryParams: newRouterParam, queryParamsHandling: 'merge' });
                }
            });
        }
        else {
            if (launch != undefined && launch) {
                let link = this.router.createUrlTree([this.currentRoute], { queryParams: newRouterParam, queryParamsHandling: 'merge' });
                window.open(link.toString(), '_blank');
            }
            else {
                this.router.navigate([this.currentRoute], { queryParams: newRouterParam, queryParamsHandling: 'merge' });
            }
        }
    }
}


/***/ }),

/***/ "./src/app/tln-edition/services.ts":
/*!*****************************************!*\
  !*** ./src/app/tln-edition/services.ts ***!
  \*****************************************/
/*! exports provided: TlnQueryService, TlnCacheQueryService, PageViewService, ConfigurableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _tln_query_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tln-query.service */ "./src/app/tln-edition/tln-query.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TlnQueryService", function() { return _tln_query_service__WEBPACK_IMPORTED_MODULE_1__["TlnQueryService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TlnCacheQueryService", function() { return _tln_query_service__WEBPACK_IMPORTED_MODULE_1__["TlnCacheQueryService"]; });

/* harmony import */ var _page_view_page_view_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../page-view/page-view.service */ "./src/app/page-view/page-view.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageViewService", function() { return _page_view_page_view_service__WEBPACK_IMPORTED_MODULE_2__["PageViewService"]; });

/* harmony import */ var _page_view_configurable_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../page-view/configurable-component */ "./src/app/page-view/configurable-component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfigurableComponent", function() { return _page_view_configurable_component__WEBPACK_IMPORTED_MODULE_3__["ConfigurableComponent"]; });








/***/ }),

/***/ "./src/app/tln-edition/tln-crossref/navigation/navigation.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/tln-edition/tln-crossref/navigation/navigation.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#navi {\n   width: 100%;\n   height: 50px;\n   margin: 0;\n   padding: 0;\n   white-space: nowrap;\n}\n.search {\n   margin-left: 8px;\n }\n.mat-button.min-width {\n   min-width: 120px;\n   max-width: 120px;\n}\n.default-mouse {\n   cursor: default;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRsbi1lZGl0aW9uL3Rsbi1jcm9zc3JlZi9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtHQUNHLFdBQVc7R0FDWCxZQUFZO0dBQ1osU0FBUztHQUNULFVBQVU7R0FDVixtQkFBbUI7QUFDdEI7QUFDQTtHQUNHLGdCQUFnQjtDQUNsQjtBQUVEO0dBQ0csZ0JBQWdCO0dBQ2hCLGdCQUFnQjtBQUNuQjtBQUNBO0dBQ0csZUFBZTtBQUNsQiIsImZpbGUiOiJ0bG4tZWRpdGlvbi90bG4tY3Jvc3NyZWYvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbmF2aSB7XG4gICB3aWR0aDogMTAwJTtcbiAgIGhlaWdodDogNTBweDtcbiAgIG1hcmdpbjogMDtcbiAgIHBhZGRpbmc6IDA7XG4gICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLnNlYXJjaCB7XG4gICBtYXJnaW4tbGVmdDogOHB4O1xuIH1cblxuLm1hdC1idXR0b24ubWluLXdpZHRoIHtcbiAgIG1pbi13aWR0aDogMTIwcHg7XG4gICBtYXgtd2lkdGg6IDEyMHB4O1xufVxuLmRlZmF1bHQtbW91c2Uge1xuICAgY3Vyc29yOiBkZWZhdWx0O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/tln-edition/tln-crossref/navigation/navigation.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/tln-edition/tln-crossref/navigation/navigation.component.ts ***!
  \*****************************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _datatypes_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../datatypes/navigation */ "./src/app/tln-edition/datatypes/navigation.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants */ "./src/app/tln-edition/constants.ts");
/* harmony import */ var _datatypes_text_version__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../datatypes/text_version */ "./src/app/tln-edition/datatypes/text_version.ts");
/* harmony import */ var _route_updater__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../route-updater */ "./src/app/tln-edition/route-updater.ts");
/* harmony import */ var _data_handler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../data_handler */ "./src/app/tln-edition/data_handler.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services */ "./src/app/tln-edition/services.ts");









let NavigationComponent = class NavigationComponent extends _route_updater__WEBPACK_IMPORTED_MODULE_6__["RouteUpdater"] {
    constructor(pageViewService, localQueryService, router, activatedRoute) {
        super(router, activatedRoute);
        this.pageViewService = pageViewService;
        this.localQueryService = localQueryService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        /**
         * whether or not to show page view in fullscreen mode.
         **/
        this.fullscreen = false;
        this.showArchivalManuscriptUnity = false;
        this.dataHandler = new _data_handler__WEBPACK_IMPORTED_MODULE_7__["DataHandler"](this);
        this.geneticOrders = [];
        this.selectedLines = [];
        this.PAGE_CONTEXT_VIEW = _constants__WEBPACK_IMPORTED_MODULE_4__["TLN_PAGE_PARAM"];
        this.MANUSCRIPT_CONTEXT_VIEW = _constants__WEBPACK_IMPORTED_MODULE_4__["TLN_MANUSCRIPT_PARAM"];
        this.contextView = this.PAGE_CONTEXT_VIEW;
        this.increment = 0.333;
        this.decrement = this.increment * -1;
        this.currentRoute = _constants__WEBPACK_IMPORTED_MODULE_4__["TLN_CROSSREF_ROUTE"];
        this.mapping = {
            contextView: { param: _constants__WEBPACK_IMPORTED_MODULE_4__["TLN_CONTEXT_VIEW_PARAM"], type: "string" },
            current_iri: { param: _constants__WEBPACK_IMPORTED_MODULE_4__["TLN_PAGE_PARAM"], type: "string" },
            current_manuscript_iri: { param: _constants__WEBPACK_IMPORTED_MODULE_4__["TLN_MANUSCRIPT_PARAM"], type: "string" },
            fullscreen: { param: _constants__WEBPACK_IMPORTED_MODULE_4__["TLN_FULLSCREEN_PARAM"], type: "boolean" }
        };
        this.selectedViewOption = _constants__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_VIEW_OPTION"];
        this.updating = false;
        this.viewOptions = [_constants__WEBPACK_IMPORTED_MODULE_4__["VIEW_OPTIONS"].TRANSKRIPTION, _constants__WEBPACK_IMPORTED_MODULE_4__["VIEW_OPTIONS"].FAKSIMILE, _constants__WEBPACK_IMPORTED_MODULE_4__["VIEW_OPTIONS"].SYNOPSIS, _constants__WEBPACK_IMPORTED_MODULE_4__["VIEW_OPTIONS"].SYNOPSIS_B];
    }
    ngOnInit() {
        let tlnQueryService = (this.queryService != null) ? this.queryService : this.localQueryService;
        this.dataHandler.addHandler('navigation_page', ['current_page', 'geneticOrders']);
        this.dataHandler.addHandler('current_page', { 'handler': _datatypes_navigation__WEBPACK_IMPORTED_MODULE_3__["TlnNavigationPage"] });
        this.dataHandler.addHandler('geneticOrders', { 'handler': _datatypes_text_version__WEBPACK_IMPORTED_MODULE_5__["TlnTextGeneticOrder"] });
        this.dataHandler.setQueryService(tlnQueryService);
        this.dataHandler.start_processing.subscribe((started) => {
            this.updating = true;
        });
        this.dataHandler.processing_finished.subscribe((finished) => {
            this.updating = false;
        });
        super.ngOnInit();
    }
    changeContext() {
        this.contextView = (this.contextView == this.PAGE_CONTEXT_VIEW) ? this.MANUSCRIPT_CONTEXT_VIEW : this.PAGE_CONTEXT_VIEW;
        //this.current_genetic_order_iri = 'none'; 
        this.updateParams();
    }
    getPageTitle(page, numPages) {
        if (page == null) {
            return '';
        }
        let indexPrefix = (numPages != null) ? page.index + '/' + numPages : page.index;
        return indexPrefix + ': ' + page.title + ' ' + page.number;
    }
    readParams(params) {
        super.readParams(params);
        if (this.dataHandler.ready && (this.current_page == null || this.current_page.id != this.current_iri)) {
            this.dataHandler.resetData('navigation_page');
            this.dataHandler.getData('navigation_page', this.current_iri);
        }
    }
    setCurrentIri(pageIri) {
        this.dataHandler.stop_processing.emit(true);
        this.current_iri = pageIri;
        this.currentRoute = _constants__WEBPACK_IMPORTED_MODULE_4__["TLN_VIEWER_ROUTE"];
        this.updateParams();
    }
    toggleFullscreen() {
        this.fullscreen = !this.fullscreen;
        this.updateParams();
    }
};
NavigationComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_8__["PageViewService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_8__["TlnCacheQueryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NavigationComponent.prototype, "queryService", void 0);
NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'crossref-navigation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-crossref/navigation/navigation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navigation.component.css */ "./src/app/tln-edition/tln-crossref/navigation/navigation.component.css")).default]
    })
], NavigationComponent);



/***/ }),

/***/ "./src/app/tln-edition/tln-crossref/page-version-view/filter.pipe.ts":
/*!***************************************************************************!*\
  !*** ./src/app/tln-edition/tln-crossref/page-version-view/filter.pipe.ts ***!
  \***************************************************************************/
/*! exports provided: GeneticOrderFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneticOrderFilterPipe", function() { return GeneticOrderFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GeneticOrderFilterPipe = class GeneticOrderFilterPipe {
    transform(geneticOrders, iri) {
        if (!iri) {
            return geneticOrders;
        }
        return geneticOrders.filter(geneticOrder => geneticOrder.id != iri);
    }
};
GeneticOrderFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'geneticOrderFilter'
    })
], GeneticOrderFilterPipe);



/***/ }),

/***/ "./src/app/tln-edition/tln-crossref/page-version-view/page-version-view.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/tln-edition/tln-crossref/page-version-view/page-version-view.component.css ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-radio-group {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n}\n\n.example-radio-button {\n  margin: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRsbi1lZGl0aW9uL3Rsbi1jcm9zc3JlZi9wYWdlLXZlcnNpb24tdmlldy9wYWdlLXZlcnNpb24tdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InRsbi1lZGl0aW9uL3Rsbi1jcm9zc3JlZi9wYWdlLXZlcnNpb24tdmlldy9wYWdlLXZlcnNpb24tdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtcmFkaW8tZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IDE1cHggMDtcbn1cblxuLmV4YW1wbGUtcmFkaW8tYnV0dG9uIHtcbiAgbWFyZ2luOiA1cHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/tln-edition/tln-crossref/page-version-view/page-version-view.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/tln-edition/tln-crossref/page-version-view/page-version-view.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: PageVersionViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageVersionViewComponent", function() { return PageVersionViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _route_updater__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../route-updater */ "./src/app/tln-edition/route-updater.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants */ "./src/app/tln-edition/constants.ts");





let PageVersionViewComponent = class PageVersionViewComponent extends _route_updater__WEBPACK_IMPORTED_MODULE_3__["RouteUpdater"] {
    constructor(router, activatedRoute) {
        super(router, activatedRoute);
        this.router = router;
        this.activatedRoute = activatedRoute;
        /**
         * the genetic text order that should be displayed.
         **/
        this.geneticOrders = [];
        this.textGenesisSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mapping = {
            current_iri: { param: _constants__WEBPACK_IMPORTED_MODULE_4__["TLN_PAGE_PARAM"], type: "string" },
            current_manuscript_iri: { param: _constants__WEBPACK_IMPORTED_MODULE_4__["TLN_MANUSCRIPT_PARAM"], type: "string" },
            contextView: { param: _constants__WEBPACK_IMPORTED_MODULE_4__["TLN_CONTEXT_VIEW_PARAM"], type: "string" },
            current_genetic_order: { param: _constants__WEBPACK_IMPORTED_MODULE_4__["TLN_TEXT_GENETIC_ORDER_PARAM"], type: "string" }
        };
    }
    ngOnInit() {
        if (this.targetRoute != undefined && this.targetRoute != null) {
            this.currentRoute = this.targetRoute;
        }
        super.ngOnInit();
    }
    openCrossRef(geneticOrder) {
        this.current_genetic_order = geneticOrder.id;
        this.textGenesisSelected.emit(this.current_genetic_order);
        this.current_iri = this.current_page_iri;
        this.contextView = _constants__WEBPACK_IMPORTED_MODULE_4__["TLN_PAGE_PARAM"];
        this.updateParams();
        if (this.bottomSheetRef != undefined && this.bottomSheetRef != null) {
            this.bottomSheetRef.dismiss();
        }
    }
};
PageVersionViewComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PageVersionViewComponent.prototype, "current_page_iri", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PageVersionViewComponent.prototype, "geneticOrders", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PageVersionViewComponent.prototype, "bottomSheetRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PageVersionViewComponent.prototype, "parentActivatedRoute", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PageVersionViewComponent.prototype, "targetRoute", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PageVersionViewComponent.prototype, "textGenesisSelected", void 0);
PageVersionViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-version-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-version-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-crossref/page-version-view/page-version-view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-version-view.component.css */ "./src/app/tln-edition/tln-crossref/page-version-view/page-version-view.component.css")).default]
    })
], PageVersionViewComponent);



/***/ }),

/***/ "./src/app/tln-edition/tln-crossref/page-version-view/tln-page-version-view.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/tln-edition/tln-crossref/page-version-view/tln-page-version-view.component.css ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0bG4tZWRpdGlvbi90bG4tY3Jvc3NyZWYvcGFnZS12ZXJzaW9uLXZpZXcvdGxuLXBhZ2UtdmVyc2lvbi12aWV3LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/tln-edition/tln-crossref/page-version-view/tln-page-version-view.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/tln-edition/tln-crossref/page-version-view/tln-page-version-view.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: TlnPageVersionViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TlnPageVersionViewComponent", function() { return TlnPageVersionViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "./src/app/tln-edition/services.ts");
/* harmony import */ var _data_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data_handler */ "./src/app/tln-edition/data_handler.ts");
/* harmony import */ var _datatypes_text_version__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../datatypes/text_version */ "./src/app/tln-edition/datatypes/text_version.ts");





let TlnPageVersionViewComponent = class TlnPageVersionViewComponent {
    constructor(localQueryService) {
        this.localQueryService = localQueryService;
        this.textGenesisSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dataHandler = new _data_handler__WEBPACK_IMPORTED_MODULE_3__["DataHandler"](this);
        this.geneticOrders = [];
    }
    ngOnInit() {
        let tlnQueryService = (this.queryService != null) ? this.queryService : this.localQueryService;
        this.dataHandler.addHandler('geneticOrders', { 'handler': _datatypes_text_version__WEBPACK_IMPORTED_MODULE_4__["TlnTextGeneticOrder"] });
        this.dataHandler.setQueryService(tlnQueryService);
        this.dataHandler.getData('geneticOrders', this.current_iri);
    }
};
TlnPageVersionViewComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_2__["TlnCacheQueryService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TlnPageVersionViewComponent.prototype, "queryService", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TlnPageVersionViewComponent.prototype, "textGenesisSelected", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TlnPageVersionViewComponent.prototype, "current_iri", void 0);
TlnPageVersionViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tln-page-version-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tln-page-version-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-crossref/page-version-view/tln-page-version-view.component.html")).default,
        providers: [_services__WEBPACK_IMPORTED_MODULE_2__["TlnCacheQueryService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tln-page-version-view.component.css */ "./src/app/tln-edition/tln-crossref/page-version-view/tln-page-version-view.component.css")).default]
    })
], TlnPageVersionViewComponent);



/***/ }),

/***/ "./src/app/tln-edition/tln-crossref/tln-crossref.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/tln-edition/tln-crossref/tln-crossref.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#page {\n   width: 100%;\n   position: relative;\n   top: 0px;\n   left: 0px;\n}\n.grid-container{  /* Chrome, Safari, Opera */\n  -moz-column-count: 2;     /* Firefox */\n  column-count: 2;\n}\n.extra-space {\n   margin-top:  45px;\n}\n.page-crossref-title {\n   margin-left: 20px;\n}\n.preview {\n   position: relative;\n   top: 60px;\n   width: 400px;\n   height: 100%;\n   text-align: center;\n}\n.icon {\n   margin-left: 5px;\n}\n.centered {\n   margin: auto;\n}\n.text {\n   position: absolute;\n   top: 0px;\n   left: 400px;\n}\n.page-view {\n   overflow: auto;\n}\n.external {\n   margin-top: 35px;\n   background-color: lightblue;\n   height: 100px;\n   position: relative;\n   left: 80px;\n   z-index: 2;\n}\n.highlight {\n   background-color: lightblue;\n}\n.text-navi {\n   position: absolute;\n   margin-top: -3px;\n   left: 0px;\n   height: 38px;\n   width: 100%;\n   background-color: lightblue;\n   z-index: 1;\n}\n.close-text {\n   position: absolute;\n   height: 38px;\n   right: 0px;\n   z-index: 2;\n}\n.page-navi {\n   float: left;\n   margin-top: -3px;\n   margin-bottom: 1px;\n   height: 38px;\n   background-color: lightblue;\n   z-index: 2;\n}\n.icon-button {\n   width: 15px;\n   margin-left: 3px;\n}\n.default-mouse {\n   cursor: default;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRsbi1lZGl0aW9uL3Rsbi1jcm9zc3JlZi90bG4tY3Jvc3NyZWYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtHQUNHLFdBQVc7R0FDWCxrQkFBa0I7R0FDbEIsUUFBUTtHQUNSLFNBQVM7QUFDWjtBQUNBLGtCQUM0QiwwQkFBMEI7RUFDcEQsb0JBQW9CLE1BQU0sWUFBWTtFQUN0QyxlQUFlO0FBQ2pCO0FBQ0E7R0FDRyxpQkFBaUI7QUFDcEI7QUFDQTtHQUNHLGlCQUFpQjtBQUNwQjtBQUNBO0dBQ0csa0JBQWtCO0dBQ2xCLFNBQVM7R0FDVCxZQUFZO0dBQ1osWUFBWTtHQUNaLGtCQUFrQjtBQUNyQjtBQUNBO0dBQ0csZ0JBQWdCO0FBQ25CO0FBQ0E7R0FDRyxZQUFZO0FBQ2Y7QUFDQTtHQUNHLGtCQUFrQjtHQUNsQixRQUFRO0dBQ1IsV0FBVztBQUNkO0FBQ0E7R0FDRyxjQUFjO0FBQ2pCO0FBQ0E7R0FDRyxnQkFBZ0I7R0FDaEIsMkJBQTJCO0dBQzNCLGFBQWE7R0FDYixrQkFBa0I7R0FDbEIsVUFBVTtHQUNWLFVBQVU7QUFDYjtBQUNBO0dBQ0csMkJBQTJCO0FBQzlCO0FBQ0E7R0FDRyxrQkFBa0I7R0FDbEIsZ0JBQWdCO0dBQ2hCLFNBQVM7R0FDVCxZQUFZO0dBQ1osV0FBVztHQUNYLDJCQUEyQjtHQUMzQixVQUFVO0FBQ2I7QUFDQTtHQUNHLGtCQUFrQjtHQUNsQixZQUFZO0dBQ1osVUFBVTtHQUNWLFVBQVU7QUFDYjtBQUNBO0dBQ0csV0FBVztHQUNYLGdCQUFnQjtHQUNoQixrQkFBa0I7R0FDbEIsWUFBWTtHQUNaLDJCQUEyQjtHQUMzQixVQUFVO0FBQ2I7QUFDQTtHQUNHLFdBQVc7R0FDWCxnQkFBZ0I7QUFDbkI7QUFDQTtHQUNHLGVBQWU7QUFDbEIiLCJmaWxlIjoidGxuLWVkaXRpb24vdGxuLWNyb3NzcmVmL3Rsbi1jcm9zc3JlZi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3BhZ2Uge1xuICAgd2lkdGg6IDEwMCU7XG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICB0b3A6IDBweDtcbiAgIGxlZnQ6IDBweDtcbn1cbi5ncmlkLWNvbnRhaW5lcntcbiAgLXdlYmtpdC1jb2x1bW4tY291bnQ6IDI7ICAvKiBDaHJvbWUsIFNhZmFyaSwgT3BlcmEgKi9cbiAgLW1vei1jb2x1bW4tY291bnQ6IDI7ICAgICAvKiBGaXJlZm94ICovXG4gIGNvbHVtbi1jb3VudDogMjtcbn1cbi5leHRyYS1zcGFjZSB7XG4gICBtYXJnaW4tdG9wOiAgNDVweDtcbn1cbi5wYWdlLWNyb3NzcmVmLXRpdGxlIHtcbiAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLnByZXZpZXcge1xuICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgdG9wOiA2MHB4O1xuICAgd2lkdGg6IDQwMHB4O1xuICAgaGVpZ2h0OiAxMDAlO1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmljb24ge1xuICAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi5jZW50ZXJlZCB7XG4gICBtYXJnaW46IGF1dG87XG59XG4udGV4dCB7XG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICB0b3A6IDBweDtcbiAgIGxlZnQ6IDQwMHB4O1xufVxuLnBhZ2UtdmlldyB7XG4gICBvdmVyZmxvdzogYXV0bztcbn1cbi5leHRlcm5hbCB7XG4gICBtYXJnaW4tdG9wOiAzNXB4O1xuICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xuICAgaGVpZ2h0OiAxMDBweDtcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgIGxlZnQ6IDgwcHg7XG4gICB6LWluZGV4OiAyO1xufVxuLmhpZ2hsaWdodCB7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XG59XG4udGV4dC1uYXZpIHtcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgIG1hcmdpbi10b3A6IC0zcHg7XG4gICBsZWZ0OiAwcHg7XG4gICBoZWlnaHQ6IDM4cHg7XG4gICB3aWR0aDogMTAwJTtcbiAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcbiAgIHotaW5kZXg6IDE7XG59XG4uY2xvc2UtdGV4dCB7XG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICBoZWlnaHQ6IDM4cHg7XG4gICByaWdodDogMHB4O1xuICAgei1pbmRleDogMjtcbn1cbi5wYWdlLW5hdmkge1xuICAgZmxvYXQ6IGxlZnQ7XG4gICBtYXJnaW4tdG9wOiAtM3B4O1xuICAgbWFyZ2luLWJvdHRvbTogMXB4O1xuICAgaGVpZ2h0OiAzOHB4O1xuICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xuICAgei1pbmRleDogMjtcbn1cbi5pY29uLWJ1dHRvbiB7XG4gICB3aWR0aDogMTVweDtcbiAgIG1hcmdpbi1sZWZ0OiAzcHg7XG59XG4uZGVmYXVsdC1tb3VzZSB7XG4gICBjdXJzb3I6IGRlZmF1bHQ7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/tln-edition/tln-crossref/tln-crossref.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/tln-edition/tln-crossref/tln-crossref.component.ts ***!
  \********************************************************************/
/*! exports provided: TlnCrossrefComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TlnCrossrefComponent", function() { return TlnCrossrefComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./src/app/tln-edition/constants.ts");
/* harmony import */ var _datatypes_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../datatypes/navigation */ "./src/app/tln-edition/datatypes/navigation.ts");
/* harmony import */ var _datatypes_manuscript__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../datatypes/manuscript */ "./src/app/tln-edition/datatypes/manuscript.ts");
/* harmony import */ var _datatypes_text_version__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../datatypes/text_version */ "./src/app/tln-edition/datatypes/text_version.ts");
/* harmony import */ var _route_updater__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../route-updater */ "./src/app/tln-edition/route-updater.ts");
/* harmony import */ var _data_handler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data_handler */ "./src/app/tln-edition/data_handler.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services */ "./src/app/tln-edition/services.ts");










let TlnCrossrefComponent = class TlnCrossrefComponent extends _route_updater__WEBPACK_IMPORTED_MODULE_7__["RouteUpdater"] {
    constructor(pageViewService, localQueryService, router, activatedRoute) {
        super(router, activatedRoute);
        this.pageViewService = pageViewService;
        this.localQueryService = localQueryService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.textGenesisSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.textVersionSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.textVersionUnselected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.PAGE_CONTEXT_VIEW = _constants__WEBPACK_IMPORTED_MODULE_3__["TLN_PAGE_PARAM"];
        this.MANUSCRIPT_CONTEXT_VIEW = _constants__WEBPACK_IMPORTED_MODULE_3__["TLN_MANUSCRIPT_PARAM"];
        this.zoomFactor = 1;
        this.dataHandler = new _data_handler__WEBPACK_IMPORTED_MODULE_8__["DataHandler"](this);
        this.textVersions = [];
        this.geneticOrders = [];
        this.contextView = this.PAGE_CONTEXT_VIEW;
        this.fullscreen = false;
        this.pagesWithGeneticOrder = [];
        this.max_width = -1;
        this.max_height = -1;
        this.each_version_height = -1;
        this.selectedLines = [];
        this.selectedTextVersions = [];
        this.increment = 0.333;
        this.decrement = this.increment * -1;
        this.margin_width = 280;
        this.initialPreviewWidth = 400;
        this.previewWidth = this.initialPreviewWidth;
        //protected currentRoute: string = TLN_CROSSREF_ROUTE;
        this.mapping = { findText: { param: _constants__WEBPACK_IMPORTED_MODULE_3__["TLN_FIND_PARAM"], type: "string" },
            fullscreen: { param: _constants__WEBPACK_IMPORTED_MODULE_3__["TLN_FULLSCREEN_PARAM"], type: "boolean" },
            contextView: { param: _constants__WEBPACK_IMPORTED_MODULE_3__["TLN_CONTEXT_VIEW_PARAM"], type: "string" },
            current_iri: { param: _constants__WEBPACK_IMPORTED_MODULE_3__["TLN_PAGE_PARAM"], type: "string" },
            current_manuscript_unity: { param: _constants__WEBPACK_IMPORTED_MODULE_3__["TLN_MANUSCRIPT_PARAM"], type: "string" },
            current_genetic_order_iri: { param: _constants__WEBPACK_IMPORTED_MODULE_3__["TLN_TEXT_GENETIC_ORDER_PARAM"], type: "string" },
            selectedLines: { param: _constants__WEBPACK_IMPORTED_MODULE_3__["TLN_SELECTED_LINES_PARAM"], type: "string" },
            zoomFactor: { param: _constants__WEBPACK_IMPORTED_MODULE_3__["TLN_ZOOM_PARAM"], type: "number" } };
        this.selectedViewOption = _constants__WEBPACK_IMPORTED_MODULE_3__["VIEW_OPTIONS"].TRANSKRIPTION;
        this.updating = false;
        this.viewOptions = [_constants__WEBPACK_IMPORTED_MODULE_3__["VIEW_OPTIONS"].TRANSKRIPTION, _constants__WEBPACK_IMPORTED_MODULE_3__["VIEW_OPTIONS"].FAKSIMILE];
        this.subscriptions = [];
    }
    ngOnInit() {
        if (screen.availWidth - this.initialPreviewWidth - this.margin_width > 1000) {
            this.previewWidth = screen.availWidth - this.initialPreviewWidth - 1000;
        }
        this.max_width = screen.availWidth - this.previewWidth - this.margin_width;
        this.max_height = screen.availHeight - 200;
        this.tlnQueryService = (this.queryService != null) ? this.queryService : this.localQueryService;
        this.dataHandler.addHandler('page_content', ['current_page', 'geneticOrders']);
        this.dataHandler.addHandler('manuscript_content', ['current_manuscript', 'pagesWithGeneticOrder']);
        this.dataHandler.addHandler('current_manuscript', { 'handler': _datatypes_manuscript__WEBPACK_IMPORTED_MODULE_5__["ManuscriptStub"] });
        this.dataHandler.addHandler('current_page', { 'handler': _datatypes_navigation__WEBPACK_IMPORTED_MODULE_4__["TlnNavigationPage"] });
        this.dataHandler.addHandler('geneticOrders', { 'handler': _datatypes_text_version__WEBPACK_IMPORTED_MODULE_6__["TlnTextGeneticOrder"] });
        this.dataHandler.addHandler('pagesWithGeneticOrder', { 'handler': _datatypes_text_version__WEBPACK_IMPORTED_MODULE_6__["TlnPageWithTextGeneticOrder"] });
        this.dataHandler.addHandler('textVersions', { 'handler': _datatypes_text_version__WEBPACK_IMPORTED_MODULE_6__["TlnStandaloneTextVersion"], 'process_data': this });
        this.dataHandler.setQueryService(this.tlnQueryService);
        this.subscriptions.push(this.dataHandler.start_processing.subscribe((started) => {
            this.updating = true;
        }));
        this.subscriptions.push(this.dataHandler.processing_finished.subscribe((finished) => {
            this.updating = false;
        }));
        super.ngOnInit();
        this.subscriptions.push(this.pageViewService.onClickedWord.subscribe((clickedWord) => {
            this.addWordText2FindText(clickedWord);
        }));
    }
    ngOnDestroy() {
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }
    addWordText2FindText(word) {
        let text = (word.edited_text != null && word.edited_text != '') ? word.edited_text : word.text;
        if (this.findText == null || !this.findText.includes(text)) {
            this.findText = (this.findText == null || this.findText == '') ? text : this.findText + ' ' + text;
        }
        else {
            let index = this.findText.indexOf(text);
            let startText = this.findText.substring(0, index);
            let endText = (this.findText.length > index + text.length) ? this.findText.substring(index + text.length) : '';
            let findText = startText + endText;
            this.findText = findText.replace('  ', ' ').trim();
        }
        this.updateParams();
    }
    processData() {
        this.selectedTextVersions = [];
        let index = 0;
        while (index < this.textVersions.length && this.selectedTextVersions.length < 1) {
            if (this.textVersions[index].textUnities != undefined && this.textVersions[index].textUnities.length > 0) {
                this.selectedTextVersions.push(this.textVersions[index]);
            }
            index++;
        }
    }
    addOrRemove(textVersion) {
        let index = this.selectedTextVersions.indexOf(textVersion);
        if (index == -1) {
            this.textVersionSelected.emit(textVersion.id);
            this.selectedTextVersions.push(textVersion);
        }
        else {
            this.textVersionUnselected.emit(textVersion.id);
            this.selectedTextVersions.splice(index, 1);
        }
        this.each_version_height = (this.selectedTextVersions.length > 0) ? this.max_height / this.selectedTextVersions.length : this.max_height;
    }
    clearFindText() {
        this.findText = '';
        this.updateParams();
    }
    getButtonTitle(textVersion) {
        return (this.selectedTextVersions.indexOf(textVersion) == -1) ? 'Textstelle anzeigen' : 'Textstelle ausblenden';
    }
    isNewPagePartOfOldTextVersions() {
        if (this.current_manuscript_unity == undefined || this.current_manuscript_unity == null) {
            return false;
        }
        for (let textVersion of this.textVersions) {
            if (textVersion.manuscript != undefined
                && textVersion.manuscript != null
                && textVersion.manuscript == this.current_manuscript_unity) {
                for (let textUnity of textVersion.textUnities) {
                    if (textUnity.id == this.current_iri || textUnity.belongsToPage == this.current_iri) {
                        console.log(textUnity.id, textUnity.belongsToPage, this.current_iri);
                        return true;
                    }
                }
            }
        }
        return false;
    }
    readParams(params) {
        let old_genetic_order_iri = this.current_genetic_order_iri;
        let old_current_iri = this.current_iri;
        let old_manuscript_unity = this.current_manuscript_unity;
        let old_context_view = this.contextView;
        super.readParams(params);
        if (this.dataHandler.ready) {
            if (old_current_iri != null
                && this.current_iri != old_current_iri && !this.isNewPagePartOfOldTextVersions()) {
                this.selectedTextVersions = [];
                this.dataHandler.resetData('textVersions');
                if (old_genetic_order_iri == this.current_genetic_order_iri) {
                    this.current_genetic_order_iri = '';
                    this.updateParams();
                }
            }
            if (this.contextView == this.PAGE_CONTEXT_VIEW
                && (this.contextView != old_context_view
                    || (this.current_iri != null && this.current_iri != old_current_iri))) {
                this.dataHandler.resetData('page_content');
                this.dataHandler.getData('page_content', this.current_iri);
            }
            if (this.current_manuscript_unity != old_manuscript_unity) {
                this.dataHandler.resetData('manuscript_content');
                this.dataHandler.getData('manuscript_content', this.current_manuscript_unity);
            }
            if (this.contextView == this.PAGE_CONTEXT_VIEW
                && (this.contextView != old_context_view ||
                    (this.textVersions.length == 0 || this.current_genetic_order_iri != old_genetic_order_iri))) {
                this.dataHandler.resetData('textVersions');
                if (this.current_genetic_order_iri != null && this.current_genetic_order_iri != '') {
                    this.dataHandler.getData('textVersions', this.current_genetic_order_iri);
                }
            }
        }
    }
    openInViewer(pageIri, belongsToPageIri, manuscriptIri, launch) {
        this.current_iri = (belongsToPageIri != null) ? belongsToPageIri : pageIri;
        if (manuscriptIri != null) {
            this.current_manuscript_unity = manuscriptIri;
        }
        this.currentRoute = _constants__WEBPACK_IMPORTED_MODULE_3__["TLN_VIEWER_ROUTE"];
        this.updateParams(launch);
    }
    setZoomFactor(newZoomFactor) {
        if (newZoomFactor > 0) {
            this.zoomFactor = Math.round(newZoomFactor * 100) / 100;
        }
        else {
            this.zoomFactor = this.zoomFactor / 2;
        }
        this.updateParams();
    }
};
TlnCrossrefComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_9__["PageViewService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_9__["TlnCacheQueryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TlnCrossrefComponent.prototype, "queryService", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TlnCrossrefComponent.prototype, "textGenesisSelected", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TlnCrossrefComponent.prototype, "textVersionSelected", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TlnCrossrefComponent.prototype, "textVersionUnselected", void 0);
TlnCrossrefComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tln-crossref',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tln-crossref.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-crossref/tln-crossref.component.html")).default,
        providers: [_services__WEBPACK_IMPORTED_MODULE_9__["TlnCacheQueryService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tln-crossref.component.css */ "./src/app/tln-edition/tln-crossref/tln-crossref.component.css")).default]
    })
], TlnCrossrefComponent);



/***/ }),

/***/ "./src/app/tln-edition/tln-crossref/version-view/version-view.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/tln-edition/tln-crossref/version-view/version-view.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".highlight {\n   text-decoration: underline;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRsbi1lZGl0aW9uL3Rsbi1jcm9zc3JlZi92ZXJzaW9uLXZpZXcvdmVyc2lvbi12aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7R0FDRywwQkFBMEI7QUFDN0IiLCJmaWxlIjoidGxuLWVkaXRpb24vdGxuLWNyb3NzcmVmL3ZlcnNpb24tdmlldy92ZXJzaW9uLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oaWdobGlnaHQge1xuICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/tln-edition/tln-crossref/version-view/version-view.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/tln-edition/tln-crossref/version-view/version-view.component.ts ***!
  \*********************************************************************************/
/*! exports provided: VersionViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersionViewComponent", function() { return VersionViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let VersionViewComponent = class VersionViewComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], VersionViewComponent.prototype, "version", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], VersionViewComponent.prototype, "current_iri", void 0);
VersionViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'version-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./version-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-crossref/version-view/version-view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./version-view.component.css */ "./src/app/tln-edition/tln-crossref/version-view/version-view.component.css")).default]
    })
], VersionViewComponent);



/***/ }),

/***/ "./src/app/tln-edition/tln-edition.module.ts":
/*!***************************************************!*\
  !*** ./src/app/tln-edition/tln-edition.module.ts ***!
  \***************************************************/
/*! exports provided: TlnEditionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TlnEditionModule", function() { return TlnEditionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ctrl/ngx-codemirror */ "./node_modules/@ctrl/ngx-codemirror/fesm2015/ctrl-ngx-codemirror.js");
/* harmony import */ var ngx_mat_standoff_markup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-mat-standoff-markup */ "./node_modules/ngx-mat-standoff-markup/fesm2015/ngx-mat-standoff-markup.js");
/* harmony import */ var _common_cache_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/cache.service */ "./src/app/tln-edition/common/cache.service.ts");
/* harmony import */ var _page_view_page_view_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../page-view/page-view.service */ "./src/app/page-view/page-view.service.ts");
/* harmony import */ var _page_view_page_view_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../page-view/page-view.module */ "./src/app/page-view/page-view.module.ts");
/* harmony import */ var _ontology_viewer_ontology_viewer_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ontology-viewer/ontology-viewer.module */ "./src/app/ontology-viewer/ontology-viewer.module.ts");
/* harmony import */ var _tln_page_view_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tln-page-view.component */ "./src/app/tln-edition/tln-page-view.component.ts");
/* harmony import */ var _tooltip_tool_tip_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tooltip/tool-tip.component */ "./src/app/tln-edition/tooltip/tool-tip.component.ts");
/* harmony import */ var _tln_viewer_navigation_tln_viewer_navigation_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./tln-viewer-navigation/tln-viewer-navigation.component */ "./src/app/tln-edition/tln-viewer-navigation/tln-viewer-navigation.component.ts");
/* harmony import */ var _tln_information_tln_information_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./tln-information/tln-information.component */ "./src/app/tln-edition/tln-information/tln-information.component.ts");
/* harmony import */ var _tln_crossref_tln_crossref_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tln-crossref/tln-crossref.component */ "./src/app/tln-edition/tln-crossref/tln-crossref.component.ts");
/* harmony import */ var _tln_crossref_version_view_version_view_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./tln-crossref/version-view/version-view.component */ "./src/app/tln-edition/tln-crossref/version-view/version-view.component.ts");
/* harmony import */ var _tln_crossref_page_version_view_page_version_view_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./tln-crossref/page-version-view/page-version-view.component */ "./src/app/tln-edition/tln-crossref/page-version-view/page-version-view.component.ts");
/* harmony import */ var _tln_crossref_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./tln-crossref/navigation/navigation.component */ "./src/app/tln-edition/tln-crossref/navigation/navigation.component.ts");
/* harmony import */ var _tln_crossref_page_version_view_filter_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./tln-crossref/page-version-view/filter.pipe */ "./src/app/tln-edition/tln-crossref/page-version-view/filter.pipe.ts");
/* harmony import */ var _tln_crossref_page_version_view_tln_page_version_view_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./tln-crossref/page-version-view/tln-page-version-view.component */ "./src/app/tln-edition/tln-crossref/page-version-view/tln-page-version-view.component.ts");
/* harmony import */ var _tln_manuscript_view_tln_manuscript_view_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./tln-manuscript-view/tln-manuscript-view.component */ "./src/app/tln-edition/tln-manuscript-view/tln-manuscript-view.component.ts");
/* harmony import */ var _tln_fulltext_tln_fulltext_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./tln-fulltext/tln-fulltext.component */ "./src/app/tln-edition/tln-fulltext/tln-fulltext.component.ts");
/* harmony import */ var _tln_fulltext_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./tln-fulltext/navigation/navigation.component */ "./src/app/tln-edition/tln-fulltext/navigation/navigation.component.ts");
/* harmony import */ var _tln_fulltext_result_pipe_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./tln-fulltext/result-pipe.pipe */ "./src/app/tln-edition/tln-fulltext/result-pipe.pipe.ts");
/* harmony import */ var _common_page_result_filter_pipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./common/page-result-filter.pipe */ "./src/app/tln-edition/common/page-result-filter.pipe.ts");
/* harmony import */ var _tln_navigation_elements_search_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./tln-navigation-elements/search.component */ "./src/app/tln-edition/tln-navigation-elements/search.component.ts");
/* harmony import */ var _tln_navigation_elements_toggle_navigation_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./tln-navigation-elements/toggle-navigation.component */ "./src/app/tln-edition/tln-navigation-elements/toggle-navigation.component.ts");
/* harmony import */ var _tln_navigation_elements_zoom_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./tln-navigation-elements/zoom.component */ "./src/app/tln-edition/tln-navigation-elements/zoom.component.ts");
/* harmony import */ var _tln_navigation_elements_zoom_pipe__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./tln-navigation-elements/zoom.pipe */ "./src/app/tln-edition/tln-navigation-elements/zoom.pipe.ts");
/* harmony import */ var _tln_navigation_elements_open_in_viewer_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./tln-navigation-elements/open-in-viewer.component */ "./src/app/tln-edition/tln-navigation-elements/open-in-viewer.component.ts");
/* harmony import */ var _debug_pipe__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./debug.pipe */ "./src/app/tln-edition/debug.pipe.ts");
/* harmony import */ var _tln_height_directive__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./tln-height.directive */ "./src/app/tln-edition/tln-height.directive.ts");
/* harmony import */ var _tln_quant_tln_quant_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./tln-quant/tln-quant.component */ "./src/app/tln-edition/tln-quant/tln-quant.component.ts");
/* harmony import */ var _tln_quant_tln_table_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./tln-quant/tln-table.component */ "./src/app/tln-edition/tln-quant/tln-table.component.ts");
/* harmony import */ var _tln_quant_result_pipe__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./tln-quant/result.pipe */ "./src/app/tln-edition/tln-quant/result.pipe.ts");
/* harmony import */ var _tln_quant_word_presentation_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./tln-quant/word-presentation.component */ "./src/app/tln-edition/tln-quant/word-presentation.component.ts");
/* harmony import */ var _tln_quant_2_ids_pipe__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./tln-quant/2-ids.pipe */ "./src/app/tln-edition/tln-quant/2-ids.pipe.ts");
/* harmony import */ var _tln_quant_sort_by_line_pipe__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./tln-quant/sort-by-line.pipe */ "./src/app/tln-edition/tln-quant/sort-by-line.pipe.ts");
/* harmony import */ var _tln_quant_query_error_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./tln-quant/query-error.component */ "./src/app/tln-edition/tln-quant/query-error.component.ts");
/* harmony import */ var _tln_quant_export_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./tln-quant/export.component */ "./src/app/tln-edition/tln-quant/export.component.ts");
/* harmony import */ var _tln_quant_fuseki_table_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./tln-quant/fuseki-table.component */ "./src/app/tln-edition/tln-quant/fuseki-table.component.ts");
/* harmony import */ var _tln_quant_tln_ontology_viewer_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./tln-quant/tln-ontology-viewer.component */ "./src/app/tln-edition/tln-quant/tln-ontology-viewer.component.ts");
/* harmony import */ var _tooltip_editor_comment_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./tooltip/editor-comment.component */ "./src/app/tln-edition/tooltip/editor-comment.component.ts");
/* harmony import */ var _tooltip_merge_editor_comment_pipe__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./tooltip/merge-editor-comment.pipe */ "./src/app/tln-edition/tooltip/merge-editor-comment.pipe.ts");
/* harmony import */ var _tooltip_overwritten_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./tooltip/overwritten.component */ "./src/app/tln-edition/tooltip/overwritten.component.ts");
/* harmony import */ var _tln_information_footnote_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./tln-information/footnote.component */ "./src/app/tln-edition/tln-information/footnote.component.ts");
/* harmony import */ var _tln_information_imprint_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./tln-information/imprint.component */ "./src/app/tln-edition/tln-information/imprint.component.ts");
/* harmony import */ var _tln_status_tln_status_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./tln-status/tln-status.component */ "./src/app/tln-edition/tln-status/tln-status.component.ts");
/* harmony import */ var _tln_manuscript_view_tln_leaf_description_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./tln-manuscript-view/tln-leaf-description.component */ "./src/app/tln-edition/tln-manuscript-view/tln-leaf-description.component.ts");
/* harmony import */ var _tln_quant_tln_data_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./tln-quant/tln-data.component */ "./src/app/tln-edition/tln-quant/tln-data.component.ts");
/* harmony import */ var _tln_quant_tln_type_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./tln-quant/tln-type.component */ "./src/app/tln-edition/tln-quant/tln-type.component.ts");
/* harmony import */ var _tln_navigation_elements_open_in_manuscript_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./tln-navigation-elements/open-in-manuscript.component */ "./src/app/tln-edition/tln-navigation-elements/open-in-manuscript.component.ts");























































let TlnEditionModule = class TlnEditionModule {
};
TlnEditionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        declarations: [_tln_fulltext_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_25__["FulltextNavigationComponent"], _tln_page_view_component__WEBPACK_IMPORTED_MODULE_13__["TlnPageViewComponent"], _tooltip_tool_tip_component__WEBPACK_IMPORTED_MODULE_14__["ToolTipComponent"], _tln_viewer_navigation_tln_viewer_navigation_component__WEBPACK_IMPORTED_MODULE_15__["TlnViewerNavigation"], _tln_information_tln_information_component__WEBPACK_IMPORTED_MODULE_16__["TlnInformationComponent"], _tln_crossref_tln_crossref_component__WEBPACK_IMPORTED_MODULE_17__["TlnCrossrefComponent"], _tln_crossref_version_view_version_view_component__WEBPACK_IMPORTED_MODULE_18__["VersionViewComponent"], _tln_crossref_page_version_view_page_version_view_component__WEBPACK_IMPORTED_MODULE_19__["PageVersionViewComponent"], _tln_crossref_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_20__["NavigationComponent"], _tln_crossref_page_version_view_filter_pipe__WEBPACK_IMPORTED_MODULE_21__["GeneticOrderFilterPipe"], _tln_crossref_page_version_view_tln_page_version_view_component__WEBPACK_IMPORTED_MODULE_22__["TlnPageVersionViewComponent"], _tln_manuscript_view_tln_manuscript_view_component__WEBPACK_IMPORTED_MODULE_23__["TlnManuscriptViewComponent"], _tln_fulltext_tln_fulltext_component__WEBPACK_IMPORTED_MODULE_24__["TlnFulltextComponent"], _common_page_result_filter_pipe__WEBPACK_IMPORTED_MODULE_27__["PageResultFilterPipe"], _tln_fulltext_result_pipe_pipe__WEBPACK_IMPORTED_MODULE_26__["ResultPipePipe"], _tln_navigation_elements_search_component__WEBPACK_IMPORTED_MODULE_28__["SearchComponent"], _tln_navigation_elements_toggle_navigation_component__WEBPACK_IMPORTED_MODULE_29__["ToggleNavigationComponent"], _tln_navigation_elements_zoom_component__WEBPACK_IMPORTED_MODULE_30__["ZoomComponent"], _tln_navigation_elements_zoom_pipe__WEBPACK_IMPORTED_MODULE_31__["ZoomPipe"], _tln_navigation_elements_open_in_viewer_component__WEBPACK_IMPORTED_MODULE_32__["OpenInViewerComponent"], _debug_pipe__WEBPACK_IMPORTED_MODULE_33__["DebugPipe"], _tln_height_directive__WEBPACK_IMPORTED_MODULE_34__["TlnHeightDirective"], _tln_quant_tln_quant_component__WEBPACK_IMPORTED_MODULE_35__["TlnQuantComponent"], _tln_quant_tln_table_component__WEBPACK_IMPORTED_MODULE_36__["TlnTableComponent"], _tln_quant_result_pipe__WEBPACK_IMPORTED_MODULE_37__["ResultPipe"], _tln_quant_word_presentation_component__WEBPACK_IMPORTED_MODULE_38__["WordPresentationComponent"], _tln_quant_2_ids_pipe__WEBPACK_IMPORTED_MODULE_39__["ToIdsPipe"], _tln_quant_sort_by_line_pipe__WEBPACK_IMPORTED_MODULE_40__["SortByLinePipe"], _tln_quant_query_error_component__WEBPACK_IMPORTED_MODULE_41__["QueryErrorComponent"], _tln_quant_export_component__WEBPACK_IMPORTED_MODULE_42__["ExportComponent"], _tln_quant_fuseki_table_component__WEBPACK_IMPORTED_MODULE_43__["FusekiTableComponent"], _tln_quant_tln_ontology_viewer_component__WEBPACK_IMPORTED_MODULE_44__["TlnOntologyViewerComponent"], _tooltip_editor_comment_component__WEBPACK_IMPORTED_MODULE_45__["EditorCommentComponent"], _tooltip_merge_editor_comment_pipe__WEBPACK_IMPORTED_MODULE_46__["MergeEditorCommentPipe"], _tooltip_overwritten_component__WEBPACK_IMPORTED_MODULE_47__["OverwrittenComponent"], _tln_information_footnote_component__WEBPACK_IMPORTED_MODULE_48__["FootnoteComponent"], _tln_information_imprint_component__WEBPACK_IMPORTED_MODULE_49__["ImprintComponent"], _tln_status_tln_status_component__WEBPACK_IMPORTED_MODULE_50__["TlnStatusComponent"], _tln_manuscript_view_tln_leaf_description_component__WEBPACK_IMPORTED_MODULE_51__["TlnLeafDescriptionComponent"], _tln_quant_tln_data_component__WEBPACK_IMPORTED_MODULE_52__["TlnDataComponent"], _tln_quant_tln_type_component__WEBPACK_IMPORTED_MODULE_53__["TlnTypeComponent"], _tln_navigation_elements_open_in_manuscript_component__WEBPACK_IMPORTED_MODULE_54__["OpenInManuscriptComponent"]],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
            _ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_7__["CodemirrorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatBadgeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatBottomSheetModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTreeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            ngx_mat_standoff_markup__WEBPACK_IMPORTED_MODULE_8__["NgxMatStandoffMarkupModule"],
            _page_view_page_view_module__WEBPACK_IMPORTED_MODULE_11__["PageViewModule"],
            _ontology_viewer_ontology_viewer_module__WEBPACK_IMPORTED_MODULE_12__["OntologyViewerModule"]
        ],
        exports: [
            _debug_pipe__WEBPACK_IMPORTED_MODULE_33__["DebugPipe"],
            _tln_fulltext_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_25__["FulltextNavigationComponent"],
            _tln_crossref_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_20__["NavigationComponent"],
            _tln_navigation_elements_toggle_navigation_component__WEBPACK_IMPORTED_MODULE_29__["ToggleNavigationComponent"],
            _tooltip_tool_tip_component__WEBPACK_IMPORTED_MODULE_14__["ToolTipComponent"],
            _tln_status_tln_status_component__WEBPACK_IMPORTED_MODULE_50__["TlnStatusComponent"],
            _tln_crossref_tln_crossref_component__WEBPACK_IMPORTED_MODULE_17__["TlnCrossrefComponent"],
            _tln_height_directive__WEBPACK_IMPORTED_MODULE_34__["TlnHeightDirective"],
            _tln_manuscript_view_tln_manuscript_view_component__WEBPACK_IMPORTED_MODULE_23__["TlnManuscriptViewComponent"],
            _tln_page_view_component__WEBPACK_IMPORTED_MODULE_13__["TlnPageViewComponent"],
            _tln_viewer_navigation_tln_viewer_navigation_component__WEBPACK_IMPORTED_MODULE_15__["TlnViewerNavigation"],
            _tln_quant_tln_quant_component__WEBPACK_IMPORTED_MODULE_35__["TlnQuantComponent"],
            _tln_quant_tln_data_component__WEBPACK_IMPORTED_MODULE_52__["TlnDataComponent"]
        ],
        providers: [
            _page_view_page_view_service__WEBPACK_IMPORTED_MODULE_10__["PageViewService"],
            _common_cache_service__WEBPACK_IMPORTED_MODULE_9__["CacheService"]
            //TlnQueryService
        ],
        entryComponents: [_tln_information_tln_information_component__WEBPACK_IMPORTED_MODULE_16__["TlnInformationComponent"], _tln_quant_query_error_component__WEBPACK_IMPORTED_MODULE_41__["QueryErrorComponent"]]
    })
], TlnEditionModule);



/***/ }),

/***/ "./src/app/tln-edition/tln-fulltext/navigation/navigation.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/tln-edition/tln-fulltext/navigation/navigation.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#navi {\n   width: 100%;\n   height: 50px;\n   margin: 0;\n   padding: 0;\n   white-space: nowrap;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRsbi1lZGl0aW9uL3Rsbi1mdWxsdGV4dC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtHQUNHLFdBQVc7R0FDWCxZQUFZO0dBQ1osU0FBUztHQUNULFVBQVU7R0FDVixtQkFBbUI7QUFDdEIiLCJmaWxlIjoidGxuLWVkaXRpb24vdGxuLWZ1bGx0ZXh0L25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI25hdmkge1xuICAgd2lkdGg6IDEwMCU7XG4gICBoZWlnaHQ6IDUwcHg7XG4gICBtYXJnaW46IDA7XG4gICBwYWRkaW5nOiAwO1xuICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/tln-edition/tln-fulltext/navigation/navigation.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/tln-edition/tln-fulltext/navigation/navigation.component.ts ***!
  \*****************************************************************************/
/*! exports provided: FulltextNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FulltextNavigationComponent", function() { return FulltextNavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FulltextNavigationComponent = class FulltextNavigationComponent {
    constructor() { }
    ngOnInit() {
    }
};
FulltextNavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'fulltext-navigation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-fulltext/navigation/navigation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navigation.component.css */ "./src/app/tln-edition/tln-fulltext/navigation/navigation.component.css")).default]
    })
], FulltextNavigationComponent);



/***/ }),

/***/ "./src/app/tln-edition/tln-fulltext/result-pipe.pipe.ts":
/*!**************************************************************!*\
  !*** ./src/app/tln-edition/tln-fulltext/result-pipe.pipe.ts ***!
  \**************************************************************/
/*! exports provided: ResultPipePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultPipePipe", function() { return ResultPipePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ResultPipePipe = class ResultPipePipe {
    transform(pages) {
        if (pages.length == 0) {
            return 'Keine Treffer';
        }
        let pageResult = (pages.length > 1) ? pages.length + ' Seiten' : pages[0].title + ' ' + pages[0].number;
        let numFoundWords = 0;
        pages.forEach(page => page.results.forEach(result => numFoundWords++));
        return numFoundWords + ' Treffer auf ' + pageResult;
    }
};
ResultPipePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'resultPipe'
    })
], ResultPipePipe);



/***/ }),

/***/ "./src/app/tln-edition/tln-fulltext/tln-fulltext.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/tln-edition/tln-fulltext/tln-fulltext.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#page {\n   width: 98%;\n   position: relative;\n   top: 0px;\n   left: 0px;\n   height: 100%;\n   overflow: visible;\n}\n.icon-button {\n   width: 15px;\n   margin-left: 3px;\n}\n.page-navi {\n   float: left;\n   margin-top: -3px;\n   margin-bottom: 1px;\n   height: 38px;\n   background-color: lightblue;\n   z-index: 2;\n}\n.default-mouse {\n   cursor: default;\n}\n.small-grey {\n   color: lightgrey;\n   font-size: 80%;\n}\n.text {\n   position: absolute;\n   top: 10px;\n   left: 500px;\n}\n.search {\n   position: relative;\n   top: 60px;\n   width: 500px;\n   height: 100%;\n   text-align: center;\n   margin-right: 20px;\n}\n.extra-space {\n   margin-top:  45px;\n}\n.title {\n   text-align: left;\n   margin-left: 20px;\n}\n.form {\n  width: 95%;\n}\n.full-width {\n  min-width: 150px;\n  max-width: 500px;\n  width: 80%;\n}\n.korpus {\n   text-align: left;\n}\n.belowOptions {\n   margin-top: 50px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRsbi1lZGl0aW9uL3Rsbi1mdWxsdGV4dC90bG4tZnVsbHRleHQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtHQUNHLFVBQVU7R0FDVixrQkFBa0I7R0FDbEIsUUFBUTtHQUNSLFNBQVM7R0FDVCxZQUFZO0dBQ1osaUJBQWlCO0FBQ3BCO0FBQ0E7R0FDRyxXQUFXO0dBQ1gsZ0JBQWdCO0FBQ25CO0FBQ0E7R0FDRyxXQUFXO0dBQ1gsZ0JBQWdCO0dBQ2hCLGtCQUFrQjtHQUNsQixZQUFZO0dBQ1osMkJBQTJCO0dBQzNCLFVBQVU7QUFDYjtBQUNBO0dBQ0csZUFBZTtBQUNsQjtBQUNBO0dBQ0csZ0JBQWdCO0dBQ2hCLGNBQWM7QUFDakI7QUFDQTtHQUNHLGtCQUFrQjtHQUNsQixTQUFTO0dBQ1QsV0FBVztBQUNkO0FBQ0E7R0FDRyxrQkFBa0I7R0FDbEIsU0FBUztHQUNULFlBQVk7R0FDWixZQUFZO0dBQ1osa0JBQWtCO0dBQ2xCLGtCQUFrQjtBQUNyQjtBQUNBO0dBQ0csaUJBQWlCO0FBQ3BCO0FBQ0E7R0FDRyxnQkFBZ0I7R0FDaEIsaUJBQWlCO0FBQ3BCO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaO0FBQ0E7R0FDRyxnQkFBZ0I7QUFDbkI7QUFDQTtHQUNHLGdCQUFnQjtBQUNuQiIsImZpbGUiOiJ0bG4tZWRpdGlvbi90bG4tZnVsbHRleHQvdGxuLWZ1bGx0ZXh0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcGFnZSB7XG4gICB3aWR0aDogOTglO1xuICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgdG9wOiAwcHg7XG4gICBsZWZ0OiAwcHg7XG4gICBoZWlnaHQ6IDEwMCU7XG4gICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cbi5pY29uLWJ1dHRvbiB7XG4gICB3aWR0aDogMTVweDtcbiAgIG1hcmdpbi1sZWZ0OiAzcHg7XG59XG4ucGFnZS1uYXZpIHtcbiAgIGZsb2F0OiBsZWZ0O1xuICAgbWFyZ2luLXRvcDogLTNweDtcbiAgIG1hcmdpbi1ib3R0b206IDFweDtcbiAgIGhlaWdodDogMzhweDtcbiAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcbiAgIHotaW5kZXg6IDI7XG59XG4uZGVmYXVsdC1tb3VzZSB7XG4gICBjdXJzb3I6IGRlZmF1bHQ7XG59XG4uc21hbGwtZ3JleSB7XG4gICBjb2xvcjogbGlnaHRncmV5O1xuICAgZm9udC1zaXplOiA4MCU7XG59XG4udGV4dCB7XG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICB0b3A6IDEwcHg7XG4gICBsZWZ0OiA1MDBweDtcbn1cbi5zZWFyY2gge1xuICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgdG9wOiA2MHB4O1xuICAgd2lkdGg6IDUwMHB4O1xuICAgaGVpZ2h0OiAxMDAlO1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuLmV4dHJhLXNwYWNlIHtcbiAgIG1hcmdpbi10b3A6ICA0NXB4O1xufVxuLnRpdGxlIHtcbiAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5mb3JtIHtcbiAgd2lkdGg6IDk1JTtcbn1cbi5mdWxsLXdpZHRoIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDgwJTtcbn1cbi5rb3JwdXMge1xuICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5iZWxvd09wdGlvbnMge1xuICAgbWFyZ2luLXRvcDogNTBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/tln-edition/tln-fulltext/tln-fulltext.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/tln-edition/tln-fulltext/tln-fulltext.component.ts ***!
  \********************************************************************/
/*! exports provided: TlnFulltextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TlnFulltextComponent", function() { return TlnFulltextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./src/app/tln-edition/constants.ts");
/* harmony import */ var _common_paginator_result_status__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/paginator-result-status */ "./src/app/tln-edition/common/paginator-result-status.ts");
/* harmony import */ var _common_cache_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/cache.service */ "./src/app/tln-edition/common/cache.service.ts");
/* harmony import */ var _quant_data_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../quant_data_handler */ "./src/app/tln-edition/quant_data_handler.ts");
/* harmony import */ var _datatypes_search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../datatypes/search */ "./src/app/tln-edition/datatypes/search.ts");
/* harmony import */ var _datatypes_manuscript__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../datatypes/manuscript */ "./src/app/tln-edition/datatypes/manuscript.ts");
/* harmony import */ var _route_updater__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../route-updater */ "./src/app/tln-edition/route-updater.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services */ "./src/app/tln-edition/services.ts");











//TODO: german language support for paginator, see: https://github.com/ngx-translate/core
let TlnFulltextComponent = class TlnFulltextComponent extends _route_updater__WEBPACK_IMPORTED_MODULE_9__["RouteUpdater"] {
    constructor(cacheService, localQueryService, router, activatedRoute) {
        super(router, activatedRoute);
        this.cacheService = cacheService;
        this.localQueryService = localQueryService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        //protected currentRoute: string = TLN_SEARCH_ROUTE;
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.expandOptions = false;
        this.dataHandler = new _quant_data_handler__WEBPACK_IMPORTED_MODULE_6__["QuantitativeDataHandler"](this);
        this.max_width = -1;
        this.max_height = -1;
        this.manuscriptPages = [];
        this.manuscript_variable = "manuscript";
        this.resultIndex = 0;
        this.paginatorResultStatus = new _common_paginator_result_status__WEBPACK_IMPORTED_MODULE_4__["PaginatorResultStatus"](5);
        this.resultsReceived = false;
        this.selectedViewOption = _constants__WEBPACK_IMPORTED_MODULE_3__["VIEW_OPTIONS"].TRANSKRIPTION;
        this.startSearch = false;
        this.mapping = {
            current_page_iri: { param: _constants__WEBPACK_IMPORTED_MODULE_3__["TLN_PAGE_PARAM"], type: "string" },
            //         resultIndex: { param: TLN_RESULT_INDEX_PARAM, type: "number" },
            searchTerm: { param: _constants__WEBPACK_IMPORTED_MODULE_3__["TLN_FIND_PARAM"], type: "string" },
            queryProps: { param: _constants__WEBPACK_IMPORTED_MODULE_3__["TLN_SEARCH_QUERY_PARAM"], type: "complex" },
            current_manuscript_unity: { param: _constants__WEBPACK_IMPORTED_MODULE_3__["TLN_MANUSCRIPT_PARAM"], type: "string" },
            fullscreen: { param: _constants__WEBPACK_IMPORTED_MODULE_3__["TLN_FULLSCREEN_PARAM"], type: "boolean" },
        };
        this.pages = [];
        this.queryProps = { ignoreCase: false, selectedManuscripts: [], resultIndex: 0 };
        this.margin_width = 280;
        this.initialPreviewWidth = 300;
        this.previewWidth = this.initialPreviewWidth;
        this.isSelected = (o1, o2) => {
            return o1.id == o2.id;
        };
    }
    ngOnInit() {
        if (screen.availWidth - this.initialPreviewWidth - this.margin_width > 1000) {
            this.previewWidth = screen.availWidth - this.initialPreviewWidth - 1000;
        }
        this.tlnQueryService = (this.queryService != null) ? this.queryService : this.localQueryService;
        this.max_width = screen.availWidth - this.previewWidth - this.margin_width;
        this.max_height = screen.availHeight - 200;
        this.dataHandler.addHandler('manuscriptPages', { 'handler': _datatypes_manuscript__WEBPACK_IMPORTED_MODULE_8__["Manuscript4Selection"] });
        this.dataHandler.addHandler('pages', { 'handler': _datatypes_search__WEBPACK_IMPORTED_MODULE_7__["FoundPage"], 'process_data': this });
        this.dataHandler['pages']['service'] = this;
        this.dataHandler.setQueryService(this.tlnQueryService);
        this.dataHandler.start_processing.subscribe((started) => {
            this.resultsReceived = false;
            this.startSearch = true;
        });
        this.dataHandler.processing_finished.subscribe((finished) => {
            this.resultsReceived = true;
            this.startSearch = false;
        });
        this.dataHandler.getData('manuscriptPages');
        super.ngOnInit();
        this.expandOptions = (this.queryProps.selectedManuscripts.length > 0 || this.queryProps.ignoreCase);
    }
    clearFindText() {
        this.searchTerm = '';
        this.pages = [];
        this.queryProps.resultIndex = 0;
        super.updateParams();
    }
    search() {
        this.queryProps.resultIndex = 0;
        this.paginatorResultStatus.updateResultRange(this.queryProps.resultIndex);
        super.updateParams();
        if (this.searchTerm != undefined && this.searchTerm != null && this.searchTerm != '') {
            this.dataHandler.resetData('pages');
            let query = this.dataHandler['pages'].handler.getSeachQuery(this.searchTerm, this.queryProps.ignoreCase, this.queryProps.selectedManuscripts, this.manuscript_variable);
            this.dataHandler.getSearchData('pages', query, this.searchTerm);
        }
    }
    readParams(params) {
        let oldSearchTerm = this.searchTerm;
        super.readParams(params);
        if (this.searchTerm != undefined && this.searchTerm != null && this.searchTerm != '' && this.searchTerm != oldSearchTerm) {
            let results = (this.queryProps != null && this.queryProps.dataKey != undefined && this.queryProps.dataKey != null)
                ? this.cacheService.getItem(this.queryProps.dataKey + this.searchTerm) : null;
            if (results != null) {
                this.pages = results;
            }
            else {
                this.dataHandler.resetData('pages');
                let query = this.dataHandler['pages'].handler.getSeachQuery(this.searchTerm, this.queryProps.ignoreCase, this.queryProps.selectedManuscripts, this.manuscript_variable);
                this.dataHandler.getSearchData('pages', query, this.searchTerm);
            }
        }
        if (this.pages.length > 0 && this.queryProps.resultIndex > 0) {
            this.paginatorResultStatus.updateResultRange(this.queryProps.resultIndex);
        }
    }
    getSearchTerms() {
        return this.searchTerm.split(' ');
    }
    getIgnoreCaseFlag() {
        return (this.queryProps.ignoreCase) ? 'i' : '';
    }
    updateResultIndex(event) {
        this.paginatorResultStatus.showResults(event);
        this.queryProps.resultIndex = event.pageIndex;
        this.updateParams();
    }
    processData() {
        if (this.queryProps != null
            && this.queryProps.dataKey != undefined
            && this.queryProps.dataKey != null) {
            this.cacheService.removeItem(this.queryProps.dataKey + this.searchTerm);
        }
        const dataKey = _constants__WEBPACK_IMPORTED_MODULE_3__["TLN_SEARCH_ROUTE"] + Date.now().toString();
        this.cacheService.setItem(dataKey + this.searchTerm, this.pages);
        this.queryProps['dataKey'] = dataKey;
        this.updateParams();
    }
};
TlnFulltextComponent.ctorParameters = () => [
    { type: _common_cache_service__WEBPACK_IMPORTED_MODULE_5__["CacheService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_10__["TlnCacheQueryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TlnFulltextComponent.prototype, "queryService", void 0);
TlnFulltextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tln-fulltext',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tln-fulltext.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-fulltext/tln-fulltext.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tln-fulltext.component.css */ "./src/app/tln-edition/tln-fulltext/tln-fulltext.component.css")).default]
    })
], TlnFulltextComponent);



/***/ }),

/***/ "./src/app/tln-edition/tln-height.directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/tln-edition/tln-height.directive.ts ***!
  \*****************************************************/
/*! exports provided: TlnHeightDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TlnHeightDirective", function() { return TlnHeightDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TlnHeightDirective = class TlnHeightDirective {
    constructor(el) {
        this.el = el;
    }
    ngOnInit() {
        if (this.pageView != undefined && this.pageView != null) {
            this.pageView.max_height = window.innerHeight - this.el.nativeElement.offsetHeight - 15;
        }
    }
};
TlnHeightDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('setMaxHeightTo')
], TlnHeightDirective.prototype, "pageView", void 0);
TlnHeightDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[setMaxHeightTo]'
    })
], TlnHeightDirective);



/***/ }),

/***/ "./src/app/tln-edition/tln-information/footnote.component.css":
/*!********************************************************************!*\
  !*** ./src/app/tln-edition/tln-information/footnote.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footnote {\n   cursor: pointer;\n}\n.highlighted {\n   cursor: pointer;\n   background-color: yellow;\n}\n.unhighlighted {\n   cursor: pointer;\n   background-color: white;\n}\n.space {\n   margin-left: 1ch;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRsbi1lZGl0aW9uL3Rsbi1pbmZvcm1hdGlvbi9mb290bm90ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0dBQ0csZUFBZTtBQUNsQjtBQUNBO0dBQ0csZUFBZTtHQUNmLHdCQUF3QjtBQUMzQjtBQUNBO0dBQ0csZUFBZTtHQUNmLHVCQUF1QjtBQUMxQjtBQUNBO0dBQ0csZ0JBQWdCO0FBQ25CIiwiZmlsZSI6InRsbi1lZGl0aW9uL3Rsbi1pbmZvcm1hdGlvbi9mb290bm90ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3Rub3RlIHtcbiAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5oaWdobGlnaHRlZCB7XG4gICBjdXJzb3I6IHBvaW50ZXI7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG59XG4udW5oaWdobGlnaHRlZCB7XG4gICBjdXJzb3I6IHBvaW50ZXI7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5zcGFjZSB7XG4gICBtYXJnaW4tbGVmdDogMWNoO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/tln-edition/tln-information/footnote.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/tln-edition/tln-information/footnote.component.ts ***!
  \*******************************************************************/
/*! exports provided: FootnoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FootnoteComponent", function() { return FootnoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_mat_standoff_markup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-mat-standoff-markup */ "./node_modules/ngx-mat-standoff-markup/fesm2015/ngx-mat-standoff-markup.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services */ "./src/app/tln-edition/services.ts");
/* harmony import */ var _route_updater__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../route-updater */ "./src/app/tln-edition/route-updater.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants */ "./src/app/tln-edition/constants.ts");







let FootnoteComponent = class FootnoteComponent extends _route_updater__WEBPACK_IMPORTED_MODULE_5__["RouteUpdater"] {
    constructor(pageViewService, router, activatedRoute) {
        super(router, activatedRoute);
        this.pageViewService = pageViewService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.highlighted = false;
        this.mySettings = new ngx_mat_standoff_markup__WEBPACK_IMPORTED_MODULE_3__["MarkupSettings"]();
        this.selectedLines = [];
        this.selectedWords = [];
        this.mapping = {
            selectedWords: { param: _constants__WEBPACK_IMPORTED_MODULE_6__["TLN_SELECTED_WORDS_PARAM"], type: "string" },
            selectedLines: { param: _constants__WEBPACK_IMPORTED_MODULE_6__["TLN_SELECTED_LINES_PARAM"], type: "string" }
        };
    }
    ngOnInit() {
        if (this.targetRoute != undefined && this.targetRoute != null) {
            this.currentRoute = this.targetRoute;
        }
        if (this.editor_comment != undefined && this.editor_comment != null && this.editor_comment.editorClass != null
            && this.editor_comment.editorClass.split('#').length > 1 && this.editor_comment.editorClass.split('#')[1] != 'EditorComment') {
            this.editorType = this.editor_comment.editorClass.split('#')[1];
        }
        super.ngOnInit();
    }
    selectItem() {
        if (this.editor_comment.word != null) {
            const id = this.editor_comment.word.id;
            if (this.selectedWords.indexOf(id) == -1) {
                this.selectedWords.push(id);
            }
        }
        else if (this.editor_comment.tLine != null) {
            const id = this.editor_comment.tLine.id;
            if (this.selectedLines.indexOf(id) == -1) {
                this.selectedLines.push(id);
            }
        }
        this.updateParams();
        if (this.bottomSheetRef != undefined && this.bottomSheetRef != null) {
            this.bottomSheetRef.dismiss();
        }
    }
    onHover() {
        this.highlighted = true;
        if (this.editor_comment.word != null) {
            this.pageViewService.onHoveredWord.emit(this.editor_comment.word);
        }
        else if (this.editor_comment.tLine != null) {
            this.pageViewService.onHoveredLine.emit(this.editor_comment.tLine);
        }
    }
    offHover() {
        this.highlighted = false;
        if (this.editor_comment.word != null) {
            this.pageViewService.offHoveredWord.emit(this.editor_comment.word);
        }
        else if (this.editor_comment.tLine != null) {
            this.pageViewService.offHoveredLine.emit(this.editor_comment.tLine);
        }
    }
};
FootnoteComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["PageViewService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FootnoteComponent.prototype, "editor_comment", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FootnoteComponent.prototype, "bottomSheetRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FootnoteComponent.prototype, "parentActivatedRoute", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FootnoteComponent.prototype, "targetRoute", void 0);
FootnoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'footnote',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footnote.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-information/footnote.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footnote.component.css */ "./src/app/tln-edition/tln-information/footnote.component.css")).default]
    })
], FootnoteComponent);



/***/ }),

/***/ "./src/app/tln-edition/tln-information/imprint.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/tln-edition/tln-information/imprint.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0bG4tZWRpdGlvbi90bG4taW5mb3JtYXRpb24vaW1wcmludC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/tln-edition/tln-information/imprint.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/tln-edition/tln-information/imprint.component.ts ***!
  \******************************************************************/
/*! exports provided: ImprintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImprintComponent", function() { return ImprintComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services */ "./src/app/tln-edition/services.ts");
/* harmony import */ var _route_reader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../route-reader */ "./src/app/tln-edition/route-reader.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ "./src/app/tln-edition/constants.ts");






let ImprintComponent = class ImprintComponent extends _route_reader__WEBPACK_IMPORTED_MODULE_4__["RouteReader"] {
    constructor(pageViewService, router, activatedRoute) {
        super(router, activatedRoute);
        this.pageViewService = pageViewService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.highlighted = false;
        this.selectedLines = [];
        this.selectedWords = [];
        this.tempSelectedLines = [];
        this.tempSelectedWords = [];
        this.mapping = {
            selectedLines: { param: _constants__WEBPACK_IMPORTED_MODULE_5__["TLN_SELECTED_LINES_PARAM"], type: "string" },
            selectedWords: { param: _constants__WEBPACK_IMPORTED_MODULE_5__["TLN_SELECTED_WORDS_PARAM"], type: "string" }
        };
    }
    ngOnInit() {
        this.imprintReference = this.getLineReference() + this.imprint.reference;
        super.ngOnInit();
    }
    getLineReference() {
        let lineString = '';
        if (this.imprint.lines.length == 0) {
            return lineString;
        }
        const ranges = this.numbers2ConsecutiveRanges(this.imprint.lines.map(line => line.number));
        ranges.forEach(range => {
            if (lineString != '') {
                lineString = lineString + ',';
            }
            lineString = (range.end != undefined) ? lineString + range.start + '-' + range.end : lineString + range.start;
        });
        return lineString + ': ';
    }
    numbers2ConsecutiveRanges(lines) {
        if (lines.length == 0) {
            return [];
        }
        else if (lines.length < 2) {
            return [{ start: lines[0] }];
        }
        else if (lines.length == 2) {
            return (lines[1] - lines[0] > 1) ? [{ start: lines[0] }, { start: lines[1] }] : [{ start: lines[0], end: lines[1] }];
        }
        else {
            const index = Math.round((lines.length - 1) / 2);
            let leftRanges = this.numbers2ConsecutiveRanges(lines.slice(0, index));
            let rightRanges = this.numbers2ConsecutiveRanges(lines.slice(index));
            if (leftRanges.length == 0) {
                return rightRanges;
            }
            if (rightRanges.length == 0) {
                return leftRanges;
            }
            if ((leftRanges[leftRanges.length - 1].end != undefined && rightRanges[0].start - leftRanges[leftRanges.length - 1].end == 1)
                || rightRanges[0].start - leftRanges[leftRanges.length - 1].start == 1) {
                leftRanges[leftRanges.length - 1].end = (rightRanges[0].end != undefined) ? rightRanges[0].end : rightRanges[0].start;
                return [...leftRanges, ...rightRanges.slice(1)];
            }
            return [...leftRanges, ...rightRanges];
        }
    }
    hoverChanged(hover) {
        this.highlighted = hover;
        if (this.imprint != null) {
            if (hover && (this.selectedLines.length > 0 || this.selectedWords.length > 0)) {
                this.tempSelectedLines = this.selectedLines.slice();
                this.tempSelectedWords = this.selectedWords.slice();
                this.selectedLines.forEach(lineId => {
                    this.pageViewService.onClickedLine.emit({ id: lineId, top: -1, bottom: -1, number: -1 });
                });
                this.selectedWords.forEach(wordId => {
                    this.pageViewService.onClickedWord.emit({ id: wordId, text: 'none', top: -1, deleted: false, line: 'none', line_number: -1, left: -1, width: 0, height: 0 });
                });
            }
            this.imprint.lines.forEach(line => {
                this.pageViewService.onClickedLine.emit(line);
            });
            if (!hover && (this.tempSelectedLines.length > 0 || this.tempSelectedWords.length > 0)) {
                this.tempSelectedLines.forEach(lineId => {
                    this.pageViewService.onClickedLine.emit({ id: lineId, top: -1, bottom: -1, number: -1 });
                });
                this.tempSelectedWords.forEach(wordId => {
                    this.pageViewService.onClickedWord.emit({ id: wordId, text: 'none', top: -1, deleted: false, line: 'none', line_number: -1, left: -1, width: 0, height: 0 });
                });
            }
        }
    }
};
ImprintComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_3__["PageViewService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ImprintComponent.prototype, "imprint", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ImprintComponent.prototype, "bottomSheetRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ImprintComponent.prototype, "parentActivatedRoute", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ImprintComponent.prototype, "targetRoute", void 0);
ImprintComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'imprint',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./imprint.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-information/imprint.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./imprint.component.css */ "./src/app/tln-edition/tln-information/imprint.component.css")).default]
    })
], ImprintComponent);



/***/ }),

/***/ "./src/app/tln-edition/tln-information/tln-information.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/tln-edition/tln-information/tln-information.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".highlight {\n   text-decoration: underline;\n}\nh4.rhizome {\n   margin-bottom: -10px;\n}\n.text {\n   text-align: justify;\n   width: 600px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRsbi1lZGl0aW9uL3Rsbi1pbmZvcm1hdGlvbi90bG4taW5mb3JtYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtHQUNHLDBCQUEwQjtBQUM3QjtBQUNBO0dBQ0csb0JBQW9CO0FBQ3ZCO0FBQ0E7R0FDRyxtQkFBbUI7R0FDbkIsWUFBWTtBQUNmIiwiZmlsZSI6InRsbi1lZGl0aW9uL3Rsbi1pbmZvcm1hdGlvbi90bG4taW5mb3JtYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oaWdobGlnaHQge1xuICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5oNC5yaGl6b21lIHtcbiAgIG1hcmdpbi1ib3R0b206IC0xMHB4O1xufVxuLnRleHQge1xuICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgIHdpZHRoOiA2MDBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/tln-edition/tln-information/tln-information.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/tln-edition/tln-information/tln-information.component.ts ***!
  \**************************************************************************/
/*! exports provided: TlnInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TlnInformationComponent", function() { return TlnInformationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
/* harmony import */ var _route_updater__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../route-updater */ "./src/app/tln-edition/route-updater.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ "./src/app/tln-edition/constants.ts");






let TlnInformationComponent = class TlnInformationComponent extends _route_updater__WEBPACK_IMPORTED_MODULE_4__["RouteUpdater"] {
    constructor(data, bottomSheetRef, router, activatedRoute) {
        super(router, activatedRoute);
        this.data = data;
        this.bottomSheetRef = bottomSheetRef;
        this.router = router;
        this.activatedRoute = activatedRoute;
        /**
         * the route to the crossref app
         **/
        this.crossrefRoute = _constants__WEBPACK_IMPORTED_MODULE_5__["TLN_CROSSREF_ROUTE"];
        /**
         * the route to the viewer app
         **/
        this.viewerRoute = _constants__WEBPACK_IMPORTED_MODULE_5__["TLN_VIEWER_ROUTE"];
        /**
         * the param mapping TODO: for later use
         **/
        this.mapping = {
            current_iri: { param: _constants__WEBPACK_IMPORTED_MODULE_5__["TLN_PAGE_PARAM"], type: "string" },
            current_manuscript_iri: { param: _constants__WEBPACK_IMPORTED_MODULE_5__["TLN_MANUSCRIPT_PARAM"], type: "string" },
            current_genetic_order: { param: _constants__WEBPACK_IMPORTED_MODULE_5__["TLN_TEXT_GENETIC_ORDER_PARAM"], type: "string" }
        };
    }
};
TlnInformationComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__["MAT_BOTTOM_SHEET_DATA"],] }] },
    { type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheetRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
TlnInformationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tln-information',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tln-information.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-information/tln-information.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tln-information.component.css */ "./src/app/tln-edition/tln-information/tln-information.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__["MAT_BOTTOM_SHEET_DATA"]))
], TlnInformationComponent);



/***/ }),

/***/ "./src/app/tln-edition/tln-manuscript-view/tln-leaf-description.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/tln-edition/tln-manuscript-view/tln-leaf-description.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n   cursor: pointer;\n}\n.thumbnail {\n  max-height: 200px;\n  max-width: 600px;\n}\ntd.text {\n   text-align: justify;\n   width: 600px;\n}\n.leaf {\n   margin-bottom: 30px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRsbi1lZGl0aW9uL3Rsbi1tYW51c2NyaXB0LXZpZXcvdGxuLWxlYWYtZGVzY3JpcHRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtHQUNHLGVBQWU7QUFDbEI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7QUFFQTtHQUNHLG1CQUFtQjtHQUNuQixZQUFZO0FBQ2Y7QUFDQTtHQUNHLG1CQUFtQjtBQUN0QiIsImZpbGUiOiJ0bG4tZWRpdGlvbi90bG4tbWFudXNjcmlwdC12aWV3L3Rsbi1sZWFmLWRlc2NyaXB0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xuICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnRodW1ibmFpbCB7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICBtYXgtd2lkdGg6IDYwMHB4O1xufVxuXG50ZC50ZXh0IHtcbiAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICB3aWR0aDogNjAwcHg7XG59XG4ubGVhZiB7XG4gICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/tln-edition/tln-manuscript-view/tln-leaf-description.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/tln-edition/tln-manuscript-view/tln-leaf-description.component.ts ***!
  \***********************************************************************************/
/*! exports provided: TlnLeafDescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TlnLeafDescriptionComponent", function() { return TlnLeafDescriptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _data_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data_handler */ "./src/app/tln-edition/data_handler.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ "./src/app/tln-edition/constants.ts");
/* harmony import */ var _datatypes_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../datatypes/page */ "./src/app/tln-edition/datatypes/page.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services */ "./src/app/tln-edition/services.ts");
/* harmony import */ var _route_updater__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../route-updater */ "./src/app/tln-edition/route-updater.ts");








let TlnLeafDescriptionComponent = class TlnLeafDescriptionComponent extends _route_updater__WEBPACK_IMPORTED_MODULE_7__["RouteUpdater"] {
    constructor(tlnQueryService, activatedRoute, router) {
        super(router, activatedRoute);
        this.tlnQueryService = tlnQueryService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.dataHandler = new _data_handler__WEBPACK_IMPORTED_MODULE_3__["DataHandler"](this);
        this.pages = [];
        this.currentRoute = _constants__WEBPACK_IMPORTED_MODULE_4__["TLN_VIEWER_ROUTE"];
        this.mapping = {
            contextView: { param: _constants__WEBPACK_IMPORTED_MODULE_4__["TLN_CONTEXT_VIEW_PARAM"], type: "string" },
            current_page_iri: { param: _constants__WEBPACK_IMPORTED_MODULE_4__["TLN_PAGE_PARAM"], type: "string" },
            viewMode: { param: _constants__WEBPACK_IMPORTED_MODULE_4__["TLN_VIEW_OPTION_PARAM"], type: "string" },
        };
    }
    ngOnInit() {
        this.dataHandler.addHandler('pages', { 'handler': _datatypes_page__WEBPACK_IMPORTED_MODULE_5__["TlnPageWithFaksimile"] });
        this.dataHandler.setQueryService(this.tlnQueryService);
        if (this.manuscriptLeaf != undefined && this.manuscriptLeaf != null) {
            this.dataHandler.getData('pages', this.manuscriptLeaf.id);
        }
    }
    navigate(pageIri) {
        this.current_page_iri = pageIri;
        this.contextView = _constants__WEBPACK_IMPORTED_MODULE_4__["TLN_PAGE_PARAM"];
        this.updateParams();
    }
};
TlnLeafDescriptionComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_6__["TlnCacheQueryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TlnLeafDescriptionComponent.prototype, "current_manuscript", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TlnLeafDescriptionComponent.prototype, "manuscriptLeaf", void 0);
TlnLeafDescriptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tln-leaf-description',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tln-leaf-description.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-manuscript-view/tln-leaf-description.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tln-leaf-description.component.css */ "./src/app/tln-edition/tln-manuscript-view/tln-leaf-description.component.css")).default]
    })
], TlnLeafDescriptionComponent);



/***/ }),

/***/ "./src/app/tln-edition/tln-manuscript-view/tln-manuscript-view.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/tln-edition/tln-manuscript-view/tln-manuscript-view.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img.thumb {\n   overflow: auto;\n   padding: 0 20px;\n   text-align: center;\n}\ntd.author {\n   text-align: left;\n   width: 150px;\n   vertical-align: top;\n   padding-right: 10px;\n}\ntd.text {\n   text-align: justify;\n   width: 600px;\n}\np.text {\n   text-align: justify;\n   width: 760px;\n}\nbutton.nospace {\n   /*margin: -12px;*/\n   max-width: 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRsbi1lZGl0aW9uL3Rsbi1tYW51c2NyaXB0LXZpZXcvdGxuLW1hbnVzY3JpcHQtdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0dBQ0csY0FBYztHQUNkLGVBQWU7R0FDZixrQkFBa0I7QUFDckI7QUFDQTtHQUNHLGdCQUFnQjtHQUNoQixZQUFZO0dBQ1osbUJBQW1CO0dBQ25CLG1CQUFtQjtBQUN0QjtBQUNBO0dBQ0csbUJBQW1CO0dBQ25CLFlBQVk7QUFDZjtBQUNBO0dBQ0csbUJBQW1CO0dBQ25CLFlBQVk7QUFDZjtBQUNBO0dBQ0csaUJBQWlCO0dBQ2pCLGVBQWU7QUFDbEIiLCJmaWxlIjoidGxuLWVkaXRpb24vdGxuLW1hbnVzY3JpcHQtdmlldy90bG4tbWFudXNjcmlwdC12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcudGh1bWIge1xuICAgb3ZlcmZsb3c6IGF1dG87XG4gICBwYWRkaW5nOiAwIDIwcHg7XG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG50ZC5hdXRob3Ige1xuICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgIHdpZHRoOiAxNTBweDtcbiAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxudGQudGV4dCB7XG4gICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgd2lkdGg6IDYwMHB4O1xufVxucC50ZXh0IHtcbiAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICB3aWR0aDogNzYwcHg7XG59XG5idXR0b24ubm9zcGFjZSB7XG4gICAvKm1hcmdpbjogLTEycHg7Ki9cbiAgIG1heC13aWR0aDogMTVweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/tln-edition/tln-manuscript-view/tln-manuscript-view.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/tln-edition/tln-manuscript-view/tln-manuscript-view.component.ts ***!
  \**********************************************************************************/
/*! exports provided: TlnManuscriptViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TlnManuscriptViewComponent", function() { return TlnManuscriptViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ "./src/app/tln-edition/constants.ts");
/* harmony import */ var _data_handler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data_handler */ "./src/app/tln-edition/data_handler.ts");
/* harmony import */ var _datatypes_manuscript__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../datatypes/manuscript */ "./src/app/tln-edition/datatypes/manuscript.ts");
/* harmony import */ var _datatypes_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../datatypes/page */ "./src/app/tln-edition/datatypes/page.ts");
/* harmony import */ var _route_updater__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../route-updater */ "./src/app/tln-edition/route-updater.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services */ "./src/app/tln-edition/services.ts");
/* harmony import */ var ngx_mat_standoff_markup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-mat-standoff-markup */ "./node_modules/ngx-mat-standoff-markup/fesm2015/ngx-mat-standoff-markup.js");











let TlnManuscriptViewComponent = class TlnManuscriptViewComponent extends _route_updater__WEBPACK_IMPORTED_MODULE_8__["RouteUpdater"] {
    constructor(_sanitizer, tlnQueryService, router, activatedRoute) {
        super(router, activatedRoute);
        this._sanitizer = _sanitizer;
        this.tlnQueryService = tlnQueryService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.contextView = _constants__WEBPACK_IMPORTED_MODULE_4__["TLN_MANUSCRIPT_PARAM"];
        this.currentRoute = _constants__WEBPACK_IMPORTED_MODULE_4__["TLN_MANUSCRIPT_ROUTE"];
        this.dataHandler = new _data_handler__WEBPACK_IMPORTED_MODULE_5__["DataHandler"](this);
        this.earlierDescriptions = [];
        this.manuscriptLeafs = [];
        this.mapping = {
            contextView: { param: _constants__WEBPACK_IMPORTED_MODULE_4__["TLN_CONTEXT_VIEW_PARAM"], type: "string" },
            current_page_iri: { param: _constants__WEBPACK_IMPORTED_MODULE_4__["TLN_PAGE_PARAM"], type: "string" },
            current_manuscript_unity: { param: _constants__WEBPACK_IMPORTED_MODULE_4__["TLN_MANUSCRIPT_PARAM"], type: "string" },
            fullscreen: { param: _constants__WEBPACK_IMPORTED_MODULE_4__["TLN_FULLSCREEN_PARAM"], type: "boolean" },
        };
        this.mySettings = new ngx_mat_standoff_markup__WEBPACK_IMPORTED_MODULE_10__["MarkupSettings"]();
        this.pages = [];
    }
    getSafeResourceUrl(url) {
        return this._sanitizer.bypassSecurityTrustResourceUrl(url);
    }
    ngOnInit() {
        this.dataHandler.addHandler('manuscript_content', ['current_manuscript', 'manuscriptDescription', 'earlierDescriptions', 'pages', 'reconstructedKonvolut', 'manuscriptLeafs']);
        this.dataHandler.addHandler('current_manuscript', { 'handler': _datatypes_manuscript__WEBPACK_IMPORTED_MODULE_6__["TlnExtManuscript"] });
        this.dataHandler.addHandler('manuscriptDescription', { 'handler': _datatypes_manuscript__WEBPACK_IMPORTED_MODULE_6__["ManuscriptDescription"] });
        this.dataHandler.addHandler('earlierDescriptions', { 'handler': _datatypes_manuscript__WEBPACK_IMPORTED_MODULE_6__["ManuscriptEarlierDescription"] });
        this.dataHandler.addHandler('manuscriptLeafs', { 'handler': _datatypes_manuscript__WEBPACK_IMPORTED_MODULE_6__["ManuscriptLeaf"] });
        this.dataHandler.addHandler('pages', { 'handler': _datatypes_page__WEBPACK_IMPORTED_MODULE_7__["PageStub"] });
        this.dataHandler.addHandler('reconstructedKonvolut', { 'handler': _datatypes_manuscript__WEBPACK_IMPORTED_MODULE_6__["ReconstructedKonvolut"] });
        this.dataHandler.setQueryService(this.tlnQueryService);
        super.ngOnInit();
    }
    readParams(params) {
        let old_manuscript_unity = this.current_manuscript_unity;
        super.readParams(params);
        if (this.dataHandler.ready) {
            if (this.current_manuscript_unity != null && this.current_manuscript_unity != old_manuscript_unity) {
                this.dataHandler.resetData('manuscript_content');
                this.dataHandler.getData('manuscript_content', this.current_manuscript_unity);
            }
        }
    }
    openInViewer(pageIri, launch) {
        this.current_page_iri = pageIri;
        this.currentRoute = _constants__WEBPACK_IMPORTED_MODULE_4__["TLN_VIEWER_ROUTE"];
        this.fullscreen = true;
        this.updateParams(launch);
    }
};
TlnManuscriptViewComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_9__["TlnCacheQueryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
TlnManuscriptViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tln-manuscript-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tln-manuscript-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-manuscript-view/tln-manuscript-view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tln-manuscript-view.component.css */ "./src/app/tln-edition/tln-manuscript-view/tln-manuscript-view.component.css")).default]
    })
], TlnManuscriptViewComponent);



/***/ }),

/***/ "./src/app/tln-edition/tln-navigation-elements/open-in-manuscript.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/tln-edition/tln-navigation-elements/open-in-manuscript.component.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".icon-button {\n   width: 15px; \n   margin-left: 3px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRsbi1lZGl0aW9uL3Rsbi1uYXZpZ2F0aW9uLWVsZW1lbnRzL29wZW4taW4tbWFudXNjcmlwdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0dBQ0csV0FBVztHQUNYLGdCQUFnQjtBQUNuQiIsImZpbGUiOiJ0bG4tZWRpdGlvbi90bG4tbmF2aWdhdGlvbi1lbGVtZW50cy9vcGVuLWluLW1hbnVzY3JpcHQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uLWJ1dHRvbiB7XG4gICB3aWR0aDogMTVweDsgXG4gICBtYXJnaW4tbGVmdDogM3B4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/tln-edition/tln-navigation-elements/open-in-manuscript.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/tln-edition/tln-navigation-elements/open-in-manuscript.component.ts ***!
  \*************************************************************************************/
/*! exports provided: OpenInManuscriptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenInManuscriptComponent", function() { return OpenInManuscriptComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./src/app/tln-edition/constants.ts");
/* harmony import */ var _route_updater__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../route-updater */ "./src/app/tln-edition/route-updater.ts");





let OpenInManuscriptComponent = class OpenInManuscriptComponent extends _route_updater__WEBPACK_IMPORTED_MODULE_4__["RouteUpdater"] {
    constructor(router, activatedRoute) {
        super(router, activatedRoute);
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.currentRoute = _constants__WEBPACK_IMPORTED_MODULE_3__["TLN_MANUSCRIPT_ROUTE"];
        this.mapping = { current_manuscript_unity: { param: _constants__WEBPACK_IMPORTED_MODULE_3__["TLN_MANUSCRIPT_PARAM"], type: "string" } };
    }
    ngOnInit() {
        super.ngOnInit();
        if (this.routePrefix != undefined && this.routePrefix != null) {
            this.currentRoute = this.routePrefix + '/' + this.currentRoute;
        }
    }
    openInManuscript(launchExternally) {
        this.current_manuscript_unity = this.routerInformation.manuscript;
        this.updateParams(launchExternally);
    }
};
OpenInManuscriptComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], OpenInManuscriptComponent.prototype, "routerInformation", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], OpenInManuscriptComponent.prototype, "routePrefix", void 0);
OpenInManuscriptComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'open-in-manuscript',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./open-in-manuscript.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-navigation-elements/open-in-manuscript.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./open-in-manuscript.component.css */ "./src/app/tln-edition/tln-navigation-elements/open-in-manuscript.component.css")).default]
    })
], OpenInManuscriptComponent);



/***/ }),

/***/ "./src/app/tln-edition/tln-navigation-elements/open-in-viewer.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/tln-edition/tln-navigation-elements/open-in-viewer.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".icon-button {\n  width: 15px;\n  margin-left: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9kYXRhL2hvbWUva25pc3RlcjAvZ2l0aHVicy9OaWV0enNjaGVCZXRhL25pZXR6c2NoZS1iZXRhLWFwcC9zcmMvYXBwL3Rsbi1lZGl0aW9uL3Rsbi1uYXZpZ2F0aW9uLWVsZW1lbnRzL29wZW4taW4tdmlld2VyLmNvbXBvbmVudC5zY3NzIiwidGxuLWVkaXRpb24vdGxuLW5hdmlnYXRpb24tZWxlbWVudHMvb3Blbi1pbi12aWV3ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRyxXQUFBO0VBQ0EsZ0JBQUE7QUNDSCIsImZpbGUiOiJ0bG4tZWRpdGlvbi90bG4tbmF2aWdhdGlvbi1lbGVtZW50cy9vcGVuLWluLXZpZXdlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uLWJ1dHRvbiB7XG4gICB3aWR0aDogMTVweDsgXG4gICBtYXJnaW4tbGVmdDogM3B4O1xufVxuIiwiLmljb24tYnV0dG9uIHtcbiAgd2lkdGg6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/tln-edition/tln-navigation-elements/open-in-viewer.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/tln-edition/tln-navigation-elements/open-in-viewer.component.ts ***!
  \*********************************************************************************/
/*! exports provided: OpenInViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenInViewerComponent", function() { return OpenInViewerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./src/app/tln-edition/constants.ts");
/* harmony import */ var _route_updater__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../route-updater */ "./src/app/tln-edition/route-updater.ts");





let OpenInViewerComponent = class OpenInViewerComponent extends _route_updater__WEBPACK_IMPORTED_MODULE_4__["RouteUpdater"] {
    constructor(router, activatedRoute) {
        super(router, activatedRoute);
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.launch = false;
        this.currentRoute = _constants__WEBPACK_IMPORTED_MODULE_3__["TLN_VIEWER_ROUTE"];
        this.mapping = { current_iri: { param: _constants__WEBPACK_IMPORTED_MODULE_3__["TLN_PAGE_PARAM"], type: "string" },
            selectedWords: { param: _constants__WEBPACK_IMPORTED_MODULE_3__["TLN_SELECTED_WORDS_PARAM"], type: "string" },
            selectedLines: { param: _constants__WEBPACK_IMPORTED_MODULE_3__["TLN_SELECTED_LINES_PARAM"], type: "string" },
            current_manuscript_unity: { param: _constants__WEBPACK_IMPORTED_MODULE_3__["TLN_MANUSCRIPT_PARAM"], type: "string" } };
    }
    ngOnInit() {
        super.ngOnInit();
        if (this.routePrefix != undefined && this.routePrefix != null) {
            this.currentRoute = this.routePrefix + '/' + this.currentRoute;
        }
        this.page = { id: this.routerInformation.page,
            number: this.routerInformation.number,
            title: this.routerInformation.title };
        this.launch = (this.routerInformation.launchExternally != undefined
            && this.routerInformation.launchExternally != null
            && this.routerInformation.launchExternally);
        if (this.routerInformation.selectedWords != undefined
            && this.routerInformation.selectedWords != null
            && this.routerInformation.selectedWords.length > 0) {
            this.selectedWords = this.routerInformation.selectedWords;
        }
        if (this.routerInformation.selectedLines != undefined
            && this.routerInformation.selectedLines != null
            && this.routerInformation.selectedLines.length > 0) {
            this.selectedLines = this.routerInformation.selectedLines;
        }
        if (this.title == undefined || this.title == null || this.title == '') {
            this.title = this.page.title + ' ' + this.page.number + '  in Seitenansicht öffnen';
        }
        if (this.launchTitle == undefined || this.launchTitle == null || this.launchTitle == '') {
            this.launchTitle = this.page.title + ' ' + this.page.number + '  in neuem Tab in Seitenansicht öffnen';
        }
    }
    openInViewer() {
        if (this.routerInformation != undefined && this.routerInformation != null) {
            this.current_iri = this.routerInformation.page;
            if (this.routerInformation.manuscript != undefined && this.routerInformation != null) {
                this.current_manuscript_unity = this.routerInformation.manuscript;
            }
            this.updateParams(this.launch);
        }
    }
};
OpenInViewerComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], OpenInViewerComponent.prototype, "routerInformation", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], OpenInViewerComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], OpenInViewerComponent.prototype, "launchTitle", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], OpenInViewerComponent.prototype, "routePrefix", void 0);
OpenInViewerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'open-in-viewer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./open-in-viewer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-navigation-elements/open-in-viewer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./open-in-viewer.component.scss */ "./src/app/tln-edition/tln-navigation-elements/open-in-viewer.component.scss")).default]
    })
], OpenInViewerComponent);



/***/ }),

/***/ "./src/app/tln-edition/tln-navigation-elements/search.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/tln-edition/tln-navigation-elements/search.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".search {\n   margin-left: 8px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRsbi1lZGl0aW9uL3Rsbi1uYXZpZ2F0aW9uLWVsZW1lbnRzL3NlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0dBQ0csZ0JBQWdCO0FBQ25CIiwiZmlsZSI6InRsbi1lZGl0aW9uL3Rsbi1uYXZpZ2F0aW9uLWVsZW1lbnRzL3NlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaCB7XG4gICBtYXJnaW4tbGVmdDogOHB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/tln-edition/tln-navigation-elements/search.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/tln-edition/tln-navigation-elements/search.component.ts ***!
  \*************************************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./src/app/tln-edition/constants.ts");
/* harmony import */ var _route_updater__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../route-updater */ "./src/app/tln-edition/route-updater.ts");





let SearchComponent = class SearchComponent extends _route_updater__WEBPACK_IMPORTED_MODULE_4__["RouteUpdater"] {
    constructor(router, activatedRoute) {
        super(router, activatedRoute);
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.mapping = { findText: { param: _constants__WEBPACK_IMPORTED_MODULE_3__["TLN_FIND_PARAM"], type: "string" } };
    }
    openFulltextSearch() {
        this.currentRoute = _constants__WEBPACK_IMPORTED_MODULE_3__["TLN_SEARCH_ROUTE"];
        this.updateParams();
    }
    clearFindText() {
        this.findText = '';
        this.updateParams();
    }
};
SearchComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'search',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-navigation-elements/search.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search.component.css */ "./src/app/tln-edition/tln-navigation-elements/search.component.css")).default]
    })
], SearchComponent);



/***/ }),

/***/ "./src/app/tln-edition/tln-navigation-elements/toggle-navigation.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/tln-edition/tln-navigation-elements/toggle-navigation.component.css ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0bG4tZWRpdGlvbi90bG4tbmF2aWdhdGlvbi1lbGVtZW50cy90b2dnbGUtbmF2aWdhdGlvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/tln-edition/tln-navigation-elements/toggle-navigation.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/tln-edition/tln-navigation-elements/toggle-navigation.component.ts ***!
  \************************************************************************************/
/*! exports provided: ToggleNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleNavigationComponent", function() { return ToggleNavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./src/app/tln-edition/constants.ts");
/* harmony import */ var _route_updater__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../route-updater */ "./src/app/tln-edition/route-updater.ts");





let ToggleNavigationComponent = class ToggleNavigationComponent extends _route_updater__WEBPACK_IMPORTED_MODULE_4__["RouteUpdater"] {
    constructor(router, activatedRoute) {
        super(router, activatedRoute);
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.showNavBarOpenButton = true;
        this.fullscreen = false;
        this.navBarOpenState = false;
        this.mapping = {
            navBarOpenState: { param: _constants__WEBPACK_IMPORTED_MODULE_3__["TLN_NAV_BAR_OPEN_STATE_PARAM"], type: "boolean" },
            fullscreen: { param: _constants__WEBPACK_IMPORTED_MODULE_3__["TLN_FULLSCREEN_PARAM"], type: "boolean" }
        };
    }
    toggleFullscreen() {
        this.fullscreen = !this.fullscreen;
        this.updateParams();
    }
    toggleNavDrawer() {
        this.navBarOpenState = !this.navBarOpenState;
        this.updateParams();
    }
};
ToggleNavigationComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ToggleNavigationComponent.prototype, "showNavBarOpenButton", void 0);
ToggleNavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'toggle-navigation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./toggle-navigation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-navigation-elements/toggle-navigation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./toggle-navigation.component.css */ "./src/app/tln-edition/tln-navigation-elements/toggle-navigation.component.css")).default]
    })
], ToggleNavigationComponent);



/***/ }),

/***/ "./src/app/tln-edition/tln-navigation-elements/zoom.component.css":
/*!************************************************************************!*\
  !*** ./src/app/tln-edition/tln-navigation-elements/zoom.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".zoom {\n   max-width: 20px;\n}\n.zoom-in {\n   cursor: zoom-in;\n}\n.zoom-out {\n   cursor: zoom-out;\n}\nmat-slider {\n  width: 200px;\n}\n::ng-deep .mat-slider-thumb-label {\n      width: 33px !important;\n      height: 33px !important;\n      top: -42px !important;\n      right: -15px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRsbi1lZGl0aW9uL3Rsbi1uYXZpZ2F0aW9uLWVsZW1lbnRzL3pvb20uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtHQUNHLGVBQWU7QUFDbEI7QUFDQTtHQUNHLGVBQWU7QUFDbEI7QUFDQTtHQUNHLGdCQUFnQjtBQUNuQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7TUFDTSxzQkFBc0I7TUFDdEIsdUJBQXVCO01BQ3ZCLHFCQUFxQjtNQUNyQix1QkFBdUI7QUFDN0IiLCJmaWxlIjoidGxuLWVkaXRpb24vdGxuLW5hdmlnYXRpb24tZWxlbWVudHMvem9vbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnpvb20ge1xuICAgbWF4LXdpZHRoOiAyMHB4O1xufVxuLnpvb20taW4ge1xuICAgY3Vyc29yOiB6b29tLWluO1xufVxuLnpvb20tb3V0IHtcbiAgIGN1cnNvcjogem9vbS1vdXQ7XG59XG5tYXQtc2xpZGVyIHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuOjpuZy1kZWVwIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsIHtcbiAgICAgIHdpZHRoOiAzM3B4ICFpbXBvcnRhbnQ7XG4gICAgICBoZWlnaHQ6IDMzcHggIWltcG9ydGFudDtcbiAgICAgIHRvcDogLTQycHggIWltcG9ydGFudDtcbiAgICAgIHJpZ2h0OiAtMTVweCAhaW1wb3J0YW50O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/tln-edition/tln-navigation-elements/zoom.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/tln-edition/tln-navigation-elements/zoom.component.ts ***!
  \***********************************************************************/
/*! exports provided: ZoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomComponent", function() { return ZoomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./src/app/tln-edition/constants.ts");
/* harmony import */ var _route_updater__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../route-updater */ "./src/app/tln-edition/route-updater.ts");





let ZoomComponent = class ZoomComponent extends _route_updater__WEBPACK_IMPORTED_MODULE_4__["RouteUpdater"] {
    constructor(router, activatedRoute) {
        super(router, activatedRoute);
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.resetButtonOn = true;
        this.useViewerZoom = true;
        this.sliderOn = true;
        this.step = 0.25;
        this.zoomFactor = 1;
        this.mapping = { zoomFactor: { param: _constants__WEBPACK_IMPORTED_MODULE_3__["TLN_ZOOM_PARAM"], type: "number" } };
    }
    ngOnInit() {
        if (!this.useViewerZoom) {
            this.mapping['zoomFactor']['param'] = _constants__WEBPACK_IMPORTED_MODULE_3__["TLN_MULTI_INSTANCE_ZOOM_PARAM"];
        }
        super.ngOnInit();
    }
    formatLabel(value) {
        return Math.round(value * 100) + '%';
    }
    setZoomFactor(newZoomFactor) {
        console.log(newZoomFactor);
        if (newZoomFactor > 0) {
            this.zoomFactor = Math.round(newZoomFactor * 100) / 100;
        }
        else {
            this.zoomFactor = this.zoomFactor / 2;
        }
        this.updateParams();
    }
};
ZoomComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ZoomComponent.prototype, "resetButtonOn", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ZoomComponent.prototype, "useViewerZoom", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ZoomComponent.prototype, "sliderOn", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ZoomComponent.prototype, "step", void 0);
ZoomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'zoom',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./zoom.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-navigation-elements/zoom.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./zoom.component.css */ "./src/app/tln-edition/tln-navigation-elements/zoom.component.css")).default]
    })
], ZoomComponent);



/***/ }),

/***/ "./src/app/tln-edition/tln-navigation-elements/zoom.pipe.ts":
/*!******************************************************************!*\
  !*** ./src/app/tln-edition/tln-navigation-elements/zoom.pipe.ts ***!
  \******************************************************************/
/*! exports provided: ZoomPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomPipe", function() { return ZoomPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ZoomPipe = class ZoomPipe {
    transform(zoom) {
        return (zoom.zoomFactor + zoom.changeValue < 0) ? Math.round(zoom.zoomFactor * 50) + '%' : Math.round((zoom.zoomFactor + zoom.changeValue) * 100) + '%';
    }
};
ZoomPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'zoomTitle'
    })
], ZoomPipe);



/***/ }),

/***/ "./src/app/tln-edition/tln-page-view.component.css":
/*!*********************************************************!*\
  !*** ./src/app/tln-edition/tln-page-view.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0bG4tZWRpdGlvbi90bG4tcGFnZS12aWV3LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/tln-edition/tln-page-view.component.ts":
/*!********************************************************!*\
  !*** ./src/app/tln-edition/tln-page-view.component.ts ***!
  \********************************************************/
/*! exports provided: TlnPageViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TlnPageViewComponent", function() { return TlnPageViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tln_query_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tln-query.service */ "./src/app/tln-edition/tln-query.service.ts");
/* harmony import */ var _datatypes_faksimile_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./datatypes/faksimile_image */ "./src/app/tln-edition/datatypes/faksimile_image.ts");
/* harmony import */ var _datatypes_svg_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datatypes/svg_image */ "./src/app/tln-edition/datatypes/svg_image.ts");
/* harmony import */ var _datatypes_line__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./datatypes/line */ "./src/app/tln-edition/datatypes/line.ts");
/* harmony import */ var _datatypes_word__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./datatypes/word */ "./src/app/tln-edition/datatypes/word.ts");
/* harmony import */ var _datatypes_foreign_text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./datatypes/foreign_text */ "./src/app/tln-edition/datatypes/foreign_text.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services */ "./src/app/tln-edition/services.ts");
/* harmony import */ var _data_handler__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./data_handler */ "./src/app/tln-edition/data_handler.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./constants */ "./src/app/tln-edition/constants.ts");
/* harmony import */ var _route_reader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./route-reader */ "./src/app/tln-edition/route-reader.ts");













/**
 * Given a page IRI, this component will request all relevant information and
 * display the data with {@link /components/PageViewComponent.html|PageViewComponent}.
 **/
let TlnPageViewComponent = class TlnPageViewComponent extends _route_reader__WEBPACK_IMPORTED_MODULE_12__["RouteReader"] {
    /**
     * @param localQueryService internal query service that will be used if no external queryService is passed
     * to input.
     **/
    constructor(localQueryService, router, activatedRoute) {
        super(router, activatedRoute);
        this.localQueryService = localQueryService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.configuration = { '*': { 'useExtendedTooltip': true } };
        /**
         * whether or not to ignore the params
         **/
        this.ignoreParams = false;
        /**
         * global zoom factor.
         **/
        this.zoomFactor = 1;
        /**
         * identifiers of selected words that should be highlighted.
         **/
        this.selectedWords = [];
        /**
         * identifiers of selected lines that should be highlighted.
         **/
        this.selectedLines = [];
        /**
         * the (initial) maximum height of the image.
         **/
        this.max_height = -1;
        /**
         * the (initial) maximum width of the image, if both height and width are specified prefer width.
         **/
        this.max_width = -1;
        /**
        * Rotation value, i.e. one of [ 0, 90, 180, 270 ].
        **/
        this.rotation = 0;
        this.dontShowReference = false;
        this.showAllLines = false;
        /**
         * should primary Url be used for image. Use secondary Url if false.
         **/
        this.preferPrimaryUrl = true;
        /**
         * selected view option, i.e. one of the following
         * {@link /miscellaneous/enumerations.html#VIEW_OPTIONS|VIEW_OPTIONS}.
         * */
        this.selectedViewOption = _constants__WEBPACK_IMPORTED_MODULE_11__["DEFAULT_VIEW_OPTION"];
        /**
         * the data handler of this component that retrieves
         * data and instantiates it according to their proper
         * datatypes.
         **/
        this.dataHandler = new _data_handler__WEBPACK_IMPORTED_MODULE_10__["DataHandler"](this);
        /**
         * whether or not to show page view in fullscreen mode.
         **/
        this.fullscreen = false;
        /**
         * texts written by foreign hand
         **/
        this.foreignTexts = [];
        /**
         * the Array of lines of the first image that will be displayed by {@link /components/MarginFieldComponent.html|MarginFieldComponent}.
         **/
        this.lines = [];
        /**
         * texts written by foreign hand
         **/
        this.second_foreignTexts = [];
        /**
         * the Array of lines of the second image that will be displayed by {@link /components/MarginFieldComponent.html|MarginFieldComponent}.
         **/
        this.second_lines = [];
        /**
         * the Array of words of the second image that will be displayed by {@link /components/TextFieldComponent.html|TextFieldComponent}.
         **/
        this.second_words = [];
        /**
         * the Array of words of the first image that will be displayed by {@link /components/TextFieldComponent.html|TextFieldComponent}.
         **/
        this.words = [];
        this.multiInstanceMode = false;
        this.mapping = {
            findText: { param: _constants__WEBPACK_IMPORTED_MODULE_11__["TLN_FIND_PARAM"], type: "string" },
            fullscreen: { param: _constants__WEBPACK_IMPORTED_MODULE_11__["TLN_FULLSCREEN_PARAM"], type: "boolean" },
            rotation: { param: _constants__WEBPACK_IMPORTED_MODULE_11__["TLN_ROTATION_PARAM"], type: "number" },
            selectedViewOption: { param: _constants__WEBPACK_IMPORTED_MODULE_11__["TLN_VIEW_OPTION_PARAM"], type: "string" },
            selectedLines: { param: _constants__WEBPACK_IMPORTED_MODULE_11__["TLN_SELECTED_LINES_PARAM"], type: "string" },
            selectedWords: { param: _constants__WEBPACK_IMPORTED_MODULE_11__["TLN_SELECTED_WORDS_PARAM"], type: "string" },
            current_iri: { param: _constants__WEBPACK_IMPORTED_MODULE_11__["TLN_PAGE_PARAM"], type: "string" },
            zoomFactor: { param: _constants__WEBPACK_IMPORTED_MODULE_11__["TLN_ZOOM_PARAM"], type: "number" }
        };
    }
    ngOnInit() {
        if (this.multiInstanceMode) {
            this.mapping['current_iri']['ignore'] = (this.current_iri != null);
            this.mapping['selectedViewOption']['ignore'] = true;
            this.mapping['zoomFactor']['param'] = _constants__WEBPACK_IMPORTED_MODULE_11__["TLN_MULTI_INSTANCE_ZOOM_PARAM"];
            this.dontShowReference = true;
            //this.configuration['*']['useExtendedTooltip'] = false;
        }
        super.ngOnInit();
        this.localQueryService.use_cache = true;
        let tlnQueryService = (this.queryService != null) ? this.queryService : this.localQueryService;
        //console.log(tlnQueryService['use_cache']);
        let queryConfiguration = { '*': { 'tlnQueryService': tlnQueryService } };
        this.configuration = _services__WEBPACK_IMPORTED_MODULE_9__["ConfigurableComponent"].updateConfiguration(this.configuration, queryConfiguration);
        this.dataHandler.addHandler('image', { 'handler': _datatypes_svg_image__WEBPACK_IMPORTED_MODULE_5__["SVGImage"] });
        this.dataHandler.addHandler('words', { 'handler': _datatypes_word__WEBPACK_IMPORTED_MODULE_7__["TlnWord"] });
        this.dataHandler.addHandler('foreignTexts', { 'handler': _datatypes_foreign_text__WEBPACK_IMPORTED_MODULE_8__["TlnTextByForeignHand"] });
        this.dataHandler.addHandler('lines', { 'handler': _datatypes_line__WEBPACK_IMPORTED_MODULE_6__["TlnLine"] });
        this.dataHandler.addHandler('second_image', { 'handler': _datatypes_faksimile_image__WEBPACK_IMPORTED_MODULE_4__["FaksimileImage"] });
        this.dataHandler.addHandler('second_words', { 'handler': _datatypes_word__WEBPACK_IMPORTED_MODULE_7__["FaksimileWord"] });
        this.dataHandler.addHandler('second_lines', { 'handler': _datatypes_line__WEBPACK_IMPORTED_MODULE_6__["FaksimileLine"] });
        this.dataHandler.addHandler('second_foreignTexts', { 'handler': _datatypes_foreign_text__WEBPACK_IMPORTED_MODULE_8__["FaksimileTextByForeignHand"] });
        this.dataHandler.addHandler('page_content', ['image', 'lines', 'words', 'foreignTexts']);
        this.dataHandler.addHandler('second_page_content', ['second_image', 'second_lines', 'second_words', 'second_foreignTexts']);
        this.dataHandler.setQueryService(tlnQueryService);
        this.updatePageData();
    }
    ngOnChanges(change) {
        if (this.dataHandler.ready
            && (change.current_iri != undefined && change.current_iri != null && !change.current_iri.firstChange)
            || (change.selectedViewOption != undefined && change.selectedViewOption != null && !change.selectedViewOption.firstChange)) {
            this.updatePageData();
        }
    }
    readParams(params) {
        let old_page_iri = this.current_iri;
        let old_selectedViewOption = this.selectedViewOption;
        let old_fullscreen = this.fullscreen;
        super.readParams(params);
        if (this.dataHandler.ready
            && (old_page_iri != this.current_iri || old_selectedViewOption != this.selectedViewOption)) {
            this.updatePageData();
        }
        if (old_fullscreen != this.fullscreen && !this.multiInstanceMode) {
            //this.dontShowReference = !this.fullscreen; 
            //this.configuration['*']['useExtendedTooltip'] = this.fullscreen;
        }
    }
    /**
     * This function updates the page data by setting the handlers for the current
     * {@link #selectedViewOption|selectedViewOption} and by retrieving the data.
     **/
    updatePageData() {
        this.dataHandler['image']['handler'] = (this.selectedViewOption != _constants__WEBPACK_IMPORTED_MODULE_11__["VIEW_OPTIONS"].FAKSIMILE && this.selectedViewOption != _constants__WEBPACK_IMPORTED_MODULE_11__["VIEW_OPTIONS"].SYNOPSIS_B) ? _datatypes_svg_image__WEBPACK_IMPORTED_MODULE_5__["SVGImage"] : _datatypes_faksimile_image__WEBPACK_IMPORTED_MODULE_4__["FaksimileImage"];
        this.dataHandler['words']['handler'] = (this.selectedViewOption != _constants__WEBPACK_IMPORTED_MODULE_11__["VIEW_OPTIONS"].FAKSIMILE && this.selectedViewOption != _constants__WEBPACK_IMPORTED_MODULE_11__["VIEW_OPTIONS"].SYNOPSIS_B) ? _datatypes_word__WEBPACK_IMPORTED_MODULE_7__["TlnWord"] : _datatypes_word__WEBPACK_IMPORTED_MODULE_7__["FaksimileWord"];
        this.dataHandler['lines']['handler'] = (this.selectedViewOption != _constants__WEBPACK_IMPORTED_MODULE_11__["VIEW_OPTIONS"].FAKSIMILE && this.selectedViewOption != _constants__WEBPACK_IMPORTED_MODULE_11__["VIEW_OPTIONS"].SYNOPSIS_B) ? _datatypes_line__WEBPACK_IMPORTED_MODULE_6__["TlnLine"] : _datatypes_line__WEBPACK_IMPORTED_MODULE_6__["FaksimileLine"];
        this.dataHandler['foreignTexts']['handler'] = (this.selectedViewOption != _constants__WEBPACK_IMPORTED_MODULE_11__["VIEW_OPTIONS"].FAKSIMILE && this.selectedViewOption != _constants__WEBPACK_IMPORTED_MODULE_11__["VIEW_OPTIONS"].SYNOPSIS_B)
            ? _datatypes_foreign_text__WEBPACK_IMPORTED_MODULE_8__["TlnTextByForeignHand"] : _datatypes_foreign_text__WEBPACK_IMPORTED_MODULE_8__["FaksimileTextByForeignHand"];
        if (this.dataHandler['page_content'][this.dataHandler['page_content'].length - 1] == 'second_page_content') {
            this.dataHandler['page_content'].pop();
            this.second_image = null;
            this.second_foreignTexts = [];
            this.second_words = [];
            this.second_lines = [];
        }
        if (this.selectedViewOption == _constants__WEBPACK_IMPORTED_MODULE_11__["VIEW_OPTIONS"].SYNOPSIS || this.selectedViewOption == _constants__WEBPACK_IMPORTED_MODULE_11__["VIEW_OPTIONS"].SYNOPSIS_B) {
            this.dataHandler['second_image']['handler'] = (this.selectedViewOption == _constants__WEBPACK_IMPORTED_MODULE_11__["VIEW_OPTIONS"].SYNOPSIS_B) ? _datatypes_svg_image__WEBPACK_IMPORTED_MODULE_5__["SVGImage"] : _datatypes_faksimile_image__WEBPACK_IMPORTED_MODULE_4__["FaksimileImage"];
            this.dataHandler['second_words']['handler'] = (this.selectedViewOption == _constants__WEBPACK_IMPORTED_MODULE_11__["VIEW_OPTIONS"].SYNOPSIS_B) ? _datatypes_word__WEBPACK_IMPORTED_MODULE_7__["TlnWord"] : _datatypes_word__WEBPACK_IMPORTED_MODULE_7__["FaksimileWord"];
            this.dataHandler['second_lines']['handler'] = (this.selectedViewOption == _constants__WEBPACK_IMPORTED_MODULE_11__["VIEW_OPTIONS"].SYNOPSIS_B) ? _datatypes_line__WEBPACK_IMPORTED_MODULE_6__["TlnLine"] : _datatypes_line__WEBPACK_IMPORTED_MODULE_6__["FaksimileLine"];
            this.dataHandler['second_foreignTexts']['handler'] = (this.selectedViewOption == _constants__WEBPACK_IMPORTED_MODULE_11__["VIEW_OPTIONS"].SYNOPSIS_B) ? _datatypes_foreign_text__WEBPACK_IMPORTED_MODULE_8__["TlnTextByForeignHand"] : _datatypes_foreign_text__WEBPACK_IMPORTED_MODULE_8__["FaksimileTextByForeignHand"];
            this.dataHandler['page_content'].push('second_page_content');
        }
        if (this.current_iri != null) {
            this.dataHandler.resetData('page_content');
            if (this.startLine != null && this.startLine != undefined) {
                this.dataHandler['image']['handler'] = _datatypes_svg_image__WEBPACK_IMPORTED_MODULE_5__["SVGImageClip"];
                let endLine = (this.endLine != null && this.endLine != undefined) ? this.endLine : this.startLine;
                let complex = { idIndex: 0,
                    mapping: [{ key: 'page', iri: this.current_iri }, { key: 'startLine', iri: this.startLine }, { key: 'endLine', iri: endLine }]
                };
                this.dataHandler['page_content'] = this.dataHandler['page_content'].filter(key => key != 'image');
                this.dataHandler.getData4Keys('image', complex);
            }
            else if (this.dataHandler['page_content'].indexOf('image') == -1) {
                this.dataHandler['page_content'].splice(0, 0, 'image');
            }
            this.dataHandler.getData('page_content', this.current_iri);
        }
    }
};
TlnPageViewComponent.ctorParameters = () => [
    { type: _tln_query_service__WEBPACK_IMPORTED_MODULE_3__["TlnCacheQueryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TlnPageViewComponent.prototype, "configuration", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('page')
], TlnPageViewComponent.prototype, "current_iri", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TlnPageViewComponent.prototype, "findText", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TlnPageViewComponent.prototype, "queryService", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TlnPageViewComponent.prototype, "zoomFactor", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TlnPageViewComponent.prototype, "selectedWords", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TlnPageViewComponent.prototype, "selectedLines", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TlnPageViewComponent.prototype, "max_height", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TlnPageViewComponent.prototype, "max_width", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TlnPageViewComponent.prototype, "showAllLines", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TlnPageViewComponent.prototype, "startLine", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TlnPageViewComponent.prototype, "endLine", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TlnPageViewComponent.prototype, "preferPrimaryUrl", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TlnPageViewComponent.prototype, "selectedViewOption", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('assignClass')
], TlnPageViewComponent.prototype, "assignClass", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('assignStyle')
], TlnPageViewComponent.prototype, "assignStyle", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TlnPageViewComponent.prototype, "multiInstanceMode", void 0);
TlnPageViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tln-page-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tln-page-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-page-view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tln-page-view.component.css */ "./src/app/tln-edition/tln-page-view.component.css")).default]
    })
], TlnPageViewComponent);



/***/ }),

/***/ "./src/app/tln-edition/tln-quant/2-ids.pipe.ts":
/*!*****************************************************!*\
  !*** ./src/app/tln-edition/tln-quant/2-ids.pipe.ts ***!
  \*****************************************************/
/*! exports provided: ToIdsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToIdsPipe", function() { return ToIdsPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ToIdsPipe = class ToIdsPipe {
    transform(basicElements) {
        return basicElements.map(element => element.id);
    }
};
ToIdsPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'toIds'
    })
], ToIdsPipe);



/***/ }),

/***/ "./src/app/tln-edition/tln-quant/export.component.css":
/*!************************************************************!*\
  !*** ./src/app/tln-edition/tln-quant/export.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0bG4tZWRpdGlvbi90bG4tcXVhbnQvZXhwb3J0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/tln-edition/tln-quant/export.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/tln-edition/tln-quant/export.component.ts ***!
  \***********************************************************/
/*! exports provided: ExportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportComponent", function() { return ExportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_csv_ngx_csv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-csv/ngx-csv */ "./node_modules/ngx-csv/ngx-csv.js");
/* harmony import */ var ngx_csv_ngx_csv__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_csv_ngx_csv__WEBPACK_IMPORTED_MODULE_2__);



let ExportComponent = class ExportComponent {
    constructor() {
        this.selectedWordProperties = [];
        this.csv_title = 'SPN Data from ' + location.hostname;
        this.csv_file_name = "SPN_Data";
        this.availableExportFormats = ['CSV', 'JSON'];
        this.selectedExportFormat = 'CSV';
    }
    ngOnInit() {
        if (this.selectedWordProperties.length > 0) {
            this.csv_title = 'Wörter mit Eigenschaften:,' + this.selectedWordProperties.map(property => property.label).join(',');
        }
    }
    // EXPORT function from: https://github.com/nie-ine/inseri/blob/devel/src/app/app-engine/apps/data-list-view/data-list-view-table/data-list-view-table.component.ts
    export() {
        switch (this.selectedExportFormat) {
            case 'CSV': {
                this.exportToCsv();
                break;
            }
            case 'JSON': this.exportToJson();
        }
    }
    exportToCsv() {
        var options = {
            fieldSeparator: ',',
            quoteStrings: '"',
            decimalseparator: '.',
            showLabels: true,
            showTitle: true,
            title: this.csv_title,
            useBom: true,
            noDownload: false,
            headers: this.displayedColumns.map(column => {
                if (column == 'id' && this.replaceId != undefined && this.replaceId != null) {
                    return this.replaceId;
                }
                else {
                    return column;
                }
            })
        };
        //let exportData = this.flatten();
        new ngx_csv_ngx_csv__WEBPACK_IMPORTED_MODULE_2__["ngxCsv"](this.flattenData(), this.csv_file_name, options);
    }
    flattenData() {
        let data = [];
        this.exportData.forEach(entry => {
            let element = {};
            this.displayedColumns.forEach(key => {
                element[key] = (entry[key].hasOwnProperty('value')) ? entry[key].value : entry[key];
            });
            data.push(element);
        });
        return data;
    }
    exportToJson() {
        const data = (this.fusekiResults != undefined && this.fusekiResults != null) ? this.fusekiResults : this.exportData;
        const dataStr = JSON.stringify(data, null, 2);
        const file = new Blob([dataStr], { type: 'text/json' });
        this.download(file, 'export.json');
    }
    download(blob, filename) {
        if (window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(blob, filename);
        }
        else {
            let elem = document.createElement('a'), url = URL.createObjectURL(blob);
            elem.href = url;
            elem.download = filename;
            document.body.appendChild(elem);
            elem.click();
            setTimeout(function () {
                document.body.removeChild(elem);
                window.URL.revokeObjectURL(url);
            }, 0);
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ExportComponent.prototype, "displayedColumns", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ExportComponent.prototype, "exportData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ExportComponent.prototype, "fusekiResults", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ExportComponent.prototype, "replaceId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ExportComponent.prototype, "selectedWordProperties", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ExportComponent.prototype, "csv_title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ExportComponent.prototype, "csv_file_name", void 0);
ExportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'export',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./export.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-quant/export.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./export.component.css */ "./src/app/tln-edition/tln-quant/export.component.css")).default]
    })
], ExportComponent);



/***/ }),

/***/ "./src/app/tln-edition/tln-quant/fuseki-table.component.css":
/*!******************************************************************!*\
  !*** ./src/app/tln-edition/tln-quant/fuseki-table.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\nexport {\n   float: right;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRsbi1lZGl0aW9uL3Rsbi1xdWFudC9mdXNla2ktdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0dBQ0csWUFBWTtBQUNmIiwiZmlsZSI6InRsbi1lZGl0aW9uL3Rsbi1xdWFudC9mdXNla2ktdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5leHBvcnQge1xuICAgZmxvYXQ6IHJpZ2h0O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/tln-edition/tln-quant/fuseki-table.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/tln-edition/tln-quant/fuseki-table.component.ts ***!
  \*****************************************************************/
/*! exports provided: FusekiTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FusekiTableComponent", function() { return FusekiTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _common_paginator_result_status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/paginator-result-status */ "./src/app/tln-edition/common/paginator-result-status.ts");
/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sort */ "./src/app/tln-edition/tln-quant/sort.ts");





let FusekiTableComponent = class FusekiTableComponent {
    constructor() {
        this.resultIndicesIndex = 0;
        this.quantQueryChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.paginatorResultStatus = new _common_paginator_result_status__WEBPACK_IMPORTED_MODULE_3__["PaginatorResultStatus"](10, this);
        this.sort = new _sort__WEBPACK_IMPORTED_MODULE_4__["MySort"]();
    }
    ngOnInit() {
        if (this.quantQuery != undefined && this.quantQuery != null) {
            this.paginatorResultStatus.updateResultRange(this.quantQuery.resultIndices[this.resultIndicesIndex]);
        }
    }
    sortData(sort) {
        this.paginatorResultStatus.updateResultRange(0);
        if (this.paginator != undefined && this.paginator != null) {
            this.paginator.pageIndex = 0;
        }
        if (this.quantQuery != undefined && this.quantQuery != null) {
            this.quantQuery.sortArray[this.resultIndicesIndex] = sort;
            this.quantQuery.resultIndices[this.resultIndicesIndex] = 0;
            this.quantQueryChanged.emit(this.quantQuery);
        }
        else {
            this.fusekiResults.results.bindings = this.fusekiResults.results.bindings.sort((a, b) => {
                let valueA = (a[sort.active]['value']);
                let valueB = (b[sort.active]['value']);
                if ('datatype' in a[sort.active] && String(a[sort.active]['datatype']).endsWith('integer')) {
                    valueA = Number(valueA);
                    valueB = Number(valueB);
                }
                return this.compare(valueA, valueB, sort.direction === 'asc');
            });
        }
    }
    compare(a, b, isAsc) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FusekiTableComponent.prototype, "fusekiResults", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FusekiTableComponent.prototype, "resultIndicesIndex", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FusekiTableComponent.prototype, "quantQuery", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FusekiTableComponent.prototype, "routePrefix", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], FusekiTableComponent.prototype, "quantQueryChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], FusekiTableComponent.prototype, "change", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false })
], FusekiTableComponent.prototype, "paginator", void 0);
FusekiTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'fuseki-table',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./fuseki-table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-quant/fuseki-table.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./fuseki-table.component.css */ "./src/app/tln-edition/tln-quant/fuseki-table.component.css")).default]
    })
], FusekiTableComponent);



/***/ }),

/***/ "./src/app/tln-edition/tln-quant/query-error.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/tln-edition/tln-quant/query-error.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".error {\n  /* margin-top: 20px;\n   color: red;*/\n  background-color: black;\n  color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRsbi1lZGl0aW9uL3Rsbi1xdWFudC9xdWVyeS1lcnJvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7ZUFDYTtFQUNiLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2QiLCJmaWxlIjoidGxuLWVkaXRpb24vdGxuLXF1YW50L3F1ZXJ5LWVycm9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3Ige1xuICAvKiBtYXJnaW4tdG9wOiAyMHB4O1xuICAgY29sb3I6IHJlZDsqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/tln-edition/tln-quant/query-error.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/tln-edition/tln-quant/query-error.component.ts ***!
  \****************************************************************/
/*! exports provided: QueryErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryErrorComponent", function() { return QueryErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");



let QueryErrorComponent = class QueryErrorComponent {
    constructor(data) {
        this.data = data;
    }
};
QueryErrorComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MAT_BOTTOM_SHEET_DATA"],] }] }
];
QueryErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-query-error',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./query-error.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-quant/query-error.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./query-error.component.css */ "./src/app/tln-edition/tln-quant/query-error.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MAT_BOTTOM_SHEET_DATA"]))
], QueryErrorComponent);



/***/ }),

/***/ "./src/app/tln-edition/tln-quant/result.pipe.ts":
/*!******************************************************!*\
  !*** ./src/app/tln-edition/tln-quant/result.pipe.ts ***!
  \******************************************************/
/*! exports provided: ResultPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultPipe", function() { return ResultPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ResultPipe = class ResultPipe {
    transform(numResultRows, quantQuery) {
        const total = (numResultRows.length > 0) ? numResultRows[0].total : 0;
        let numWordWithPropertiesTotal = 0;
        numResultRows.forEach(result => { numWordWithPropertiesTotal += result.numProperties; });
        let wordPropString = (numWordWithPropertiesTotal > 1) ? 'Wörter' : 'Wort';
        if (quantQuery.altQuery == null && quantQuery.selectedWordProperties.length > 0) {
            if (quantQuery.selectedWordProperties.length > 1) {
                const propStrings = quantQuery.selectedWordProperties.map(prop => '"' + prop.label.replace('.', '') + '"');
                wordPropString = wordPropString + ' haben die Eigenschaften ' + propStrings.join(', ');
            }
            else {
                wordPropString = wordPropString + ' haben die Eigenschaft "' + quantQuery.selectedWordProperties[0].label.replace('.', '') + '"';
            }
        }
        let filterString = '';
        if (quantQuery.altQuery == null
            && ((quantQuery.text != null && quantQuery.text != '')
                || (quantQuery.filterValue != null && quantQuery.filterValue != ''))) {
            filterString = (quantQuery.text != null && quantQuery.text != '') ? ' und den Worttext "' + quantQuery.text + '"' : ' und den Filtertext "' + quantQuery.filterValue + '"';
        }
        //const filterString = (quantQuery.altQuery == null && quantQuery.text != null && quantQuery.text != '') ? ' und den Worttext "' + quantQuery.text + '"': '';
        return numWordWithPropertiesTotal + '/' + total + ' ' + wordPropString + filterString;
    }
};
ResultPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'quantResultPipe'
    })
], ResultPipe);



/***/ }),

/***/ "./src/app/tln-edition/tln-quant/sort-by-line.pipe.ts":
/*!************************************************************!*\
  !*** ./src/app/tln-edition/tln-quant/sort-by-line.pipe.ts ***!
  \************************************************************/
/*! exports provided: SortByLinePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortByLinePipe", function() { return SortByLinePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SortByLinePipe = class SortByLinePipe {
    transform(words) {
        return words.sort((n1, n2) => n1.line_number - n2.line_number);
    }
};
SortByLinePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'sortByLine'
    })
], SortByLinePipe);



/***/ }),

/***/ "./src/app/tln-edition/tln-quant/sort.ts":
/*!***********************************************!*\
  !*** ./src/app/tln-edition/tln-quant/sort.ts ***!
  \***********************************************/
/*! exports provided: MySort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MySort", function() { return MySort; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class MySort {
    sortFusekiData(sort, fusekiResults) {
        let bindings = fusekiResults.results.bindings;
        let data = bindings.slice();
        if (!sort.active || sort.direction === '') {
            fusekiResults.results.bindings = data;
            return;
        }
        fusekiResults.results.bindings = data.sort((a, b) => {
            let valueA = (a[sort.active]['value']);
            let valueB = (b[sort.active]['value']);
            if ('datatype' in a[sort.active] && String(a[sort.active]['datatype']).endsWith('integer')) {
                valueA = Number(valueA);
                valueB = Number(valueB);
            }
            return this.compare(valueA, valueB, sort.direction === 'asc');
        });
    }
    compare(a, b, isAsc) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
}


/***/ }),

/***/ "./src/app/tln-edition/tln-quant/tln-data.component.css":
/*!**************************************************************!*\
  !*** ./src/app/tln-edition/tln-quant/tln-data.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".select {\n   width: 100%;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRsbi1lZGl0aW9uL3Rsbi1xdWFudC90bG4tZGF0YS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0dBQ0csV0FBVztBQUNkIiwiZmlsZSI6InRsbi1lZGl0aW9uL3Rsbi1xdWFudC90bG4tZGF0YS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdCB7XG4gICB3aWR0aDogMTAwJTtcbn1cblxuIl19 */");

/***/ }),

/***/ "./src/app/tln-edition/tln-quant/tln-data.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/tln-edition/tln-quant/tln-data.component.ts ***!
  \*************************************************************/
/*! exports provided: TlnDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TlnDataComponent", function() { return TlnDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
/* harmony import */ var _query_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./query-error.component */ "./src/app/tln-edition/tln-quant/query-error.component.ts");
/* harmony import */ var _ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ctrl/ngx-codemirror */ "./node_modules/@ctrl/ngx-codemirror/fesm2015/ctrl-ngx-codemirror.js");
/* harmony import */ var _quant_data_handler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../quant_data_handler */ "./src/app/tln-edition/quant_data_handler.ts");
/* harmony import */ var _datatypes_query_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../datatypes/query_json */ "./src/app/tln-edition/datatypes/query_json.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services */ "./src/app/tln-edition/services.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../constants */ "./src/app/tln-edition/constants.ts");
/* harmony import */ var _route_updater__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../route-updater */ "./src/app/tln-edition/route-updater.ts");
/* harmony import */ var _common_cache_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/cache.service */ "./src/app/tln-edition/common/cache.service.ts");













//import dataQueries from '/assets/1.0/dataQueries.json';
let TlnDataComponent = class TlnDataComponent extends _route_updater__WEBPACK_IMPORTED_MODULE_11__["RouteUpdater"] {
    constructor(cacheService, localQueryService, router, activatedRoute, _dialog, http) {
        super(router, activatedRoute);
        this.cacheService = cacheService;
        this.localQueryService = localQueryService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this._dialog = _dialog;
        this.http = http;
        this.dataPrefix = '1.0';
        this.prefixUrl = 'assets/dataQueries';
        this.jsonUrl = this.prefixUrl + '.json';
        this.filePrefix = 'file:';
        this.errorLine = -1;
        this.quantDataHandler = new _quant_data_handler__WEBPACK_IMPORTED_MODULE_7__["QuantitativeDataHandler"](this);
        this.isLoadingResults = false;
        this.resultIndex = 0;
        this.query = '';
        this.queryInput = '';
        this.current_query = '';
        this.queryHasSyntaxError = false;
        this.curlQuery = '';
        this.queryFiles = [];
        this.mapping = {
            current_query: { param: _constants__WEBPACK_IMPORTED_MODULE_10__["TLN_QUERY_PARAM"], type: "string" },
        };
        this.isSelected = (o1, o2) => {
            return o1 == o2;
        };
    }
    ngOnInit() {
        this.http.get(this.jsonUrl).subscribe(queryFiles => {
            this.queryFiles = queryFiles;
        });
        this.tlnQueryService = (this.queryService != null) ? this.queryService : this.localQueryService;
        this.quantDataHandler.setQueryService(this.tlnQueryService);
        this.quantDataHandler.start_processing.subscribe((started) => {
            this.isLoadingResults = true;
        });
        this.quantDataHandler.processing_finished.subscribe((started) => {
            this.isLoadingResults = false;
        });
        super.ngOnInit();
    }
    queryChanged(resetQuery) {
        if (this.errorLine > -1) {
            this.errorLine = -1;
            this.codemirror.codeMirror.setOption('lineNumberFormatter', (line) => { return String(line); });
        }
        if (resetQuery && this.selectedFileName != undefined && this.selectedFileName != null) {
            this.openFile();
            this.queryHasSyntaxError = false;
        }
        else {
            const queryChanged = this.query != this.queryInput;
            this.queryHasSyntaxError = _datatypes_query_json__WEBPACK_IMPORTED_MODULE_8__["QueryJson"].hasSyntaxError(this.query);
            this.updateQuery4Ext(queryChanged);
        }
    }
    updateQuery4Ext(setAltQuery) {
        this.curlQuery = 'curl ' + this.tlnQueryService.baseUrl + ' -X POST --data \'query=' + encodeURI(this.query) + '\'';
        if (setAltQuery) {
            this.current_query = JSON.stringify(this.query);
        }
        else {
            this.current_query = this.filePrefix + this.selectedFileName;
        }
        this.updateParams();
    }
    markError(error) {
        const matches = error.match(/(.*line\s)([0-9]+)(:.*)/s);
        if (matches != null && matches.length == 4) {
            this.errorLine = Number(matches[2]);
            this.codemirror.codeMirror.setOption('lineNumberFormatter', (line) => {
                if (line == this.errorLine) {
                    return 'E>';
                }
                return String(line);
            });
        }
    }
    send() {
        const error = _datatypes_query_json__WEBPACK_IMPORTED_MODULE_8__["QueryJson"].getSyntaxError(this.query);
        //console.log('error', error);
        if (error != '') {
            this._dialog.open(_query_error_component__WEBPACK_IMPORTED_MODULE_5__["QueryErrorComponent"], { data: { error: error } });
            this.markError(error);
        }
        else {
            this.quantDataHandler.getRawData4Query('fusekiResults', this.query);
        }
    }
    cancel() {
        this.quantDataHandler.stop_processing.emit(true);
        this.isLoadingResults = false;
    }
    copyToClipboard(curlQueryInput) {
        curlQueryInput.select();
        curlQueryInput.setSelectionRange(0, 99999); /* For mobile devices */
        /* Copy the text inside the text field */
        document.execCommand("copy");
    }
    openFile() {
        this.http.get(this.prefixUrl + '/' + this.selectedFileName, { responseType: 'text' }).subscribe(content => {
            this.query = this.queryInput = content;
            this.updateQuery4Ext(false);
        });
    }
    readParams(params) {
        const old_current_query = this.current_query;
        super.readParams(params);
        if (old_current_query != this.current_query) {
            if (this.current_query.startsWith(this.filePrefix)) {
                this.selectedFileName = this.current_query.replace(this.filePrefix, '');
                this.openFile();
            }
            else {
                this.query = JSON.parse(this.current_query);
                this.curlQuery = 'curl ' + this.tlnQueryService.baseUrl + ' -X POST --data \'query=' + encodeURI(this.query) + '\'';
            }
            const results = this.cacheService.getItem(this.dataPrefix + this.current_query);
            if (results != null) {
                this.fusekiResults = results;
            }
        }
    }
    processData() {
        if (this.fusekiResults != undefined && this.fusekiResults != null && this.fusekiResults.results.bindings.length > 0) {
            this.cacheService.setItem(this.dataPrefix + this.current_query, this.fusekiResults);
        }
    }
};
TlnDataComponent.ctorParameters = () => [
    { type: _common_cache_service__WEBPACK_IMPORTED_MODULE_12__["CacheService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_9__["TlnCacheQueryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheet"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TlnDataComponent.prototype, "queryService", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TlnDataComponent.prototype, "routePrefix", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_6__["CodemirrorComponent"], { static: false })
], TlnDataComponent.prototype, "codemirror", void 0);
TlnDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tln-data',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tln-data.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-quant/tln-data.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tln-data.component.css */ "./src/app/tln-edition/tln-quant/tln-data.component.css")).default]
    })
], TlnDataComponent);



/***/ }),

/***/ "./src/app/tln-edition/tln-quant/tln-ontology-viewer.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/tln-edition/tln-quant/tln-ontology-viewer.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0bG4tZWRpdGlvbi90bG4tcXVhbnQvdGxuLW9udG9sb2d5LXZpZXdlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/tln-edition/tln-quant/tln-ontology-viewer.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/tln-edition/tln-quant/tln-ontology-viewer.component.ts ***!
  \************************************************************************/
/*! exports provided: TlnOntologyViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TlnOntologyViewerComponent", function() { return TlnOntologyViewerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/app/tln-edition/constants.ts");



let TlnOntologyViewerComponent = class TlnOntologyViewerComponent {
    constructor() {
        this.baseUrl = _constants__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"];
        this.ontologies = [{ prefix: 'tln', name: 'The late Nietzsche', iri: 'http://www.nie.org/ontology/nietzsche' },
            { prefix: 'homotypic', name: 'Homotypic', iri: 'http://www.nie.org/ontology/homotypic' },
            { prefix: 'standoff', name: 'Standoff Markup', iri: 'http://www.nie.org/ontology/standoff' }];
        this.namespaces = [{ prefix: 'text', iri: 'http://www.e-editiones.ch/ontology/text#', isExternal: true },
            { prefix: 'document', iri: 'https://www.e-editiones.ch/ontology/document#', isExternal: true },
            { prefix: 'document', iri: 'http://e-editiones.ch/ontology/document#', isExternal: true },
            { prefix: 'text', iri: 'https://www.e-editiones.ch/ontology/text#', isExternal: true }];
    }
    ngOnInit() {
    }
};
TlnOntologyViewerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tln-ontology-viewer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tln-ontology-viewer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-quant/tln-ontology-viewer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tln-ontology-viewer.component.css */ "./src/app/tln-edition/tln-quant/tln-ontology-viewer.component.css")).default]
    })
], TlnOntologyViewerComponent);



/***/ }),

/***/ "./src/app/tln-edition/tln-quant/tln-quant.component.css":
/*!***************************************************************!*\
  !*** ./src/app/tln-edition/tln-quant/tln-quant.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".text-quality {\n margin-left: 15px;\n margin-top: 10px;\n display: block;\n}\n.select-words{\n   width: 100%;\n}\n.scopus {\n   width: 300px;\n}\n.headers-align .mat-expansion-panel-header-title,\n.headers-align .mat-expansion-panel-header-description {\n  flex-basis: 0;\n}\n.headers-align .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center;\n}\n.headers-align .mat-form-field + .mat-form-field {\n  margin-left: 8px;\n}\n.form {\n   margin-top: 10px;\n   margin-left: 15px;\n   margin-right: 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRsbi1lZGl0aW9uL3Rsbi1xdWFudC90bG4tcXVhbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGlCQUFpQjtDQUNqQixnQkFBZ0I7Q0FDaEIsY0FBYztBQUNmO0FBQ0E7R0FDRyxXQUFXO0FBQ2Q7QUFDQTtHQUNHLFlBQVk7QUFDZjtBQUNBOztFQUVFLGFBQWE7QUFDZjtBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7R0FDRyxnQkFBZ0I7R0FDaEIsaUJBQWlCO0dBQ2pCLGtCQUFrQjtBQUNyQiIsImZpbGUiOiJ0bG4tZWRpdGlvbi90bG4tcXVhbnQvdGxuLXF1YW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1xdWFsaXR5IHtcbiBtYXJnaW4tbGVmdDogMTVweDtcbiBtYXJnaW4tdG9wOiAxMHB4O1xuIGRpc3BsYXk6IGJsb2NrO1xufVxuLnNlbGVjdC13b3Jkc3tcbiAgIHdpZHRoOiAxMDAlO1xufVxuLnNjb3B1cyB7XG4gICB3aWR0aDogMzAwcHg7XG59XG4uaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUsXG4uaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICBmbGV4LWJhc2lzOiAwO1xufVxuXG4uaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5oZWFkZXJzLWFsaWduIC5tYXQtZm9ybS1maWVsZCArIC5tYXQtZm9ybS1maWVsZCB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG4uZm9ybSB7XG4gICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/tln-edition/tln-quant/tln-quant.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/tln-edition/tln-quant/tln-quant.component.ts ***!
  \**************************************************************/
/*! exports provided: TlnQuantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TlnQuantComponent", function() { return TlnQuantComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
/* harmony import */ var _query_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./query-error.component */ "./src/app/tln-edition/tln-quant/query-error.component.ts");
/* harmony import */ var _ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ctrl/ngx-codemirror */ "./node_modules/@ctrl/ngx-codemirror/fesm2015/ctrl-ngx-codemirror.js");
/* harmony import */ var _data_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data_handler */ "./src/app/tln-edition/data_handler.ts");
/* harmony import */ var _quant_data_handler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../quant_data_handler */ "./src/app/tln-edition/quant_data_handler.ts");
/* harmony import */ var _datatypes_manuscript__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../datatypes/manuscript */ "./src/app/tln-edition/datatypes/manuscript.ts");
/* harmony import */ var _datatypes_quant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../datatypes/quant */ "./src/app/tln-edition/datatypes/quant.ts");
/* harmony import */ var _datatypes_query_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../datatypes/query_json */ "./src/app/tln-edition/datatypes/query_json.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services */ "./src/app/tln-edition/services.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../constants */ "./src/app/tln-edition/constants.ts");
/* harmony import */ var _route_updater__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../route-updater */ "./src/app/tln-edition/route-updater.ts");
/* harmony import */ var _common_cache_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/cache.service */ "./src/app/tln-edition/common/cache.service.ts");
/* harmony import */ var _common_select_array__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/select-array */ "./src/app/tln-edition/common/select-array.ts");
















let TlnQuantComponent = class TlnQuantComponent extends _route_updater__WEBPACK_IMPORTED_MODULE_13__["RouteUpdater"] {
    constructor(cacheService, localQueryService, router, activatedRoute, _dialog) {
        super(router, activatedRoute);
        this.cacheService = cacheService;
        this.localQueryService = localQueryService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this._dialog = _dialog;
        this.restrictKorpusOnContext = false;
        this.dataHandler = new _data_handler__WEBPACK_IMPORTED_MODULE_6__["DataHandler"](this);
        this.selected_words = [];
        this.displayedColumns = ['id', 'numProperties', 'numPropertyTextPercent', 'numPropertiesPercent', 'numPropertiesIncludeMulti', 'numText', 'numTextPercent'];
        this.errorLine = -1;
        this.quantDataHandler = new _quant_data_handler__WEBPACK_IMPORTED_MODULE_7__["QuantitativeDataHandler"](this);
        this.isLoadingResults = false;
        this.manuscriptPages = [];
        this.numResultRows = [];
        this.resultIndex = 0;
        this.quantAccordionStatus = {
            wordProperties: { expanded: true, disabled: false },
            scopus: { expanded: false, disabled: false },
            selected_words: { expanded: false, disabled: false },
            query: { expanded: false, disabled: false }
        };
        this.query = '';
        this.queryInput = '';
        this.queryHasSyntaxError = false;
        this.curlQuery = '';
        this.shareQuery = false;
        this.wordProperties = [];
        this.quantQuery = {
            currentTable: 0, resultIndices: [0, 0], sortArray: [{ active: null, direction: '' }, { active: null, direction: '' }, { active: null, direction: '' }],
            ignoreCase: false, text: '', selectedManuscripts: [], selectedWordProperties: [], textQuality: { clean: true, preferEditedText: true },
            restrictKorpusOnContext: false, filterValue: ''
        };
        this.mapping = {
            current_manuscript_iri: { param: _constants__WEBPACK_IMPORTED_MODULE_12__["TLN_MANUSCRIPT_PARAM"], type: "string" },
            selected_words: { param: _constants__WEBPACK_IMPORTED_MODULE_12__["TLN_SELECTED_WORDS_PARAM"], type: "string" },
            quantQuery: { param: _constants__WEBPACK_IMPORTED_MODULE_12__["TLN_QUANT_QUERY_PARAM"], type: "complex" }
        };
        this.isSelected = (o1, o2) => {
            return o1.id == o2.id;
        };
        this.isWordIdSelected = (o1, o2) => {
            console.log(o1, o2);
            return o1 == o2;
        };
        this.normalLineNumberFormatter = (line) => {
            return String(line);
        };
    }
    ngOnInit() {
        this.tlnQueryService = (this.queryService != null) ? this.queryService : this.localQueryService;
        this.dataHandler.addHandler('wordProperties', { 'handler': _datatypes_quant__WEBPACK_IMPORTED_MODULE_9__["SelectableWordProperty"] });
        this.dataHandler.addHandler('manuscriptPages', { 'handler': _datatypes_manuscript__WEBPACK_IMPORTED_MODULE_8__["Manuscript4Selection"] });
        this.quantDataHandler.addHandler('numResultRows', { 'handler': _datatypes_quant__WEBPACK_IMPORTED_MODULE_9__["NumericResultRow"], 'process_data': this });
        this.dataHandler.setQueryService(this.tlnQueryService);
        this.quantDataHandler.setQueryService(this.tlnQueryService);
        this.quantDataHandler.start_processing.subscribe((started) => {
            this.isLoadingResults = true;
        });
        this.quantDataHandler.processing_finished.subscribe((started) => {
            this.isLoadingResults = false;
        });
        this.dataHandler.getData('wordProperties');
        this.dataHandler.getData('manuscriptPages');
        this.quantQuery.restrictKorpusOnContext = this.restrictKorpusOnContext;
        if (this.restrictKorpusOnContext) {
            this.dataHandler['manuscriptPages']['process_data'] = new _common_select_array__WEBPACK_IMPORTED_MODULE_15__["SelectFromArray"](this, {
                compareValueKey: 'select_manuscript_iri',
                sourceArrayKey: 'manuscriptPages',
                targetArrayKey: ['quantQuery', 'selectedManuscripts'],
                commonPropertyKey: 'id',
                arrayUpdated: 'updateQuery',
            });
        }
        super.ngOnInit();
    }
    isManuscriptSelected(manuscript) {
        return this.restrictKorpusOnContext && this.current_manuscript_iri == manuscript.id;
    }
    markError(error) {
        if (this.quantQuery != null
            && this.quantQuery.dataKey != undefined
            && this.quantQuery.dataKey != null) {
            this.cacheService.removeItem(this.quantQuery.dataKey);
            this.quantQuery['dataKey'] = null;
            this.updateParams();
        }
        const matches = error.match(/(.*line\s)([0-9]+)(:.*)/s);
        if (matches != null && matches.length == 4) {
            this.errorLine = Number(matches[2]);
            this.codemirror.codeMirror.setOption('lineNumberFormatter', (line) => {
                if (line == this.errorLine) {
                    return 'E>';
                }
                return String(line);
            });
            this.quantAccordionStatus.query.expanded = true;
        }
    }
    send() {
        const error = _datatypes_query_json__WEBPACK_IMPORTED_MODULE_10__["QueryJson"].getSyntaxError(this.query);
        //console.log('error', error);
        if (error != '') {
            this._dialog.open(_query_error_component__WEBPACK_IMPORTED_MODULE_4__["QueryErrorComponent"], { data: { error: error } });
            this.markError(error);
        }
        else {
            this.numResultRows = [];
            Object.keys(this.quantAccordionStatus).forEach(key => { this.quantAccordionStatus[key].expanded = false; });
            if (this.quantQuery.currentTable == 2) {
                this.quantQuery.currentTable = (this.query != this.getQuery()) ? 1 : 0;
                this.updateParams();
            }
            this.quantDataHandler.getData4Query('numResultRows', this.query, 'fusekiResults');
        }
    }
    cancel() {
        this.quantDataHandler.stop_processing.emit(true);
        this.isLoadingResults = false;
    }
    copyToClipboard(curlQueryInput) {
        curlQueryInput.select();
        curlQueryInput.setSelectionRange(0, 99999); /* For mobile devices */
        /* Copy the text inside the text field */
        document.execCommand("copy");
    }
    readParams(params) {
        const old_current_manuscript_iri = this.current_manuscript_iri;
        super.readParams(params);
        if (this.current_manuscript_iri != null
            && old_current_manuscript_iri != this.current_manuscript_iri
            && this.quantQuery.restrictKorpusOnContext) {
            this.select_manuscript_iri = this.current_manuscript_iri;
            this.quantAccordionStatus.scopus.expanded = true;
        }
        if (this.quantQuery != null) {
            if (this.quantQuery.selectedManuscripts.length > 0) {
                this.select_manuscript_iri = null;
            }
            if (this.quantQuery.altQuery != null) {
                this.query = this.quantQuery.altQuery;
                this.curlQuery = 'curl ' + this.tlnQueryService.baseUrl + ' -X POST --data \'query=' + encodeURI(this.query) + '\'';
                this.quantAccordionStatus.wordProperties = { expanded: false, disabled: true };
                this.quantAccordionStatus.query.expanded = true;
            }
            if (this.quantQuery.dataKey != undefined && this.quantQuery.dataKey != null) {
                const results = this.cacheService.getItem(this.quantQuery.dataKey);
                if (results != null) {
                    this.fusekiResults = results;
                    this.numResultRows = _datatypes_quant__WEBPACK_IMPORTED_MODULE_9__["NumericResultRow"].convertData(this.fusekiResults);
                    if (this.quantQuery.sortArray[this.quantQuery.currentTable].active != null) {
                        const sort = this.quantQuery.sortArray[this.quantQuery.currentTable];
                        if (this.quantQuery.currentTable == 0) {
                            this.numResultRows = this.numResultRows.sort((a, b) => {
                                return this.compare(a[sort.active], b[sort.active], sort.direction === 'asc');
                            });
                        }
                        else {
                            this.fusekiResults.results.bindings = this.fusekiResults.results.bindings.sort((a, b) => {
                                let valueA = (a[sort.active]['value']);
                                let valueB = (b[sort.active]['value']);
                                if ('datatype' in a[sort.active] && String(a[sort.active]['datatype']).endsWith('integer')) {
                                    valueA = Number(valueA);
                                    valueB = Number(valueB);
                                }
                                return this.compare(valueA, valueB, sort.direction === 'asc');
                            });
                        }
                    }
                    if (this.quantQuery.filterValue != undefined && this.quantQuery.filterValue != null && this.quantQuery.filterValue != '') {
                        this.numResultRows = this.numResultRows.filter(result => result.id.startsWith(this.quantQuery.filterValue));
                    }
                }
            }
        }
        if (this.query == '') {
            this.updateQuery();
        }
    }
    compare(a, b, isAsc) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
    toggleEnableSelectionList(updateQuery) {
        if (this.errorLine > -1) {
            this.errorLine = -1;
            this.codemirror.codeMirror.setOption('lineNumberFormatter', (line) => { return String(line); });
        }
        if (updateQuery) {
            this.updateQuery();
            this.queryHasSyntaxError = false;
            this.quantAccordionStatus.wordProperties.disabled = false;
        }
        else {
            const queryChanged = this.query != this.getQuery();
            this.queryHasSyntaxError = _datatypes_query_json__WEBPACK_IMPORTED_MODULE_10__["QueryJson"].hasSyntaxError(this.query);
            this.quantAccordionStatus.wordProperties.disabled = queryChanged;
            this.updateQuery4Ext(queryChanged);
            if (this.quantAccordionStatus.wordProperties.disabled) {
                this.quantAccordionStatus.wordProperties.expanded = false;
            }
        }
    }
    getQuery() {
        const filterSelectedWordIds = (this.quantQuery.selectedWordIds != undefined && this.quantQuery.selectedWordIds != null) ? this.quantQuery.selectedWordIds : [];
        let selectedManuscripts = (this.quantQuery.selectedManuscripts.length == this.manuscriptPages.length) ? [] : this.quantQuery.selectedManuscripts;
        return this.quantDataHandler['numResultRows'].handler.getSelectableQuery(this.quantQuery.selectedWordProperties, selectedManuscripts, filterSelectedWordIds, this.quantQuery.textQuality, this.quantQuery.text, this.quantQuery.ignoreCase);
    }
    processData() {
        if (this.quantQuery != null
            && this.quantQuery.dataKey != undefined
            && this.quantQuery.dataKey != null) {
            this.cacheService.removeItem(this.quantQuery.dataKey);
        }
        const dataKey = _constants__WEBPACK_IMPORTED_MODULE_12__["TLN_QUANT_ROUTE"] + Date.now().toString();
        this.cacheService.setItem(dataKey, this.fusekiResults);
        this.quantQuery['dataKey'] = dataKey;
        this.updateParams();
    }
    tabChanged(tabChange) {
        this.quantQuery.currentTable = tabChange.index;
        this.quantQuery.resultIndex = 0;
        this.updateParams();
    }
    updateTextQuality(clean, preferEditedText) {
        this.quantQuery.textQuality = { clean: clean, preferEditedText: preferEditedText };
        this.updateQuery();
    }
    updatePageIndex(pageIndex) {
        if (typeof pageIndex == 'number') {
            this.quantQuery.resultIndices[this.quantQuery.currentTable] = pageIndex;
            this.updateParams();
        }
    }
    updateQuantQuery(quantQuery) {
        this.quantQuery = quantQuery;
        this.updateParams();
    }
    updateQuery(source) {
        this.query = this.getQuery();
        this.updateQuery4Ext(false);
    }
    updateQuery4Ext(setAltQuery) {
        this.curlQuery = 'curl ' + this.tlnQueryService.baseUrl + ' -X POST --data \'query=' + encodeURI(this.query) + '\'';
        if (setAltQuery) {
            this.quantQuery.altQuery = this.query;
        }
        else {
            this.quantQuery.altQuery = null;
        }
        this.updateParams();
    }
};
TlnQuantComponent.ctorParameters = () => [
    { type: _common_cache_service__WEBPACK_IMPORTED_MODULE_14__["CacheService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_11__["TlnCacheQueryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheet"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TlnQuantComponent.prototype, "queryService", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TlnQuantComponent.prototype, "restrictKorpusOnContext", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TlnQuantComponent.prototype, "routePrefix", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_5__["CodemirrorComponent"], { static: false })
], TlnQuantComponent.prototype, "codemirror", void 0);
TlnQuantComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tln-quant',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tln-quant.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-quant/tln-quant.component.html")).default,
        providers: [_services__WEBPACK_IMPORTED_MODULE_11__["TlnCacheQueryService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tln-quant.component.css */ "./src/app/tln-edition/tln-quant/tln-quant.component.css")).default]
    })
], TlnQuantComponent);



/***/ }),

/***/ "./src/app/tln-edition/tln-quant/tln-table.component.css":
/*!***************************************************************!*\
  !*** ./src/app/tln-edition/tln-quant/tln-table.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\nexport {\n   float: right;\n}\nmat-form-field {\n   margin-left: 25px;\n   margin-top: 30px;\n}\ntr.example-detail-row {\n  height: 0;\n}\ntr.example-element-row {\n   cursor: pointer;\n}\ntr.example-element-row:not(.example-expanded-row):hover {\n  background: whitesmoke;\n}\ntr.example-element-row:not(.example-expanded-row):active {\n  background: #efefef;\n}\n.example-element-row td {\n  border-bottom-width: 0;\n}\n.example-element-detail {\n  overflow: hidden;\n  /*display: flex;*/\n}\n.example-element-diagram {\n  min-width: 80px;\n  border: 2px solid black;\n  padding: 8px;\n  font-weight: lighter;\n  margin: 8px 0;\n  height: 104px;\n}\n.example-element-symbol {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: normal;\n}\n.example-element-description {\n  padding: 16px;\n}\n.example-element-description-attribution {\n  opacity: 0.5;\n}\n.test {\n   display: block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRsbi1lZGl0aW9uL3Rsbi1xdWFudC90bG4tdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0dBQ0csWUFBWTtBQUNmO0FBQ0E7R0FDRyxpQkFBaUI7R0FDakIsZ0JBQWdCO0FBQ25CO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7QUFDQTtHQUNHLGVBQWU7QUFDbEI7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsYUFBYTtBQUNmO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtHQUNHLGNBQWM7QUFDakIiLCJmaWxlIjoidGxuLWVkaXRpb24vdGxuLXF1YW50L3Rsbi10YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cbmV4cG9ydCB7XG4gICBmbG9hdDogcmlnaHQ7XG59XG5tYXQtZm9ybS1maWVsZCB7XG4gICBtYXJnaW4tbGVmdDogMjVweDtcbiAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG50ci5leGFtcGxlLWRldGFpbC1yb3cge1xuICBoZWlnaHQ6IDA7XG59XG50ci5leGFtcGxlLWVsZW1lbnQtcm93IHtcbiAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbnRyLmV4YW1wbGUtZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xufVxuXG50ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG59XG5cbi5leGFtcGxlLWVsZW1lbnQtcm93IHRkIHtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1kZXRhaWwge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAvKmRpc3BsYXk6IGZsZXg7Ki9cbn1cblxuLmV4YW1wbGUtZWxlbWVudC1kaWFncmFtIHtcbiAgbWluLXdpZHRoOiA4MHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogOHB4O1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgbWFyZ2luOiA4cHggMDtcbiAgaGVpZ2h0OiAxMDRweDtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1zeW1ib2wge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuXG4uZXhhbXBsZS1lbGVtZW50LWRlc2NyaXB0aW9uIHtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1kZXNjcmlwdGlvbi1hdHRyaWJ1dGlvbiB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi50ZXN0IHtcbiAgIGRpc3BsYXk6IGJsb2NrO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/tln-edition/tln-quant/tln-table.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/tln-edition/tln-quant/tln-table.component.ts ***!
  \**************************************************************/
/*! exports provided: TlnTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TlnTableComponent", function() { return TlnTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _common_paginator_result_status__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/paginator-result-status */ "./src/app/tln-edition/common/paginator-result-status.ts");
/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sort */ "./src/app/tln-edition/tln-quant/sort.ts");






let TlnTableComponent = class TlnTableComponent {
    constructor() {
        this.resultIndicesIndex = 0;
        this.quantQueryChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.paginatorResultStatus = new _common_paginator_result_status__WEBPACK_IMPORTED_MODULE_4__["PaginatorResultStatus"](10, this);
        this.sort = new _sort__WEBPACK_IMPORTED_MODULE_5__["MySort"]();
        this.unfilteredResults = [];
    }
    ngOnInit() {
        this.resultQuery = this.quantQuery;
        this.paginatorResultStatus.updateResultRange(this.resultQuery.resultIndices[this.resultIndicesIndex]);
    }
    addFilter(event) {
        const filterValue = event.target.value;
        this.quantQuery.filterValue = filterValue;
        this.quantQuery.resultIndices[this.resultIndicesIndex] = 0;
        this.paginatorResultStatus.updateResultRange(0);
        this.quantQueryChanged.emit(this.quantQuery);
    }
    sortData(sort) {
        this.paginator.pageIndex = 0;
        this.paginatorResultStatus.updateResultRange(0);
        this.quantQuery.sortArray[this.resultIndicesIndex] = sort;
        this.quantQuery.resultIndices[this.resultIndicesIndex] = 0;
        this.quantQueryChanged.emit(this.quantQuery);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TlnTableComponent.prototype, "results", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TlnTableComponent.prototype, "resultIndicesIndex", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TlnTableComponent.prototype, "quantQuery", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TlnTableComponent.prototype, "quantQueryChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TlnTableComponent.prototype, "change", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TlnTableComponent.prototype, "displayedColumns", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: false })
], TlnTableComponent.prototype, "paginator", void 0);
TlnTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tln-table',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tln-table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-quant/tln-table.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('detailExpand', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: '0px', minHeight: '0' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: '*' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tln-table.component.css */ "./src/app/tln-edition/tln-quant/tln-table.component.css")).default]
    })
], TlnTableComponent);



/***/ }),

/***/ "./src/app/tln-edition/tln-quant/tln-type.component.css":
/*!**************************************************************!*\
  !*** ./src/app/tln-edition/tln-quant/tln-type.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-slide-toggle {\n   margin-right: 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRsbi1lZGl0aW9uL3Rsbi1xdWFudC90bG4tdHlwZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0dBQ0csa0JBQWtCO0FBQ3JCIiwiZmlsZSI6InRsbi1lZGl0aW9uL3Rsbi1xdWFudC90bG4tdHlwZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXNsaWRlLXRvZ2dsZSB7XG4gICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/tln-edition/tln-quant/tln-type.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/tln-edition/tln-quant/tln-type.component.ts ***!
  \*************************************************************/
/*! exports provided: TlnTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TlnTypeComponent", function() { return TlnTypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _data_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data_handler */ "./src/app/tln-edition/data_handler.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services */ "./src/app/tln-edition/services.ts");
/* harmony import */ var _route_updater__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../route-updater */ "./src/app/tln-edition/route-updater.ts");
/* harmony import */ var _common_cache_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/cache.service */ "./src/app/tln-edition/common/cache.service.ts");
/* harmony import */ var _datatypes_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../datatypes/type */ "./src/app/tln-edition/datatypes/type.ts");
/* harmony import */ var _datatypes_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../datatypes/page */ "./src/app/tln-edition/datatypes/page.ts");
/* harmony import */ var _datatypes_word__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../datatypes/word */ "./src/app/tln-edition/datatypes/word.ts");
/* harmony import */ var _datatypes_manuscript__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../datatypes/manuscript */ "./src/app/tln-edition/datatypes/manuscript.ts");
/* harmony import */ var _datatypes_line__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../datatypes/line */ "./src/app/tln-edition/datatypes/line.ts");
/* harmony import */ var _datatypes_deletion_path__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../datatypes/deletion_path */ "./src/app/tln-edition/datatypes/deletion_path.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../constants */ "./src/app/tln-edition/constants.ts");














let TlnTypeComponent = class TlnTypeComponent extends _route_updater__WEBPACK_IMPORTED_MODULE_5__["RouteUpdater"] {
    constructor(cacheService, localQueryService, router, activatedRoute) {
        super(router, activatedRoute);
        this.cacheService = cacheService;
        this.localQueryService = localQueryService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.show_reference_and_id = false;
        this.dataHandler = new _data_handler__WEBPACK_IMPORTED_MODULE_3__["DataHandler"](this);
        this.showIri = false;
    }
    ngOnInit() {
        this.tlnQueryService = (this.queryService != null) ? this.queryService : this.localQueryService;
        this.dataHandler.addHandler('dataType', { 'handler': _datatypes_type__WEBPACK_IMPORTED_MODULE_7__["TlnType"], 'process_data': this });
        this.dataHandler.setQueryService(this.tlnQueryService);
        if (this.input != undefined && this.input != null && this.input.startsWith(_constants__WEBPACK_IMPORTED_MODULE_13__["DATA_PREFIX"])) {
            this.dataHandler.getData('dataType', this.input);
        }
    }
    processData() {
        if (this.dataType != undefined && this.dataType != null) {
            const dataType = this.dataType.type.substring(this.dataType.type.lastIndexOf('#') + 1);
            let unknownDataType = false;
            switch (dataType) {
                case 'Page': {
                    this.dataHandler.addHandler('representation', { 'handler': _datatypes_page__WEBPACK_IMPORTED_MODULE_8__["TlnPage"] });
                    break;
                }
                case 'ArchivalManuscriptUnity': {
                    this.dataHandler.addHandler('representation', { 'handler': _datatypes_manuscript__WEBPACK_IMPORTED_MODULE_10__["ManuscriptStub"] });
                    break;
                }
                case 'Word': {
                    this.dataHandler.addHandler('representation', { 'handler': _datatypes_word__WEBPACK_IMPORTED_MODULE_9__["WordRepresentation"] });
                    break;
                }
                case 'SimpleWord': {
                    this.dataHandler.addHandler('representation', { 'handler': _datatypes_word__WEBPACK_IMPORTED_MODULE_9__["WordRepresentation"] });
                    break;
                }
                case 'Line': {
                    this.dataHandler.addHandler('representation', { 'handler': _datatypes_line__WEBPACK_IMPORTED_MODULE_11__["LineRepresentation"] });
                    break;
                }
                case 'WordDeletionPath': {
                    this.dataHandler.addHandler('representation', { 'handler': _datatypes_deletion_path__WEBPACK_IMPORTED_MODULE_12__["DeletionPathRepresentation"] });
                    break;
                }
                default: {
                    unknownDataType = true;
                }
            }
            if (!unknownDataType) {
                this.dataHandler.getData('representation', this.input);
            }
        }
    }
};
TlnTypeComponent.ctorParameters = () => [
    { type: _common_cache_service__WEBPACK_IMPORTED_MODULE_6__["CacheService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["TlnCacheQueryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TlnTypeComponent.prototype, "show_reference_and_id", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TlnTypeComponent.prototype, "input", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TlnTypeComponent.prototype, "queryService", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TlnTypeComponent.prototype, "routePrefix", void 0);
TlnTypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tln-type',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tln-type.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-quant/tln-type.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tln-type.component.css */ "./src/app/tln-edition/tln-quant/tln-type.component.css")).default]
    })
], TlnTypeComponent);



/***/ }),

/***/ "./src/app/tln-edition/tln-quant/word-presentation.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/tln-edition/tln-quant/word-presentation.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".word {\n   margin-left: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRsbi1lZGl0aW9uL3Rsbi1xdWFudC93b3JkLXByZXNlbnRhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0dBQ0csaUJBQWlCO0FBQ3BCIiwiZmlsZSI6InRsbi1lZGl0aW9uL3Rsbi1xdWFudC93b3JkLXByZXNlbnRhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndvcmQge1xuICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/tln-edition/tln-quant/word-presentation.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/tln-edition/tln-quant/word-presentation.component.ts ***!
  \**********************************************************************/
/*! exports provided: WordPresentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordPresentationComponent", function() { return WordPresentationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _quant_data_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quant_data_handler */ "./src/app/tln-edition/quant_data_handler.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services */ "./src/app/tln-edition/services.ts");
/* harmony import */ var _datatypes_word_presentation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../datatypes/word_presentation */ "./src/app/tln-edition/datatypes/word_presentation.ts");





let WordPresentationComponent = class WordPresentationComponent {
    constructor(localQueryService) {
        this.localQueryService = localQueryService;
        this.expanded = false;
        this.isLoadingResults = false;
        this.dataHandler = new _quant_data_handler__WEBPACK_IMPORTED_MODULE_2__["QuantitativeDataHandler"](this);
        this.displayedColumns = ['text', 'editedText', 'cleanText', 'cleanEditedText', 'link'];
        this.manuscriptPageWords = [];
    }
    ngOnInit() {
        this.tlnQueryService = (this.queryService != null) ? this.queryService : this.localQueryService;
        this.dataHandler.addHandler('manuscriptPageWords', { 'handler': _datatypes_word_presentation__WEBPACK_IMPORTED_MODULE_4__["ManuscriptPageWords"] });
        this.dataHandler.setQueryService(this.tlnQueryService);
        this.dataHandler.start_processing.subscribe((started) => {
            this.isLoadingResults = true;
        });
        this.dataHandler.processing_finished.subscribe((started) => {
            this.isLoadingResults = false;
        });
    }
    ngOnChanges(changes) {
        if (this.expanded && this.manuscriptPageWords.length == 0 && this.wordIds.length > 0) {
            const query = _datatypes_word_presentation__WEBPACK_IMPORTED_MODULE_4__["ManuscriptPageWords"].getParameterizedQuery(this.wordIds);
            this.dataHandler.getData4Query('manuscriptPageWords', query);
        }
    }
};
WordPresentationComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_3__["TlnCacheQueryService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], WordPresentationComponent.prototype, "queryService", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], WordPresentationComponent.prototype, "wordIds", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], WordPresentationComponent.prototype, "expanded", void 0);
WordPresentationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'word-presentation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./word-presentation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-quant/word-presentation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./word-presentation.component.css */ "./src/app/tln-edition/tln-quant/word-presentation.component.css")).default]
    })
], WordPresentationComponent);



/***/ }),

/***/ "./src/app/tln-edition/tln-query.service.ts":
/*!**************************************************!*\
  !*** ./src/app/tln-edition/tln-query.service.ts ***!
  \**************************************************/
/*! exports provided: TlnQueryService, TlnCacheQueryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TlnQueryService", function() { return TlnQueryService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TlnCacheQueryService", function() { return TlnCacheQueryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./src/app/tln-edition/constants.ts");







/**
 * This is the internal query service
 * that communicates with the SPARQL-endpoint.
 * */
let TlnQueryService = class TlnQueryService {
    constructor(http, _snackBar) {
        this.http = http;
        this._snackBar = _snackBar;
        //baseUrl = 'http://localhost:3030/nietzsche/query';
        this.baseUrl = _constants__WEBPACK_IMPORTED_MODULE_6__["BASE_URL"];
        this.reset_data = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.error_emitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.use_cache = false;
        this.cache = {};
    }
    resetData(key) {
        this.reset_data.emit(key);
    }
    /**
     * Gets the data from an endpoint via http post
     *
     * @param query:  The query to run.
     * @returns response
     */
    getData(query) {
        let httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/sparql-query',
                'Accept': 'application/sparql-results+json; charset=UTF-8' })
        };
        if (this.use_cache && this.cache[query]) {
            console.log('Returning cached value!');
            return this.cache[query];
        }
        if (!this.use_cache) {
            return this.http.post(this.baseUrl, query, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
        this.cache[query] = this.http.post(this.baseUrl, query, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
            delete this.cache[query];
            this.handleError(error);
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
        }));
        return this.cache[query];
    }
    handleError(error) {
        this.error_emitter.emit(error);
        switch (error.status) {
            case 0:
                // A client-side or network error occurred. Handle it accordingly.
                console.error('The backend data server is offline:', error.error);
                this._snackBar.open('The backend data server ' + this.baseUrl + ' is offline!');
                break;
            default:
                console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.');
    }
};
TlnQueryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
];
TlnQueryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], TlnQueryService);

let TlnCacheQueryService = class TlnCacheQueryService extends TlnQueryService {
    constructor() {
        super(...arguments);
        this.use_cache = true;
    }
};
TlnCacheQueryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], TlnCacheQueryService);



/***/ }),

/***/ "./src/app/tln-edition/tln-status/tln-status.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/tln-edition/tln-status/tln-status.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".show-container {\n   margin-top: 10px;\n   margin-left: 10%;\n   margin-right: 10%;\n}\n.description {\n   padding: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRsbi1lZGl0aW9uL3Rsbi1zdGF0dXMvdGxuLXN0YXR1cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0dBQ0csZ0JBQWdCO0dBQ2hCLGdCQUFnQjtHQUNoQixpQkFBaUI7QUFDcEI7QUFDQTtHQUNHLFlBQVk7QUFDZiIsImZpbGUiOiJ0bG4tZWRpdGlvbi90bG4tc3RhdHVzL3Rsbi1zdGF0dXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG93LWNvbnRhaW5lciB7XG4gICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgIG1hcmdpbi1yaWdodDogMTAlO1xufVxuLmRlc2NyaXB0aW9uIHtcbiAgIHBhZGRpbmc6IDVweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/tln-edition/tln-status/tln-status.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/tln-edition/tln-status/tln-status.component.ts ***!
  \****************************************************************/
/*! exports provided: TlnStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TlnStatusComponent", function() { return TlnStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _tln_query_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tln-query.service */ "./src/app/tln-edition/tln-query.service.ts");
/* harmony import */ var _data_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data_handler */ "./src/app/tln-edition/data_handler.ts");
/* harmony import */ var _datatypes_status__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../datatypes/status */ "./src/app/tln-edition/datatypes/status.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ "./src/app/tln-edition/constants.ts");






/**
 * Given a page or manuscript IRI, this component will request its status information and
 * symbolize it with an icon.
 **/
let TlnStatusComponent = class TlnStatusComponent {
    constructor(localQueryService) {
        this.localQueryService = localQueryService;
        this.SHOW_NONE_OPTION = -1;
        this.SHOW_PAGE_OPTION = 0;
        this.SHOW_MANUSCRIPT_OPTION = 1;
        this.showDataStatusOptions = this.SHOW_NONE_OPTION;
        /**
         * the data handler of this component that retrieves
         * data and instantiates it according to their proper
         * datatypes.
         **/
        this.dataHandler = new _data_handler__WEBPACK_IMPORTED_MODULE_3__["DataHandler"](this);
        this.icon_names = ['task_alt', 'data_saver_on', 'data_saver_off'];
        this.descriptions = ['Textdaten vollständig erfasst', 'Textdaten teilweise erfasst', 'Ohne Textdaten'];
        this.DEFAULT = this.icon_names[0];
        this.DEFAULT_DESCRIPTION = this.descriptions[0];
        this.data_processing_dict = {};
        this.iconDescriptions = {};
    }
    ngOnInit() {
        this.initDataProcessingDict();
        if (this.currentIri != undefined && this.currentIri != null) {
            this.localQueryService.use_cache = true;
            let tlnQueryService = (this.queryService != null) ? this.queryService : this.localQueryService;
            this.dataHandler.addHandler('tlnStatus', { 'handler': _datatypes_status__WEBPACK_IMPORTED_MODULE_4__["TlnStatus"] });
            this.dataHandler.setQueryService(tlnQueryService);
            this.dataHandler.getData('tlnStatus', this.currentIri);
        }
    }
    initDataProcessingDict() {
        const data_processing_keys = Object.values(_constants__WEBPACK_IMPORTED_MODULE_5__["DATA_PROCESSING_STATUS"]);
        for (let i = 0; i < this.icon_names.length; i++) {
            this.data_processing_dict[data_processing_keys[i]] = this.icon_names[i];
        }
        this.iconDescriptions = this.getIconDescriptions();
    }
    getStatus(currentStatus) {
        const status = (currentStatus != undefined) ? currentStatus : undefined;
        return this.getSaveInformation(status, this.data_processing_dict, this.DEFAULT);
    }
    getDescription(currentStatus) {
        const icon = this.getStatus(currentStatus);
        return this.getSaveInformation(icon, this.iconDescriptions, this.DEFAULT_DESCRIPTION);
    }
    getSaveInformation(key, dictionary, defaultValue) {
        if (key == undefined || key == null || dictionary[key] == undefined) {
            return defaultValue;
        }
        return dictionary[key];
    }
    getKeys() {
        if (this.showDataStatusOptions > this.SHOW_PAGE_OPTION)
            return this.icon_names;
        return [this.icon_names[0], this.icon_names[2]];
    }
    getIconDescriptions() {
        let iconDescriptions = {};
        for (let i = 0; i < this.icon_names.length; i++) {
            iconDescriptions[this.icon_names[i]] = this.descriptions[i];
        }
        return iconDescriptions;
    }
};
TlnStatusComponent.ctorParameters = () => [
    { type: _tln_query_service__WEBPACK_IMPORTED_MODULE_2__["TlnCacheQueryService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TlnStatusComponent.prototype, "showDataStatusOptions", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TlnStatusComponent.prototype, "currentIri", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TlnStatusComponent.prototype, "queryService", void 0);
TlnStatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tln-status',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tln-status.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-status/tln-status.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tln-status.component.css */ "./src/app/tln-edition/tln-status/tln-status.component.css")).default]
    })
], TlnStatusComponent);



/***/ }),

/***/ "./src/app/tln-edition/tln-viewer-navigation/tln-viewer-navigation.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/tln-edition/tln-viewer-navigation/tln-viewer-navigation.component.css ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#navi {\n   width: 100%;\n   height: 50px;\n   margin: 0;\n   padding: 0;\n   white-space: nowrap;\n}\n.search {\n   margin-left: 8px;\n }\n.zoom {\n   max-width: 20px;\n}\n.zoom-in {\n   cursor: zoom-in;\n}\n.zoom-out {\n   cursor: zoom-out;\n}\n.mat-button.min-width {\n   min-width: 120px;\n   max-width: 120px;\n}\n.default-mouse {\n   cursor: default;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRsbi1lZGl0aW9uL3Rsbi12aWV3ZXItbmF2aWdhdGlvbi90bG4tdmlld2VyLW5hdmlnYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtHQUNHLFdBQVc7R0FDWCxZQUFZO0dBQ1osU0FBUztHQUNULFVBQVU7R0FDVixtQkFBbUI7QUFDdEI7QUFDQTtHQUNHLGdCQUFnQjtDQUNsQjtBQUNEO0dBQ0csZUFBZTtBQUNsQjtBQUNBO0dBQ0csZUFBZTtBQUNsQjtBQUNBO0dBQ0csZ0JBQWdCO0FBQ25CO0FBQ0E7R0FDRyxnQkFBZ0I7R0FDaEIsZ0JBQWdCO0FBQ25CO0FBQ0E7R0FDRyxlQUFlO0FBQ2xCIiwiZmlsZSI6InRsbi1lZGl0aW9uL3Rsbi12aWV3ZXItbmF2aWdhdGlvbi90bG4tdmlld2VyLW5hdmlnYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNuYXZpIHtcbiAgIHdpZHRoOiAxMDAlO1xuICAgaGVpZ2h0OiA1MHB4O1xuICAgbWFyZ2luOiAwO1xuICAgcGFkZGluZzogMDtcbiAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uc2VhcmNoIHtcbiAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gfVxuLnpvb20ge1xuICAgbWF4LXdpZHRoOiAyMHB4O1xufVxuLnpvb20taW4ge1xuICAgY3Vyc29yOiB6b29tLWluO1xufVxuLnpvb20tb3V0IHtcbiAgIGN1cnNvcjogem9vbS1vdXQ7XG59XG4ubWF0LWJ1dHRvbi5taW4td2lkdGgge1xuICAgbWluLXdpZHRoOiAxMjBweDtcbiAgIG1heC13aWR0aDogMTIwcHg7XG59XG4uZGVmYXVsdC1tb3VzZSB7XG4gICBjdXJzb3I6IGRlZmF1bHQ7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/tln-edition/tln-viewer-navigation/tln-viewer-navigation.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/tln-edition/tln-viewer-navigation/tln-viewer-navigation.component.ts ***!
  \**************************************************************************************/
/*! exports provided: TlnViewerNavigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TlnViewerNavigation", function() { return TlnViewerNavigation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
/* harmony import */ var _datatypes_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../datatypes/navigation */ "./src/app/tln-edition/datatypes/navigation.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ "./src/app/tln-edition/constants.ts");
/* harmony import */ var _datatypes_text_version__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../datatypes/text_version */ "./src/app/tln-edition/datatypes/text_version.ts");
/* harmony import */ var _datatypes_editor_comment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../datatypes/editor_comment */ "./src/app/tln-edition/datatypes/editor_comment.ts");
/* harmony import */ var _datatypes_imprint__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../datatypes/imprint */ "./src/app/tln-edition/datatypes/imprint.ts");
/* harmony import */ var _datatypes_manuscript__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../datatypes/manuscript */ "./src/app/tln-edition/datatypes/manuscript.ts");
/* harmony import */ var _route_updater__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../route-updater */ "./src/app/tln-edition/route-updater.ts");
/* harmony import */ var _data_handler__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../data_handler */ "./src/app/tln-edition/data_handler.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services */ "./src/app/tln-edition/services.ts");
/* harmony import */ var _tln_information_tln_information_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../tln-information/tln-information.component */ "./src/app/tln-edition/tln-information/tln-information.component.ts");














let TlnViewerNavigation = class TlnViewerNavigation extends _route_updater__WEBPACK_IMPORTED_MODULE_10__["RouteUpdater"] {
    constructor(el, bottomSheet, pageViewService, localQueryService, router, activatedRoute) {
        super(router, activatedRoute);
        this.bottomSheet = bottomSheet;
        this.pageViewService = pageViewService;
        this.localQueryService = localQueryService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        /**
         * whether or not to show page view in fullscreen mode.
         **/
        this.fullscreen = false;
        /**
         * page editor comments
        **/
        this.page_editor_comments = [];
        /**
         * editor comments
        **/
        this.editor_comments = [];
        /**
         * overwritten editor comments
        **/
        this.overwritten_comments = [];
        /**
         * line editor comments
        **/
        this.line_comments = [];
        /**
         * page imprints
        **/
        this.imprints = [];
        /**
         * Rotation value, i.e. one of [ 0, 90, 180, 270 ].
         **/
        this.rotation = 0;
        this.showArchivalManuscriptUnity = false;
        this.dataHandler = new _data_handler__WEBPACK_IMPORTED_MODULE_11__["DataHandler"](this);
        this.geneticOrders = [];
        this.selectedLines = [];
        this.selectedWords = [];
        this.increment = 0.333;
        this.decrement = this.increment * -1;
        //protected currentRoute: string = TLN_VIEWER_ROUTE;
        this.mapping = { findText: { param: _constants__WEBPACK_IMPORTED_MODULE_5__["TLN_FIND_PARAM"], type: "string" },
            current_iri: { param: _constants__WEBPACK_IMPORTED_MODULE_5__["TLN_PAGE_PARAM"], type: "string" },
            navBarOpenState: { param: _constants__WEBPACK_IMPORTED_MODULE_5__["TLN_NAV_BAR_OPEN_STATE_PARAM"], type: "boolean" },
            current_manuscript_iri: { param: _constants__WEBPACK_IMPORTED_MODULE_5__["TLN_MANUSCRIPT_PARAM"], type: "string" },
            fullscreen: { param: _constants__WEBPACK_IMPORTED_MODULE_5__["TLN_FULLSCREEN_PARAM"], type: "boolean" },
            rotation: { param: _constants__WEBPACK_IMPORTED_MODULE_5__["TLN_ROTATION_PARAM"], type: "number" },
            selectedViewOption: { param: _constants__WEBPACK_IMPORTED_MODULE_5__["TLN_VIEW_OPTION_PARAM"], type: "string" },
            selectedWords: { param: _constants__WEBPACK_IMPORTED_MODULE_5__["TLN_SELECTED_WORDS_PARAM"], type: "string" },
            selectedLines: { param: _constants__WEBPACK_IMPORTED_MODULE_5__["TLN_SELECTED_LINES_PARAM"], type: "string" } };
        this.selectedViewOption = _constants__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_VIEW_OPTION"];
        this.pageExists = false;
        this.updating = false;
        this.viewOptions = [_constants__WEBPACK_IMPORTED_MODULE_5__["VIEW_OPTIONS"].TRANSKRIPTION, _constants__WEBPACK_IMPORTED_MODULE_5__["VIEW_OPTIONS"].FAKSIMILE, _constants__WEBPACK_IMPORTED_MODULE_5__["VIEW_OPTIONS"].SYNOPSIS, _constants__WEBPACK_IMPORTED_MODULE_5__["VIEW_OPTIONS"].SYNOPSIS_B];
        this.subscriptions = [];
    }
    ngOnInit() {
        let tlnQueryService = (this.queryService != null) ? this.queryService : this.localQueryService;
        this.dataHandler.addHandler('manuscript_unity', { 'handler': _datatypes_navigation__WEBPACK_IMPORTED_MODULE_4__["TlnManuscriptUnity"], 'next_key': 'navigation_page' });
        this.dataHandler.addHandler('navigation_page', ['current_page', 'geneticOrders', 'page_editor_comments', 'editor_comments', 'overwritten_comments', 'line_comments', 'imprints', 'manuscript_leaf']);
        this.dataHandler.addHandler('current_page', { 'handler': _datatypes_navigation__WEBPACK_IMPORTED_MODULE_4__["TlnNavigationPage"] });
        this.dataHandler.addHandler('manuscript_leaf', { 'handler': _datatypes_manuscript__WEBPACK_IMPORTED_MODULE_9__["ManuscriptInfoLeaf"] });
        this.dataHandler.addHandler('geneticOrders', { 'handler': _datatypes_text_version__WEBPACK_IMPORTED_MODULE_6__["TlnTextGeneticOrder"] });
        this.dataHandler.addHandler('page_editor_comments', { 'handler': _datatypes_editor_comment__WEBPACK_IMPORTED_MODULE_7__["TlnPageEditorCommentStub"] });
        this.dataHandler.addHandler('editor_comments', { 'handler': _datatypes_editor_comment__WEBPACK_IMPORTED_MODULE_7__["TlnEditorComment"] });
        this.dataHandler.addHandler('overwritten_comments', { 'handler': _datatypes_editor_comment__WEBPACK_IMPORTED_MODULE_7__["TlnOverwrittenWordEditorComment"] });
        this.dataHandler.addHandler('line_comments', { 'handler': _datatypes_editor_comment__WEBPACK_IMPORTED_MODULE_7__["TlnLineEditorComment"] });
        this.dataHandler.addHandler('imprints', { 'handler': _datatypes_imprint__WEBPACK_IMPORTED_MODULE_8__["TlnImprint"] });
        this.dataHandler.setQueryService(tlnQueryService);
        this.subscriptions.push(this.dataHandler.start_processing.subscribe((started) => {
            this.updating = true;
        }));
        this.subscriptions.push(this.dataHandler.processing_finished.subscribe((finished) => {
            this.updating = false;
        }));
        super.ngOnInit();
        this.subscriptions.push(this.pageViewService.reference.subscribe((newReference) => {
            this.updatePageToReference(newReference);
        }));
        this.subscriptions.push(this.pageViewService.onClickedLine.subscribe((clickedLine) => {
            let index = this.selectedLines.indexOf(clickedLine.id);
            if (index > -1) {
                this.selectedLines.splice(index, 1);
            }
            else {
                this.selectedLines.push(clickedLine.id);
            }
            this.updateParams();
        }));
        this.subscriptions.push(this.pageViewService.onClickedWord.subscribe((clickedWord) => {
            this.clickWord(clickedWord);
        }));
    }
    ngOnDestroy() {
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }
    clearFindText() {
        this.findText = '';
        this.updateParams();
    }
    clickWord(clickedWord) {
        let wordIndex = this.selectedWords.indexOf(clickedWord.id);
        let lineIndex = this.selectedLines.indexOf(clickedWord.line);
        if (wordIndex > -1) {
            this.selectedWords.splice(wordIndex, 1);
        }
        else if (lineIndex > -1) {
            this.selectedLines.splice(lineIndex, 1);
        }
        else {
            this.selectedWords.push(clickedWord.id);
        }
        this.updateParams();
    }
    getPageTitle(page, numPages) {
        if (page == null) {
            return '';
        }
        let indexPrefix = (numPages != null) ? page.index + '/' + numPages : page.index;
        return indexPrefix + ': ' + page.title + ' ' + page.number;
    }
    readParams(params) {
        super.readParams(params);
        if (this.dataHandler.ready && (this.current_page == null && this.current_iri != undefined || this.current_page != null && this.current_page.id != this.current_iri)) {
            this.dataHandler.resetData('navigation_page');
            this.dataHandler.pageExists(this.current_iri, 'pageExists');
            if (this.current_manuscript_iri != null) {
                this.dataHandler.getData('manuscript_unity', this.current_manuscript_iri, this.current_iri);
            }
            else {
                this.dataHandler.getData('current_page', this.current_iri);
            }
        }
    }
    rotate(addRotation) {
        this.rotation = (this.rotation + addRotation < 0) ? 360 + this.rotation + addRotation : (this.rotation + addRotation) % 360;
        this.updateParams();
    }
    setCurrentIri(pageIri, manuscriptIir) {
        this.dataHandler.stop_processing.emit(true);
        this.current_iri = pageIri;
        this.updateParams();
    }
    showInformation() {
        let editor_comments = this.line_comments.concat(this.editor_comments);
        editor_comments = editor_comments.concat(this.overwritten_comments);
        let parentData = {
            editor_comments: editor_comments.sort((a, b) => {
                return (a.tLine.number <= b.tLine.number) ? -1 : 1;
            }),
            page_editor_comments: this.page_editor_comments,
            imprints: this.imprints,
            geneticOrders: this.geneticOrders,
            page: this.current_page,
            manuscript_iri: this.current_manuscript_iri,
            manuscript_leaf: this.manuscript_leaf,
            parentActivatedRoute: this.activatedRoute.parent
        };
        this.bottomSheet.open(_tln_information_tln_information_component__WEBPACK_IMPORTED_MODULE_13__["TlnInformationComponent"], {
            data: parentData,
            backdropClass: (parentData.editor_comments.length > 0) ? 'backdropNonFadingClass' : ''
        });
    }
    updatePageToReference(reference) {
        this.current_iri = reference.page.id;
        this.selectedLines = [reference.line.id];
        this.updateParams();
    }
};
TlnViewerNavigation.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheet"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_12__["PageViewService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_12__["TlnCacheQueryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TlnViewerNavigation.prototype, "queryService", void 0);
TlnViewerNavigation = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tln-viewer-navigation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tln-viewer-navigation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tln-viewer-navigation/tln-viewer-navigation.component.html")).default,
        providers: [_services__WEBPACK_IMPORTED_MODULE_12__["TlnCacheQueryService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tln-viewer-navigation.component.css */ "./src/app/tln-edition/tln-viewer-navigation/tln-viewer-navigation.component.css")).default]
    })
], TlnViewerNavigation);



/***/ }),

/***/ "./src/app/tln-edition/tooltip/editor-comment.component.css":
/*!******************************************************************!*\
  !*** ./src/app/tln-edition/tooltip/editor-comment.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".editor-comment {\n   /*margin-right: 8px;*/\n}\n.word-button {\n   text-align: left;\n   margin-right: 5px !important;\n   /*margin-left: 0px;\n   margin-right: 8px;*/\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRsbi1lZGl0aW9uL3Rvb2x0aXAvZWRpdG9yLWNvbW1lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtHQUNHLHFCQUFxQjtBQUN4QjtBQUNBO0dBQ0csZ0JBQWdCO0dBQ2hCLDRCQUE0QjtHQUM1QjtzQkFDbUI7QUFDdEIiLCJmaWxlIjoidGxuLWVkaXRpb24vdG9vbHRpcC9lZGl0b3ItY29tbWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVkaXRvci1jb21tZW50IHtcbiAgIC8qbWFyZ2luLXJpZ2h0OiA4cHg7Ki9cbn1cbi53b3JkLWJ1dHRvbiB7XG4gICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgbWFyZ2luLXJpZ2h0OiA1cHggIWltcG9ydGFudDtcbiAgIC8qbWFyZ2luLWxlZnQ6IDBweDtcbiAgIG1hcmdpbi1yaWdodDogOHB4OyovXG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/tln-edition/tooltip/editor-comment.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/tln-edition/tooltip/editor-comment.component.ts ***!
  \*****************************************************************/
/*! exports provided: EditorCommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorCommentComponent", function() { return EditorCommentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_mat_standoff_markup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-mat-standoff-markup */ "./node_modules/ngx-mat-standoff-markup/fesm2015/ngx-mat-standoff-markup.js");
/* harmony import */ var _data_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data_handler */ "./src/app/tln-edition/data_handler.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services */ "./src/app/tln-edition/services.ts");
/* harmony import */ var _datatypes_positional_markup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../datatypes/positional-markup */ "./src/app/tln-edition/datatypes/positional-markup.ts");






let EditorCommentComponent = class EditorCommentComponent {
    constructor(tlnQueryService) {
        this.tlnQueryService = tlnQueryService;
        this.dataHandler = new _data_handler__WEBPACK_IMPORTED_MODULE_3__["DataHandler"](this);
        this.markups = [];
        this.mySettings = new ngx_mat_standoff_markup__WEBPACK_IMPORTED_MODULE_2__["MarkupSettings"]();
    }
    ngOnInit() {
        if (this.editor_comment != undefined && this.editor_comment != null && this.editor_comment.editorClass != null && this.editor_comment.editorClass.split('#').length > 1) {
            this.dataHandler.setQueryService(this.tlnQueryService);
            if (this.editor_comment.editorClass.split('#')[1] != 'EditorComment') {
                this.editorType = this.editor_comment.editorClass.split('#')[1];
            }
            /*if (this.editor_comment.word != undefined && this.editor_comment.word != null){
               this.dataHandler.addHandler('word', { 'handler': WordWithLine});
               this.dataHandler.getData('word', this.editor_comment.word);
            }*/
            if (this.editor_comment.textWithMarkup != undefined && this.editor_comment.textWithMarkup != null) {
                this.dataHandler.addHandler('markups', { 'handler': _datatypes_positional_markup__WEBPACK_IMPORTED_MODULE_5__["TlnEditorCommentMarkup"] });
                this.tlnQueryService.reset_data.subscribe((data_key) => {
                    if (data_key == 'page_content') {
                        this.markups = [];
                    }
                });
                this.dataHandler.getData('markups', this.editor_comment.textWithMarkup);
            }
        }
    }
};
EditorCommentComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["TlnCacheQueryService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], EditorCommentComponent.prototype, "editor_comment", void 0);
EditorCommentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'editor-comment',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./editor-comment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tooltip/editor-comment.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./editor-comment.component.css */ "./src/app/tln-edition/tooltip/editor-comment.component.css")).default]
    })
], EditorCommentComponent);



/***/ }),

/***/ "./src/app/tln-edition/tooltip/merge-editor-comment.pipe.ts":
/*!******************************************************************!*\
  !*** ./src/app/tln-edition/tooltip/merge-editor-comment.pipe.ts ***!
  \******************************************************************/
/*! exports provided: MergeEditorCommentPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MergeEditorCommentPipe", function() { return MergeEditorCommentPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MergeEditorCommentPipe = class MergeEditorCommentPipe {
    transform(editor_comments) {
        if (editor_comments.length < 2) {
            return editor_comments;
        }
        let newComments = [];
        editor_comments.forEach(comment => {
            if (newComments.length == 0 || newComments[newComments.length - 1].id != comment.id) {
                newComments.push(comment);
            }
        });
        return newComments;
    }
};
MergeEditorCommentPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'mergeEditorComment'
    })
], MergeEditorCommentPipe);



/***/ }),

/***/ "./src/app/tln-edition/tooltip/overwritten.component.css":
/*!***************************************************************!*\
  !*** ./src/app/tln-edition/tooltip/overwritten.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0bG4tZWRpdGlvbi90b29sdGlwL292ZXJ3cml0dGVuLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/tln-edition/tooltip/overwritten.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/tln-edition/tooltip/overwritten.component.ts ***!
  \**************************************************************/
/*! exports provided: OverwrittenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverwrittenComponent", function() { return OverwrittenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_mat_standoff_markup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-mat-standoff-markup */ "./node_modules/ngx-mat-standoff-markup/fesm2015/ngx-mat-standoff-markup.js");
/* harmony import */ var _data_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data_handler */ "./src/app/tln-edition/data_handler.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services */ "./src/app/tln-edition/services.ts");
/* harmony import */ var _datatypes_positional_markup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../datatypes/positional-markup */ "./src/app/tln-edition/datatypes/positional-markup.ts");






let OverwrittenComponent = class OverwrittenComponent {
    constructor(tlnQueryService) {
        this.tlnQueryService = tlnQueryService;
        this.mySettings = new ngx_mat_standoff_markup__WEBPACK_IMPORTED_MODULE_2__["MarkupSettings"]();
        this.dataHandler = new _data_handler__WEBPACK_IMPORTED_MODULE_3__["DataHandler"](this);
        this.markups = [];
    }
    ngOnInit() {
        if (this.word != undefined && this.word != null) {
            this.dataHandler.addHandler('markups', { 'handler': _datatypes_positional_markup__WEBPACK_IMPORTED_MODULE_5__["TlnOverwrittenMarkup"] });
            this.dataHandler.setQueryService(this.tlnQueryService);
            this.tlnQueryService.reset_data.subscribe((data_key) => {
                if (data_key == 'page_content') {
                    this.markups = [];
                }
            });
            this.dataHandler.getData('markups', this.word.id);
        }
    }
};
OverwrittenComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["TlnCacheQueryService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], OverwrittenComponent.prototype, "word", void 0);
OverwrittenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'overwritten',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./overwritten.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tooltip/overwritten.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./overwritten.component.css */ "./src/app/tln-edition/tooltip/overwritten.component.css")).default]
    })
], OverwrittenComponent);



/***/ }),

/***/ "./src/app/tln-edition/tooltip/tool-tip.component.css":
/*!************************************************************!*\
  !*** ./src/app/tln-edition/tooltip/tool-tip.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tooltip {\n position: absolute;\n /*color: white;\n background-color: black;*/\n border-radius:  10px;\n padding: 8px;\n font-size: 0.8em;\n opacity: 0.65;\n z-index: 1000;\n}\ndiv .text, .edited_text, .overwritten {\n   display: block;\n}\nspan {\n   display: inline;\n}\n.deleted {\n   text-decoration: line-through;\n  /* text-decoration-color: red;*/\n}\n.blackfg {\n   color: black;\n}\n.word { \n   opacity: 0.7; \n   background-color: black;\n   color: white;\n}\n.foreignHand { \n   opacity: 0.5; \n   background-color: blue; \n   color: white;\n}\n.continuation { \n   opacity: 1.0; \n   background-color: black; \n   color: white;\n}\n.copyright { \n   opacity: 1.0; \n   background-color: white; \n   color: black;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRsbi1lZGl0aW9uL3Rvb2x0aXAvdG9vbC10aXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGtCQUFrQjtDQUNsQjswQkFDeUI7Q0FDekIsb0JBQW9CO0NBQ3BCLFlBQVk7Q0FDWixnQkFBZ0I7Q0FDaEIsYUFBYTtDQUNiLGFBQWE7QUFDZDtBQUNBO0dBQ0csY0FBYztBQUNqQjtBQUNBO0dBQ0csZUFBZTtBQUNsQjtBQUNBO0dBQ0csNkJBQTZCO0VBQzlCLCtCQUErQjtBQUNqQztBQUNBO0dBQ0csWUFBWTtBQUNmO0FBQ0E7R0FDRyxZQUFZO0dBQ1osdUJBQXVCO0dBQ3ZCLFlBQVk7QUFDZjtBQUNBO0dBQ0csWUFBWTtHQUNaLHNCQUFzQjtHQUN0QixZQUFZO0FBQ2Y7QUFDQTtHQUNHLFlBQVk7R0FDWix1QkFBdUI7R0FDdkIsWUFBWTtBQUNmO0FBQ0E7R0FDRyxZQUFZO0dBQ1osdUJBQXVCO0dBQ3ZCLFlBQVk7QUFDZiIsImZpbGUiOiJ0bG4tZWRpdGlvbi90b29sdGlwL3Rvb2wtdGlwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbHRpcCB7XG4gcG9zaXRpb246IGFic29sdXRlO1xuIC8qY29sb3I6IHdoaXRlO1xuIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyovXG4gYm9yZGVyLXJhZGl1czogIDEwcHg7XG4gcGFkZGluZzogOHB4O1xuIGZvbnQtc2l6ZTogMC44ZW07XG4gb3BhY2l0eTogMC42NTtcbiB6LWluZGV4OiAxMDAwO1xufVxuZGl2IC50ZXh0LCAuZWRpdGVkX3RleHQsIC5vdmVyd3JpdHRlbiB7XG4gICBkaXNwbGF5OiBibG9jaztcbn1cbnNwYW4ge1xuICAgZGlzcGxheTogaW5saW5lO1xufVxuLmRlbGV0ZWQge1xuICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIC8qIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogcmVkOyovXG59XG4uYmxhY2tmZyB7XG4gICBjb2xvcjogYmxhY2s7XG59XG4ud29yZCB7IFxuICAgb3BhY2l0eTogMC43OyBcbiAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgY29sb3I6IHdoaXRlO1xufVxuLmZvcmVpZ25IYW5kIHsgXG4gICBvcGFjaXR5OiAwLjU7IFxuICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTsgXG4gICBjb2xvcjogd2hpdGU7XG59XG4uY29udGludWF0aW9uIHsgXG4gICBvcGFjaXR5OiAxLjA7IFxuICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7IFxuICAgY29sb3I6IHdoaXRlO1xufVxuLmNvcHlyaWdodCB7IFxuICAgb3BhY2l0eTogMS4wOyBcbiAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyBcbiAgIGNvbG9yOiBibGFjaztcbn1cblxuIl19 */");

/***/ }),

/***/ "./src/app/tln-edition/tooltip/tool-tip.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/tln-edition/tooltip/tool-tip.component.ts ***!
  \***********************************************************/
/*! exports provided: ToolTipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolTipComponent", function() { return ToolTipComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_mat_standoff_markup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-mat-standoff-markup */ "./node_modules/ngx-mat-standoff-markup/fesm2015/ngx-mat-standoff-markup.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services */ "./src/app/tln-edition/services.ts");
/* harmony import */ var _datatypes_earlier_version__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../datatypes/earlier_version */ "./src/app/tln-edition/datatypes/earlier_version.ts");
/* harmony import */ var _datatypes_line_reference__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../datatypes/line_reference */ "./src/app/tln-edition/datatypes/line_reference.ts");
/* harmony import */ var _datatypes_preview_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../datatypes/preview_data */ "./src/app/tln-edition/datatypes/preview_data.ts");
/* harmony import */ var _datatypes_positional_markup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../datatypes/positional-markup */ "./src/app/tln-edition/datatypes/positional-markup.ts");
/* harmony import */ var _datatypes_editor_comment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../datatypes/editor_comment */ "./src/app/tln-edition/datatypes/editor_comment.ts");
/* harmony import */ var _data_handler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../data_handler */ "./src/app/tln-edition/data_handler.ts");










/**
 * This component can be used to show extended tooltips, i.e. with deleted words and distinguished
 * words if they are by foreign hand.
 **/
let ToolTipComponent = class ToolTipComponent extends _services__WEBPACK_IMPORTED_MODULE_3__["ConfigurableComponent"] {
    constructor(pageViewService, tlnQueryService) {
        super();
        this.pageViewService = pageViewService;
        this.tlnQueryService = tlnQueryService;
        this.fullscreen = false;
        this.hasMenuIssues = false;
        //fullscreen: boolean = false;
        /**
         * content keys
         **/
        this.contentKeys = ['word', 'foreignHand', 'copyright', 'continuation'];
        this.debug = false;
        this.position = 0;
        /**
         * the data handler of this component that retrieves
         * data and instantiates it according to their proper
         * datatypes.
         **/
        this.dataHandler = new _data_handler__WEBPACK_IMPORTED_MODULE_9__["DataHandler"](this);
        this.earlier_version_list = [];
        /**
         * editor comments
         **/
        this.editor_comments = [];
        /**
         * a list of positional style markups.
         **/
        this.positionalStyleMarkups = [];
        this.continuation_words = [];
        this.mySettings = new ngx_mat_standoff_markup__WEBPACK_IMPORTED_MODULE_2__["MarkupSettings"]();
        this.width = 300;
        /**
         * actual tooltip position
         **/
        this.tooltipPosition = { visible: false, clientX: -1, clientY: -1, layerX: -1, layerY: -1 };
        /**
         * whether or not to show extended tooltips
         **/
        this.useExtendedTooltip = true;
        /**
         * y offset for tooltip position relative to mouse position
         **/
        this.yOffset = 25;
        this.menuIssueOffset = 80;
        this.menuIssueXOffset = 55;
        this.topOffset = 0;
        this.leftOffset = 0;
    }
    ngOnChanges() {
        super.ngOnChanges();
        /*if((this.fullscreen && this.fullscreenString != 'true') || (!this.fullscreen && this.fullscreenString == 'true')){
           this.fullscreen = (this.fullscreenString == 'true')
        }*/
        if (this.tlnQueryService != null && !this.dataHandler.ready) {
            this.dataHandler.addHandler('earlier_version', { 'handler': _datatypes_earlier_version__WEBPACK_IMPORTED_MODULE_4__["TlnEarlierVersionStub"], 'process_data': this });
            this.dataHandler.addHandler('overwrittenWord', { 'handler': _datatypes_earlier_version__WEBPACK_IMPORTED_MODULE_4__["TlnOverwrittenStub"] });
            this.dataHandler.addHandler('positionalStyleMarkups', { 'handler': _datatypes_positional_markup__WEBPACK_IMPORTED_MODULE_7__["TlnFilteredPositionalStyleMarkup"] });
            this.dataHandler.addHandler('editor_comments', { 'handler': _datatypes_editor_comment__WEBPACK_IMPORTED_MODULE_8__["TlnEditorCommentStub"] });
            this.dataHandler.addHandler('sourceLineReference', { 'handler': _datatypes_line_reference__WEBPACK_IMPORTED_MODULE_5__["TlnLineReference"] });
            this.dataHandler.addHandler('continuation_words', { 'handler': _datatypes_preview_data__WEBPACK_IMPORTED_MODULE_6__["TlnPreviewWord"] });
            this.dataHandler.addHandler('wordStubs', ['earlier_version', 'overwrittenWord', 'positionalStyleMarkups', 'editor_comments']);
            this.dataHandler.setQueryService(this.tlnQueryService);
            this.tlnQueryService.reset_data.subscribe((data_key) => {
                if (data_key == 'page_content') {
                    this.resetData();
                }
            });
        }
    }
    /**
     * listen on pageViewService
     **/
    ngOnInit() {
        this.pageViewService.mousePosition.subscribe((newPoint) => {
            this.tooltipPosition = newPoint;
            //console.log(this.tooltipPosition);
        });
        this.pageViewService.onHoveredWord.subscribe((newWord) => { this.dataHandler.stop_processing.emit(true); this.setContent('word', newWord); this.updateEarlierVersion(); });
        this.pageViewService.offHoveredWord.subscribe((newWord) => { this.word = null; this.resetData(); });
        this.pageViewService.onHoveredTextByForeignHand.subscribe((newTextByForeignHand) => { this.setContent('foreignHand', newTextByForeignHand); });
        this.pageViewService.offHoveredTextByForeignHand.subscribe((newTextByForeignHand) => this.foreignHand = null);
        this.pageViewService.copyright.subscribe((copyright) => {
            this.setContent('copyright', (this.copyright == null) ? copyright : null);
        });
        this.pageViewService.onHoveredContinuation.subscribe((newContinuation) => {
            if (this.continuation == null) {
                this.updateLineContinuation(newContinuation);
            }
        });
        this.pageViewService.offHoveredContinuation.subscribe((newContinuation) => { this.dataHandler.stop_processing.emit(true); this.continuation = null; this.updateLineContinuation(); });
    }
    processData() {
        if (this.earlier_version != undefined && this.earlier_version != null) {
            this.earlier_version_list.splice(0, 0, this.earlier_version);
            this.dataHandler.resetData('earlier_version');
            this.dataHandler.getData('earlier_version', this.earlier_version_list[0].id);
        }
    }
    /**
     * reset data
     **/
    resetData() {
        this.earlier_version_list = [];
        this.dataHandler.resetData('positionalStyleMarkups');
        this.dataHandler.resetData('wordStubs');
        this.contentKeys.forEach(key => this[key] = null);
    }
    /**
     * update earlier version of word
     **/
    updateEarlierVersion() {
        if (this.word != null && this.dataHandler.ready) {
            this.earlier_version_list = [];
            this.dataHandler.resetData('positionalStyleMarkups');
            this.dataHandler.resetData('wordStubs');
            this.dataHandler.getData('wordStubs', this.word.id);
        }
    }
    updateLineContinuation(continuation) {
        this.setContent('continuation', continuation);
        if (continuation != null && this.dataHandler.ready) {
            this.dataHandler.resetData('continuation_words');
            if (continuation.source.page != null) {
                this.dataHandler.getData('continuation_words', this.continuation.reference.line.id);
            }
        }
    }
    getTop(key) {
        if (this.menuOffsetPosition != undefined && this.menuOffsetPosition != null && this.container != null && this.container != undefined) {
            let containerRect = this.container.getBoundingClientRect();
            this.topOffset = containerRect.top;
            if (!this.fullscreen) {
                this.topOffset = this.topOffset - this.menuOffsetPosition.y;
            }
        }
        return this.tooltipPosition.clientY - this.topOffset + this.yOffset;
    }
    getLeft(width) {
        let containerRect = (this.container != null && this.container != undefined)
            ? this.container.getBoundingClientRect() : null;
        this.leftOffset = (this.menuOffsetPosition != undefined && this.menuOffsetPosition != null && containerRect != null) ? containerRect.left : 0;
        let left = this.tooltipPosition.clientX - this.leftOffset;
        if (this.menuOffsetPosition != undefined && this.menuOffsetPosition != null) {
            left += this.menuOffsetPosition.x;
        }
        if (!this.tooltipPosition.visible
            || this.continuation == null
            || this.continuation.show == null
            || this.continuation.show != 'to') {
            return left;
        }
        return (left + width <= containerRect.right) ? left : left - (left + width - containerRect.right) - 5;
    }
    /**
     * Set tooltip's content and remove prior content.
     * @param key   key of content
     * @param content new content
     **/
    setContent(key, content) {
        this.contentKeys.forEach(key => this[key] = null);
        this[key] = content;
        this.currentKey = key;
    }
    /**
     * whether tooltip has any content (i.e. any content of {@link /components/ToolTipComponent.html#contentKeys|contentKeys})
     **/
    hasAnyContent() {
        return this.contentKeys.filter(key => this[key] != null).length > 0;
    }
};
ToolTipComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_3__["PageViewService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_3__["TlnCacheQueryService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('fullscreen')
], ToolTipComponent.prototype, "fullscreen", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ToolTipComponent.prototype, "hasMenuIssues", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ToolTipComponent.prototype, "menuOffsetPosition", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ToolTipComponent.prototype, "container", void 0);
ToolTipComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tool-tip',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tool-tip.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tln-edition/tooltip/tool-tip.component.html")).default,
        providers: [_services__WEBPACK_IMPORTED_MODULE_3__["TlnCacheQueryService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tool-tip.component.css */ "./src/app/tln-edition/tooltip/tool-tip.component.css")).default]
    })
], ToolTipComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    showVersion: true
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! codemirror/mode/javascript/javascript */ "./node_modules/codemirror/mode/javascript/javascript.js");
/* harmony import */ var codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var codemirror_mode_sparql_sparql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! codemirror/mode/sparql/sparql */ "./node_modules/codemirror/mode/sparql/sparql.js");
/* harmony import */ var codemirror_mode_sparql_sparql__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_sparql_sparql__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");







if (_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_5__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /data/home/knister0/githubs/NietzscheBeta/nietzsche-beta-app/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** path (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map