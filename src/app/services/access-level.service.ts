import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { AccessLevelDTO, AccLevelAddRequestDTO, ApiResponseDTO } from '../models/access-level.model';

@Injectable({
  providedIn: 'root'
})
export class AccessLevelService {
  private readonly BASE_PATH = '/access/level';

  constructor(private apiService: ApiService) { }

  /**
   * Get all access levels with pagination
   */
  getAccessLevelList(pageNo: number, pageSize: number): Observable<ApiResponseDTO<AccessLevelDTO[]>> {
    const params = {
      pageNo: pageNo,
      pageSize: pageSize
    };
    
    return this.apiService.get<ApiResponseDTO<AccessLevelDTO[]>>(
      `${this.BASE_PATH}/getAll`,
      params
    );
  }

  /**
   * Add new access levels
   */
  addAccessLevel(accessLevels: AccLevelAddRequestDTO[]): Observable<ApiResponseDTO<any>> {
    return this.apiService.post<ApiResponseDTO<any>>(
      `${this.BASE_PATH}/addLevel`,
      accessLevels
    );
  }
}