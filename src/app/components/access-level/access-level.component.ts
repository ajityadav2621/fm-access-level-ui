import { Component, OnInit } from '@angular/core';
import { AccessLevelService } from '../../services/access-level.service';
import { AccessLevelDTO, AccLevelAddRequestDTO } from '../../models/access-level.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-access-level',
  templateUrl: './access-level.component.html',
  styleUrls: ['./access-level.component.scss']
})
export class AccessLevelComponent implements OnInit {

  Math = Math;

  // accessLevels: AccessLevelDTO[] = [];
  // loading: boolean = false;
  
  // // Pagination
  // pageNo: number = 1;
  // pageSize: number = 10;
  // totalElements: number = 0;
  // totalPages: number = 0;

  // // For adding new access level
  // showAddForm: boolean = false;
  // newAccessLevel: AccLevelAddRequestDTO = {
  //   name: '',
  //   code: '',
  //   description: ''
  // };

  // constructor(private accessLevelService: AccessLevelService) { }

  // ngOnInit(): void {
  //   this.loadAccessLevels();
  // }

  accessLevels: AccessLevelDTO[] = [];
  loading: boolean = false;
  
  // Pagination
  pageNo: number = 1;
  pageSize: number = 1;
  totalElements: number = 0;
  totalPages: number = 0;

  // For adding new access level
  showAddForm: boolean = false;
  newAccessLevel: AccLevelAddRequestDTO = {
    name: '',
    code: '',
    description: ''
  };

  constructor(private accessLevelService: AccessLevelService) { }

  ngOnInit(): void {
    this.loadAccessLevels();
  }

  /**
   * Load access levels from backend
   */
  loadAccessLevels(): void {
    this.loading = true;
    
    this.accessLevelService.getAccessLevelList(this.pageNo, this.pageSize)
      .subscribe({
        next: (response) => {
          this.loading = false;
          
          if (response.code === 0) {
            this.accessLevels = response.data || [];
            
            Swal.fire({
              icon: 'success',
              title: 'Success',
              text: response.message || 'Data loaded successfully',
              timer: 2000,
              showConfirmButton: false
            });
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: response.message || 'Failed to load data'
            });
          }
        },
        error: (error) => {
          this.loading = false;
          console.error('Error loading access levels:', error);
          
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Failed to connect to backend API. Please check if the backend is running on localhost.'
          });
        }
      });
  }

  /**
   * Add new access level
   */
  addAccessLevel(): void {
    if (!this.newAccessLevel.name || !this.newAccessLevel.code) {
      Swal.fire({
        icon: 'warning',
        title: 'Validation Error',
        text: 'Please fill in all required fields'
      });
      return;
    }

    this.loading = true;
    const accessLevelsArray = [this.newAccessLevel];

    this.accessLevelService.addAccessLevel(accessLevelsArray)
      .subscribe({
        next: (response) => {
          this.loading = false;
          
          if (response.httpStatus === 200) {
            Swal.fire({
              icon: 'success',
              title: 'Success',
              text: 'Access level added successfully',
              timer: 2000,
              showConfirmButton: false
            });
            
            this.resetForm();
            this.showAddForm = false;
            this.loadAccessLevels();
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: response.message || 'Failed to add access level'
            });
          }
        },
        error: (error) => {
          this.loading = false;
          console.error('Error adding access level:', error);
          
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Failed to add access level'
          });
        }
      });
  }

  /**
   * Toggle add form
   */
  toggleAddForm(): void {
    this.showAddForm = !this.showAddForm;
    if (!this.showAddForm) {
      this.resetForm();
    }
  }

  /**
   * Reset form
   */
  resetForm(): void {
    this.newAccessLevel = {
      name: '',
      code: '',
      description: ''
    };
  }

  /**
   * Change page
   */
  changePage(newPage: number): void {
    if (newPage >= 1 && newPage <= this.totalPages) {
      this.pageNo = newPage;
      this.loadAccessLevels();
    }
  }

  /**
   * Change page size
   */
  changePageSize(event: any): void {
    this.pageSize = parseInt(event.target.value);
    this.pageNo = 1;
    this.loadAccessLevels();
  }
}