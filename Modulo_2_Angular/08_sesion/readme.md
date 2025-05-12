# Angular - Módulo 2

# Proyecto 

Este archivo contiene una actividad contemplando lo visto en la clase 8

## Objetivos 

- Introducción a Angular - Comunicacion entre componentes Padre-Hijo Parte 2

## Procedimiento seguido

1. **Análisis del problema**  
   - Un patrón común en Angular es compartir datos entre un componente principal y uno o más componentes secundarios. Implementa este patrón con los decoradores @Input() @Output(), EventEmitter

2. **Codigo**  
   -  En nuestro proyecto debemos abrir la terminal y ejecutar el siguiente comando
   ```sh
    ng generate component <nombre-componente>
   ```
   - Esto generara un nuevo componente de angular con los archivos html, css y ts listos modificarlos
   - Crearemos dos componentes donde implementaremos esta comunicacion entre ellos. task-list y task-item

3.- **Implementacion**  
   - Realizaremos una aplicacion sencilla de tareas donde task-list sera el componente padre y task-item el hijo
   - Creamos tres metodos en el componente padre para crear una tarea, marcarla/desmarcarla y eliminar
   - Desde el componente hijo recibimos como mandamos informacion al padre ya sea para marcar/desmarcar la tarea o eliminarla
   - Tenemos una comunicacion bidireccional entre ambos componentes
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
*Figura 2: Usando EventEmitter en el componente Hijo.*

![Salida de pruebas](Capturas/img3.png)  
*Figura 3: Metodos del componente Padre.*


## Referencias o recursos utilizados

- [Sharing data between child and parent directives and components](https://v17.angular.io/guide/inputs-outputs)
