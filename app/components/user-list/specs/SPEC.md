# UserList

## Intent
Crear una tarea simple para gestionar usuarios con una entrada y una lista editable. La funcionalidad debe permitir agregar nuevos nombres y eliminarlos individualmente desde la UI.

## In scope
- Título principal
- Label asociado a un input para escribir un usuario nuevo
- Botón para agregar usuarios a la lista
- Lista de usuarios con opción de eliminar cada uno
- Estado local del formulario y la colección

## Out of scope
- Persistencia en backend o base de datos
- Autenticación o permisos
- Redux global

## Requirements
- La UI debe estar estructurada con componentes reutilizables del proyecto.
- La lógica de estado debe mantenerse separada del render.
- El input debe limpiar después de agregar.
- Eliminar un usuario debe quitar solo ese elemento de la lista.

## Edge cases & errors
- Evitar agregar nombres vacíos o con espacios.
- Mantener la lista en un estado consistente al borrar usuarios.

## Constraints
- Reuse existing app/components primitives where possible.
- Skills that apply: component-architecture, component-standards.

## Acceptance criteria
- [ ] Se ve un título principal.
- [ ] Hay un label junto a un input para agregar usuarios.
- [ ] Al agregar un nombre, se muestra en la lista.
- [ ] Cada usuario puede eliminarse con un botón.
- [ ] La feature queda organizada bajo app/components/user-list/.
