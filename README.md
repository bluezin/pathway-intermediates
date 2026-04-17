## DOC

- Las paginas disponibles son (lo puedes encontrar en src/pages):

* /map
* /mission&vision
* /history
* /about
* / -> home
* /employee-spotlight
* /companion-animal
* /species/#{specie} -> Ej: /species/poultry
* /products/categories/#{category} => Ej: /products/categories/accelerator-solutions
* /products/#{product} => Ej: /products/endophos

- En src/atoms/ encontraras componentes como:
  - select-field
  - text-field
  - text-area
  - head
    _Nota: En atoms puedes ir agregando componentes que no necesiten de otros componentes_

- En src/molecules/ encontraras componentes como:
  - card: Este componente lo usamos en lo de Species (SpeciesOption), y lo de Products (CategoriesOption)

- En src/organisms
  - header: Contiene el banner, se puede actualizar la img del banner, sus props son: banner (la url de la img), bannerMain (puede ser true o false), title (esta prop es para los que son banners secundarios)
  - nav

- En src/templates
  - about: Template que trata acerca de Pathway
  - base-page: Lo usamos para la vista de Products y Species
  - companion-animal: Contiene tiene info de Pathway y Biomatrix
  - contact-form: Formulario
  - employee: Contiene los empleados
  - footer
  - history: contiene la historia
  - home: pagina principal
  - map
  - mission&vision: Mision y vision
  - products
    - index: pagina principal de products
    - ProductsOption
    - CategoriesOption
  - species:
    - /index: pagina principal de species
    - SpeciesOption
