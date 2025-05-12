# Angular - Módulo 2

# Proyecto 

Este archivo contiene una actividad contemplando lo visto en la clase 9

## Objetivos 

- Introducción a Angular - Comunicacion entre componentes Padre-Hijo Parte 3

## Procedimiento seguido

1. **Análisis del problema**  
   - Un patrón común en Angular es compartir datos entre un componente principal y uno o más componentes secundarios. Implementa este patrón con los decoradores @Input() @Output(), EventEmitter

2. **Codigo**  
   -  En nuestro proyecto debemos abrir la terminal y ejecutar el siguiente comando
   ```sh
    ng generate component <nombre-componente>
   ```
   - Esto generara un nuevo componente de angular con los archivos html, css y ts listos modificarlos
   - Para esta actividad haciendo uso de la actividad anterior se creo un tercer componente 

3.- **Implementacion**  
   - Realizaremos una aplicacion sencilla de tareas donde task-list sera el componente padre, task-item sera un componente hijo y task-stats sera otro componente hijo
   - Creamos tres metodos en el componente padre para crear una tarea, marcarla/desmarcarla y eliminar
   - Desde el componente hijo task-item mandamos informacion al padre ya sea para marcar/desmarcar la tarea o eliminarla
   - El componente hijo task-stats recibira informacion del componente padre para mostrar estadisticas de las tareas que se van agregando

   - Iniciamos el proyecto
   ```sh
    ng serve
   ```  
   
## Problemas encontrados y soluciones implementadas

- Sin problemas

## Capturas de pantalla o diagramas relevantes

A continuación, se incluyen capturas de pantalla que ilustran el funcionamiento de las actividades

![Salida de pruebas](Capturas/img.png)  
*Figura 1: Aplicacion.*

![Salida de pruebas](Capturas/img2.png)  
*Figura 2: Implementando componentes hijos en el componente padre.*

![Salida de pruebas](Capturas/img3.png)  
*Figura 3: Metodos del 3er componente hijo.*


## Referencias o recursos utilizados

- [Sharing data between child and parent directives and components](https://v17.angular.io/guide/inputs-outputs)
