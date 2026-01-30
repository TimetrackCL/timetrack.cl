import { Event } from '@/types/event';
import eventsData from '@/data/events.json';

export class EventsService {
  private dataSource: 'local' | 'api' = 'local';

  async getAllEvents(): Promise<Event[]> {
    if (this.dataSource === 'local') {
      return this.getLocalEvents();
    } else {
      return this.getApiEvents();
    }
  }

  async getEventBySlug(slug: string): Promise<Event | null> {
    const events = await this.getAllEvents();
    return events.find((event) => event.slug === slug) || null;
  }

  async getEventsByCategory(category: string): Promise<Event[]> {
    const events = await this.getAllEvents();
    return events.filter(
      (event) => event.category.toLowerCase() === category.toLowerCase()
    );
  }

  async getUpcomingEvents(): Promise<Event[]> {
    const events = await this.getAllEvents();
    return events.filter((event) => event.status === 'upcoming');
  }

  async getLiveEvents(): Promise<Event[]> {
    const events = await this.getAllEvents();
    return events.filter((event) => event.status === 'live');
  }

  async getFinishedEvents(): Promise<Event[]> {
    const events = await this.getAllEvents();
    return events.filter((event) => event.status === 'finished');
  }

  private async getLocalEvents(): Promise<Event[]> {
    return eventsData.events as Event[];
  }

  private async getApiEvents(): Promise<Event[]> {
    // Preparado para API futura
    const res = await fetch('https://api.timetrack.cl/events');
    return res.json();
  }
}

// Export singleton instance
export const eventsService = new EventsService();
